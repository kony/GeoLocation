function addWidgetswatchStopped() {
    var lblWatchTExt = new kony.ui.Label({
        "id": "lblWatchTExt",
        "isVisible": true,
        "text": "Watch has stopped"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [4, 6, 4, 5],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var btnWatchPopUp = new kony.ui.Button({
        "id": "btnWatchPopUp",
        "isVisible": true,
        "onClick": p2kwiet2125006231305_btnWatchPopUp_onClick_seq0,
        "text": "OK"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [10, 1, 10, 1],
        "marginInPixel": false,
        "padding": [1, 2, 1, 2],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    watchStopped.add(lblWatchTExt, btnWatchPopUp);
};

function watchStoppedGlobals() {
    watchStopped = new kony.ui.Popup({
        "addWidgets": addWidgetswatchStopped,
        "id": "watchStopped",
        "isModal": false,
        "onHide": p2kwiet2125006231305_watchStopped_onhide_seq0,
        "transparencyBehindThePopup": 0
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 80,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "popupTransition": "none"
        },
        "outTransitionConfig": {
            "popupTransition": "none"
        }
    });
};