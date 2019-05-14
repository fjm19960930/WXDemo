Page({
    data: {
    
    },
    onPullDownRefresh() {
        // @ts-ignore
        wx.stopPullDownRefresh();
    },
    onShow() {
        wx.getSetting({
            success(res) {
                if (!res.authSetting['scope.address']) {
                    wx.authorize({
                        scope: 'scope.address',
                        success() {//用户允许该权限时调用，若首次请求权限用户没有允许则下一次请求时就不会弹出提示框，
                                        // 此时需要点击open-type="openSetting"的Button引导用户重新修改授权
                        }
                    });
                }
            }
        });
    },
    textClick() {
        wx.navigateTo({
        url: 'text/text'
        })
    },
    formClick() {
        wx.navigateTo({
        url: 'form/form'
        })
    },
    scrollClick() {
        wx.navigateTo({
            url: 'scrollView/scrollView'
        })
    },
    swiperClick() {
        wx.navigateTo({
            url: 'swiper/swiper'
        })
    },
    loadingClick() {
        wx.showLoading({
            title: '加载中',
        })
        setTimeout(function () {
            wx.hideLoading({
                success() {
                    console.log("成功")
                },
                fail(res) {
                    console.log(res.errMsg)
                },
                complete() {
                    console.log("完成")
                }
            });
        }, 2000)
    },
    toastClick() {
        wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
        })
    },
    modalClick() {
        wx.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            success(res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    actionSheetClick() {
        wx.showActionSheet({
            itemList: ['A', 'B', 'C'],
            success(res) {
                console.log(res.tapIndex)
            },
            fail(res) {
                console.log(res.errMsg)
            }
        })
    },
    audioClick() {
        wx.navigateTo({
            url: 'audio/audio'
        });
    },
    videoClick() {
        wx.navigateTo({
            url: 'video/video'
        });
    },
    cameraClick() {
        wx.navigateTo({
            url: 'camera/camera'
        });
    }
})