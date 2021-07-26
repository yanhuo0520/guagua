
(function () {
        var b = document.documentElement,
        a = function () {
            var a = b.getBoundingClientRect().width;
            b.style.fontSize = (100/750) * (a >= 750 ? 750 : a) + "px";     //750指的是设计稿的宽度      
            // b.style.fontSize = (100/750) * a + "px";
        }, c = null;
        window.addEventListener("resize", function () {
            clearTimeout(c);
            c = setTimeout(a, 300);//在苹果手机上调整屏幕大小的时候有点闪屏
        });
        a();
    })();
    //(a/750)*100