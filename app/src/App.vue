<template>
  <div id="app">
    <div class="overview">
      <h1>
        <img src="https://uds.gnst.jp/rest/img/7jhs60me0000/s_00c2.jpg?t=1526519299" width="320">
      </h1>
      <h2>あなたのランチ生活がチームメンバーの定番に</h2>
      <p>チームでランチを共有することで&nbsp;美味しい&nbsp;の発見と共有を始めましょう</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
