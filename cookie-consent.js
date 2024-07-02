document.addEventListener("DOMContentLoaded", function () {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptButton = document.getElementById('acceptCookies');
    const declineButton = document.getElementById('declineCookies');

    if (!getCookie('userConsent')) {
        cookieConsent.style.display = 'block';
    }

    acceptButton.onclick = function () {
        setCookie('userConsent', 'accepted', 365);
        cookieConsent.style.display = 'none';
    };

    declineButton.onclick = function () {
        setCookie('userConsent', 'declined', 365);
        cookieConsent.style.display = 'none';
    };

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const cname = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(cname) == 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    }
});

// JavaScript for Cookie Management
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function acceptCookies() {
    setCookie("consent", "accepted", 365);
    document.getElementById("cookieConsent").style.display = "none";
}

function declineCookies() {
    document.getElementById("cookieConsent").style.display = "none";
}

window.onload = function() {
    if (!getCookie("consent")) {
        document.getElementById("cookieConsent").style.display = "block";
    }
}

function setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
            console.log(`Cookie set: ${name}=${value}; ${expires}; path=/`);
        }

        function getCookie(name) {
            const cname = name + "=";
            const decodedCookie = decodeURIComponent(document.cookie);
            const ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(cname) == 0) {
                    console.log(`Cookie found: ${c.substring(cname.length, c.length)}`);
                    return c.substring(cname.length, c.length);
                }
            }
            console.log(`Cookie not found: ${name}`);
            return "";
        }

        function deleteCookie(name) {
            document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            console.log(`Cookie deleted: ${name}`);
        }

        function acceptCookies() {
            setCookie("consent", "accepted", 365);
            document.getElementById("cookieConsent").style.display = "none";
        }

        function declineCookies() {
            document.getElementById("cookieConsent").style.display = "none";
        }

        window.onload = function() {
            if (!getCookie("consent")) {
                document.getElementById("cookieConsent").style.display = "block";
            }
        }
        
        // Check if the user has already consented to cookies
        function checkCookieConsent() {
            // Check if the "userConsent" cookie exists
            if (getCookie("userConsent") === "Accepted") {
                hideCookieBanner(); // If cookie exists and is "Accepted", hide the banner
            }
        }

        // Function to retrieve a cookie by name
        function getCookie(name) {
            const cookieName = name + "=";
            const decodedCookie = decodeURIComponent(document.cookie);
            const cookieArray = decodedCookie.split(';');

            for (let i = 0; i < cookieArray.length; i++) {
                let cookie = cookieArray[i].trim();
                if (cookie.indexOf(cookieName) === 0) {
                    return cookie.substring(cookieName.length, cookie.length);
                }
            }
            return "";
        }

        // Function to hide the cookie consent banner
        function hideCookieBanner() {
            const banner = document.getElementById("cookieConsentBanner");
            if (banner) {
                banner.style.display = "none"; // Hide the banner element
            }
        }

        // Call the function to check cookie consent on page load
        checkCookieConsent();
