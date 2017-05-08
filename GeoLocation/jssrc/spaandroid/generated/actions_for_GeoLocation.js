//actions.js file 
function p2kwiet2125006231190_btnClearWatch_onClick_seq0(eventobject) {
    return clearWatch.call(this);
}

function p2kwiet2125006231190_frmGeoCurrentNWatch_onhide_seq0(eventobject, neworientation) {
    return onHideFrmGeo.call(this);
}

function p2kwiet2125006231190_frmGeoCurrentNWatch_preshow_seq0(eventobject, neworientation) {
    return checkForm.call(this);
}

function p2kwiet2125006231205_btnContinue_onClick_seq0(eventobject) {
    frmOptions.show();
}

function p2kwiet2125006231211_frmOptions_onhide_seq0(eventobject, neworientation) {
    kony.application.dismissLoadingScreen();
}

function p2kwiet2125006231211_segApi_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    return onClickOfSegApi.call(this, eventobject);
}

function p2kwiet2125006231305_btnWatchPopUp_onClick_seq0(eventobject) {
    watchStopped.dismiss();
    frmOptions.show();
}

function p2kwiet2125006231305_watchStopped_onhide_seq0(eventobject, neworientation) {
    frmOptions.show();
}