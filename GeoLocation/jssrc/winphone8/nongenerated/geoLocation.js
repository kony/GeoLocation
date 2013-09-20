	/*****************************************************************
	 *	Name    : geoSuccessCallBack
	 *	Author  : Kony
	 *	Purpose : The below function is the success call back of 'kony.location.getCurrentPosition' API,Used to display current location details .
	 ******************************************************************/
	function geoSuccessCallBack(position) {
	    try {
	        var lat = position.coords.latitude.toFixed(10).replace(/0{0,2}$/, "");
	        var lng = position.coords.longitude.toFixed(10).replace(/0{0,2}$/, "");
	        frmGeoCurrentNWatch.lblLatValue.text = "= " + lat;
	        frmGeoCurrentNWatch.lblLongValue.text = "= " + lng;
	        frmGeoCurrentNWatch.lblAltValue.text = "= " + position.coords.altitude;
	        frmGeoCurrentNWatch.lblAccValue.text = "= " + position.coords.accuracy;
	        frmGeoCurrentNWatch.lblHeadValue.text = "= " + position.coords.heading;
	        //frmGeoCurrentNWatch.hbxWatchID.vboxMain.hboxlat.lblLatValue.text="= "+lat;
	        /*frmGeoCurrentNWatch.hbxWatchID.vboxMain.hboxlong.lblLongValue.text ="= " + lng;
		frmGeoCurrentNWatch.hbxWatchID.vboxMain.hboxaltitude.lblAltValue.text ="= " + position.coords.altitude;
		frmGeoCurrentNWatch.hbxWatchID.vboxMain.hboxaccuracy.lblAccValue.text= "= " + position.coords.accuracy;
		frmGeoCurrentNWatch.hbxWatchID.vboxMain.hboxheading.lblHeadValue.text ="= "+ position.coords.heading;*/
	        if (watchFlag == false) {
	            frmGeoCurrentNWatch.title = "Current Position";
	            frmGeoCurrentNWatch.lblDesc.text = "GetcurrentPosition Api gives the current location of the device.";
	            frmGeoCurrentNWatch.lblDesc.setVisibility(true);
	            if (kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "thinclient") {
	                /*alert("hello");*/
	                frmGeoCurrentNWatch.labelFormOptions.text = "Current Position";
	            }
	            if (kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPad") {
	                frmGeoCurrentNWatch.lblSpeedValue.text = "= " + position.coords.speed;
	            } else {
	                frmGeoCurrentNWatch.lblSpeedValue.text = "= " + position.coords.speeding;
	            }
	        } else {
	            frmGeoCurrentNWatch.lblSpeedValue.text = "= 0";
	            frmGeoCurrentNWatch.title = "Watch Position";
	            frmGeoCurrentNWatch.lblDesc.setVisibility(true);
	            frmGeoCurrentNWatch.lblDesc.text = "The watch operation continues to monitor the position of the device and invokes the appropriate callback every time this position changes. The watch operation continues until the clearwatch method is called with the corresponding identifier.";
	            if (kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "thinclient") {
	                frmGeoCurrentNWatch.labelFormOptions.text = "Watch Position";
	            }
	        }
	        frmGeoCurrentNWatch.lblTimeValue.text = "= " + position.timestamp;
	    } catch (err) {
	        alert(err.message);
	    }
	    frmGeoCurrentNWatch.show();
	    kony.application.dismissLoadingScreen();
	}
	/*****************************************************************
	 *	Name    : geoErrorCallBack
	 *	Author  : Kony
	 *	Purpose : The below function is the error call back of 'kony.location.getCurrentPosition' API,Used to display error details .
	 ******************************************************************/
	function geoErrorCallBack(positionerror) {
	    alert("Error occured while retrieving the data " + positionerror)
	    kony.application.dismissLoadingScreen();
	}
	/*****************************************************************
	 *	Name    : geoPosition
	 *	Author  : Kony
	 *	Purpose : The below function is to invoke 'kony.location.getCurrentPosition' API
	 ******************************************************************/
	function geoPosition() {
	    try {
	        watchFlag = false;
	        frmGeoCurrentNWatch.btnClearWatch.setVisibility(false);
	        frmGeoCurrentNWatch.lblGeoAdress.setVisibility(false);
	        frmGeoCurrentNWatch.hbxWatchID.setVisibility(true);
	        kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
	        var positionoptions = kony.location.getCurrentPosition(geoSuccessCallBack, geoErrorCallBack);
	    } catch (exception) {
	        alert("Exception is ::" + exception);
	    }
	    frmGeoCurrentNWatch.show();
	}
	/*****************************************************************
	 *	Name    : errorCallBack1
	 *	Author  : Kony
	 *	Purpose : The below function is the error call back of 'kony.location.watchPosition ' API,Used to display error details .
	 ******************************************************************/
	function errorCallBack1(errorMessage) {
	    if (kony.string.containsOnlyGivenChars(kony.os.deviceInfo().deviceid, ["0"]) != true) {
	        watchFlag = false;
	        alert("name:" + kony.os.deviceInfo().name + ":" + kony.os.deviceInfo().model + ":" + kony.os.deviceInfo().version + ":" + kony.os.deviceInfo().useragent + ":" + kony.os.deviceInfo().deviceid);
	        frmGeoCurrentNWatch.btnClearWatch.isVisible = false;
	        alert("Error is :: " + errorMessage)
	    }
	}
	/*****************************************************************
	 *	Name    : watchPosition
	 *	Author  : Kony
	 *	Purpose : The below function is to invoke ' kony.location.watchPosition ' API
	 ******************************************************************/
	function watchPosition() {
	    kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false, null);
	    frmGeoCurrentNWatch.show();
	    var positionoptions = {}; //maximumage: 3000};
	    watchFlag = true;
	    frmGeoCurrentNWatch.hbxWatchID.setVisibility(true);
	    frmGeoCurrentNWatch.lblGeoAdress.setVisibility(false);
	    frmGeoCurrentNWatch.btnClearWatch.setVisibility(true);
	    try {
	        watchID = kony.location.watchPosition(geoSuccessCallBack, errorCallBack1, positionoptions);
	    } catch (err) {
	        alert(err.message);
	    }
	}
	/*****************************************************************
	 *	Name    : handleAlert
	 *	Author  : Kony
	 *	Purpose : The below function is to
	 ******************************************************************/
	function handleAlert(response) {
	    frmOptions.show();
	}
	/*****************************************************************
	 *	Name    : clearWatch
	 *	Author  : Kony
	 *	Purpose : The below function is to invoke ' kony.location.clearWatch ' API
	 ******************************************************************/
	function clearWatch() {
	    frmGeoCurrentNWatch.hbxWatchID.setVisibility(false);
	    kony.location.clearWatch(watchID);
	    watchFlag = false;
	    frmGeoCurrentNWatch.lblGeoAdress.setVisibility(true);
	    frmGeoCurrentNWatch.btnClearWatch.setVisibility(false);
	    frmGeoCurrentNWatch.lblDesc.setVisibility(false);
	    frmGeoCurrentNWatch.lblGeoAdress.text = "Watch has stopped.";
	    frmGeoCurrentNWatch.title = "Clear Watch";
	    if (kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "thinclient") {
	        frmGeoCurrentNWatch.labelFormOptions.text = "Clear Watch";
	    }
	    //Defining basicConf parameter for alert
	    var basicConf = {
	        message: "Watch has stopped.",
	        alertType: constants.
	        ALERT_TYPE_INFO,
	        alertTitle: "clearWatch",
	        yesLabel: "OK",
	        noLabel: "no",
	        alertHandler: handleAlert
	    };
	    //Defining pspConf parameter for alert
	    var pspConf = {};
	    //Alert definition
	    var infoAlert = kony.ui.Alert(basicConf, pspConf);
	}
	/*****************************************************************
	 *	Name    : checkForm
	 *	Author  : Kony
	 *	Purpose : The below function is to check which api the form is showing
	 ******************************************************************/
	function checkForm() {
	    if (watchFlag == true) {
	        frmGeoCurrentNWatch.btnClearWatch.isVisible = true;
	        frmGeoCurrentNWatch.btnClearWatch.setVisibility(true);
	    } else {
	        frmGeoCurrentNWatch.btnClearWatch.isVisible = false;
	    }
	}
	/*****************************************************************
	 *	Name    : onClickOfSegApi
	 *	Author  : Kony
	 *	Purpose : The below function is to invoke the respective function of the api called
	 ******************************************************************/
	function onClickOfSegApi(eventobj) {
	    apiKey = eventobj.selectedIndex[1];
	    if (apiKey == 0) geoPosition();
	    else if (apiKey == 1) watchPosition();
	}
	/*****************************************************************
	 *	Name    : onHideFrmGeo
	 *	Author  : Kony
	 *	Purpose : The below function is to clear watch once the the watchPositiopn form is hidden
	 ******************************************************************/
	function onHideFrmGeo() {
	    if (watchFlag == true) {
	        /*
		frmGeoCurrentNWatch.btnClearWatch.isVisible = true;
		frmGeoCurrentNWatch.btnClearWatch.setVisibility(true);
		*/
	        clearWatch();
	    } else {
	        /*
		frmGeoCurrentNWatch.btnClearWatch.isVisible = false;
		*/
	        //do nothing if it is for getCurrentPosition
	    }
	}
	/*****************************************************************
	 *	Name    : addHeaderSPA
	 *	Author  : Kony
	 *   Date	: 26/04/2013
	 *	Purpose : To add a Header Template for SPA and Windows Phone
	 ******************************************************************/
	function addHeaderSPA(headerName) {
	    if (kony.os.deviceInfo().name == "thinclient" || kony.os.deviceInfo().name == "WindowsPhone") hboxHeadspa.lblHeadspa.text = headerName;
	}