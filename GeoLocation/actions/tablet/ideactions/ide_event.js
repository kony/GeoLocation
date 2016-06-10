
function p2kwiet433743360472_frmHome_preshow_seq0(eventobject,    neworientation){

addHeaderSPATab.call(this,"Home");

};


function p2kwiet433743360472_btnContinue_onClick_seq0(eventobject){

frmOptions.show();
	
};


function p2kwiet433743360508_frmOptions_preshow_seq0(eventobject,    neworientation){

addHeaderSPATab.call(this,"Position API's");
checkFormTab.call(this);

};


function p2kwiet433743360508_frmOptions_onhide_seq0(eventobject,    neworientation){

onHideFrmGeoTab.call(this);

};


function p2kwiet433743360508_segNavigation_onRowClick_seq0(eventobject,    sectionNumber,    rowNumber){

onClickOfSegApiTab.call(this,eventobject);

};


function p2kwiet433743360508_btnClearWatch_onClick_seq0(eventobject){

clearWatchTab.call(this);

};


function p2kwiet433743360554_watchStopped_onhide_seq0(eventobject,    neworientation){

frmOptions.show();
	
};


function p2kwiet433743360554_btnWatchPop_onClick_seq0(eventobject){

watchStopped.dismiss();

frmOptions.show();
	
};

