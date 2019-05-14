const innerAudioContext = wx.createInnerAudioContext();
const url = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';
innerAudioContext.src = url;
var utils = require('../../../utils/util.js');
var index = 0;
var srcArray = [url, url, url];
Page({
    data: {
        isPlay: false,
        duration: "00:00",//当前时长
        total: "00:00",//总时长
        percent: 0,//当前进度 百分比
        // srcArray: [url, url, url]
    },
    onLoad: function () {
        innerAudioContext.loop = false;//不进行重复播放
        // innerAudioContext.onCanplay(() => {//监听音频为可播放状态
            // 必须，初始化时长
            // innerAudioContext.duration;
        // })  
        innerAudioContext.onTimeUpdate(() => {
            this.setData({
                total: utils.sToHs(Math.floor(innerAudioContext.duration)),
                duration: utils.sToHs(Math.floor(innerAudioContext.currentTime)),
                percent: innerAudioContext.currentTime / innerAudioContext.duration * 100
            })
        })
    },
    onUnload: function () {
        innerAudioContext.stop();//再播放时从头播放
    },

    //点击播放,(如果要一进来就播放 放到onload即可)
    play: function () {
        innerAudioContext.play();
        this.setData({
            isPlay: true
        })
    },
    //点击停止
    stop: function () {
        innerAudioContext.pause();//再播放时从断点处播放
        this.setData({
            isPlay: false
        })
    },
    //上一首
    previous: function () {
        if (index > 0) {
            index--;
            innerAudioContext.stop();
            innerAudioContext.src = srcArray[index];
            console.log("左" +index+ srcArray[index]);
            innerAudioContext.play();
            this.setData({
                isPlay: true
            })
        }
    },
    //下一首
    next: function () {
        if (index < srcArray.length - 1) {
            index++;
            innerAudioContext.stop();
            innerAudioContext.src = srcArray[index];
            console.log("右" + index + srcArray[index]);
            innerAudioContext.play();
            this.setData({
                isPlay: true
            })
        }
    }
})

// function sToHs(s) {
//     //计算分钟
//     //算法：将秒数除以60，然后下舍入，既得到分钟数
//     var h;
//     h = Math.floor(s / 60);
//     //计算秒
//     //算法：取得秒%60的余数，既得到秒数
//     s = s % 60;
//     //将变量转换为字符串
//     h += '';
//     s += '';
//     //如果只有一位数，前面增加一个0
//     h = (h.length == 1) ? '0' + h : h;
//     s = (s.length == 1) ? '0' + s : s;
//     return h + ':' + s;
// }