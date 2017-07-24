$(document).ready(function(){
      //accordion - faq
      $(".sub_content").hide();
      $(".faq-list li a").click(function(){
         if($("+div",this).css("display")=="none"){
            $(".sub_content").slideUp("slow");
            $("+div.sub_content",this).slideDown("slow");
            $(".faq-list li a").removeClass("on");
            $(this).find('span').addClass("faq-on");
            $(this).parent('li').siblings().find('span').removeClass("faq-on");
            $(this).addClass("on");
         }
      });
      

});


// 개발팀 Start
function fnGuidKey() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}

function AES_Encode(orign_text, key) {
    GibberishAES.size(256);
    return GibberishAES.aesEncrypt(orign_text, key);
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");

    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);

        x = x.replace(/^\s+|\s+$/g, "");

        if (x == c_name) {
            return unescape(y);
        }
    }
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();

    exdate.setDate(exdate.getDate() + exdays);

    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());

    document.cookie = c_name + "=" + c_value;
}

function AddCountPageViewLog(url, ip) {
    var connectionInfo = {
        PAGE_URL: url,
        LOCAL_IP: ip,
    };

    $.ajax({
        type: "POST",
        url: "/api/logPage/addLogCount",
        dataType: "json",
        data: { '': JSON.stringify(connectionInfo) },
        success: function (data) {
            // alert(JSON.stringify(data));
        }
    });
}

function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress.trim());
}

function isValidPwd(pwd) {
    var vPwd = pwd.trim();
    var pattern = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,}$/);
    if (pattern.test(vPwd)) {
        return stck(vPwd, 4);
    } else {
        return false;
    }
}
function isValidNumberOverZero(inputval)
{
    var vInputText = inputval;
    var vF_InputText = parseFloat(vInputText);
    if (isNaN(vInputText) || !(Number(vF_InputText) === vF_InputText) || !(vF_InputText % 1 === 0) || !(vF_InputText >= 0)) {
        return false;
    }
    else
    {
        return true;
    }
}

//연속된 문자 카운트

function stck(str, limit) {
    var o, d, p, n = 0, l = limit == null ? 4 : limit;

    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (i > 0 && (p = o - c) > -2 && p < 2 && (n = p == d ? n + 1 : 0) > l - 3) return false;
        d = p, o = c;
    }

    return true;
}
// 개발팀 End