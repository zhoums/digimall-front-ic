/*
define('main/article', ['jquery','main/utils','main/server','main/common','main/temple'], function($, utils, server, common, temple){
    var exports  = {},
    $body = $('body');
    var tpl = utils.getSearchParam('tpl');

    exports.init = function(){
        common.init();
        common.articleSideBar();
        common.articleContent(tpl);
       
    };
    return exports;
})*/


define('main/article', ['jquery','main/utils','main/server','main/common','main/temple','main/ga','main/im'], function($, utils, server, common, temple,ga,im){
    var exports  = {},
        $body = $('body');
    var tpl = utils.getSearchParam('tpl');
    var id = utils.getSearchParam('id');
    function setContent(html){
        $body.find('.content').html(html);
    }
    // 文章内容
    exports.articleContent = function(tpl){
        if(id === 'about_us'){
            tpl = window._c.websiteName.toLowerCase() + '_' + tpl;
            utils.TPL.loadTemplates([tpl],function(){
                var html = utils.TPL.get.call(exports.TPL,tpl);
                setContent(html);
                var title = $body.find('.topic').html();
                $body.find('.currentLocation').html(title);
                document.title = title + ' - ' + window._c.websiteName;
            });
        }
        if(tpl === 'contact_us'){
            server.contactInfo(function(data){
                var title = 'Contact Us';
                var html = '<h2 class="topic">' + title + '</h2><div class="detail"> '+ data.data.content + '</div>'
                setContent(html);
                $body.find('.currentLocation').html(title);
                document.title = title + ' - ' + window._c.websiteName;
            })
        }else{
            tpl = window._c.websiteName.toLowerCase() + '_' + tpl;
            utils.TPL.loadTemplates([tpl],function(){
                var html = utils.TPL.get.call(exports.TPL,tpl);
                setContent(html);
                var title = $body.find('.topic').html();
                $body.find('.currentLocation').html(title);
                document.title = title + ' - ' + window._c.websiteName;
            });
            /*server.newsDetail(id, function(data){
                $body.find('.title').html(data.data.title);
                setContent(data.data.content);
                document.title = data.data.title + ' - ' + window._c.websiteName;
            })*/
        }
    };
    exports.init = function(){
        common.init();
        common.articleSideBar();
        exports.articleContent(tpl);

    };
    return exports;
})
