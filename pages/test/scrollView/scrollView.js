Page({
  data: {
    toView: "green",
    scrollTop: 100
  },
  upper: function (e) {
    console.log(e);
  },
  lower: function (e) {
    console.log(e);
  },
  scroll: function (e) {
    console.log(e);
  },
  tapMove: function (e) {
    console.log(e);
    this.setData({
      scrollTop: this.data.scrollTop + 10
    });
  },
});