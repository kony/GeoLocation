//Form JS File
function watchStopped_watchStopped_onhide_seq0(eventobject, neworientation) {
    frmOptions.show();
};

function watchStopped_btnWatchPopUp_onClick_seq0(eventobject) {
    watchStopped.dismiss();
    frmOptions.show();
};

function addWidgetswatchStopped() {
    var lblWatchTExt = new kony.ui.Label({
        "id": "lblWatchTExt",
        "isVisible": true,
        "text": "Watch has stopped"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 6, 4, 5],
        "padding": [6, 15, 6, 15],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": true,
        "containerWeight": 11
    }, {
        "textCopyable": false
    });
    var btnWatchPopUp = new kony.ui.Button({
        "id": "btnWatchPopUp",
        "isVisible": true,
        "text": "OK",
        "onClick": watchStopped_btnWatchPopUp_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [10, 1, 10, 1],
        "padding": [1, 2, 1, 2],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    watchStopped.add(
    lblWatchTExt, btnWatchPopUp);
};

function watchStoppedGlobals() {
    watchStopped = new kony.ui.Popup({
        "id": "watchStopped",
        "title": null,
        "transparencyBehindThePopup": 0,
        "onHide": watchStopped_watchStopped_onhide_seq0,
        "isModal": false,
        "addWidgets": addWidgetswatchStopped
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 80,
        "containerHeight": null,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "windowSoftInputMode": constants.POPUP_ADJUST_RESIZE,
        "inTransitionConfig": {
            "animation": 0
        },
        "outTransitionConfig": {
            "animation": 0
        }
    });
};