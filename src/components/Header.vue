<template>
  <div class="header">
    <div class="header__wrapper">
        <h1 class="header__title">👋🏻 Hello, I'm Ilya!</h1>
        <p class="header__description">
        I'm an entrepreneur & iOS, Frontend developer from Poland.<br/>
        You can find me on <a href="https://twitter.com/ilyagruzhevski">Twitter</a>, <a href="https://www.instagram.com/gruzhevski/">Instagram</a>, and <a href="https://github.com/ilyagru">GitHub</a>.
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  @import '../styles/variables';

  .header {
    background-color: $color-background;
    padding: 0 20px;

    &__wrapper {
      padding: 60px 0;
      width: 100%;
      max-width: 1020px;
      margin: 0 auto;
    }

    &__title {
      color: $color-main;
    }

    &__description {
      color: $color-text-orange;
    }
  }
</style>
