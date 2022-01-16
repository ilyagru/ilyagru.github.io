---
title: My favourite React (Native) project architecture
date: '2022-01-15T22:14:10.284Z'
featuredImage: ''
summary: I have seen and used lots of different architectures for a React (Native) project, but I prefer the modular one which evolved a little in my hands, as of January 2022. Here is a quick overview.
---

I have seen and used lots of different architectures for a React (Native) project, but I prefer the modular one which evolved a little in my hands, as of January 2022. Here is a quick overview.

## Based on experience

Throughout the years, I have seen many architectures and had various React projects, built multiple apps, big and small. Most of them used pretty standard, e.g. based on routes, file types or features. But from the experience, the modular architecture has served me very well.

## Overview

> Note: my approach works for both React and React Native projects, but there are little differences.

> Note: I will be using the 'structure' and 'architecture' words interchangeably for simplicity.

Of course, nowadays, the architecture and file structure is rather dictated by the stack and technologies used. For example, Gatsby.js or Next.js propose their own way of doing a React project. Redux gives distinction between Container (smart) and Presentational (dumb) components. That is totally fine too, but with this, the structure is not universal enough, especially if you want to migrate to React Hooks, for example.

For a bare React or React Native project, the modular architecture works well because the project becomes very testable, composable, without any extra complexity. So there is no learning curve for it. You can get it, just opening the repository. It is a good one because it also becomes easy to maintain and develop new features. And advanced techniques can play well too - e.g. module splitting. For instance, if the user is not logged in, there is no need to load and parse all available modules which are not reachable without logging in.

My vision of the architecture is a bit customised and adapted for even greater universality and integrity. And what is important is that it is based on continuous iterations.

Let's take a look at such a project, it is a React Native project, but it works nice for web projects too, taking into account the platform differences, of course. There are some considerations underneath. Look `(1)`, `(2)` etc. for footnotes.

> I have been using TypeScript for all projects by default, so the file extensions are in accordance.

```
├── .circleci (CI configuration to run test and lint or similar folders)
├── .github
|   ├── PULL_REQUEST_TEMPLATE.md
├── assets (fonts and global images)
├── android (native parts of the app)
├── ios (native parts of the app)
├── node_modules
├── scripts (scripts for development, CI, downloading/generating GraphQL schemas)
|   ├── downloadSchema.ts
├── src
|   ├── __generated__ (1)
|   |   ├── localModels.tsx
|   |   ├── remoteModels.tsx
|   ├── jest (test specific files and helpers) (2)
|   ├── components (basic ui atoms and molecules, can be used throughout the app) (3)
|   |   ├── Button
|   |   |   ├── index.tsx (entry file for the component)
|   |   |   ├── Button.test.tsx (test file should have the folder name)
|   |   |   ├── Button.styles.[css|ts] (styles can be extracted, optional)
|   |   ├── TextField
|   |   |   ├── index.tsx
|   |   |   ├── TextField.test.tsx
|   |   |   ├── TextField.styles.[css|ts]
|   |   ├── index.ts (entry file for easier re-exporting, optional)
|   ├── hocs (universal higher order components)
|   |   ├── withPermissions.ts
|   |   ├── withPermissions.test.ts
|   ├── hooks (custom React Hooks)
|   |   ├── useAsyncFnOnMount.ts
|   |   ├── useAsyncFnOnMount.test.ts
|   ├── context (React Context modules and their providers)
|   |   ├── PermissionsContext.ts  (or both under Permissions/)
|   |   ├── PermissionsProvider.ts
|   ├── redux (4)
|   ├── modules
|   |   ├── common
|   |   |   ├── screens
|   |   |   |   ├── CommonLoadingScreen.tsx
|   |   ├── auth
|   |   |   ├── components (local components used only for the current module)
|   |   |   |   ├── AuthBiggerButton.tsx
|   |   |   ├── screens
|   |   |   |   ├── AuthSignInScreen.tsx
|   |   |   |   ├── AuthSignUpScreen.tsx
|   |   |   |   ├── AuthForgotPasswordScreen (in case of multiple files, can be a folder)
|   |   |   |   |   ├── index.tsx
|   |   |   |   |   ├── AuthForgotPasswordScreen.test.tsx
|   |   |   ├── ... (other things like specific queries, very local helpers, .etc)
|   |   ├── dashboard
|   |   ├── profile
|   |   ├── developer (module for debugging purposes, screens hidden in Production)
|   ├── navigation (navigation setup and utils)
|   |   ├── components (navigation components, used in the navigators)
|   |   ├── navigators
|   |   |   ├── AuthStackNavigator
|   |   |   |   ├── AuthRoute.ts (routes for the Auth module and types for screens)
|   |   |   |   ├── index.tsx  (Auth navigator)
|   |   |   ├── DashboardStackNavigator
|   |   |   |   ├── DashboardRoute.ts
|   |   |   |   ├── index.tsx
|   |   |   ├── ProfileStackNavigator
|   |   |   |   ├── ProfileRoute.ts
|   |   |   |   ├── index.tsx
|   |   |   ├── DeveloperStackNavigator
|   |   |   |   ├── ProfileRoute.ts
|   |   |   |   ├── index.tsx
|   |   |   ├── ModalStackNavigator
|   |   |   |   ├── ModalRoute.ts
|   |   |   |   ├── index.tsx
|   |   |   ├── RootStackNavigator
|   |   |   |   ├── RootRoute.ts (app-level routes)
|   |   |   |   ├── index.tsx (main navigator)
|   ├── services (SDKs, wrappers and abstractions of services)
|   |   ├── graphql (all graphql queries should be extracted into here) (5)
|   |   |   ├── remote (schema, queries and mutations for backend communication)
|   |   |   |   ├── fragments
|   |   |   |   ├── mutations
|   |   |   |   ├── queries
|   |   |   |   ├── schema.graphql
|   |   |   ├── local (local schema, queries and mutations)
|   |   |   ├── index.ts (client)
|   |   ├── EventTracking
|   |   |   ├── EventTracking.test.ts
|   |   |   ├── index.ts (main or entry file)
|   |   ├── GeolocationService
|   |   |   ├── GeolocationService.test.ts
|   |   |   ├── index.ts
|   |   ├── Sentry.ts
|   |   ├── Stripe.ts
|   |   ├── EventListener.ts
|   ├── international
|   |   ├── locales
|   |   |   ├── en.json
|   |   |   ├── pl.json
|   |   |   ├── index.ts (common import of all locales, optional)
|   |   ├── index.ts (setup file, e.g. i18n)
|   ├── typings (TypeScript declaration files for packages missing them)
|   |   ├── react-native-config.d.ts
|   ├── utils (helpers and utils used across the modules, should be thoroughly tested) (6)
|   |   ├── constants.ts (AsyncStorage keys, URLs, etc.)
|   |   ├── authUtils.ts
|   |   ├── authUtils.test.ts
|   |   ├── systemUtils.ts
|   |   ├── systemUtils.test.ts
|   |   ├── stringUtils.ts
|   |   ├── stringUtils.test.ts
|   |   ├── transformSearchResultsIntoList.ts
|   |   ├── transformSearchResultsIntoList.test.ts
|   |   ├── index.ts (common import of all utils, optional)
|   ├── index.tsx (the root component of the app)
├── .env.development (development environment constants)
├── .env.staging (staging environment constants)
├── .env.production (production environment constants)
├── graphql.codegen.yml (GraphQL code generation setup)
├── index.js (main entry file)
├── package.json (dependencies, Jest setup, other options)
├── babel.config.js
├── jest.setup.js (Adapter setup and importing mocks, polifills)
├── jest.config.js
├── react-native.setup.js
├── metro.config.js
├── lint-staged.config.js
├── tsconfig.json
├── .prettierrc.js
├── .prettierignore
├── .gitignore
├── .eslintrc.js
├── tsconfig.json
├── yarn.lock
```

1. The `__generated__/` folder can be used for Relay or GraphQL generated types, for example.
2. The `jest` can also be used for `__fixtures__/` or test helpers. Mock implementations should ideally be placed here in `__mocks__/`, in the same folder at the node_modules level.
3. The `components/` folder can optionally have the `ui/` folder which should contain all the universal components and some other folders for more complex components, for example `Form` which is also universal but consists of smaller components. This is very similar to atoms/molecules/organisms principle.
4. There are many ways to structure Redux specific files, for example, based on modules or based actions/reducers. Ideally this folder structure should follow principles, mentioned in this article, but also refer to Redux docs for details.
5. GraphQL allows defining multiple schemas and use them in the app, that is why remote/local separation is helpful. The remote schema is used for backend API and the local one can complement the remote one and can be used for typing and saving search filters or combined types, for example. So next time when implementing a type/model which, let's say, consists of 2 partial backend types, consider using the local schema for that. Together with GraphQL codegen, it is a very powerful tool. A few examples:

```graphql
type DashboardSearchFilterOutputType {
  showOnlyOpenRestaurants: Boolean!
  locationId: Int
}

enum ThemeColorType {
  DARK
  LIGHT
}

enum ModuleSource {
  COMMON
  AUTH
  DASHBOARD
  PROFILE
  DEVELOPER
}
```

6. The `utils/` folder can be structured freely to fit your needs. If a helper is a big one, consider a dedicated file for it. If the helpers take just a few lines, they can go all in one relevant file.

## Considerations

This also shows common naming for files. Ideally, each folder should contain the entry file, usually called `index.ts`. Other files' names in the folder should start with the module name. It helps to read the code even better. When importing, strive to preserve the full name.

If you find yourself using a module-specific component in different places/modules throughout the app, it should be made universal and moved to common components then.

Each module might not have the entry file because all screens are typically of equal importance, that is totally fine.

If the project has some screens which are shared and used in different modules, for example `LoadingScreen`, consider creating a module called `common/`.

For my latest projects, I avoid using Redux altogether because it increases complexity exponentially. React Hooks or Context are a very concise and expressive way, so Container components become redundant.

## Conclusion

It goes without saying, the structure might differ depending on specific needs of the app. Feel free to extend or adapt it even further to fit your app needs. If in doubt, refer to one of the following JavaScript style guides or libraries' best practices.

- https://github.com/airbnb/javascript - from Airbnb
- https://github.com/airbnb/javascript/tree/master/react - from Airbnb for React
- https://standardjs.com

When you introduce a convention or a style guide rule, it is more important to follow it consistently than the rule itself. Each team member should stick to it after the rule has been introduced. Later refactoring would be a dream in this case.
