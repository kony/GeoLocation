//Form JS File
function frmOptions_frmOptions_onhide_seq0(eventobject, neworientation) {
    kony.application.dismissLoadingScreen();
};

function frmOptions_segApi_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    onClickOfSegApi.call(this, eventobject);
};

function addWidgetsfrmOptions() {
    var segApibox = new kony.ui.Box({
        "id": "segApibox",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_VERTICAL
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": 15
    }, {});
    var segApi = new kony.ui.SegmentedUI2({
        "id": "segApi",
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblApi": "lblApi"
        },
        "data": [{
            "lblApi": "getCurrentPosition"
        }, {
            "lblApi": "watchPosition"
        }],
        "Location": "[1,117]",
        "rowTemplate": segApibox,
        "widgetSkin": "sknSeg2Normal",
        "rowSkin": "sknSeg2Normal",
        "rowFocusSkin": "sknSeg2FocusSampleApp",
        "sectionHeaderSkin": "sknSeg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "e9e9e900",
        "showScrollbars": false,
        "groupCells": false,
        "screenLevelWidget": false,
        "onRowClick": frmOptions_segApi_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": null
    }, {
        "margin": [4, 6, 4, 4],
        "padding": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 15
    }, {});
    var lblApi = new kony.ui.Label({
        "id": "lblApi",
        "isVisible": true,
        "skin": "sknLblinSeg"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [2, 4, 2, 4],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 39
    }, {
        "textCopyable": false
    });
    segApibox.add(
    lblApi);
    frmOptions.add(
    segApi);
};

function frmOptionsGlobals() {
    var MenuId = [];
    frmOptions = new kony.ui.Form2({
        "id": "frmOptions",
        "needAppMenu": true,
        "title": "Position API's",
        "enabledForIdleTimeout": false,
        "skin": "sknFrmFormBgImg",
        "onHide": frmOptions_frmOptions_onhide_seq0,
        "addWidgets": addWidgetsfrmOptions
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
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