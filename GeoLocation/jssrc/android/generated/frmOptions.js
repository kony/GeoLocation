function addWidgetsfrmOptions() {
    var segApi = new kony.ui.SegmentedUI2({
        "data": [{
            "lblApi": "getCurrentPosition"
        }, {
            "lblApi": "watchPosition"
        }],
        "groupCells": false,
        "id": "segApi",
        "isVisible": true,
        "needPageIndicator": true,
        "onRowClick": p2kwiet2125006231211_segApi_onRowClick_seq0,
        "retainSelection": false,
        "rowFocusSkin": "sknSeg2FocusSampleApp",
        "rowSkin": "sknSeg2Normal",
        "rowTemplate": vbox21250062368,
        "screenLevelWidget": false,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sknSeg2Header",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "e9e9e900",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewConfig": {
            "coverflowConfig": {
                "isCircular": true,
                "projectionAngle": 60
            }
        },
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lblApi": "lblApi"
        },
        "widgetSkin": "sknSeg2Normal"
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [4, 6, 4, 4],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "dockSectionHeaders": false
    });
    frmOptions.add(segApi);
};

function frmOptionsGlobals() {
    frmOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmOptions,
        "enabledForIdleTimeout": false,
        "id": "frmOptions",
        "needAppMenu": true,
        "onHide": p2kwiet2125006231211_frmOptions_onhide_seq0,
        "skin": "sknFrmFormBgImg",
        "title": "Position API's"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "sknTitleBarSampleApp",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};