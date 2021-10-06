
if (window.navigator.cookieEnabled == false) {
    window.location.href = "https://deyanvnikolov.github.io/discoverbulgaria/cookies-disabled.html";
}else{
    function clearCookies(wildcardDomain=false, primaryDomain=true, path=null){
        pathSegment= path ? '; path=' + path : ''
        expSegment="=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie.split(';').forEach(
            function(c) { 
                primaryDomain && (document.cookie = c.replace(/^ +/, "").replace(/=.*/, expSegment + pathSegment))
                wildcardDomain && (document.cookie = c.replace(/^ +/, "").replace(/=.*/, expSegment + pathSegment + '; domain=' + document.domain))
             }
         )}
    
    clearCookies()

    document.cookie = "language=" + window.navigator.language + "; secure"
    document.cookie = "platform=" + window.navigator.platform + "; secure" 
document.cookie = "onLine=" + window.navigator.onLine + "; secure"
var d = new Date();
document.cookie="time="+d + "; secure"
}
