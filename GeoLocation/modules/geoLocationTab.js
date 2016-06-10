/*****************************************************************
*	Name    : geoSuccessCallBackTab
*	Author  : Kony
*	Purpose : The below function is the success call back of 'kony.location.getCurrentPosition' API,Used to display current location details .
******************************************************************/
function geoSuccessCallBackTab(position)
{		
	/*var lat = position.coords.latitude.toFixed(10).replace(/0{0,2}$/, "");
	var lng = position.coords.longitude.toFixed(10).replace(/0{0,2}$/, "");*/
	var lat =position.coords.latitude;
	var lang=position.coords.longitude;
	var alt=position.coords.altitude;
	var acry=position.coords.accuracy;
	var hedin= position.coords.heading;
	var speed;
	if(lat==null)
		frmOptions.lblLatValue.text ="= unavailable.";
	else
		frmOptions.lblLatValue.text ="= "+lat;
	if(lang==null)
		frmOptions.lblLongValue.text ="= unavailable.";
	else
		frmOptions.lblLongValue.text ="= " + lang;
	if(alt==null)
		frmOptions.lblAltValue.text ="= unavailable.";
	else
		frmOptions.lblAltValue.text ="= " +alt;
	if(acry==null)
		frmOptions.lblAccValue.text= "= unavailable.";
	else
		frmOptions.lblAccValue.text= "= " + acry;
	if(hedin==null)
		frmOptions.lblHeadValue.text ="= unavailable.";
	else
		frmOptions.lblHeadValue.text ="= "+hedin;
	if(kony.os.deviceInfo().name == "iPad")
	{
		speed= position.coords.speed;
		if(speed==null )
			frmOptions.lblSpeedValue.text = "= unavailable.";
		else
			frmOptions.lblSpeedValue.text = "= "+speed;
	}
	else
	{
		speed=position.coords.speeding;
		if(speed==null)
			frmOptions.lblSpeedValue.text = "= unavailable.";
		else
			frmOptions.lblSpeedValue.text = "= "+speed;
	}
	if (watchFlag == false)
	{
		frmOptions.title = "Current Position";
		frmOptions.lblDesc.setVisibility(true);
		frmOptions.lblDesc.text = "getcurrentPosition Api gives the current location of the device.";
	}
	else 
	{
		frmOptions.title = "Watch Position";
		frmOptions.lblDesc.setVisibility(true);
		frmOptions.lblDesc.text = "The watch operation continues to monitor the position of the device and invokes the appropriate callback every time this position changes. The watch operation continues until the clearWatch method is called with the corresponding identifier.";
		frmOptions.btnClearWatch.setVisibility(true);
	}
	frmOptions.lblTimeValue.text="= " + position.timestamp;
	kony.application.dismissLoadingScreen();
}
/*****************************************************************
*	Name    : geoErrorCallBackTab
*	Author  : Kony
*	Purpose : The below function is the error call back of 'kony.location.getCurrentPosition' API,Used to display error details .
******************************************************************/
function geoErrorCallBackTab(positionerror)
{
	alert("Error occured while retrieving the data:"+positionerror.code+":"+positionerror.message);
	kony.application.dismissLoadingScreen();
}
/*****************************************************************
*	Name    : geoPositionTab
*	Author  : Kony
*	Purpose : The below function is to invoke 'kony.location.getCurrentPosition' API
******************************************************************/
function geoPositionTab()
{
	var positionoptions=new Object();
	positionoptions.enablehighaccuracy=true;
	positionoptions.timeout=10000;
	positionoptions.maximumage=1000;
	if(kony.os.deviceInfo().name == "thinclient" || kony.os.deviceInfo().name== "Windows 8")
	hboxHeadspa.lblHeadspa.text = "Current Position";
	watchFlag = false;
	frmOptions.btnClearWatch.setVisibility(false);
	frmOptions.lblGeoAdress.setVisibility(false);
	frmOptions.hbxWatchID.setVisibility(true);
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false,null);
 	try
 	{
 		var positionoptions = kony.location.getCurrentPosition(geoSuccessCallBackTab, geoErrorCallBackTab,positionoptions);
	}catch(exception)
	{
		alert(exception.message+" "+exception);
	}
}
function geoPositionDesktopWeb()
{
 	try
 	{
 		frmOptions.show();
		frmOptions.hbxWatchID.setVisibility(true);
		kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false,null);
		var positionoptions = kony.location.getCurrentPosition(geoSuccessCallBackTab, geoErrorCallBackTab);
	}
	catch(exception)
	{
		//alert("Exception is ::"+exception);
		alert(exception.message+" "+exception);
	}
}
/*****************************************************************
*	Name    : watchPositionTab
*	Author  : Kony
*	Purpose : The below function is to invoke ' kony.location.watchPosition' API
******************************************************************/
function watchPositionTab()
{   
	if(kony.os.deviceInfo().name == "thinclient" || kony.os.deviceInfo().name=="Windows 8")
			hboxHeadspa.lblHeadspa.text = "Watch Position";   
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false,null);
	var positionoptions=new Object();
		positionoptions.enablehighaccuracy=true;
		positionoptions.timeout=3000;
		positionoptions.maximumage=1000;
		frmOptions.hbxWatchID.setVisibility(true);
		frmOptions.lblGeoAdress.setVisibility(false);
	watchFlag = true;
	try{
		
		watchID = kony.location.watchPosition(geoSuccessCallBackTab,geoErrorCallBackTab, positionoptions);
		
		}catch(excep)
		{
			alert(excep.message);
		}
}
/*****************************************************************
*	Name    : handleAlertTab
*	Author  : Kony
*	Purpose : The below function is to
******************************************************************/
function handleAlertTab(response)
{
	//frmOptions.show();
}
/*****************************************************************
*	Name    : clearWatchTab
*	Author  : Kony
*	Purpose : The below function is to invoke ' kony.location.clearWatch 
* ' API
******************************************************************/
function clearWatchTab()
{
	frmOptions.hbxWatchID.setVisibility(false);
	kony.location.clearWatch(watchID);
	watchFlag = false;
	frmOptions.lblGeoAdress.setVisibility(true);
	
	frmOptions.btnClearWatch.setVisibility(false)
	frmOptions.lblDesc.setVisibility(false);
	
	frmOptions.lblGeoAdress.text = "Watch has stopped.";
	
	frmOptions.title = "Clear Watch";
	if(kony.os.deviceInfo().name == "thinclient" || kony.os.deviceInfo().name == "Windows 8")
			hboxHeadspa.lblHeadspa.text = "Clear Watch";
	//Defining basicConf parameter for alert
	var basicConf = {message: "Watch has stopped.",alertType: constants.
	ALERT_TYPE_INFO,alertTitle: "clearWatch",yesLabel:"OK",
	noLabel: "no", alertHandler: handleAlertTab};
	//Defining pspConf parameter for alert
	var pspConf = {};
	//Alert definition
	var infoAlert = kony.ui.Alert(basicConf,pspConf);
}
/*****************************************************************
*	Name    : showFrmOption
*	Author  : Kony
*	Purpose : The below function is to navigate to frmOptions
******************************************************************/
function showFrmOptionsTab(){
	//frmOptions.show();
}
/*****************************************************************
*	Name    : checkFormTab
*	Author  : Kony
*	Purpose : The below function is to check which api the form is showing
******************************************************************/
function checkFormTab(){
	if( watchFlag == true){
		frmOptions.btnClearWatch.isVisible = true;
		frmOptions.btnClearWatch.setVisibility(true);
	}
	else{
		frmOptions.btnClearWatch.isVisible = false;
	}
}
/*****************************************************************
*	Name    : onClickOfSegApiTab
*	Author  : Kony
*	Purpose : The below function is to invoke the respective function of the api called
******************************************************************/
function onClickOfSegApiTab(eventobj){
	apiKey = eventobj.selectedIndex[1];
	if(apiKey==0)
		geoPositionTab();
	else if(apiKey==1)
		watchPositionTab();
}
/*****************************************************************
*	Name    : onHideFrmGeoTab
*	Author  : Kony
*	Purpose : The below function is to clear watch once the the watchPositiopn form is hidden
******************************************************************/
function onHideFrmGeoTab(){
	if( watchFlag == true)
		clearWatchTab();
}
/*****************************************************************
*	Name    : addHeaderSPATab
*	Author  : Kony
*   Date	: 26/04/2013
*	Purpose : To add a Header Template for SPA and Windows Phone
******************************************************************/
function addHeaderSPATab(headerName)
{
	if(kony.os.deviceInfo().name == "thinclient" || kony.os.deviceInfo().name == "WindowsPhone")
		hboxHeadspa.lblHeadspa.text = headerName;
}
function segClickEvent(seguiWidget, sectionIndex, rowIndex)
{
		//alert(frmOptions.segNavigation.selectedItems[0]["lblNavigation"]+ "******"+seguiWidget+ "*****");
		if(frmOptions.segNavigation.selectedItems[0]["lblGetCurrentPosition"]=="getCurrentLocation")
			geoPositionTab();
		else
			watchPositionTab();
}