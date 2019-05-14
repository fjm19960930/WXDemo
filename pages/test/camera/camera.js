// pages/test/camera/camera.js
var directionMark = 1;//0前置 1后置
Page({
    data: {
        direction: 'back',
        src: ''
    },
    takePhoto() {
        const ctx = wx.createCameraContext();
        ctx.takePhoto({
            quality: 'high',
            success: (res) => {
                this.setData({
                    src: res.tempImagePath
                })
                wx.saveImageToPhotosAlbum({//保存拍摄的图片
                    filePath: res.tempImagePath,
                    success(res) {
                        console.log("保存成功");
                    }
                })
            }
        });
        // const listener = ctx.onCameraFrame((frame) => {
        //     console.log(frame.data instanceof ArrayBuffer, frame.width, frame.height)
        // });
        // listener.start();
    },
    changeDirection() {
        if (directionMark == 1) {
            directionMark = 0;
            this.setData({
                direction: 'front'
            });
        } else {
            directionMark = 1;
            this.setData({
                direction: 'back'
            });
        }
    }
})