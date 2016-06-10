/*****************************************************************
*	Name    : geoSuccessCallBack
*	Author  : Kony
*	Purpose : The below function is the success call back of 'kony.location.getCurrentPosition' API,Used to display current location details .
******************************************************************/
function geoSuccessCallBack(position)
{
	var lat =position.coords.latitude;
	var lang=position.coords.longitude;
	var alt=position.coords.altitude;
	var acry=position.coords.accuracy;
	var hedin= position.coords.heading;
	var speed;
	if(lat!=null)
		frmGeoCurrentNWatch.lblLatValue.text ="= "+lat;
	else
		frmGeoCurrentNWatch.lblLatValue.text ="=unavailable.";
	if(lang!=null)
		frmGeoCurrentNWatch.lblLongValue.text ="= " + lang;
	else
		frmGeoCurrentNWatch.lblLongValue.text ="=unavailable.";
	if(alt==null || isNaN(alt))
		frmGeoCurrentNWatch.lblAltValue.text ="=unavailable.";
	else
		frmGeoCurrentNWatch.lblAltValue.text ="= " +alt; 
	if(acry==null || isNaN(acry))
		frmGeoCurrentNWatch.lblAccValue.text= "=unavailable.";
	else
		frmGeoCurrentNWatch.lblAccValue.text= "= " +acry; 
	if(hedin==null || isNaN(hedin))
		frmGeoCurrentNWatch.lblHeadValue.text ="=unavailable.";
	else
		frmGeoCurrentNWatch.lblHeadValue.text ="= "+hedin;
		
	if (kony.os.deviceInfo().name == "iPhone"|| kony.os.deviceInfo().name == "thinclient")
	{
		speed=position.coords.speed;
		if(speed!=null)
			frmGeoCurrentNWatch.lblSpeedValue.text = "= " +speed;
		else
			frmGeoCurrentNWatch.lblSpeedValue.text = "=unavailable."	
	}
	else
	{
		speed=position.coords.speeding;
		if(speed!=null)
			frmGeoCurrentNWatch.lblSpeedValue.text = "= " +speed;
		else
			frmGeoCurrentNWatch.lblSpeedValue.text = "=unavailable."
	}
	if (watchFlag == false)
	{
		frmGeoCurrentNWatch.title = "Current Position";
		frmGeoCurrentNWatch.lblDesc.text = "GetcurrentPosition Api gives the current location of the device.";
		frmGeoCurrentNWatch.lblDesc.setVisibility(true);
		if(kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "thinclient")
		{
			frmGeoCurrentNWatch.labelFormOptions.text = "Current Position";
		}
		
	}
	else 
	{
		frmGeoCurrentNWatch.title = "Watch Position";
		frmGeoCurrentNWatch.lblDesc.setVisibility(true);
		frmGeoCurrentNWatch.lblDesc.text = "The watch operation continues to monitor the position of the device and invokes the appropriate callback every time this position changes. The watch operation continues until the clearwatch method is called with the corresponding identifier.";
		if(kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "thinclient")
		{
			frmGeoCurrentNWatch.labelFormOptions.text = "Watch Position";
		}
		frmGeoCurrentNWatch.btnClearWatch.setVisibility(true);
	}
	frmGeoCurrentNWatch.lblTimeValue.text="= " + position.timestamp;
	frmGeoCurrentNWatch.show();
	kony.application.dismissLoadingScreen();
}
/*****************************************************************
*	Name    : geoErrorCallBack
*	Author  : Kony
*	Purpose : The below function is the error call back of 'kony.location.getCurrentPosition' & 'kony.location.watchPosition ' API,Used to display error details .
******************************************************************/
function geoErrorCallBack(positionerror)
{
	alert("Error occured while retrieving the data:-\n" +"Error code:"+positionerror.code+" : "+ positionerror.message);
	kony.application.dismissLoadingScreen();
}
/*****************************************************************
*	Name    : geoPosition
*	Author  : Kony
*	Purpose : The below function is to invoke 'kony.location.getCurrentPosition' API
******************************************************************/
function geoPosition()
{
	//var positionoptions1={};
	var positionoptions=new Object();
	positionoptions.enablehighaccuracy=true;
	positionoptions.timeout=10000;
	positionoptions.maximumage=1000;
	watchFlag = false;
	frmGeoCurrentNWatch.btnClearWatch.setVisibility(false);
	frmGeoCurrentNWatch.lblGeoAdress.setVisibility(false);
	frmGeoCurrentNWatch.hbxWatchID.setVisibility(true);
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false,null);
	try
 	{
	 	kony.location.getCurrentPosition(geoSuccessCallBack, geoErrorCallBack,positionoptions);
	}
	catch(exception)
	{
		alert("Exception is ::"+exception.message);
	}
}
/*****************************************************************
*	Name    : errorCallBack1
*	Author  : Kony
*	Purpose : The below function is the error call back of 'kony.location.watchPosition ' API,Used to display error details .
******************************************************************/
/*function errorCallBack1(positionerror)
{
 	alert("Error occured while retrieving the data:-\n"+"Error Code:"+positionerror.code+" : "+ positionerror.message);
}*/
/*****************************************************************
*	Name    : watchPosition
*	Author  : Kony
*	Purpose : The below function is to invoke ' kony.location.watchPosition ' API
******************************************************************/
function watchPosition()
{      
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false,null);
	//var positionoptions1 = {};//maximumage: 3000};
	var positionoptions=new Object();
	positionoptions.enablehighaccuracy=true;
	positionoptions.timeout=10000;
	positionoptions.maximumage=1000;
	watchFlag = true;
	frmGeoCurrentNWatch.hbxWatchID.setVisibility(true);
	frmGeoCurrentNWatch.lblGeoAdress.setVisibility(false);
	try
	{
		watchID = kony.location.watchPosition (geoSuccessCallBack,geoErrorCallBack, positionoptions);
	}catch(err)
	{
		alert(err.message);
	}
}
/*****************************************************************
*	Name    : handleAlert
*	Author  : Kony
*	Purpose : The below function is to
******************************************************************/
function handleAlert(response)
{
	frmOptions.show();
}
/*****************************************************************
*	Name    : clearWatch
*	Author  : Kony
*	Purpose : The below function is to invoke ' kony.location.clearWatch ' API
******************************************************************/
function clearWatch()
{
	frmGeoCurrentNWatch.hbxWatchID.setVisibility(false);
	kony.location.clearWatch(watchID);
	watchFlag = false;
	frmGeoCurrentNWatch.lblGeoAdress.setVisibility(true);
	frmGeoCurrentNWatch.btnClearWatch.setVisibility(false);
	frmGeoCurrentNWatch.lblDesc.setVisibility(false);
	frmGeoCurrentNWatch.lblGeoAdress.text = "Watch has stopped.";
	frmGeoCurrentNWatch.title = "Clear Watch";
	if(kony.os.deviceInfo().name == "WindowsPhone" || kony.os.deviceInfo().name == "thinclient")
	{
		frmGeoCurrentNWatch.labelFormOptions.text = "Clear Watch";
		
	}
	//Defining basicConf parameter for alert
	var basicConf = {message: "Watch has stopped.",alertType: constants.
	ALERT_TYPE_INFO,alertTitle: "clearWatch",yesLabel:"OK",
	noLabel: "no", alertHandler: handleAlert};
	//Defining pspConf parameter for alert
	var pspConf = {};
	//Alert definition
	var infoAlert = kony.ui.Alert(basicConf,pspConf);
}
/*****************************************************************
*	Name    : checkForm
*	Author  : Kony
*	Purpose : The below function is to check which api the form is showing
******************************************************************/
function checkForm(){
	if( watchFlag == true){
		frmGeoCurrentNWatch.btnClearWatch.isVisible = true;
		frmGeoCurrentNWatch.btnClearWatch.setVisibility(true);
	}
	else{
		frmGeoCurrentNWatch.btnClearWatch.isVisible = false;
	}
}

/*****************************************************************
*	Name    : onClickOfSegApi
*	Author  : Kony
*	Purpose : The below function is to invoke the respective function of the api called
******************************************************************/
function onClickOfSegApi(eventobj){
	apiKey = eventobj.selectedIndex[1];
	if(apiKey==0)
		geoPosition();
	else if(apiKey==1)
		watchPosition();
}
/*****************************************************************
*	Name    : onHideFrmGeo
*	Author  : Kony
*	Purpose : The below function is to clear watch once the the watchPositiopn form is hidden
******************************************************************/
function onHideFrmGeo(){
	if( watchFlag == true)
		clearWatch();
		kony.application.dismissLoadingScreen();
}
/*****************************************************************
*	Name    : addHeaderSPA
*	Author  : Kony
*   Date	: 26/04/2013
*	Purpose : To add a Header Template for SPA and Windows Phone
******************************************************************/
function addHeaderSPA(headerName)
{
	if(kony.os.deviceInfo().name == "thinclient" || kony.os.deviceInfo().name == "WindowsPhone")
		hboxHeadspa.lblHeadspa.text = headerName;
}