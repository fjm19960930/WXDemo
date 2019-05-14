"use strict";
Page({
    data: {},
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
    },
    onShow: function () {
        wx.getSetting({
            success: function (res) {
                if (!res.authSetting['scope.address']) {
                    wx.authorize({
                        scope: 'scope.address',
                        success: function () {
                        }
                    });
                }
            }
        });
    },
    textClick: function () {
        wx.navigateTo({
            url: 'text/text'
        });
    },
    formClick: function () {
        wx.navigateTo({
            url: 'form/form'
        });
    },
    scrollClick: function () {
        wx.navigateTo({
            url: 'scrollView/scrollView'
        });
    },
    swiperClick: function () {
        wx.navigateTo({
            url: 'swiper/swiper'
        });
    },
    loadingClick: function () {
        wx.showLoading({
            title: '加载中',
        });
        setTimeout(function () {
            wx.hideLoading({
                success: function () {
                    console.log("成功");
                },
                fail: function (res) {
                    console.log(res.errMsg);
                },
                complete: function () {
                    console.log("完成");
                }
            });
        }, 2000);
    },
    toastClick: function () {
        wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
        });
    },
    modalClick: function () {
        wx.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            success: function (res) {
                if (res.confirm) {
                    console.log('用户点击确定');
                }
                else if (res.cancel) {
                    console.log('用户点击取消');
                }
            }
        });
    },
    actionSheetClick: function () {
        wx.showActionSheet({
            itemList: ['A', 'B', 'C'],
            success: function (res) {
                console.log(res.tapIndex);
            },
            fail: function (res) {
                console.log(res.errMsg);
            }
        });
    },
    audioClick: function () {
        wx.navigateTo({
            url: 'audio/audio'
        });
    },
    videoClick: function () {
        wx.navigateTo({
            url: 'video/video'
        });
    },
    cameraClick: function () {
        wx.navigateTo({
            url: 'camera/camera'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksQ0FBQztJQUNELElBQUksRUFBRSxFQUVMO0lBQ0QsaUJBQWlCO1FBRWIsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNELE1BQU07UUFDRixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsT0FBTyxZQUFDLEdBQUc7Z0JBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLEVBQUU7b0JBQ25DLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ1QsS0FBSyxFQUFFLGVBQWU7d0JBQ3RCLE9BQU87d0JBRVAsQ0FBQztxQkFDSixDQUFDLENBQUM7aUJBQ047WUFDTCxDQUFDO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELFNBQVM7UUFDTCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2QsR0FBRyxFQUFFLFdBQVc7U0FDZixDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsU0FBUztRQUNMLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDZCxHQUFHLEVBQUUsV0FBVztTQUNmLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDRCxXQUFXO1FBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNWLEdBQUcsRUFBRSx1QkFBdUI7U0FDL0IsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELFdBQVc7UUFDUCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsR0FBRyxFQUFFLGVBQWU7U0FDdkIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELFlBQVk7UUFDUixFQUFFLENBQUMsV0FBVyxDQUFDO1lBQ1gsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUE7UUFDRixVQUFVLENBQUM7WUFDUCxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNYLE9BQU87b0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDckIsQ0FBQztnQkFDRCxJQUFJLFlBQUMsR0FBRztvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDM0IsQ0FBQztnQkFDRCxRQUFRO29CQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ3JCLENBQUM7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDWixDQUFDO0lBQ0QsVUFBVTtRQUNOLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDVCxLQUFLLEVBQUUsSUFBSTtZQUNYLElBQUksRUFBRSxTQUFTO1lBQ2YsUUFBUSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELFVBQVU7UUFDTixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1QsS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUUsVUFBVTtZQUNuQixPQUFPLFlBQUMsR0FBRztnQkFDUCxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7b0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtpQkFDeEI7cUJBQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lCQUN4QjtZQUNMLENBQUM7U0FDSixDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsZ0JBQWdCO1FBQ1osRUFBRSxDQUFDLGVBQWUsQ0FBQztZQUNmLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ3pCLE9BQU8sWUFBQyxHQUFHO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQzdCLENBQUM7WUFDRCxJQUFJLFlBQUMsR0FBRztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUMzQixDQUFDO1NBQ0osQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELFVBQVU7UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsR0FBRyxFQUFFLGFBQWE7U0FDckIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELFVBQVU7UUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsR0FBRyxFQUFFLGFBQWE7U0FDckIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELFdBQVc7UUFDUCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsR0FBRyxFQUFFLGVBQWU7U0FDdkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xyXG4gICAgZGF0YToge1xyXG4gICAgXHJcbiAgICB9LFxyXG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTtcclxuICAgIH0sXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5hdXRoU2V0dGluZ1snc2NvcGUuYWRkcmVzcyddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guYXV0aG9yaXplKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICdzY29wZS5hZGRyZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcygpIHsvL+eUqOaIt+WFgeiuuOivpeadg+mZkOaXtuiwg+eUqO+8jOiLpemmluasoeivt+axguadg+mZkOeUqOaIt+ayoeacieWFgeiuuOWImeS4i+S4gOasoeivt+axguaXtuWwseS4jeS8muW8ueWHuuaPkOekuuahhu+8jFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5q2k5pe26ZyA6KaB54K55Ye7b3Blbi10eXBlPVwib3BlblNldHRpbmdcIueahEJ1dHRvbuW8leWvvOeUqOaIt+mHjeaWsOS/ruaUueaOiOadg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICB0ZXh0Q2xpY2soKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAndGV4dC90ZXh0J1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZm9ybUNsaWNrKCkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJ2Zvcm0vZm9ybSdcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIHNjcm9sbENsaWNrKCkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICdzY3JvbGxWaWV3L3Njcm9sbFZpZXcnXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzd2lwZXJDbGljaygpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnc3dpcGVyL3N3aXBlcidcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGxvYWRpbmdDbGljaygpIHtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5oiQ5YqfXCIpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5a6M5oiQXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDIwMDApXHJcbiAgICB9LFxyXG4gICAgdG9hc3RDbGljaygpIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aIkOWKnycsXHJcbiAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIG1vZGFsQ2xpY2soKSB7XHJcbiAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn6L+Z5piv5LiA5Liq5qih5oCB5by556qXJyxcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFjdGlvblNoZWV0Q2xpY2soKSB7XHJcbiAgICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHtcclxuICAgICAgICAgICAgaXRlbUxpc3Q6IFsnQScsICdCJywgJ0MnXSxcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXBJbmRleClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGF1ZGlvQ2xpY2soKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJ2F1ZGlvL2F1ZGlvJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHZpZGVvQ2xpY2soKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJ3ZpZGVvL3ZpZGVvJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNhbWVyYUNsaWNrKCkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICdjYW1lcmEvY2FtZXJhJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KSJdfQ==