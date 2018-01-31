//Type your code here
/*****************************************************************
*	Name    : geoPosition
*	Author  : Kony
*	Purpose : The below function is to invoke 'kony.location.getCurrentPosition' API
******************************************************************/
function successCallback(position){
  //do something
}

/*****************************************************************
*	Name    : geoPosition
*	Author  : Kony
*	Purpose : The below function is to invoke 'kony.location.getCurrentPosition' API
******************************************************************/
function geoPosition(successCallback,failureCallback)
{
  //var positionoptions1={};
  var positionoptions={};
  positionoptions.enableHighAccuracy=true;
  positionoptions.timeout=10000;
  positionoptions.maximumAge=1000;
  //watchFlag = false;
  try
  {
    kony.location.getCurrentPosition(successCallback, failureCallback,positionoptions);
  }
  catch(exception)
  {
    alert("Exception is ::"+exception.message);
  }
}
/*****************************************************************
*	Name    : watchPosition
*	Author  : Kony
*	Purpose : The below function is to invoke ' kony.location.watchPosition ' API
******************************************************************/
function watchPosition(successCallback,failureCallback)
{      
  //var positionoptions1 = {};//maximumage: 3000};
  var positionoptions={};
  positionoptions.enableHighAccuracy=true;
  positionoptions.timeout=20000;
  positionoptions.maximumAge=1000;
  positionoptions.minimumTime=2000;
  positionoptions.minimumDistance=2;
  //watchFlag = true;
  var watchID=null;
  try
  {
    watchID = kony.location.watchPosition (successCallback,failureCallback, positionoptions);
  }catch(err)
  {
    //alert(err.message);
  }
  return watchID;
}