define('main/im', ['jquery'],function($){
    var exports  = {};
    exports.im=function(){
        ;(function (W, D) {
            console.log('im 运行',$('body'));
            W.ec_corpid = '8228774';
            W.ec_cskey = 'Oy5YpKBdqb4qZfRToY';
            W.ec_scheme = '0';
            var s = D.createElement('script');
            s.charset = 'utf-8';
            s.src = '//1.staticec.com/kf/sdk/js/ec_cs.js';
            D.getElementsByTagName('head')[0].appendChild(s);
        })(window, document);
    }
    return exports;
})