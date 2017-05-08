function addWidgetswatchStopped() {
    var lblWatchPop = new kony.ui.Label({
        "id": "lblWatchPop",
        "isVisible": true,
        "text": "Watch has stopped"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var btnWatchPop = new kony.ui.Button({
        "id": "btnWatchPop",
        "isVisible": true,
        "onClick": p2kwiet2125006231309_btnWatchPop_onClick_seq0,
        "text": "OK"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [10, 2, 10, 2],
        "marginInPixel": false,
        "padding": [2, 3, 2, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    watchStopped.add(lblWatchPop, btnWatchPop);
};

function watchStoppedGlobals() {
    watchStopped = new kony.ui.Popup({
        "addWidgets": addWidgetswatchStopped,
        "id": "watchStopped",
        "isModal": false,
        "onHide": p2kwiet2125006231309_watchStopped_onhide_seq0,
        "transparencyBehindThePopup": 0
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 80,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "inTransitionConfig": {
            "animation": 0
        },
        "outTransitionConfig": {
            "animation": 0
        },
        "windowSoftInputMode": constants.POPUP_ADJUST_RESIZE
    });
};