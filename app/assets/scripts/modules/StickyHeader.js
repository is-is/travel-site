import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';
class StickyHeader {
   constructor() {
       this.siteHeader = $('.site-header');
       this.headerTriggerElement = $('.large-hero__title');
       this.pageSection = $('.page-section');
       this.headerLinks = $('.primary-nav a');
       this.createHeaderWaypoint();
       this.createPageSectionWaypoint();
       this.addSmoothScroll();
   }
   addSmoothScroll() {
       this.headerLinks.smoothScroll();
   }
   createHeaderWaypoint() {
       var that = this;
       new Waypoint({
           element: that.headerTriggerElement[0],
           handler: function(direction) {
               if(direction == 'down') {
                that.siteHeader.addClass('site-header--dark');
               } else {
                that.siteHeader.removeClass('site-header--dark');
               }
            
           }
       });
   }
   createPageSectionWaypoint() {
       var that = this;
       this.pageSection.each(function() {
           var currentPageSection = this;

           new Waypoint({
            element: currentPageSection,
            handler: function(direction) {
                if(direction == 'down') {
                    var matchingCurrentLink = $(currentPageSection).attr('data-matching-link');
                    that.headerLinks.removeClass('is-current-link');
                    $(matchingCurrentLink).addClass('is-current-link'); 
                }
                

            },
            offset: '18%'
         });  
              
         new Waypoint({
            element: currentPageSection,
            handler: function(direction) {
                if(direction == 'up') {
                    var matchingCurrentLink = $(currentPageSection).attr('data-matching-link');
                    that.headerLinks.removeClass('is-current-link');
                    $(matchingCurrentLink).addClass('is-current-link'); 
                }
                

            },
            offset: '-40%'
         });  
       });  
        
   }
}

export default StickyHeader;