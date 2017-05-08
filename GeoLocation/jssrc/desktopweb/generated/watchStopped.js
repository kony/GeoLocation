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
    }, {});
    var btnWatchPop = new kony.ui.Button({
        "id": "btnWatchPop",
        "isVisible": true,
        "onClick": p2kwiet2125006231313_btnWatchPop_onClick_seq0,
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
        "onHide": p2kwiet2125006231313_watchStopped_onhide_seq0,
        "transparencyBehindThePopup": 0
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 80,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "draggable": false,
        "inTransitionConfig": {
            "popupTransition": "none"
        },
        "minimizeOnLostFocus": false,
        "outTransitionConfig": {
            "popupTransition": "none"
        },
        "resizable": false,
        "titleBarConfig": {
            "closeIcon": "close.png",
            "maxIcon": "max.png",
            "minIcon": "min.png",
        }
    });
};