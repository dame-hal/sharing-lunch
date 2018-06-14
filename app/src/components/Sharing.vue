<template>
  <section id="sharing-form" class="section">
    <p class="notification is-info" v-show="isNotified === true">
      {{ messageAddLunch }}
    </p>
    <div class="columns">
      <div class="column is-one-third">
        <h3 class="subtitle">
          ランチをシェアしませんか？
        </h3>
        <form v-on:submit.prevent="addLunch" id="add-lunch">
          <!-- Form: visit-date -->
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
          <!-- Form: store-name -->
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
          <!-- Form: url -->
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
          <!-- Form: rating -->
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">評価&nbsp;<span class="has-text-danger">*</span></label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <star-rating v-model="lunch.rating" v-bind:star-size="25" v-bind:rounded-corners="true" v-bind:show-rating="false"></star-rating>
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

      <div class="column">
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
            <th></th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="(lunch, index) in lunches" v-bind:key="index">
            <td>{{ index + 1 }}</td>
            <td v-if="lunch.url !== ''"><a href="lunch.url">{{ lunch.storeName }}</a></td>
            <td v-else>{{ lunch.storeName }}</td>
            <td><star-rating v-model="lunch.rating" v-bind:star-size="25" v-bind:rounded-corners="true" v-bind:show-rating="false" v-bind:read-only="true"></star-rating></td>
            <td>{{ lunch.visitDate }}</td>
            <td><a class="button" v-on:click="removeLunchAtIndex(index)"><span class="icon is-small"><i class="far fa-trash-alt"></i></span></a></td>
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
import StarRating from 'vue-star-rating'

Vue.use(VeeValidate)

Vue.component('star-rating', StarRating)

// vee-validateの日本語
VeeValidate.Validator.localize('ja', ja)
Vue.use(VeeValidate, { locale: 'ja' })

class Lunch {
  constructor () {
    this.visitDate = this.today()
    this.storeName = ''
    this.url = ''
    this.rating = 0
  }

  /**
   * 本日の日付を訪問日フォームの初期値に挿入できるフォーマットで返す
   *
   * @author hebara
   * @param num
   * @param digit 桁数
   * @returns {string}
   */
  today () {
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
  }
}

export default {
  name: 'Sharing',
  data: function () {
    return {
      lunches: [
        {
          visitDate: '2018/06/12',
          storeName: '王将',
          url: 'https://www.ohsho.co.jp/',
          rating: 4
        },
        {
          visitDate: '2018/06/10',
          storeName: '茅ヶ崎　海ぶね',
          url: 'https://www.shinjukuparktower.com/shops/shopdata/kabune.html',
          rating: 4
        },
        {
          visitDate: '2018/05/23',
          storeName: '博多ぶあいそ別邸',
          url: 'https://www.shinjukuparktower.com/shops/saboten-bar.html',
          rating: 5
        },
        {
          visitDate: '2018/05/07',
          storeName: 'とんかつ新宿さぼてん',
          url: 'https://www.shinjukuparktower.com/shops/shopdata/buaiso.html',
          rating: 2
        },
        {
          visitDate: '2018/05/30',
          storeName: 'Excelsior Cafe',
          url: '',
          rating: 3
        }
      ],
      lunch: new Lunch(),
      messageAddLunch: 'あなたのランチをシェアしてくれてありがとう！！',
      isNotified: false
    }
  },
  methods: {
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
            this.lunch = new Lunch()
            this.$validator.reset()

            this.isNotified = true
          }
        })
    },
    removeLunchAtIndex: function (index) {
      console.log(index)
      this.lunches.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.form-lunch-input {
  width: 240px;
}
</style>
