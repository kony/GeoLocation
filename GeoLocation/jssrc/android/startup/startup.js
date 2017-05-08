//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "GeoLocation",
    appName: "GeoLocation",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    isDebug: true,
    middlewareContext: "GeoLocation",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://mobilefabric-demo.konycloud.com/GeoLocation/MWServlet",
    secureurl: "https://mobilefabric-demo.konycloud.com/GeoLocation/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    initializevbox21250062368();
    setAppHeadersAndFooters();
    frmGeoCurrentNWatchGlobals();
    frmHomeGlobals();
    frmOptionsGlobals();
    watchStoppedGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: true
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;