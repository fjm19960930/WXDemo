Page({
    data: {
    
    },
    onPullDownRefresh() {
        // @ts-ignore
        wx.stopPullDownRefresh();
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
    }
})