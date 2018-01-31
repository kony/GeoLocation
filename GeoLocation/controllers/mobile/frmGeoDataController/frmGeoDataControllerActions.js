define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_f511286a8c3c4abe9f928c6530f9ef44: function AS_FlexContainer_f511286a8c3c4abe9f928c6530f9ef44(eventobject) {
        var self = this;
        this.navigateBack();
    },
    /** onClick defined for btnClearWatch **/
    AS_Button_a17d1ab938dd4afa8867333c05f2a154: function AS_Button_a17d1ab938dd4afa8867333c05f2a154(eventobject) {
        var self = this;
        return self.clearWatch.call(this);
    },
    /** onDeviceBack defined for frmGeoData **/
    AS_Form_c1279483bc6942aeb75d8138eb2412b0: function AS_Form_c1279483bc6942aeb75d8138eb2412b0(eventobject) {
        var self = this;
        return self.navigateBack.call(this);
    },
    /** onClick defined for btnFramework **/
    AS_Button_ddcd427eed8248a6aa9cfd37358e2d7d: function AS_Button_ddcd427eed8248a6aa9cfd37358e2d7d(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    }
});