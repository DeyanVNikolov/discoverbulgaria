
if (window.navigator.cookieEnabled == false) {
    window.location.href = "https://deyanvnikolov.github.io/discoverbulgaria/cookies-disabled.html";
}else{
document.cookie = "language=; expires=Thu, 01 Jan 1970 00:00:01 GMT"
document.cookie = "platform=; expires=Thu, 01 Jan 1970 00:00:01 GMT"
document.cookie = "onLine=; expires=Thu, 01 Jan 1970 00:00:01 GMT"
document.cookie = "time=; expires=Thu, 01 Jan 1970 00:00:01 GMT"

    document.cookie = "language=" + window.navigator.language + "; secure"
    document.cookie = "platform=" + window.navigator.platform + "; secure" 
document.cookie = "onLine=" + window.navigator.onLine + "; secure"
var d = new Date();
document.cookie="time="+d + "; secure"
}
