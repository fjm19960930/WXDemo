const innerAudioContext = wx.createInnerAudioContext();
Page({
    data: {
        isPlay: false,
        duration: 40.12,
    },
    onReady: function () {
        innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
        innerAudioContext.onCanplay(() => {

        })  
    },
    //点击播放,(如果要一进来就播放 放到onload即可)
    play: function () {
        innerAudioContext.play();
        this.setData({
            isPlay: true
        })
    },
    //点击 停止
    stop: function () {
        innerAudioContext.pause();
        this.setData({
            isPlay: false
        })
    },
})