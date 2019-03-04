//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isShowPicker: false,
    curId: '',
    navBars: [
      {
        txt: '全部',
        id:'all'
      },
       {
        txt: '分类一',
        id:'class_1'
      },
      {
        txt: '分类二',
        id:'class_2'
      },
      {
        txt: '分类三',
        id:'class_3'
      },
      {
        txt: '分类四',
        id:'class_4'
      },
      {
        txt: '分类五',
        id:'class_5'
      }
    ]
  },
  evtChange() {
    this.setData({
      curId: 'class_1'
    })
  },
  evtChangeCur(ev) {
    const { curId } = ev.detail;
    this.setData({ curId })
  },
  evtShowPicker() {
    this.setData({ isShowPicker: true })
  },
  evtHidePicker() {
    this.setData({ isShowPicker: false })
  },
  evtSelect(ev) {
    console.log(ev.detail);
    this.evtHidePicker();
  }
})
