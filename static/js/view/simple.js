define('main/simple', ['main/common','main/ga','main/im'], function(common,ga,im){
    var exports  = {};
    // 初始化
    exports.init = function(){
        common.init();
        // im.im();
        // ga.ga();
    };
    return exports;
})