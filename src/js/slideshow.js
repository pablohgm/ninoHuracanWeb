SLIDESHOW = {}
SLIDESHOW.DIMENSION = 3
SLIDESHOW.COUNTER = 0
SLIDESHOW.TOOLBAR = {
    init: function() {
        $('.indicator0').bind('click',function(){           
            SLIDESHOW.TOOLBAR.setActive(0);
        });
        $('.indicator1').bind('click',function(){           
            SLIDESHOW.TOOLBAR.setActive(1);
        });
        $('.indicator2').bind('click',function(){           
            SLIDESHOW.TOOLBAR.setActive(2);
        });
        $('.indicator3').bind('click',function(){           
            SLIDESHOW.TOOLBAR.setActive(3);
        });
        $('.indicator4').bind('click',function(){           
            SLIDESHOW.TOOLBAR.setActive(4);
        });    
        window.setInterval(function(){           
           SLIDESHOW.TOOLBAR.setActive(SLIDESHOW.COUNTER);
           SLIDESHOW.COUNTER = (SLIDESHOW.COUNTER + 1) % SLIDESHOW.DIMENSION;
        }, 5000);
    },
    setActive: function(slideIndex) {
        $('.slide').addClass('hidden');        
        $('.slide'+slideIndex).removeClass('hidden');
    }     
};
