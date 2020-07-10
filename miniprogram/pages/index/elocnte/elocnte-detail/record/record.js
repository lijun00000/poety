"use strict";
Page({
    data: {
        recordOrMusic: false,
        recordHidden: true,
        musicHidden: true
    },
    recordPlay: function () {
        this.setData({
            recordOrMusic: this.data.recordOrMusic,
            recordHidden: !this.data.recordHidden,
            musicHidden: this.data.musicHidden
        });
    },
    musicPlay: function () {
        var _this = this;
        innerAudioContext.src = '/pages/music/周杰伦 - 默 .mp3';
        innerAudioContext.onCanplay(function () {
            var duration = innerAudioContext.duration;
            if (duration) {
                console.log('获取成功');
                var durationFormat = _this.dateFormat(duration);
                console.log(durationFormat);
            }
            else {
                console.log('获取失败');
                setTimeout(function () {
                    var duration = innerAudioContext.duration;
                    console.log(duration);
                    var durationFormat = _this.dateFormat(duration);
                    console.log(durationFormat);
                }, 1000);
            }
        });
        innerAudioContext.play();
        this.setData({
            recordOrMusic: this.data.recordOrMusic,
            recordHidden: this.data.recordHidden,
            musicHidden: !this.data.musicHidden
        });
    },
    musicPause: function () {
        innerAudioContext.pause();
        this.setData({
            recordOrMusic: this.data.recordOrMusic,
            recordHidden: this.data.recordHidden,
            musicHidden: !this.data.musicHidden
        });
    },
    start: function () {
        this.setData({
            recordOrMusic: false,
            recordHidden: this.data.recordHidden,
            musicHidden: this.data.musicHidden
        });
    },
    finish: function () {
        this.setData({
            recordOrMusic: false,
            recordHidden: this.data.recordHidden,
            musicHidden: this.data.musicHidden
        });
    },
    listening: function () {
        this.setData({
            recordOrMusic: true,
            recordHidden: this.data.recordHidden,
            musicHidden: this.data.musicHidden
        });
    },
    rerecording: function () {
        this.setData({
            recordOrMusic: false,
            recordHidden: this.data.recordHidden,
            musicHidden: this.data.musicHidden
        });
    },
    submit: function () {
        this.setData({
            recordOrMusic: false,
            recordHidden: this.data.recordHidden,
            musicHidden: this.data.musicHidden
        });
    },
    dateFormat: function (second) {
        var min = Math.floor(second / 60);
        min = min < 10 ? '0' + min : min;
        second = Math.floor(second % 60);
        second = second < 10 ? '0' + second : second;
        return min + ':' + second;
    },
    onLoad: function (param) {
        console.log(param);
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFJLENBQUM7SUFJSCxJQUFJLEVBQUU7UUFDSixhQUFhLEVBQUUsS0FBSztRQUNwQixZQUFZLEVBQUUsSUFBSTtRQUNsQixXQUFXLEVBQUUsSUFBSTtLQUNsQjtJQUNELFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYTtZQUN0QyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDckMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztTQUNuQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsU0FBUztRQUFULGlCQXNCQztRQXJCQyxpQkFBaUIsQ0FBQyxHQUFHLEdBQUcsMkJBQTJCLENBQUM7UUFDcEQsaUJBQWlCLENBQUMsU0FBUyxDQUFDO1lBQzFCLElBQU0sUUFBUSxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztZQUM1QyxJQUFHLFFBQVEsRUFBRTtnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixJQUFJLGNBQWMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDN0U7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsVUFBVSxDQUFDO29CQUNULElBQU0sUUFBUSxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztvQkFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNsRSxJQUFJLGNBQWMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUMvQyxPQUFPLENB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QUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblBhZ2Uoe1xyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIHJlY29yZE9yTXVzaWM6IGZhbHNlLFxyXG4gICAgcmVjb3JkSGlkZGVuOiB0cnVlLFxyXG4gICAgbXVzaWNIaWRkZW46IHRydWVcclxuICB9LFxyXG4gIHJlY29yZFBsYXkoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICByZWNvcmRPck11c2ljOiB0aGlzLmRhdGEucmVjb3JkT3JNdXNpYyxcclxuICAgICAgcmVjb3JkSGlkZGVuOiAhdGhpcy5kYXRhLnJlY29yZEhpZGRlbixcclxuICAgICAgbXVzaWNIaWRkZW46IHRoaXMuZGF0YS5tdXNpY0hpZGRlblxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBtdXNpY1BsYXkoKSB7XHJcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5zcmMgPSAnL3BhZ2VzL211c2ljL+WRqOadsOS8piAtIOm7mCAubXAzJztcclxuICAgIGlubmVyQXVkaW9Db250ZXh0Lm9uQ2FucGxheSgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gaW5uZXJBdWRpb0NvbnRleHQuZHVyYXRpb247XHJcbiAgICAgIGlmKGR1cmF0aW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPluaIkOWKnycpO1xyXG4gICAgICAgIGxldCBkdXJhdGlvbkZvcm1hdCA9IHRoaXMuZGF0ZUZvcm1hdChkdXJhdGlvbik7IGNvbnNvbGUubG9nKGR1cmF0aW9uRm9ybWF0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5aSx6LSlJyk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGlubmVyQXVkaW9Db250ZXh0LmR1cmF0aW9uO2NvbnNvbGUubG9nKGR1cmF0aW9uKTtcclxuICAgICAgICAgIGxldCBkdXJhdGlvbkZvcm1hdCA9IHRoaXMuZGF0ZUZvcm1hdChkdXJhdGlvbik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkdXJhdGlvbkZvcm1hdCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaW5uZXJBdWRpb0NvbnRleHQucGxheSgpO1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcmVjb3JkT3JNdXNpYzogdGhpcy5kYXRhLnJlY29yZE9yTXVzaWMsXHJcbiAgICAgIHJlY29yZEhpZGRlbjogdGhpcy5kYXRhLnJlY29yZEhpZGRlbixcclxuICAgICAgbXVzaWNIaWRkZW46ICF0aGlzLmRhdGEubXVzaWNIaWRkZW5cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgbXVzaWNQYXVzZSgpIHtcclxuICAgIGlubmVyQXVkaW9Db250ZXh0LnBhdXNlKCk7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICByZWNvcmRPck11c2ljOiB0aGlzLmRhdGEucmVjb3JkT3JNdXNpYyxcclxuICAgICAgcmVjb3JkSGlkZGVuOiB0aGlzLmRhdGEucmVjb3JkSGlkZGVuLFxyXG4gICAgICBtdXNpY0hpZGRlbjogIXRoaXMuZGF0YS5tdXNpY0hpZGRlblxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHJlY29yZE9yTXVzaWM6IGZhbHNlLFxyXG4gICAgICByZWNvcmRIaWRkZW46IHRoaXMuZGF0YS5yZWNvcmRIaWRkZW4sXHJcbiAgICAgIG11c2ljSGlkZGVuOiB0aGlzLmRhdGEubXVzaWNIaWRkZW5cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZmluaXNoKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcmVjb3JkT3JNdXNpYzogZmFsc2UsXHJcbiAgICAgIHJlY29yZEhpZGRlbjogdGhpcy5kYXRhLnJlY29yZEhpZGRlbixcclxuICAgICAgbXVzaWNIaWRkZW46IHRoaXMuZGF0YS5tdXNpY0hpZGRlblxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBsaXN0ZW5pbmcoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICByZWNvcmRPck11c2ljOiB0cnVlLFxyXG4gICAgICByZWNvcmRIaWRkZW46IHRoaXMuZGF0YS5yZWNvcmRIaWRkZW4sXHJcbiAgICAgIG11c2ljSGlkZGVuOiB0aGlzLmRhdGEubXVzaWNIaWRkZW5cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcmVyZWNvcmRpbmcoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICByZWNvcmRPck11c2ljOiBmYWxzZSxcclxuICAgICAgcmVjb3JkSGlkZGVuOiB0aGlzLmRhdGEucmVjb3JkSGlkZGVuLFxyXG4gICAgICBtdXNpY0hpZGRlbjogdGhpcy5kYXRhLm11c2ljSGlkZGVuXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHJlY29yZE9yTXVzaWM6IGZhbHNlLFxyXG4gICAgICByZWNvcmRIaWRkZW46IHRoaXMuZGF0YS5yZWNvcmRIaWRkZW4sXHJcbiAgICAgIG11c2ljSGlkZGVuOiB0aGlzLmRhdGEubXVzaWNIaWRkZW5cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgLy/moLzlvI/ljJbml7bpl7RcclxuICBkYXRlRm9ybWF0KHNlY29uZDogYW55KSB7XHJcbiAgICBsZXQgbWluOiBhbnkgPSBNYXRoLmZsb29yKHNlY29uZCAvIDYwKTtcclxuICAgIG1pbiA9IG1pbiA8IDEwID8gJzAnICsgbWluIDogbWluO1xyXG4gICAgc2Vjb25kID0gTWF0aC5mbG9vcihzZWNvbmQgJSA2MCk7XHJcbiAgICBzZWNvbmQgPSBzZWNvbmQgPCAxMCA/ICcwJyArIHNlY29uZCA6IHNlY29uZDtcclxuICAgIHJldHVybiBtaW4gKyAnOicgKyBzZWNvbmQ7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZChwYXJhbSkge1xyXG4gICAgY29uc29sZS5sb2cocGFyYW0pO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93KCkge1xyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGUoKSB7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZShvcHRzKTogV2VjaGF0TWluaXByb2dyYW0uUGFnZS5JQ3VzdG9tU2hhcmVDb250ZW50IHtcclxuICAgIGNvbnNvbGUubG9nKG9wdHMudGFyZ2V0KVxyXG4gICAgcmV0dXJuIHt9XHJcbiAgfVxyXG59KSJdfQ==