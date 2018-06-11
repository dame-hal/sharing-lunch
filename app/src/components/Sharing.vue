<template>
  <div id="sharing-form">
    <h2>
      今日のランチは？
    </h2>
    <form v-on:submit.prevent="addLunch">
      <div>
        <h3><label for="visit-date">訪問日*</label></h3>
        <p><input type="date" id="visit-date" v-model="lunch.visitDate" v-validate="'required'" name="visitName" data-vv-as="訪問日"></p>
        <div v-show="errors.has('visitName')">
          <p>{{ errors.first('visitName') }}</p>
        </div>
      </div>
      <div>
        <h3><label for="store-name">店名*</label></h3>
        <input type="text" id="store-name" placeholder="店名を入力してください" size="50" v-model="lunch.storeName" v-validate="'required'" name="storeName" data-vv-as="店名">
        <div v-show="errors.has('storeName')">
          <p>{{ errors.first('storeName') }}</p>
        </div>
      </div>
      <div>
        <h3><label for="url">紹介URL</label></h3>
        <input type="text" id="url" placeholder="お店のホームページや紹介サイトのURLを入力してください" size="100" v-model="lunch.url" v-validate="'url'" data-vv-as="紹介URL" name="url">
        <div v-show="errors.has('url')">
          <p>{{ errors.first('url') }}</p>
        </div>
      </div>
      <div>
        <h3><label>評価*</label></h3>
        <div v-for="(star, index) in stars" v-bind:key="index">
          <label v-bind:for="star.value">
            <input type="radio" v-bind:id="star.value" name="star.value" v-bind:value="star.value" v-model="lunch.starValue" v-validate="'required'" data-vv-as="評価">{{ star.label }}
          </label>
        </div>
        <div v-show="errors.has('star.value')">
          <p>{{ errors.first('star.value') }}</p>
        </div>
      </div>
      <div>
        <button type="submit">ランチを共有する</button>
        <p v-show="lunches.length > 1">{{ messageAddLunch }}</p>
      </div>
    </form>
  </div>
</template>

<script>

  // vee-validate読み込み
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'
  import ja from 'vee-validate/dist/locale/ja'

  Vue.use(VeeValidate)

  // vee-validateの日本語
  VeeValidate.Validator.localize('ja', ja)
  Vue.use(VeeValidate, { locale: 'ja' })

  export default {
    name: 'Sharing',
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
       lunch: this.initLunch(this.today(), null, null, null),
       messageAddLunch: 'チームメンバーにランチを共有しました'
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
        var date = new Date()
        var twoDigits = function (num, digit) {
          num += ''
          if (num.length < digit) {
            return '0' + num
          }
        }
        return date.getFullYear() + '-' + twoDigits((date.getMonth() + 1), 2) + '-' + twoDigits(date.getDate(), 2)
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
        this.$validator.validateAll()
          .then((result) => {
            if (result) {
              this.lunches.push(this.lunch)
              this.lunch = this.initLunch(this.today(), null, null, this.lunch.starValue)
              this.$validator.reset()
            }
        })
      }
    }
  }
</script>

<style scoped>

</style>
