// components/navBar/navBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    curId: {
      type: String,
      value: ''
    },
    navBars: {
      type: Array,
      value: [
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached() {
      console.log(this.data)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    evtChangeCur(ev) {
      const curId = ev.currentTarget.dataset.id;
      this.triggerEvent('change', { curId });
      // this.setData({ curId })
    }
  }
})
