import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.js';

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__subtitle");
    this.headerLinks = $(".primary-nav a");
    this.createHeaderWaypoint();
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
