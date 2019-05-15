// pages/test/map/map.js
var satelliteMark = 0;
Page({
    data: {
        satellite: false,
        markers: [{
            iconPath: '../../../images/play.png',
            id: 0,
            latitude: 23.099994,
            longitude: 113.324520,
            width: 30,
            height: 30,
            callout: {
                content: "123",
                color: "#00ff00",
                fontSize: 16,
                padding: 10,
                borderRadius: 5,
                display: "BYCLICK"
            },
            label: {
                content: "456",
                color: "#fff",
                fontSize: 12,
                padding: 2,
                borderRadius: 5,
                bgColor: "#000",
                anchorX: -12,
                anchorY: 5
            }
        }],
        polyline: [{
            points: [{
                longitude: 113.3245211,
                latitude: 23.10229
            }, {
                longitude: 113.324520,
                latitude: 23.21229
            }],
            color: '#FF0000DD',
            width: 2,
            dottedLine: true
        }],
        // controls: [{//controls将被废除，使用cover-view组件
        //     id: 1,
        //     iconPath: '../../../images/pause.png',
        //     position: {
        //         left: 0,
        //         top: 300 - 50,
        //         width: 50,
        //         height: 50
        //     },
        //     clickable: true
        // }]
    },
    onLoad: function (options) {
        wx.getSetting({
            success(res) {
                if (!res.authSetting['scope.userLocation']) {
                    wx.authorize({
                        scope: 'scope.userLocation',
                        success() {//用户允许该权限时调用，若首次请求权限用户没有允许则下一次请求时就不会弹出提示框，
                            // 此时需要点击open-type="openSetting"的Button引导用户重新修改授权
                        }
                    });
                }
            }
        });
    },
    onReady(e) {
        // 使用 wx.createMapContext 获取 map 上下文
        this.mapCtx = wx.createMapContext('myMap')
    },
    getCenterLocation() {
        this.mapCtx.getCenterLocation({
            success(res) {
                console.log(res.longitude)
                console.log(res.latitude)
            }
        })
    },
    moveToLocation() {
        this.mapCtx.moveToLocation()
    },
    translateMarker() {//移动marker
        this.mapCtx.translateMarker({
            markerId: 0,
            autoRotate: true,
            duration: 5000,
            destination: {
                latitude: 23.10229,
                longitude: 113.3345211,
            },
            animationEnd() {
                console.log('animation end')
            }
        })
    },
    includePoints() {
        this.mapCtx.includePoints({//缩放视野以包含所有给定的坐标点
            padding: [10],//矩形区域到地图边缘的距离
            points: [{//该两点构成矩形区域
                latitude: 23.10229,
                longitude: 113.3345211,
            }, {
                latitude: 23.00229,
                longitude: 113.3345211,
            }]
        })
    },
    location() {
        this.mapCtx.moveToLocation();
    },
    layers() {
        if (satelliteMark == 0) {
            satelliteMark = 1;
            this.setData({
                satellite: true
            });
        } else {
            satelliteMark = 0;
            this.setData({
                satellite: false
            });
        }
    }
})