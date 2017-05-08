//startup.js file
var appConfig = {
    appId: "GeoLocation",
    appName: "GeoLocation",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    isMFApp: false,
    eventTypes: [],
    url: "https://mcfdemo1.konycloud.com/GeoLocation/MWServlet",
    secureurl: "https://mcfdemo1.konycloud.com/GeoLocation/MWServlet",
    middlewareContext: "GeoLocation"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    initializefrmHeadspa();
    setAppHeadersAndFooters();
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
    requirejs.config({
        baseUrl: "desktopweb/appjs"
    });
    var requireModulesList = getSPARequireModulesList();
    require(requireModulesList, function() {
        kony.application.setApplicationInitializationEvents({
            init: appInit,
            showstartupform: function() {
                frmHome.show();
            }
        });
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default", "KonyTheme"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        eventTypes: []
    }
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("KonyTheme", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								