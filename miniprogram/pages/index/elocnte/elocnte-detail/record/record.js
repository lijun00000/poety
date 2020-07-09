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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixhQUFhLEVBQUUsS0FBSztRQUNwQixZQUFZLEVBQUUsSUFBSTtRQUNsQixXQUFXLEVBQUUsSUFBSTtLQUNsQjtJQUNELFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYTtZQUN0QyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDckMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztTQUNuQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsU0FBUztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQ3RDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDcEMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1NBQ3BDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDcEMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztTQUNuQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxhQUFhLEVBQUUsS0FBSztZQUNwQixZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQ3BDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFNBQVM7UUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsYUFBYSxFQUFFLElBQUk7WUFDbkIsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUNwQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1NBQ25DLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDcEMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztTQUNuQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxhQUFhLEVBQUUsS0FBSztZQUNwQixZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQ3BDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7U0FDbkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlELE1BQU0sWUFBQyxLQUFLO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIHJlY29yZE9yTXVzaWM6IGZhbHNlLFxyXG4gICAgcmVjb3JkSGlkZGVuOiB0cnVlLFxyXG4gICAgbXVzaWNIaWRkZW46IHRydWVcclxuICB9LFxyXG4gIHJlY29yZFBsYXkoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICByZWNvcmRPck11c2ljOiB0aGlzLmRhdGEucmVjb3JkT3JNdXNpYyxcclxuICAgICAgcmVjb3JkSGlkZGVuOiAhdGhpcy5kYXRhLnJlY29yZEhpZGRlbixcclxuICAgICAgbXVzaWNIaWRkZW46IHRoaXMuZGF0YS5tdXNpY0hpZGRlblxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBtdXNpY1BsYXkoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICByZWNvcmRPck11c2ljOiB0aGlzLmRhdGEucmVjb3JkT3JNdXNpYyxcclxuICAgICAgcmVjb3JkSGlkZGVuOiB0aGlzLmRhdGEucmVjb3JkSGlkZGVuLFxyXG4gICAgICBtdXNpY0hpZGRlbjogIXRoaXMuZGF0YS5tdXNpY0hpZGRlblxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHJlY29yZE9yTXVzaWM6IGZhbHNlLFxyXG4gICAgICByZWNvcmRIaWRkZW46IHRoaXMuZGF0YS5yZWNvcmRIaWRkZW4sXHJcbiAgICAgIG11c2ljSGlkZGVuOiB0aGlzLmRhdGEubXVzaWNIaWRkZW5cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZmluaXNoKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgcmVjb3JkT3JNdXNpYzogZmFsc2UsXHJcbiAgICAgIHJlY29yZEhpZGRlbjogdGhpcy5kYXRhLnJlY29yZEhpZGRlbixcclxuICAgICAgbXVzaWNIaWRkZW46IHRoaXMuZGF0YS5tdXNpY0hpZGRlblxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBsaXN0ZW5pbmcoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICByZWNvcmRPck11c2ljOiB0cnVlLFxyXG4gICAgICByZWNvcmRIaWRkZW46IHRoaXMuZGF0YS5yZWNvcmRIaWRkZW4sXHJcbiAgICAgIG11c2ljSGlkZGVuOiB0aGlzLmRhdGEubXVzaWNIaWRkZW5cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcmVyZWNvcmRpbmcoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICByZWNvcmRPck11c2ljOiBmYWxzZSxcclxuICAgICAgcmVjb3JkSGlkZGVuOiB0aGlzLmRhdGEucmVjb3JkSGlkZGVuLFxyXG4gICAgICBtdXNpY0hpZGRlbjogdGhpcy5kYXRhLm11c2ljSGlkZGVuXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHJlY29yZE9yTXVzaWM6IGZhbHNlLFxyXG4gICAgICByZWNvcmRIaWRkZW46IHRoaXMuZGF0YS5yZWNvcmRIaWRkZW4sXHJcbiAgICAgIG11c2ljSGlkZGVuOiB0aGlzLmRhdGEubXVzaWNIaWRkZW5cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQocGFyYW0pIHtcclxuICAgIGNvbnNvbGUubG9nKHBhcmFtKTtcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdygpIHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlKCkge1xyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2Uob3B0cyk6IFdlY2hhdE1pbmlwcm9ncmFtLlBhZ2UuSUN1c3RvbVNoYXJlQ29udGVudCB7XHJcbiAgICBjb25zb2xlLmxvZyhvcHRzLnRhcmdldClcclxuICAgIHJldHVybiB7fVxyXG4gIH1cclxufSkiXX0=