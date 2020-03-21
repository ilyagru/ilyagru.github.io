---
title: Steps for Localizing React Native App
date: '2020-03-21T13:32:00.284Z'
featuredImage: './steps-for-localizing-react-native-app-featured-image.png'
summary: 'The localization itself seems difficult for a React Native app because a usual app consists of three projects: the main JavaScript, Xcode project for iOS, and Android files. But in reality, it is not that complex.'
---

## Intro

![Steps for localizing app](./steps-for-localizing-react-native-app-featured-image.png)

The localization itself seems difficult for a React Native app because a usual app consists of **three** projects: the main JavaScript, Xcode project for iOS, and Android files. But in reality, it is not that complex.

## Necessary Packages

- [i18next](https://www.i18next.com/) - localization framework (supports plurals, formatting, interpolation, etc.)
- [react-i18next](https://react.i18next.com/) - React bindings and helpers
- [moment](https://momentjs.com/docs/#/i18n/) - Date / time handling in JavaScript (contains a lot of locales out of the box)
- [react-native-localize](https://github.com/react-native-community/react-native-localize) - toolbox for React Native
- e.g. [react-native-calendars](https://github.com/wix/react-native-calendars) - Some other packages that should be localized

## Steps

1. Set up i18next.

A simple setup could look like this. We load resources of the supported languages and provide default and fallback languages.

```typescript
// localization/index.ts

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';
import locales from './locales';

export const userLanguage = getLocales()[0].languageCode;
const fallbacklanguage = 'en';

i18n.use(initReactI18next).init({
  resources: locales,
  fallbackLng: fallbacklanguage,
  lng: userLanguage,
  ns: Object.keys(locales.en),
  defaultNS: 'common',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  react: {
    wait: true,
  },
});

export default i18n;
```

2. Set up other packages.

For example, `moment` has locales out of the box, so we don't need to translate date/time formats again. Just import the desired language data.

```typescript
// localization/index.ts

import 'moment/locale/fr.js';
```

Imagine we have a library that also needs localizing, e.g. `react-native-calendars`. The documentation states the package can be localized – that is good. To simplify and unify even more we can take `moment`'s locale data and use it for this package.

```typescript
// localization/index.ts

import moment from 'moment';
import { LocaleConfig as RNCalendarsLocaleConfig } from 'react-native-calendars';

Object.keys(locales).forEach(locale => {
  RNCalendarsLocaleConfig.locales[locale] = {
    monthNames: moment.localeData(locale).months(),
    monthNamesShort: moment.localeData(locale).monthsShort(),
    dayNames: moment.localeData(locale).weekdays(),
    dayNamesShort: moment.localeData(locale).weekdaysMin(),
  };
});
```

And then we need add an event listener for language change to be able to set the `moment` and other packages language reactively.

```typescript
// localization/index.ts

i18n.on('languageChanged', currentLanguage => {
  const locale = Object.keys(locales).includes(currentLanguage) ? currentLanguage : fallbacklanguage;

  moment.locale(locale);
  RNCalendarsLocaleConfig.defaultLocale = locale;
});
```

_NOTE_: Numbers or currency should also be localized, don't forget about that.

3. Extract all UI strings to `.json` files.

You can either use one file or create many for every namespace. Just read the `i18n` docs, it supports plurals, context, interpolation, formatting, nesting, etc.

```json
// localization/locales/en.json

{
  "common": {
    "back": "Back",
    "done": "Done"
  },
  "order": {
    "yourOrderIsOnItsWay": "Your order is on its way!",
    "yourAddress": "Your order will be delivered on {{deliveryDate}} to {{address}}",
    "subscribeToNewsletter": "Subscribe to Our Newsletter",
    "item": "{{count}} item",
    "item_plural": "{{count}} items"
  }
}
```

Then in the code you need to pass those keys to the `t` function.

```tsx
// OrderComponent.tsx

import { useTranslation } from 'react-i18next';

const OrderComponent = () => {
  const { t } = useTranslation();

  return (
    <OrderContainer>
      <Text>{t('order:yourAddress', { deliveryDate: '4 Apr 2020', address: 'Warsaw, city centre' })}</Text>
    </OrderContainer>
  );
};
```

```typescript
// Outside of a component (e.g. navigation, utils, etc.)

import i18n from './localization';

i18n.t('common:back');
```

4. Add keys for strings that come from backend, so they could be localized on frontend, e.g. Push Notifications.

One of challenges is to localize data which comes from backend. Ideally, the backend should not know the user's locale. And all translation should happen in-app on the device. A solution to this is to send a key instead of plain text, and by that key provide a translated text using the `t` function. The same mechanism is used by Apple and Google for localizing Push Notifications. However, the downside is that all possible keys or Push Notifications text must be predefined beforehand.

Here you can find more details on how to localize Push Notifications for both platforms.

- [Localised Push Notifications](https://github.com/CrossGeeks/FirebasePushNotificationPlugin/blob/master/docs/LocalizedFirebasePushNotifications.md)
- [Push Notifications iOS](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/CreatingtheNotificationPayload.html)
- [Push Notifications Android](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#androidnotification)

For backend requests that send some plain text to the mobile app, you can implement a similar system.

```json
// localization/locales/en.json

{
  "order": {
    "orderedTooManyItemsError": "You ordered {{count}} items – that is too many for one order. Please verify your cart."
  }
}
```

```typescript
// Handling the error text

t(response.error.key, { count: response.error.args.itemCount });
```

5. Extract platform specific keys to `.strings` (iOS) or `.xml` (Android) files. This is the case for Push Notifications or `InfoPlist`.

```strings
/* ios/en.lproj/Localizable.strings */

"notification_order_sent" = "Your order %@ has just been sent to you.";
"notification_order_delivery_expected" = "Your order is expected to be delivered by %@.";
```

```xml
<!-- android/app/src/main/res/values/strings.xml -->

<?xml version="1.0" encoding="UTF-8"?>
<resources>
  <string name="app_name">Shooopio</string>
  <string name="notification_order_sent">Your order %1$s has just been sent to you.</string>
  <string name="notification_order_delivery_expected">Your order is expected to be delivered by %1$s.</string>
</resources>
```

6. Set up continuous localization

The last step left is ability to continuously localize the app, it is better to accomplish this separately, so that the localization process could go independently. There are some tools and services for this. `i18n` supports [plugins and utils](https://www.i18next.com/overview/plugins-and-utils) to help automate everything. Third party tools help with connecting to translators and pushing translations on the go. If you need something simple take a look at [LingoHub](https://lingohub.com/), [GitLocalize](https://gitlocalize.com). If you need some complex solutions with more features check out [Smartling](https://www.smartling.com/) or [transifex](https://www.transifex.com/). The principles are alike. But in any case, be aware that some features are not very well supported in React Native.

## General Flow

Here LingoHub is used for the example.

1. The platform automatically pulls source files (e.g. `en.json`) to the dashboard from a GitHub repo.
1. When the base `en.json` file is changed or new keys are added, provide translations for the changed keys using the platform. Please ask a translator or a native speaker. They can just use the platofrm's UI to translate.
1. Download the translated and _Approved_ files, it can be done by direct push or creating a PR into `develop` or `master` from the translation platform.
1. When the new translations are merged, enable new languages in the app:

   - for the UI, by importing a new locale into `i18n` resources.
   - for the UI, by importing the needed `moment` locales into the translation setup file, more in the [i18n section](https://momentjs.com/docs/#/i18n/) of the docs.
   - for the iOS project, by going to _Info tab_ -> _Localizations_ and including the new languages
   - for the iOS project, by attaching the new languages to the corresponding `.strings` files (e.g. `InfoPlist.strings`) using _File Inspector_ on the right pane.

1. Then test the new languages! In some cases, remember to set the appropriate region to see correct date or number formats.

## Tips

- `moment` supports [localized formats](https://momentjs.com/docs/#/displaying/format/) (LTS, LL, lll), if you want a more custom localized format, take a look at [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl). If you do use Intl you will have to add a polyfill for Android (`def jscFlavor = 'org.webkit:android-jsc-intl:+'`).
- `moment` can be locale aware, for example it supports first day of week (Monday or Sunday).
- `i18n` is very robust, has various plugins and utils for backend, linting, post-processing, etc.
- `react-i18next` has everything that a react app needs (HOCs, hooks, render props, SSR, etc.).
- LingoHub doesn’t allow a lot of formatting translation files; remember that these kind of tools are somewhat limited in terms of React Native. For example, every type of file should have its own project in the dashboard (1 for `.json`, 2 for `.xml`, etc.).

## Conclusion

That's pretty it! And remember to check out docs before starting to localize the app. It is possible to achieve almost everything without reinventing the wheel. Happy localizing!
