define({ 

  //Type your controller code here 
  watchID:null,
  onNavigate:function(param){
    if(param==="GEO_POSITION"){
      this.view.lblHeader.text="CURRENT POSITION";
      this.view.btnClearWatch.setVisibility(false);
      this.getPosition();
    }else if(param==="WATCH_POSITION"){
      this.view.lblHeader.text="WATCH POSITION";
      this.view.btnClearWatch.setVisibility(true);
      this.watchPosition();
    }
  },
  geoSuccessCallback:function(result){
    try{
    var lat =result.coords.latitude;
    var lang=result.coords.longitude;
    var alt=result.coords.altitude;
    var acry=result.coords.accuracy;
    var hedin= result.coords.heading;
    var speed;
    if(lat!==null)
      this.view.lblLatValue.text=": "+lat;
    else
      this.view.lblLatValue.text=": unavailable";

    if(lang!==null)
      this.view.lblLonValue.text=": "+lang;
    else
      this.view.lblLonValue.text=": unavailable";
    if(alt!==null)
      this.view.lblAltValue.text=": "+alt;
    else
      this.view.lblAltValue.text=": unavailable";
    if(alt!==null)
      this.view.lblAccValue.text=": "+acry;
    else
      this.view.lblAccValue.text=": unavailable";
    if(hedin!==null)
      this.view.lblHeadValue.text=": "+hedin;
    else
      this.view.lblHeadValue.text=": unavailable";
    if(result.timestamp!==null)
      this.view.lblTimeValue.text=": "+result.timestamp;
    else
      this.view.lblTimeValue.text=": unavailable";
    /*if (kony.os.deviceInfo().name == "iPhone"|| kony.os.deviceInfo().name == "thinclient")
    {
      speed=result.coords.speed;
      if(speed!==null&&speed!==undefined)
        this.view.lblSpeedValue.text=": "+speed;
      else
        this.view.lblSpeedValue.text=": unavailable";
    }
    else
    {*/
      speed=result.coords.speeding;
      if(speed!==null&&speed!==undefined)
        this.view.lblSpeedValue.text=": "+speed;
      else
        this.view.lblSpeedValue.text=": unavailable";
  //  }
    }catch(excp){
     // alert(excp.message);
    }
    kony.application.dismissLoadingScreen();

    //alert(JSON.stringify(result));
  },
  geoFailureCallback:function(result){
    kony.application.dismissLoadingScreen();
    //alert(JSON.stringify(result));
  },
  getPosition:function(){
    var self=this;
    kony.application.showLoadingScreen("sknFrmLoading","please wait...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false,true,null);
    geoPosition(self.geoSuccessCallback.bind(this),self.geoFailureCallback.bind(this));
  },
  watchPosition:function(){
    var self=this;
    kony.application.showLoadingScreen("sknFrmLoading","please wait...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, false,true,null);
    this.watchID=watchPosition(self.geoSuccessCallback.bind(this),self.geoFailureCallback.bind(this));
  },
  clearWatch:function(){
    if(this.watchID===null)return;
    try{
      kony.location.clearWatch(this.watchID);
      var basicConf = {message: "Watch has been stopped.",alertType: constants.
                       ALERT_TYPE_INFO,alertTitle: "clearWatch",yesLabel:"OK",
                       noLabel: "no"};
      var pspConf = {};
      var infoAlert = kony.ui.Alert(basicConf,pspConf);
    }catch(excp){
      kony.print(excp.message);
     // alert(excp.message);
    }
  },
  navigateBack:function(){
    try{
      kony.location.clearWatch(this.watchID);
    }catch(excp){
      kony.print(excp.message);
    }
    var ntf = new kony.mvc.Navigation("frmOptions");
    ntf.navigate();
    //this.clearWatch();
  }

});