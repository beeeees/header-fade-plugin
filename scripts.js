(function($){

  $.fn.heroFade = function(){

    var self = this;
    var windowHeight = $(window)[0].innerHeight;
    var windowScrollTop = $(window).scrollTop();

    var heroFadeFunction = function(){
      return self.each(function() {
        if( windowScrollTop <= windowHeight ) {
          var scrollPercent = windowScrollTop/windowHeight,
              scrollPercentOffset = (scrollPercent*0.2);
              scrollOpacity = scrollPercent + scrollPercentOffset;
              scrollTransform = (scrollPercent * 150) + 50;

          self.css({
            opacity: scrollOpacity
          });

          self.find('#title-fade').css({
           'transform': 'translate(0, -' + scrollTransform + '%)',
            opacity: 1.3 - scrollOpacity
          });

        }

      });
    }

    $(window).on('resize', function(){
      windowHeight = $(window)[0].innerHeight;
      heroFadeFunction();
    });

    heroFadeFunction();
    return self;

  }

})(jQuery);

