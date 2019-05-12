import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.js';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__subtitle");
    this.headerLinks = $(".primary-nav a");
    this.getInTouchButton = $("#contact-form-link");
    this.createHeaderWaypoint();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.getInTouchButton.smoothScroll();
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function() {
        that.siteHeader.toggleClass("site-header--dark");
        that.headerLinks.toggleClass("lightBlue");
      }
    });
  }


}

export default StickyHeader;
