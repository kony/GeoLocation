//actions.js file 
function p2kwiet2125006231227_btnContinue_onClick_seq0(eventobject) {
    frmOptions.show();
}

function p2kwiet2125006231227_frmHome_preshow_seq0(eventobject, neworientation) {
    return addHeaderSPATab.call(this, "Home");
}

function p2kwiet2125006231263_btnClearWatch_onClick_seq0(eventobject) {
    return clearWatchTab.call(this);
}

function p2kwiet2125006231263_frmOptions_onhide_seq0(eventobject, neworientation) {
    return onHideFrmGeoTab.call(this);
}

function p2kwiet2125006231263_frmOptions_preshow_seq0(eventobject, neworientation) {
    addHeaderSPATab.call(this, "Position API's");
    checkFormTab.call(this);
}

function p2kwiet2125006231263_segNavigation_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    return onClickOfSegApiTab.call(this, eventobject);
}

function p2kwiet2125006231309_btnWatchPop_onClick_seq0(eventobject) {
    watchStopped.dismiss();
    frmOptions.show();
}

function p2kwiet2125006231309_watchStopped_onhide_seq0(eventobject, neworientation) {
    frmOptions.show();
}