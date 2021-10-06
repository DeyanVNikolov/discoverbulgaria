
if (window.navigator.cookieEnabled == false) {
    window.location.href = "https://deyanvnikolov.github.io/discoverbulgaria/cookies-disabled.html";
}else{
    document.cookie = "language=" + window.navigator.language + "; secure"
    document.cookie = "platform=" + window.navigator.platform + "; secure" 
document.cookie = "onLine=" + window.navigator.onLine + "; secure"
var d = new Date();
document.cookie="time="+d + "; secure"
}
