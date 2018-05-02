<template>
  <div class="main">
    <div class="main__wrapper">
      <h2>🔨 I Created Things</h2>
      <ul class="main__list">
        <li class="main__list-item"><a href="https://ilyagru.github.io/CryptoCrunch/">CryptoCrunch</a> – iOS game about cryptocurrencies</li>
        <li class="main__list-item"><a href="https://github.com/ilyagru/Movsea">Movsea</a> – Project for recognition of movies</li>
        <li class="main__list-item"><a href="https://ilyagru.github.io/melonade">Melonade</a> – Summer Sticker pack for iMessage</li>
        <li class="main__list-item"><a href="http://remame.us/">Remame</a> – Lightweight app for remembering names</li>
        <li class="main__list-item"><a href="https://github.com/ilyagru/Space-Snake">Space Snake</a> – Retro game as a Desktop game</li>
        <li class="main__list-item"><a href="https://github.com/ilyagru/One-Dark-Light-Xcode-theme">Xcode theme</a> – One Dark theme for Xcode IDE</li>
        <li class="main__list-item"><a href="https://instagram.com/appstasy">Appstasy</a> – Instagram account with awesome apps</li>
        <li class="main__list-item"><a href="https://ilyagru.github.io/react-currency-converter/">React Currency Converter</a> – Small currency converter</li>
        <li class="main__list-item"><a href="https://ilyagru.github.io/es-verbs/">ES Verbs</a> – Spanish verbs conjugation</li>
      </ul>
      <h2>👨🏻‍💻 My Code &#38; Design</h2>
      <ul class="main__list">
        <li class="main__list-item"><a href="https://github.com/ilyagru">Github</a> – Home for my code</li>
        <li class="main__list-item"><a href="https://dribbble.com/ilyagru">Dribbble</a> – Home for my design</li>
      </ul>
      <h2>✏️ Let's Talk!</h2>
      <p class="main__contact">
        Want to work with me, discuss latest technologies or just say hi?
        <br/>
        You can contact me <a href="https://t.me/gruzhevski">using Telegram</a> or <a href="mailto:ilya.gruzhevski@gmail.com">via an email</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="scss" scoped>
  @import '../styles/variables';

  .main {
    padding: 0 20px;

    &__wrapper {
      padding: 60px 0;
      width: 100%;
      max-width: 1020px;
      margin: 0 auto;
    }

    &__list {
      list-style-type: none;
      padding: 0;
      font-size: 24px;
      font-weight: 300;
    }

    &__list-item {
      margin-bottom: 30px;
      color: $color-text-gray;

      &:last-child {
        margin-bottom: 60px;
      }
    }
  }
</style>
