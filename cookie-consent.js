// Function to set a cookie with expiration in days
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get the value of a cookie by name
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

// Function to delete a cookie by setting its expiration to a past date
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Function to handle cookie consent when 'Accept' button is clicked
function acceptCookies() {
    setCookie("userConsent", "accepted", 365); // Set 'userConsent' cookie for 365 days
    hideCookieBanner(); // Hide the cookie consent banner
    loadScripts(); // Load necessary scripts after consent
}

// Function to handle cookie consent when 'Decline' button is clicked
function declineCookies() {
    setCookie("userConsent", "declined", 365); // Set 'userConsent' cookie for 365 days (optional)
    hideCookieBanner(); // Hide the cookie consent banner
}

// Function to check if the user has already consented to cookies
function hasCookieConsent() {
    return getCookie("userConsent") === "accepted";
}

// Function to hide the cookie consent banner
function hideCookieBanner() {
    const cookieConsentBanner = document.getElementById("cookieConsent");
    if (cookieConsentBanner) {
        cookieConsentBanner.style.display = "none";
    }
}

// Function to load SimpleAnalytics script (example function, adjust as needed)
function loadSimpleAnalytics() {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://scripts.simpleanalyticscdn.com/latest.js';
    document.head.appendChild(script);
}

// Function to load other necessary scripts (example function, adjust as needed)
function loadOtherScripts() {
    // Example: Load scripts that are essential for your website functionality
    const script1 = document.createElement('script');
    script1.src = 'scripts.js'; // Example script, adjust as needed
    document.head.appendChild(script1);

    // Add more scripts as needed
}

// Function to initialize cookie consent check on page load
function initializeCookieConsent() {
    if (!hasCookieConsent()) {
        const cookieConsentBanner = document.getElementById("cookieConsent");
        if (cookieConsentBanner) {
            cookieConsentBanner.style.display = "block";
        }
    } else {
        loadScripts(); // Load necessary scripts if consent already given
    }
}

// Function to load scripts based on cookie consent
function loadScripts() {
    if (hasCookieConsent()) {
        loadSimpleAnalytics(); // Load SimpleAnalytics script
        loadOtherScripts(); // Load other necessary scripts
    }
}

// Event listener when DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    initializeCookieConsent(); // Check and handle cookie consent on page load
});

// Event listener for 'Accept' button click
const acceptButton = document.getElementById('acceptCookies');
if (acceptButton) {
    acceptButton.addEventListener('click', acceptCookies);
}

// Event listener for 'Decline' button click
const declineButton = document.getElementById('declineCookies');
if (declineButton) {
    declineButton.addEventListener('click', declineCookies);
});
