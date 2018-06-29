<template>
  <div id="app">
    <section class="section" id="app-header">
      <div class="container">
        <h1 class="title">
          あなたのランチ生活がチームメンバーの定番に
        </h1>
        <h2 class="subtitle"></h2>
        <p>
          チームでランチを共有することで&nbsp;美味しい&nbsp;の発見と共有を始めましょう
        </p>
      </div>
    </section>
    <router-view/>
  </div>
</template>

<script>
import Sharing from './components/Sharing'
export default {
  name: 'App',
  components: { Sharing }
}
</script>

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
  #app-header {
    background-image: url(https://uds.gnst.jp/rest/img/7jhs60me0000/s_00c2.jpg?t=1526519299);
    background-size: 100%;
    height: 400px;
  }

  #app-header {
    .container {
      margin-top: 250px;
    }
    .title,.subtitle, p {
      color: whitesmoke;
    }
  }
</style>
