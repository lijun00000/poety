"use strict";
var backgroundAudioManager = wx.getBackgroundAudioManager();
var innerAudioContext = wx.createInnerAudioContext();
Page({
    data: {
        isplay: false,
    },
    play: function () {
        console.log(this.data.isplay);
        if (!this.data.isplay) {
            innerAudioContext.play();
            innerAudioContext.onPlay(function () {
                console.log('开始播放');
                console.log(innerAudioContext.duration);
            });
            innerAudioContext.offPlay(function () { });
            innerAudioContext.onError(function (res) {
                console.log(res.errMsg);
                console.log(res.errCode);
            });
        }
        else {
            innerAudioContext.pause();
        }
        this.setData({
            isplay: !this.data.isplay,
        });
    },
    previous: function () {
        innerAudioContext.src = '/pages/music/周杰伦 - 默 .mp3';
        innerAudioContext.play();
    },
    next: function () {
        innerAudioContext.src = '/pages/music/nibushizhenzhengdekuaile.mp3';
        innerAudioContext.play();
    },
    onLoad: function (param) {
        console.log(param);
        innerAudioContext.src = '/pages/music/周杰伦 - 默 .mp3';
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
        innerAudioContext.stop();
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function (opts) {
        console.log(opts.target);
        return {};
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxvY250ZS12b2ljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVsb2NudGUtdm9pY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQU0sc0JBQXNCLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixFQUFFLENBQUM7QUFDOUQsSUFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztBQUV2RCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsS0FBSztLQUNkO0lBU0QsSUFBSTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDcEIsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFekIsaUJBQWlCLENBQUMsTUFBTSxDQUFDO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGNBQU8sQ0FBQyxDQUFDLENBQUM7WUFDcEMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBUTtnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1NBRTNCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtTQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsUUFBUTtRQUNOLGlCQUFpQixDQUFDLEdBQUcsR0FBRywyQkFBMkIsQ0FBQztRQUNwRCxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSTtRQUNGLGlCQUFpQixDQUFDLEdBQUcsR0FBRywyQ0FBMkMsQ0FBQztRQUNwRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBSUQsTUFBTSxZQUFDLEtBQUs7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLGlCQUFpQixDQUFDLEdBQUcsR0FBRywyQkFBMkIsQ0FBQztJQUl0RCxDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtRQUNOLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy/lhajlsYDllK/kuIDnmoTog4zmma/pn7PpopHnrqHnkIblmahcclxuY29uc3QgYmFja2dyb3VuZEF1ZGlvTWFuYWdlciA9IHd4LmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcclxuY29uc3QgaW5uZXJBdWRpb0NvbnRleHQgPSB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpO1xyXG5cclxuUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIGlzcGxheTogZmFsc2UsXHJcbiAgfSxcclxuICAvLyBtdXNpY0RhdGE6IHtcclxuICAvLyAgIGlubmVyQXVkaW9Db250ZXh0OiB3eC5jcmVhdGVJbm5lckF1ZGlvQ29udGV4dCgpLFxyXG4gIC8vICAgdm9sdW1lOiAxLFxyXG4gIC8vICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gIC8vICAgcGF1c2VkOiB0cnVlLFxyXG4gIC8vICAgbG9vcDogdHJ1ZSxcclxuICAvLyAgIHNyYzogJy9wYWdlcy9tdXNpYy9uaWJ1c2hpemhlbnpoZW5nZGVrdWFpbGUubXAzJ1xyXG4gIC8vIH0sXHJcbiAgcGxheSgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5pc3BsYXkpO1xyXG4gICAgaWYoIXRoaXMuZGF0YS5pc3BsYXkpIHtcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQucGxheSgpO1xyXG4gICAgICAvL2JhY2tncm91bmRBdWRpb01hbmFnZXIucGxheSgpO1xyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vblBsYXkoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCflvIDlp4vmkq3mlL4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbm5lckF1ZGlvQ29udGV4dC5kdXJhdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5vZmZQbGF5KCgpID0+IHt9KTtcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25FcnJvcigocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJDb2RlKVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnBhdXNlKCk7XHJcbiAgICAgIC8vYmFja2dyb3VuZEF1ZGlvTWFuYWdlci5wYXVzZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgaXNwbGF5OiAhdGhpcy5kYXRhLmlzcGxheSxcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcHJldmlvdXMoKSB7XHJcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5zcmMgPSAnL3BhZ2VzL211c2ljL+WRqOadsOS8piAtIOm7mCAubXAzJztcclxuICAgIGlubmVyQXVkaW9Db250ZXh0LnBsYXkoKTtcclxuICB9LFxyXG4gIG5leHQoKSB7XHJcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5zcmMgPSAnL3BhZ2VzL211c2ljL25pYnVzaGl6aGVuemhlbmdkZWt1YWlsZS5tcDMnO1xyXG4gICAgaW5uZXJBdWRpb0NvbnRleHQucGxheSgpO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQocGFyYW0pIHtcclxuICAgIGNvbnNvbGUubG9nKHBhcmFtKTtcclxuICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9ICcvcGFnZXMvbXVzaWMv5ZGo5p2w5LymIC0g6buYIC5tcDMnO1xyXG4gICAgLy9iYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNyYyA9ICcvcGFnZXMvbXVzaWMv5ZGo5p2w5LymIC0g6buYIC5tcDMnO1xyXG4gICAgLy9iYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnRpdGxlID0gJ+m7mCAtIOWRqOadsOS8pic7XHJcbiAgICAvL3RoaXMubXVzaWNEYXRhLmlubmVyQXVkaW9Db250ZXh0LnBsYXkoKTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdygpIHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlKCkge1xyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuICAgIGlubmVyQXVkaW9Db250ZXh0LnN0b3AoKTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG4gICAqL1xyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKG9wdHMpOiBXZWNoYXRNaW5pcHJvZ3JhbS5QYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xyXG4gICAgY29uc29sZS5sb2cob3B0cy50YXJnZXQpXHJcbiAgICByZXR1cm4ge31cclxuICB9XHJcbn0pIl19