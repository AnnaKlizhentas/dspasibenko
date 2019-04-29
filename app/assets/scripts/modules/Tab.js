import $ from 'jquery';

class Tab {
  constructor() {
    this.tabLinks = $(".tab__tablinks");
    this.tabContent = $(".tab__tabcontent");
    this.events();
    var clickedTabId = "tabKubernetes";
    this.openCodeSample(clickedTabId);

  }

  events() {
    this.tabLinks.click(this.openCodeSampleHandler.bind(this));
  }
  // openCodeSample is an event handler
  // it gets called whenever tabLinks button is getting clicked
  // first parameter of this function is always the event
  openCodeSampleHandler(event) {
    var clickedTabId = event.target.id;
    this.openCodeSample(clickedTabId);
  }

  openCodeSample(clickedTabId) {
    if (clickedTabId == "tabKubernetes") {
      $("#tabKubernetes").addClass("active");
      $("#Kubernetes").addClass("tab__tabcontent--is-visible");
      $("#tabStandalone").removeClass("active");
      $("#Standalone").removeClass("tab__tabcontent--is-visible");
    }
    else {
      $("#tabStandalone").toggleClass("active");
      $("#Standalone").toggleClass("tab__tabcontent--is-visible");
      $("#tabKubernetes").removeClass("active");
      $("#Kubernetes").removeClass("tab__tabcontent--is-visible");
    }
  }
}


export default Tab;
