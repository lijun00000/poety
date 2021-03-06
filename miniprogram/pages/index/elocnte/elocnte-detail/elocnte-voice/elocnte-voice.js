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
        console.log(param.name);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxvY250ZS12b2ljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVsb2NudGUtdm9pY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQU0sc0JBQXNCLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixFQUFFLENBQUM7QUFDOUQsSUFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztBQUV2RCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsS0FBSztLQUNkO0lBU0QsSUFBSTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDcEIsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFekIsaUJBQWlCLENBQUMsTUFBTSxDQUFDO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGNBQU8sQ0FBQyxDQUFDLENBQUM7WUFDcEMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBUTtnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1NBRTNCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtTQUMxQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsUUFBUTtRQUNOLGlCQUFpQixDQUFDLEdBQUcsR0FBRywyQkFBMkIsQ0FBQztRQUNwRCxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBSTtRQUNGLGlCQUFpQixDQUFDLEdBQUcsR0FBRywyQ0FBMkMsQ0FBQztRQUNwRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBSUQsTUFBTSxZQUFDLEtBQUs7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixpQkFBaUIsQ0FBQyxHQUFHLEdBQUcsMkJBQTJCLENBQUM7SUFJdEQsQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7UUFDTixpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQixFQUFqQixVQUFrQixJQUFJO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8v5YWo5bGA5ZSv5LiA55qE6IOM5pmv6Z+z6aKR566h55CG5ZmoXHJcbmNvbnN0IGJhY2tncm91bmRBdWRpb01hbmFnZXIgPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKCk7XHJcbmNvbnN0IGlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcclxuXHJcblBhZ2Uoe1xyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBpc3BsYXk6IGZhbHNlLFxyXG4gIH0sXHJcbiAgLy8gbXVzaWNEYXRhOiB7XHJcbiAgLy8gICBpbm5lckF1ZGlvQ29udGV4dDogd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKSxcclxuICAvLyAgIHZvbHVtZTogMSxcclxuICAvLyAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAvLyAgIHBhdXNlZDogdHJ1ZSxcclxuICAvLyAgIGxvb3A6IHRydWUsXHJcbiAgLy8gICBzcmM6ICcvcGFnZXMvbXVzaWMvbmlidXNoaXpoZW56aGVuZ2Rla3VhaWxlLm1wMydcclxuICAvLyB9LFxyXG4gIHBsYXkoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEuaXNwbGF5KTtcclxuICAgIGlmKCF0aGlzLmRhdGEuaXNwbGF5KSB7XHJcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0LnBsYXkoKTtcclxuICAgICAgLy9iYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnBsYXkoKTtcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub25QbGF5KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygn5byA5aeL5pKt5pS+Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5uZXJBdWRpb0NvbnRleHQuZHVyYXRpb24pO1xyXG4gICAgICB9KTtcclxuICAgICAgaW5uZXJBdWRpb0NvbnRleHQub2ZmUGxheSgoKSA9PiB7fSk7XHJcbiAgICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uRXJyb3IoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZylcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyQ29kZSlcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbm5lckF1ZGlvQ29udGV4dC5wYXVzZSgpO1xyXG4gICAgICAvL2JhY2tncm91bmRBdWRpb01hbmFnZXIucGF1c2UoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGlzcGxheTogIXRoaXMuZGF0YS5pc3BsYXksXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHByZXZpb3VzKCkge1xyXG4gICAgaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gJy9wYWdlcy9tdXNpYy/lkajmnbDkvKYgLSDpu5ggLm1wMyc7XHJcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5wbGF5KCk7XHJcbiAgfSxcclxuICBuZXh0KCkge1xyXG4gICAgaW5uZXJBdWRpb0NvbnRleHQuc3JjID0gJy9wYWdlcy9tdXNpYy9uaWJ1c2hpemhlbnpoZW5nZGVrdWFpbGUubXAzJztcclxuICAgIGlubmVyQXVkaW9Db250ZXh0LnBsYXkoKTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICovXHJcbiAgb25Mb2FkKHBhcmFtKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwYXJhbS5uYW1lKTtcclxuICAgIGlubmVyQXVkaW9Db250ZXh0LnNyYyA9ICcvcGFnZXMvbXVzaWMv5ZGo5p2w5LymIC0g6buYIC5tcDMnO1xyXG4gICAgLy9iYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnNyYyA9ICcvcGFnZXMvbXVzaWMv5ZGo5p2w5LymIC0g6buYIC5tcDMnO1xyXG4gICAgLy9iYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyLnRpdGxlID0gJ+m7mCAtIOWRqOadsOS8pic7XHJcbiAgICAvL3RoaXMubXVzaWNEYXRhLmlubmVyQXVkaW9Db250ZXh0LnBsYXkoKTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdygpIHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlKCkge1xyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuICAgIGlubmVyQXVkaW9Db250ZXh0LnN0b3AoKTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG4gICAqL1xyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKG9wdHMpOiBXZWNoYXRNaW5pcHJvZ3JhbS5QYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xyXG4gICAgY29uc29sZS5sb2cob3B0cy50YXJnZXQpXHJcbiAgICByZXR1cm4ge31cclxuICB9XHJcbn0pIl19