function handle_primary_CTA() {
    $('#primary-cta').click(function(evt) {
        evt.stopImmediatePropagation();

        $('body').animate({scrollTop:$('#services').position().top}, 'slow');
    });
}


function navigate_to() {
    $('.primary-navigation li').click(function(evt) {
        evt.stopImmediatePropagation();
        
        var target_section_name = $(this).attr('link-to');
        var target_section = $('#' + target_section_name);
        var section_loc = target_section.position().top - 40;

        $('body').animate({scrollTop:section_loc}, 'slow') ;
    });
};

function open_modal() {
    $('.open-modal').click(function(evt) {
        evt.stopImmediatePropagation();
        
        var target_modal_name = $(this).attr('target-modal');
        var target_modal = $('#' + target_modal_name);  
        
        $(target_modal).fadeIn();
        $('body').addClass('no-scroll');
        
        // set_modal_max_height(target_modal);
        set_modal_bkg_size(target_modal);
        
    });
};

function close_modal() {
    $('.close-icon').click(function(evt) {
        evt.stopImmediatePropagation();
        
        $('.modal').fadeOut();
        $('body').removeClass('no-scroll');
    });
    
    $('.modal-bkg').click(function(evt) {
        evt.stopImmediatePropagation();
        
        $('.modal').fadeOut();
        $('body').removeClass('no-scroll');
            
    });
}

function set_modal_max_height(modal) {
    var window_size = $(window).height();
    var modal_header_size = $(modal).find('.modal-header').height();
    var max_modal_height = window_size - ((window_size*0.1) + modal_header_size + 180);
    
    $(modal).find('.modal-body').css('max-height', max_modal_height);
}

function set_modal_bkg_size(modal) {
    var modal_size = $(modal).find('.modal-wrapper').height();
    $(modal).find('.modal-bkg').css('height', modal_size + $(window).height()*0.1 + 40 + 'px');
}

function initalizeScrolltoFixed() {
    $('header').scrollToFixed({
        unfixed: function() {
            $(this).css('background', 'rgba(255,255,255,.25'); 
            $(this).find('li').css('color', 'rgba(0,0,0,.87)');
        },
        fixed: function() {
            $(this).css('background', 'rgba(255,255,255,.75'); 
            $(this).find('li').css('color', 'rgba(0,0,0,.87)');
        }
    });
}


$(function initalize() {
    open_modal();
    close_modal();
    navigate_to();
    handle_primary_CTA();
    initalizeScrolltoFixed();
});