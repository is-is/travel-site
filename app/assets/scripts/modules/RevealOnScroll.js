import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class RevealOnScroll {
  constructor(sel, offset) {
      this.itemsToReveal = sel;
      this.offset = offset;
      this.hideInitially();
      this.createWayPoints();
  }
  hideInitially() {
      this.itemsToReveal.addClass('reveal-item');
  }
  createWayPoints() {
      var that = this;
      this.itemsToReveal.each(function() {
        var currentItem = this;
        new Waypoint({
            element: currentItem,
            handler: function() {
                $(currentItem).addClass('reveal-item--is-visible');
            },
            offset: that.offset
        });
     
      });
   
   
  }
}

export default RevealOnScroll;