const _messageFormLunch = [
  {
    'id': '1',
    'action': 'add',
    'message': 'あなたのランチをシェアしてくれてありがとう！！'
  },
  {
    'id': '2',
    'action': 'remove',
    'message': 'ランチ情報を削除しました'
  },
  {
    'id': '3',
    'action': 'edit',
    'message': 'ランチ情報を更新しました'
  }
]

export default {
  data () {
    return {
      messageFormLunch: _messageFormLunch
    }
  }
}
