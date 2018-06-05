<template>
  <div id="sharing-form">
    <h2>
      今日のランチは？
    </h2>
    <form action="">
      <p>
        <h3><label for="visit-date">訪問日</label></h3>
        <input type="date" id="visit-date" v-bind:value="today()">
      </p>
      <p>
        <h3><label for="store-name">店名</label></h3>
        <input type="text" id="store-name" placeholder="店名を入力してください" size="50">
      </p>
      <p>
        <h3><label for="url">URL</label></h3>
        <input type="text" id="url" placeholder="お店のホームページや紹介サイトのURLを入力してください" size="100">
      </p>
      <p>
        <h3>評価</h3>
        <div v-for="star in stars">
          <input type="radio" v-bind:id="star.value" name="stars" v-bind:value="star.value"><label v-bind:for="star.value">{{ star.label }}</label>
        </div>
      </p>
      <input type="submit" value="メンバーに共有する">
    </form>
  </div>
</template>

<script>
  export default {
    name: "Sharing",
    data: function () {
     return {
       stars: [
         {
           value: 'star-1',
           label: 'もう行かない'
         },
         {
           value: 'star-2',
           label: '好みじゃなかった'
         },
         {
           value: 'star-3',
           label: '美味しかった'
         },
         {
           value: 'star-4',
           label: '好物があった'
         },
         {
           value: 'star-5',
           label: 'ローテーション入り'
         }
       ]
     }
    },
    methods: {
      /**
       * 本日の日付を訪問日フォームの初期値に挿入できるフォーマットで返す
       *
       * @author hebara
       * @param num
       * @param digit 桁数
       * @returns {string}
       */
      today: function () {
        var date = new Date();
        var twoDigits = function (num, digit) {
          num += '';
          if (num.length < digit) {
            return '0' + num;
          }
        };
        return date.getFullYear() + "-" + twoDigits((date.getMonth() + 1), 2) + "-" + twoDigits(date.getDate(), 2)
      }
    }
  }
</script>

<style scoped>

</style>
