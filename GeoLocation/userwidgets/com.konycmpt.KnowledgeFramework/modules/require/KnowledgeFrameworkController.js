define(function() {

    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        previosAcc: null,
        isClosed: false,
        setData: function(data) {
            this.view.lblHeading.text = "Behind The Scene";
            this.view.sgmtAPI.removeAll();
            this.view.sgmtAPI.isVisible = true;
            this.view.sgmtAPI.widgetDataMap = {
                lblNameOfAPI: "APIName"
            };
            this.view.sgmtAPI.setData(data);
        },
        onRowClick: function() {
            this.showAccord("flexAcc1");
            var data = this.view.sgmtAPI.selectedRowItems[0];
            this.animateDescriptionScreen(0, data.APIName, this.setUIAfterAnimation);
            this.populateData(data);
        },

        setUIAfterAnimation: function(left, headerText) {
            if (left === 100) {
                this.view.flexClickBack.setVisibility(false);
                this.view.lblHeading.text = "Behind The Scene";
            } else {
                this.view.flexClickBack.setVisibility(true);
                this.view.lblHeading.text = headerText;
            }
            if (this.isClosed) {
                this.navigateToPreviousScreen();
                this.isClosed = false;
            }
        },
        animateDescriptionScreen: function(left, headerText, callbackFunction) {
            var controllerScope = this;
            controllerScope.view.flxFullScreen.animate(
                kony.ui.createAnimation({
                    100: {
                        left: left + "%",
                        "stepConfig": {}
                    }
                }), {
                    delay: 0,
                    fillMode: kony.anim.FILL_MODE_FORWARDS,
                    duration: 0.1
                }, {
                    animationEnd: function() {
                        if (left === 0) {
                            controllerScope.view.flexClickBack.setVisibility(true);
                            controllerScope.view.lblHeading.text = headerText;
                        } else {
                            controllerScope.view.flexClickBack.setVisibility(false);
                            controllerScope.view.lblHeading.text = "Behind The Scenes";
                        }

                    }
                });
        },

        populateData: function(data) {
            this.view.rchDesc1.text = data.Description;
            this.view.rchDesc2.text = data.CodeSnippet;
            this.view.rchDesc3.text = data.DocLink;
        },

        showAccord: function(id) {
            id = id.split("flexAcc")[1];
            if (this.previosAcc !== null && this.previosAcc !== id) {
                this.view["btnAccordian" + this.previosAcc].src = "chevron.png";
                this.view["lblAccordian" + this.previosAcc].skin = "sknLabelKnowledgeUnselected";
                this.view["btnAccordian" + id].src = "chevrondown.png";
                this.view["lblAccordian" + id].skin = "sknLabelKnowledgeSelected";
                this.view["flexScrollDesc" + this.previosAcc].isVisible = false;
                this.view["flexScrollDesc" + id].isVisible = true;
                this.previosAcc = id;
            } else if (this.previosAcc == id) {
                if (this.view["btnAccordian" + id].src == "chevrondown.png") {
                    this.view["btnAccordian" + this.previosAcc].src = "chevrondown.png";
                    this.view["lblAccordian" + this.previosAcc].skin = "sknLabelKnowledgeSelected";
                    this.view["btnAccordian" + id].src = "chevron.png";
                    this.view["lblAccordian" + id].skin = "sknLabelKnowledgeUnselected";
                    this.view["flexScrollDesc" + this.previosAcc].isVisible = true;
                    this.view["flexScrollDesc" + id].isVisible = false;
                    this.previosAcc = id;
                } else {
                    this.view["btnAccordian" + this.previosAcc].src = "chevron.png";
                    this.view["lblAccordian" + this.previosAcc].skin = "sknLabelKnowledgeUnselected";
                    this.view["btnAccordian" + id].src = "chevrondown.png";
                    this.view["lblAccordian" + id].skin = "sknLabelKnowledgeSelected";
                    this.view["flexScrollDesc" + this.previosAcc].isVisible = false;
                    this.view["flexScrollDesc" + id].isVisible = true;
                    this.previosAcc = id;
                }
            } else {
                this.view["btnAccordian" + id].src = "chevrondown.png";
                this.view["lblAccordian" + id].skin = "sknLabelKnowledgeSelected";
                this.view["flexScrollDesc" + id].isVisible = true;
                this.previosAcc = id;
            }
        },
        closeWhenDone: function() {
            this.isClosed = true;
            this.animateDescriptionScreen(100, "Behind The Scene", this.setUIAfterAnimation);
            this.setUIAfterAnimation(100, "Behind The Scene");
        },
        navigateToPreviousScreen: function() {
            var prevForm = kony.application.getPreviousForm();
            var navObj = new kony.mvc.Navigation(prevForm.id);
            navObj.navigate();
        },

        onClickBack: function() {
            this.resetDescScreen();
            this.animateDescriptionScreen(100, "Behind The Scene", this.setUIAfterAnimation);
        },
        resetDescScreen: function() {
            for (i = 1; i <= 3; i++) {
                this.view["btnAccordian" + i].src = "chevron.png";
                this.view["lblAccordian" + i].skin = "sknLabelKnowledgeUnselected";
                this.view["flexScrollDesc" + i].isVisible = false;
            }
        },
//         onLinkClick: function() {
//             kony.application.openURL(this.view.sgmtAPI.selectedItems[0].link);
//         },
        openEmail: function() {
            try {
                var to = [""];
                var sub = "Code Snippet - " + this.view.lblHeading.text;
                var msg = this.view.rchDesc2.text;
                var msg1 = msg.replace(/#f2f1f1/g,"#000000");
                var msgbody = msg1.replace(/#ffffff/g,"#000000");
              // alert(msgbody);
                kony.phone.openEmail(to, [""], [""], sub, msgbody, true, []);
            } catch (err) {
                alert("error in opening Email:: " + err);
            }
        }
    };
});