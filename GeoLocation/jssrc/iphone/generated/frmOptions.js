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
        "viewConfig": {},
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lblApi": "lblApi"
        },
        "widgetSkin": "sknSeg2Normal"
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [12, 18, 12, 12],
        "marginInPixel": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
        "showProgressIndicator": true
    });
    frmOptions.add(segApi);
};

function frmOptionsGlobals() {
    frmOptions = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmOptions,
        "bounces": true,
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
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": true,
            "titleBarLeftSideView": "title",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "none"
        },
        "titleBarSkin": "sknTitleBarSampleApp"
    });
};