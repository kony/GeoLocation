//Form JS File
function watchStopped_watchStopped_onhide_seq0(eventobject, neworientation) {
    frmOptions.show();
};

function watchStopped_btnWatchPop_onClick_seq0(eventobject) {
    watchStopped.dismiss();
    frmOptions.show();
};

function addWidgetswatchStopped() {
    var lblWatchPop = new kony.ui.Label({
        "id": "lblWatchPop",
        "isVisible": true,
        "text": "Watch has stopped"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "padding": [5, 5, 5, 5],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 11
    }, {});
    var btnWatchPop = new kony.ui.Button({
        "id": "btnWatchPop",
        "isVisible": true,
        "text": "OK",
        "onClick": watchStopped_btnWatchPop_onClick_seq0
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
    lblWatchPop, btnWatchPop);
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
        "layout": constants.Vertical,
        "directChildrenIDs": ["lblWatchPop", "btnWatchPop"],
        "viewConfig": {
            "referenceHeight": 0,
            "referenceWidth": 0
        }
    });
};