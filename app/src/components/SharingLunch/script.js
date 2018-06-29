/**
 * SharingLunch main script file.
 *
 * @description 本ファイルは、SharingLunchコンポーネントのスクリプトファイルです。
 * @author hebara
 */
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja'
import StarRating from 'vue-star-rating'
import Constants from '../../constants/constant'

Vue.use(VeeValidate)
Vue.use(Constants)
Vue.component('star-rating', StarRating)
VeeValidate.Validator.localize('ja', ja)
Vue.use(VeeValidate, { locale: 'ja' })

/**
 * @const フォーム入力時のメッセージに関する定数。constants.jsのmessageFormLunchを参照
 */
const messages = Constants.data().messageFormLunch
/**
 * @param {object} formAction - ランチ情報の操作
 * @param {string} formAction.add - 追加
 * @param {string} formAction.remove - 削除
 * @param {string} formAction.edit - 編集
 */
const formAction = {
  'add': 'add',
  'remove': 'remove',
  'edit': 'edit'
}

/**
 * @param {object} Lunch - ランチ情報オブジェクト
 * @param {string} Lunch.visitDate - 訪問日
 * @param {string} Lunch.storeName - 店舗名
 * @param {string} Lunch.url - お店のURL
 * @param {string} Lunch.rating - お店の評価
 */
class Lunch {
  constructor () {
    this.visitDate = Lunch.today()
    this.storeName = ''
    this.url = ''
    this.rating = 0
  }

  /**
   * 本日の日付を訪問日フォームの初期値に挿入できるフォーマットで返す
   *
   * @return {string} YYYY-MM-DD
   */
  static today () {
    let date = new Date()
    let twoDigits = function (num, digit) {
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

/**
 * SharingLunchコンポーネントscript
 */
export default {
  name: 'SharingLunch',
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
      notifiedMessage: {
        default: 'notification',
        status: '',
        message: ''
      }
    }
  },
  methods: {
    /**
     * ランチ情報を追加する
     */
    addLunch: function () {
      this.$validator.validateAll()
        .then((result) => {
          if (result) {
            this.lunches.push(this.lunch)
            this.lunch = new Lunch()
            this.$validator.reset()

            this.pushMessage(formAction.add)
          }
        })
    },
    /**
     * 登録済のランチ情報を削除する
     *
     * @param {number} index - ランチ情報配列のインデックス
     */
    removeLunchAtIndex: function (index) {
      this.lunches.splice(index, 1)

      this.pushMessage(formAction.remove)
    },
    /**
     * メッセージを表示する
     *
     * @param {string} action - add, remove, edit
     */
    pushMessage: function (action) {
      const message = messages[action]
      this.notifiedMessage.status = message.status
      this.notifiedMessage.message = message.message
    }
  }
}
