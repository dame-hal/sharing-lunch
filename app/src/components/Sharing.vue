<template>
  <div id="sharing-form">
    <h2>
      今日のランチは？
    </h2>
    <form v-on:submit.prevent="addLunch">
      <p>
        <h3><label for="visit-date">訪問日</label></h3>
        <input type="date" id="visit-date" v-model="lunch.visitDate">
      </p>
      <p>
        <h3><label for="store-name">店名</label></h3>
        <input type="text" id="store-name" placeholder="店名を入力してください" size="50" v-model="lunch.storeName">
      </p>
      <p>
        <h3><label for="url">URL</label></h3>
        <input type="text" id="url" placeholder="お店のホームページや紹介サイトのURLを入力してください" size="100" v-model="lunch.url">
      </p>
      <p>
        <h3>評価</h3>
        <div v-for="star in stars">
          <input type="radio" v-bind:id="star.value" name="stars" v-bind:value="star.value" v-model="lunch.starValue"><label v-bind:for="star.value">{{ star.label }}</label>
        </div>
      </p>
      <p>
        <button type="submit">ランチを共有する</button>
      </p>
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
           value: 'poor',
           label: 'もう行かない'
         },
         {
           value: 'fair',
           label: '好みじゃなかった'
         },
         {
           value: 'average',
           label: '美味しかった'
         },
         {
           value: 'good',
           label: 'ローテーション入り'
         },
         {
           value: 'excellent',
           label: 'メンバーにも食べてほしい'
         }
       ],
       lunches: [
         {
           visitDate: this.today(),
           storeName: '王将',
           url: 'https://www.ohsho.co.jp/',
           starValue: 'good'
         }
       ],
       lunch: this.initLunch(this.today(), null, null, null)
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
      },
      /**
       * ランチ情報オブジェクトを初期化
       *
       * @author hebara
       * @param date 訪問日
       * @param name 店名
       * @param url URL
       * @param star 評価
       * @returns {lunch}
       */
      initLunch: function (date, name, url, star) {
        return {
          visitDate: date,
          storeName: name,
          url: url,
          starValue: star
        }
      },
      /**
       * ランチ情報の追加処理
       *
       * @author hebara
       */
      addLunch: function () {
        this.lunches.push(this.lunch);
        this.lunch = this.initLunch(this.today(), null, null, null)
      },
      validateLunch: function (e) {
        
      }
    }
  }
</script>

<style scoped>

</style>
