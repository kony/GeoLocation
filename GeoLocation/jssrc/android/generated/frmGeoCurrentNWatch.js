//Form JS File
function frmGeoCurrentNWatch_frmGeoCurrentNWatch_preshow_seq0(eventobject, neworientation) {
    checkForm.call(this);
};

function frmGeoCurrentNWatch_frmGeoCurrentNWatch_onhide_seq0(eventobject, neworientation) {
    onHideFrmGeo.call(this);
};

function frmGeoCurrentNWatch_btnClearWatch_onClick_seq0(eventobject) {
    clearWatch.call(this);
};

function addWidgetsfrmGeoCurrentNWatch() {
    var lblDesc = new kony.ui.Label({
        "id": "lblDesc",
        "isVisible": true,
        "text": "Label",
        "skin": "sknLblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [12, 10, 12, 5],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 4
    }, {
        "textCopyable": false
    });
    var lblLatKey = new kony.ui.Label({
        "id": "lblLatKey",
        "isVisible": true,
        "text": "Latitude",
        "skin": "sknLblinSeg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var lblLatValue = new kony.ui.Label({
        "id": "lblLatValue",
        "isVisible": true,
        "text": null,
        "skin": "sknLblinSeg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "textCopyable": false
    });
    var hboxlat = new kony.ui.Box({
        "id": "hboxlat",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxlat.add(
    lblLatKey, lblLatValue);
    var lblLongKey = new kony.ui.Label({
        "id": "lblLongKey",
        "isVisible": true,
        "text": "Longitude",
        "skin": "sknLblinSeg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var lblLongValue = new kony.ui.Label({
        "id": "lblLongValue",
        "isVisible": true,
        "text": null,
        "skin": "sknLblinSeg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "textCopyable": false
    });
    var hboxlong = new kony.ui.Box({
        "id": "hboxlong",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxlong.add(
    lblLongKey, lblLongValue);
    var lblAltKey = new kony.ui.Label({
        "id": "lblAltKey",
        "isVisible": true,
        "text": "Altitude",
        "skin": "sknLblinSeg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var lblAltValue = new kony.ui.Label({
        "id": "lblAltValue",
        "isVisible": true,
        "text": null,
        "skin": "sknLblinSeg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "textCopyable": false
    });
    var hboxaltitude = new kony.ui.Box({
        "id": "hboxaltitude",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxaltitude.add(
    lblAltKey, lblAltValue);
    var lblAccKey = new kony.ui.Label({
        "id": "lblAccKey",
        "isVisible": true,
        "text": "Accuracy",
        "skin": "sknLblinSeg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var lblAccValue = new kony.ui.Label({
        "id": "lblAccValue",
        "isVisible": true,
        "text": null,
        "skin": "sknLblinSeg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "textCopyable": false
    });
    var hboxaccuracy = new kony.ui.Box({
        "id": "hboxaccuracy",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxaccuracy.add(
    lblAccKey, lblAccValue);
    var lblHeadKey = new kony.ui.Label({
        "id": "lblHeadKey",
        "isVisible": true,
        "text": "Heading",
        "skin": "sknLblinSeg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var lblHeadValue = new kony.ui.Label({
        "id": "lblHeadValue",
        "isVisible": true,
        "text": null,
        "skin": "sknLblinSeg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "textCopyable": false
    });
    var hboxheading = new kony.ui.Box({
        "id": "hboxheading",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxheading.add(
    lblHeadKey, lblHeadValue);
    var lblSpeedKey = new kony.ui.Label({
        "id": "lblSpeedKey",
        "isVisible": true,
        "text": "Speeding",
        "skin": "sknLblinSeg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var lblSpeedValue = new kony.ui.Label({
        "id": "lblSpeedValue",
        "isVisible": true,
        "text": null,
        "skin": "sknLblinSeg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "textCopyable": false
    });
    var hboxspeeding = new kony.ui.Box({
        "id": "hboxspeeding",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxspeeding.add(
    lblSpeedKey, lblSpeedValue);
    var lblTimeKey = new kony.ui.Label({
        "id": "lblTimeKey",
        "isVisible": true,
        "text": "Timestamp",
        "skin": "sknLblinSeg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 35
    }, {
        "textCopyable": false
    });
    var lblTimeValue = new kony.ui.Label({
        "id": "lblTimeValue",
        "isVisible": true,
        "text": null,
        "skin": "sknLblinSeg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 65
    }, {
        "textCopyable": false
    });
    var hboxtimestamp = new kony.ui.Box({
        "id": "hboxtimestamp",
        "isVisible": true,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 12,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hboxtimestamp.add(
    lblTimeKey, lblTimeValue);
    var vboxMain = new kony.ui.Box({
        "id": "vboxMain",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "containerWeight": 100,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "vExpand": false,
        "hExpand": true,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    vboxMain.add(
    hboxlat, hboxlong, hboxaltitude, hboxaccuracy, hboxheading, hboxspeeding, hboxtimestamp);
    var hbxWatchID = new kony.ui.Box({
        "id": "hbxWatchID",
        "isVisible": false,
        "skin": "sknHbxWhite",
        "position": constants.BOX_POSITION_AS_NORMAL,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL
    }, {
        "containerWeight": 33,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [12, 7, 12, 7],
        "padding": [1, 1, 1, 1],
        "vExpand": false,
        "marginInPixel": true,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});
    hbxWatchID.add(
    vboxMain);
    var lblGeoAdress = new kony.ui.Label({
        "id": "lblGeoAdress",
        "isVisible": true,
        "text": null,
        "skin": "sknLblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 5, 4, 1],
        "padding": [2, 2, 2, 2],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {
        "textCopyable": false
    });
    var btnClearWatch = new kony.ui.Button({
        "id": "btnClearWatch",
        "isVisible": true,
        "text": "clearWatch",
        "skin": "sknBtnNormalSampleApp",
        "focusSkin": "sknBtnFocusSampleApp",
        "onClick": frmGeoCurrentNWatch_btnClearWatch_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [4, 2, 4, 3],
        "padding": [1, 4, 1, 4],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 3
    }, {});
    frmGeoCurrentNWatch.add(
    lblDesc, hbxWatchID, lblGeoAdress, btnClearWatch);
};

function frmGeoCurrentNWatchGlobals() {
    var MenuId = [];
    frmGeoCurrentNWatch = new kony.ui.Form2({
        "id": "frmGeoCurrentNWatch",
        "needAppMenu": true,
        "title": "Current Position",
        "enabledForIdleTimeout": false,
        "skin": "sknFrmFormBgImg",
        "preShow": frmGeoCurrentNWatch_frmGeoCurrentNWatch_preshow_seq0,
        "onHide": frmGeoCurrentNWatch_frmGeoCurrentNWatch_onhide_seq0,
        "addWidgets": addWidgetsfrmGeoCurrentNWatch
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": true,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
};