$(document).ready(function () {
    var appMenu = new Vue({
        el: '#appMenu',
        data: {
            show: true,
            userInfo: {
                id: 0
            }
        },
        mounted: function () {
            this.userInfo = this.getUserInfo();
        },
        methods: {
            getUserInfo: function () {
                var userInfoCrypt = userInfoFunctions.getUserInfo();
                if (userInfoCrypt == null) {
                    return {
                        id: 0
                    }
                } else {
                    return userInfoFunctions.decryptUserInfo(userInfoCrypt);
                }
            },
            logout: function () {
                userInfoFunctions.removeUserInfo();
                window.location.href="index.html";
            }
        }
    });

    //to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#go-to-top').fadeIn();
        } else {
            $('#go-to-top').fadeOut();
        }
    });

    $('#go-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

});
