// pages/test/video/video.js
var utils = require('../../../utils/util.js');
Page({
    danmuStr: "",
    data: {
        src: '',
        danmuList: [
            {
                text: '第 1s 出现的弹幕',
                color: '#ff0000',
                time: 1
            },
            {
                text: '第 3s 出现的弹幕',
                color: '#ff00ff',
                time: 3
            }]
    },
    onReady: function() {
        this.videoContext = wx.createVideoContext('myVideo')
        wx.getSetting({
            success(res) {
                if (!res.authSetting['scope.writePhotosAlbum']) {
                    wx.authorize({
                        scope: 'scope.writePhotosAlbum',
                        success() {//用户允许该权限时调用，若首次请求权限用户没有允许则下一次请求时就不会弹出提示框，
                            // 此时需要点击open-type="openSetting"的Button引导用户重新修改授权
                        }
                    });
                }
            }
        });
    },
    bindInputBlur: function(e) {
        this.danmuStr = e.detail.value;
    },
    bindSendDanmu: function() {
        this.videoContext.sendDanmu({
            text: this.danmuStr,
            color: utils.getRandomColor()
        })
    },
    changeVideo: function() {
        const that = this;//这一句很重要
        wx.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,//如果拍摄视频则最大时长为60s
            camera: 'back',
            success(res) {
                that.setData({
                    src: res.tempFilePath
                })
            }
        })
    }
})