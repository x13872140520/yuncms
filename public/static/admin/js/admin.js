/*! yuncms v1.0.0 | by yunalading Team | http://www.yunalading.com | (c) 2017 HTTGO, Inc. |  | 2017-03-16"A"07:03:25 UTC */ 
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
require('../../common/js/jump-message');
require('../../common/js/captcha');
require('./upload');
require('./manager-box');


}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../../common/js/captcha":4,"../../common/js/jump-message":5,"./manager-box":2,"./upload":3}],2:[function(require,module,exports){
(function (global){
'use strict';
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
$(function () {
    $('.manager-box').css('height',$('body').height()-52);
    $('#context-page').css('height',$('body').height()-105);
});

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
(function (global){
'use strict';

var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);

//建立一个取到上传文件url的方法
function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}
//将取得的url传入html代码中的img的src中，实现图片上传预览。此段在图片添加起作用
$(function () {
    $("#image-upload").change(function () {
        var objUrl = getObjectURL(this.files[0]);
        console.log("objUrl = " + objUrl);
        if (objUrl) {
            $("#img").attr("src", objUrl);
        }
    });
});

//将取得的url传入html代码中的img的src中，实现图片上传预览。此段在广告添加起作用
$(function () {
    $("#ad-slide-cover").change(function () {
        var objUrl = getObjectURL(this.files[0]);
        console.log("objUrl = " + objUrl);
        if (objUrl) {
            $("#ad-slide-cover-img").attr("src", objUrl);
        }
    });
});

//将取得的url传入html代码中的img的src中，实现图片上传预览。此段在页面添加起作用
$(function () {
    $("#page-cover").change(function () {
        var objUrl = getObjectURL(this.files[0]);
        console.log("objUrl = " + objUrl);
        if (objUrl) {
            $("#page-img").attr("src", objUrl);
        }
    });
});

//将取得的url传入html代码中的img的src中，实现图片上传预览。此段在友情链接添加起作用
$(function () {
    $("#links-icon").change(function () {
        var objUrl = getObjectURL(this.files[0]);
        console.log("objUrl = " + objUrl);
        if (objUrl) {
            $("#links-img").attr("src", objUrl);
        }
    });
});
//delele页面中全选按钮事件
$("#allcheck").on('click',function(){
    $("input[name='item']").prop('checked',true);
});
//delele页面中全不选按钮事件
$("#notallcheck").on('click',function(){
    $("input[name='item']").prop('checked',false);
});

//广告添加页面的滚动按钮
$('#doc-scroll-to-btm').on('click', function() {
    var $w = $(window);
    $w.smoothScroll({position: $(document).height() - $w.height()});
});

//新建图片文件夹
$("#img-cate-cancer").on('click',function(){
$("img-cate-name").html("");
});
$("#img-cate-confirem").on('click',function(){
    $.post({

    });
});

//全选处删除
$('#delete-btn').click(function(){
    var checkedNum = $("input[name='item']:checked").length;
    if(checkedNum == 0){
        alert('请至少选择一项！');
        return;
    }
    if(confirm("确定删除所选项目？")){
        var  checkedList = new Array();
        $("input[name='item']:checked").each(function(){
            checkedList.push($(this).val());
            $("#delete-list").html(checkedList);
        });

    }
});

//列表中的icon-trash删除事件处理程序
$('.am-btn-group-xs').children("a:has('.am-icon-trash')").click(function(){
    if(confirm('是否确定删除此项？')){
        $(this).parent().parent().parent('tr').remove();
    }

});
//列表中给icon-edit添加编辑事件，让所有td处于可编辑状态
// $('.am-btn-group-xs').children("a:has('.am-icon-edit')").click(function(){
//    $(this).parent().parent('td').prevAll().each(function(){
//        var txt=[];
//        txt.append($(this).text());
//        $(this).append("tex[0]");
//    });
//
// });

//密码重置页面交互
$("#pwd-reset").click(function(){
    $(".admin-info").hide();
    $("#pwd-reset-form").show();
});


//admin信息 input text类型修改页面
$(".admin-info-edit").click(function(){
    var inputObj=$(this).prev()
    inputObj.removeAttr("disabled");
    inputObj.select();
    inputObj.removeClass("remove-input");
    inputObj.blur(function(){
        inputObj.addClass("remove-input");
        /*ajax代码*/
        inputObj.attr("disabled","disabled");
    });
});
//admin信息性别类型修改页面
$(".admin-info-sex-edit").click(function(){
    $(".sex-choice").toggle();
    $(".sex-choice li").click(function(){
        /*ajax代码*/
        var lisText=$(this).children('label').html();
        $("#admin-sex").html(lisText);
        $(".sex-choice").hide();
    });

});

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
(function (global){
'use strict';
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
$(function () {
    $('#captcha').click(function () {
       $(this).attr('src',$(this).attr('src'));
    });
});

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
(function (global){
'use strict';
var $ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null);
var timer = 10;
function forwardTimer() {
    if (timer > 0) {
        $('#system-message').find('#wait').html(timer);
        timer--;
        setTimeout(forwardTimer, 1000);
    } else {
        location.href = $('#system-message').find('#href').attr('href');
    }
}
$(function () {
    if ($('#system-message').find('#wait').length > 0) {
        timer = parseInt($('#system-message').find('#wait').html());
        forwardTimer();
    }
});

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])