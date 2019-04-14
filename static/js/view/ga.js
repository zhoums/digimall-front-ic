<!-- Global site tag (gtag.js) - Google Analytics -->
define('main/ga',['jquery'],function($){
    var exports={};
    exports.ga=function(){
        var script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=UA-117836249-1";
        document.getElementsByTagName("BODY")[0].appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-117836249-1');
    }
    return exports;
})