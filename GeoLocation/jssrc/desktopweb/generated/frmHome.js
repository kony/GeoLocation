function addWidgetsfrmHome() {
    var lblHome = new kony.ui.Label({
        "id": "lblHome",
        "isVisible": true,
        "skin": "sknLblNormal",
        "text": "This application will showcase the following features of the GeoLocation API"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [20, 6, 5, 2],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var hbox104072006112 = new kony.ui.Box({
        "id": "hbox104072006112",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [18, 1, 4, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var image21043460833314 = new kony.ui.Image2({
        "id": "image21043460833314",
        "isVisible": true,
        "src": "bulletwhite.png"
    }, {
        "containerWeight": 7,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER
    }, {});
    var label104072006114 = new kony.ui.Label({
        "id": "label104072006114",
        "isVisible": true,
        "skin": "sknLblNormal",
        "text": "getCurrentPosition"
    }, {
        "containerWeight": 93,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    hbox104072006112.add(image21043460833314, label104072006114);
    var btnContinue = new kony.ui.Button({
        "focusSkin": "sknBtnFocusSampleApp",
        "id": "btnContinue",
        "isVisible": true,
        "onClick": p2kwiet2125006231273_btnContinue_onClick_seq0,
        "skin": "sknBtnNormalSampleApp",
        "text": "Click here to continue"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [35, 5, 35, 23],
        "marginInPixel": false,
        "padding": [1, 1, 1, 1],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    frmHome.add(lblHome, hbox104072006112, btnContinue);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "headers": [hboxHeadspa],
        "id": "frmHome",
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "needAppMenu": true,
        "preShow": p2kwiet2125006231273_frmHome_preshow_seq0,
        "skin": "sknFrmFormBgImg",
        "title": "GeoLocation"
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