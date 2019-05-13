const initData = 'this is first line\nthis is second line'
const extraLine = []
Page({

    /**
     * 页面的初始数据
     */
    data: {
        text: initData
    },
    add(e) {
        extraLine.push('other line')
        this.setData({
            text: initData + '\n' + extraLine.join('\n')
        })
    },
    remove(e) {
        if (extraLine.length > 0) {
            extraLine.pop()
            this.setData({
                text: initData + '\n' + extraLine.join('\n')
            })
        }
    }
})