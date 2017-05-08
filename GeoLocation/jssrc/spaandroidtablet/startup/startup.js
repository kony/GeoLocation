//startup.js file
var appConfig = {
    appId: "GeoLocation",
    appName: "GeoLocation",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    isturlbase: "https://mcfdemo1.konycloud.com/services",
    isMFApp: true,
    appKey: "f90512ff546283ca1dafe7dd939077f3",
    appSecret: "a1af1b9d57d0bd028f3528ebc6ec550d",
    serviceUrl: "https://100000117.auth.konycloud.com/appconfig",
    svcDoc: {
        "appId": "aed6e798-13b5-4c1e-ab5e-fc54a3d3dd19",
        "baseId": "433bacad-f27e-4fac-8e8d-b9f36882fd72",
        "name": "GeoLocation",
        "selflink": "https://100000117.auth.konycloud.com/appconfig",
        "reportingsvc": {
            "custom": "https://mcfdemo1.konycloud.com/services/CMS",
            "session": "https://mcfdemo1.konycloud.com/services/IST"
        },
        "services_meta": {}
    },
    eventTypes: [],
    url: "https://mcfdemo1.konycloud.com/GeoLocation/MWServlet",
    secureurl: "https://mcfdemo1.konycloud.com/GeoLocation/MWServlet",
    middlewareContext: "GeoLocation"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    initializevbox21250062370();
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
        baseUrl: "spaandroidtablet/appjs"
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
    callAppMenu();
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "serviceUrl": appConfig.serviceUrl,
        eventTypes: []
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
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
								