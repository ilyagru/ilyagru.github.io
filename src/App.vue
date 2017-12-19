<template>
  <div class="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from './components/Header';
import Main from './components/Main';

export default {
  name: 'App',

  components: {
    Main,
    Header
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './styles/variables';

  .app {
    width: 100%;
  }
</style>
