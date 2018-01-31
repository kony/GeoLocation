define({ 

  //Type your controller code here 
  navObj:null,
  onNavigate:function(){
    this.navObj=new kony.mvc.Navigation("frmGeoData");
  },
  /***************************************************************
	*	Name    : onSegRowClick
	*	Author  : Kony
	*	Purpose : The below function is to invoke the respective function of the api called
	******************************************************************/
  onSegRowClick:function (eventobj){
    var selectedIndex=this.view.segApi.selectedRowIndex[1];
    if(selectedIndex===0){
      this.navObj.navigate("GEO_POSITION");
    }
    else if(selectedIndex===1)
      this.navObj.navigate("WATCH_POSITION");
  }
});