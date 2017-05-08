function p2kwiet2125006231273_frmHome_preshow_seq0(eventobject, neworientation) {
    addHeaderSPATab.call(this, "Home");
};

function p2kwiet2125006231273_btnContinue_onClick_seq0(eventobject) {
    geoPositionDesktopWeb.call(this);
};

function p2kwiet2125006231300_frmOptions_preshow_seq0(eventobject, neworientation) {
    addHeaderSPATab.call(this, "GetCurrentPosition");
};

function p2kwiet2125006231313_watchStopped_onhide_seq0(eventobject, neworientation) {
    frmOptions.show();
};

function p2kwiet2125006231313_btnWatchPop_onClick_seq0(eventobject) {
    watchStopped.dismiss();
    frmOptions.show();
};