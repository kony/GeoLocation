define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_ab1787c8140e4854980a2639a36bdf78: function AS_FlexContainer_ab1787c8140e4854980a2639a36bdf78(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmHome");
        ntf.navigate();
    },
    /** onRowClick defined for segApi **/
    AS_Segment_if17425fd7244ef984e0c57c87e5f360: function AS_Segment_if17425fd7244ef984e0c57c87e5f360(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.onSegRowClick.call(this);
    },
    /** onClick defined for btnFramework **/
    AS_Button_bf62bbe2d4714e2e85dce1d8d4bd5ec1: function AS_Button_bf62bbe2d4714e2e85dce1d8d4bd5ec1(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    }
});