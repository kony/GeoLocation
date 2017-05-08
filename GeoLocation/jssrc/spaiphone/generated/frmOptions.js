function addWidgetsfrmOptions() {
    var label159202961518 = new kony.ui.Label({
        "id": "label159202961518",
        "isVisible": true,
        "skin": "sknTitleSPA",
        "text": "Position API's"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
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
    }, {});
    frmOptions.add(label159202961518, segApi);
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
        "inTransitionConfig": {
            "formTransition": "none"
        },
        "outTransitionConfig": {
            "formTransition": "none"
        },
        "retainScrollPosition": false
    });
};