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
        "margin": [12, 18, 12, 15],
        "padding": [3, 10, 3, 10],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 11
    }, {});
    var btnWatchPopUp = new kony.ui.Button({
        "id": "btnWatchPopUp",
        "isVisible": true,
        "text": "OK",
        "onClick": watchStopped_btnWatchPopUp_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [32, 4, 32, 4],
        "padding": [4, 7, 4, 7],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 11
    }, {});
    watchStopped.add(
    lblWatchTExt, btnWatchPopUp);
};

function watchStoppedGlobals() {
    watchStopped = new kony.ui.Popup({
        "id": "watchStopped",
        "title": null,
        "isModal": false,
        "transparencyBehindThePopup": 0,
        "onHide": watchStopped_watchStopped_onhide_seq0,
        "addWidgets": addWidgetswatchStopped
    }, {
        "padding": [0, 0, 0, 0],
        "containerWeight": 80,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "maxAppMenuButtons": 4,
        "inTransitionConfig": {
            "inTransition": "slidein"
        },
        "outTransitionConfig": {
            "outTransition": "slideout"
        },
        "directChildrenIDs": ["lblWatchTExt", "btnWatchPopUp"]
    });
};