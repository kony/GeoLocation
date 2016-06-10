function p2kwiet433743360518_frmHome_preshow_seq0(eventobject, neworientation) {
    addHeaderSPATab.call(this, "Home");
};

function p2kwiet433743360518_btnContinue_onClick_seq0(eventobject) {
    geoPositionDesktopWeb.call(this);
};

function p2kwiet433743360545_frmOptions_preshow_seq0(eventobject, neworientation) {
    addHeaderSPATab.call(this, "GetCurrentPosition");
};

function p2kwiet433743360558_watchStopped_onhide_seq0(eventobject, neworientation) {
    frmOptions.show();
};

function p2kwiet433743360558_btnWatchPop_onClick_seq0(eventobject) {
    watchStopped.dismiss();
    frmOptions.show();
};