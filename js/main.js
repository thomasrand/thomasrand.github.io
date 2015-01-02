//  Set the height of the header to the height of the video player 
function setIntroVideoSize() {
	var videoHeight = $('#intro-video').height();

    var tabsHeight = 59;
    var windowHeight = window.innerHeight;
	
    $('.header').css('max-height', (windowHeight - tabsHeight) + 'px'); 
    $('.header').css('height', videoHeight + 'px');
    $('.overlay').css('height', videoHeight + 'px');

    var headerHeight = $('.header').height();

    $('article').css('top', headerHeight + 'px'); 
}

//  Adjust the header when the browser width is changed
function adjustHeaderOnResize() {
    
	$(window).resize(function () {
		setIntroVideoSize();
	});
}



function tabEventHandler() {
	$('nav li').click(function (evt) {
        
        evt.stopImmediatePropagation();
        
        var tab_height = $('.tabs').height();
        var section = $(this).find('a').attr('class');

        var section_loc = $('.contents').find('.' + section).offset().top - tab_height;

        $('body').animate({scrollTop:section_loc}, 'slow');

	});
}

function linkEventHandler() {
    $('.splash-letter span').click(function (evt) {
        evt.stopImmediatePropagation();

        var tab_height = $('.tabs').height();
        var section = $(this).attr('target-tab');

        var section_loc = $('.contents').find('.' + section).offset().top - tab_height;

        $('body').animate({scrollTop:section_loc}, 'slow');
    });
}

function stickyNav() {  
    $('.tabs').scrollToFixed({
        zIndex : 1000000,
        fixed: function() {
            $('.splash-letter').css('visibility', 'hidden');
            $('.header').css('overflow', 'visible');
            
            $('.header').css('background-image', 'url("assets/bg-image.png")');  
            $('.header').addClass('header-alternate');
            $('#intro-video').css('visibility', 'hidden');
        },
        unfixed: function() {
            $('.splash-letter').css('visibility', 'visible');
            $('.header').css('overflow', 'hidden');

            $('.header').css('background-image', 'none');  
            $('.header').removeClass('header-alternate');
            $('#intro-video').css('visibility', 'visible');
        }
    });
}  



$(function initilize() {
	window.setTimeout(function() {setIntroVideoSize();}, 300); 
    window.setTimeout(function() {stickyNav();}, 500); 
	adjustHeaderOnResize();
	tabEventHandler();
    linkEventHandler();
});



