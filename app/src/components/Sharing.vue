<template>
  <section id="sharing-form" class="section">
    <div class="columns">
      <div class="column is-half">
        <h3 class="subtitle">
          ランチをシェアしませんか？
        </h3>
        <form v-on:submit.prevent="addLunch" id="add-lunch">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label for="visit-date" class="label">訪問日&nbsp;<span class="has-text-danger">*</span></label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <p v-bind:class="{ 'control':true, 'is-expanded':true, 'has-icons-left':true, 'has-icons-right':errors.has('visitDate') }">
                  <input v-bind:class="{ input:true, 'form-lunch-input':true,'is-danger':errors.has('visitDate') }" type="date" id="visit-date" v-model="lunch.visitDate" v-validate="'required'" name="visitDate" data-vv-as="訪問日">
                  <span class="icon is-small is-left">
                  <i class="far fa-calendar-alt"></i>
                </span>
                  <span class="icon is-small is-right" v-show="errors.has('visitDate')">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
                </p>
                <p class="help is-danger" v-show="errors.has('visitDate')">
                  {{ errors.first('visitDate') }}
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label" for="store-name">店名&nbsp;<span class="has-text-danger">*</span></label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <p v-bind:class="{ 'control':true, 'is-expanded':true, 'has-icons-left':true, 'has-icons-right':errors.has('storeName') }">
                  <input v-bind:class="{ input:true, 'form-lunch-input':true, 'is-danger':errors.has('storeName') }" type="text" id="store-name" placeholder="店名" v-model="lunch.storeName" v-validate="'required'" name="storeName" data-vv-as="店名">
                  <span class="icon is-small is-left">
                  <i class="fas fa-store-alt"></i>
                </span>
                  <span class="icon is-small is-right" v-show="errors.has('storeName')">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
                </p>
                <p class="help is-danger" v-show="errors.has('storeName')">
                  {{ errors.first('storeName') }}
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label" for="url">URL</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <p v-bind:class="{ 'control':true, 'is-expanded':true, 'has-icons-left':true, 'has-icons-right':errors.has('url') }">
                  <input v-bind:class="{ input:true, 'form-lunch-input':true, 'is-danger':errors.has('url') }" type="text" id="url" placeholder="お店のホームページURL" v-model="lunch.url" v-validate="'url'" data-vv-as="紹介URL" name="url">
                  <span class="icon is-small is-left">
                  <i class="fas fa-link"></i>
                </span>
                  <span class="icon is-small is-right" v-show="errors.has('url')">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
                </p>
                <p class="help is-danger" v-show="errors.has('url')">
                  {{ errors.first('url') }}
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">感想&nbsp;<span class="has-text-danger">*</span></label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div v-for="(star, index) in stars" v-bind:key="index">
                  <label class="radio">
                    <input type="radio" v-bind:id="star.value" name="star.value" v-bind:value="star.value" v-model="lunch.starValue" v-validate="'required'" data-vv-as="感想">&nbsp;&nbsp;{{ star.label }}
                  </label>
                </div>
                <p class="help is-danger" v-show="errors.has('star.value')">
                  {{ errors.first('star.value') }}
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label">
              <!-- Left empty for spacing -->
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button class="button is-primary" type="submit">
                    ランチを共有する
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="column is-half">
        <h3 class="subtitle">
          みんなのランチ
        </h3>
        <table class="table">
          <thead>
          <tr>
            <th>#</th>
            <th>店名</th>
            <th>評価</th>
            <th>訪問日</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="(lunch, index) in lunches" v-bind:key="index">
            <td>{{ index + 1 }}</td>
            <td v-if="lunch.url !== ''"><a href="lunch.url">{{ lunch.storeName }}</a></td>
            <td v-else>{{ lunch.storeName }}</td>
            <td>{{ searchStarLabel(lunch.starValue) }}</td>
            <td>{{ lunch.visitDate }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
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
          label: '好みだった'
        },
        {
          value: 'excellent',
          label: 'ぜひ食べてほしい'
        }
      ],
      lunches: [
        {
          visitDate: this.today(),
          storeName: '王将',
          url: 'https://www.ohsho.co.jp/',
          starValue: 'good'
        },
        {
          visitDate: this.today(),
          storeName: '茅ヶ崎　海ぶね',
          url: 'https://www.shinjukuparktower.com/shops/shopdata/kabune.html',
          starValue: 'average'
        },
        {
          visitDate: this.today(),
          storeName: '博多ぶあいそ別邸',
          url: 'https://www.shinjukuparktower.com/shops/saboten-bar.html',
          starValue: 'excellent'
        },
        {
          visitDate: this.today(),
          storeName: 'とんかつ新宿さぼてん',
          url: 'https://www.shinjukuparktower.com/shops/shopdata/buaiso.html',
          starValue: 'fair'
        },
        {
          visitDate: this.today(),
          storeName: 'Excelsior Cafe',
          url: '',
          starValue: 'average'
        }
      ],
      lunch: this.initLunch(this.today(), null, null, null),
      messageAddLunch: 'あなたのランチをシェアしてくれてありがとう！！',
      isNotified: false
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
        } else {
          return num
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

            this.isNotified = true
          }
        })
    },
    /**
     * valueからlabelを検索して返す
     * @param value
     */
    searchStarLabel: function (starValue) {
      var label = ''
      this.stars.forEach(function (value) {
        if (value.value === starValue) {
          label = value.label
        }
      })
      return label
    }
  }
}
</script>

<style scoped>
.form-lunch-input {
  width: 360px;
}
</style>
