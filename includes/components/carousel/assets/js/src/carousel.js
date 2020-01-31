jQuery(function($) {
    $(document).ready(function() {
        $('.owl-carousel').each(function() {
            let owl = $(this);
            var optionsJSON = $(this).data('owlcarousel'),
                args = jQuery.parseJSON(JSON.stringify(optionsJSON));
            args.slideBy = 'page';
            args.dotData = true;
            args.navText = [
                '<i class="fal fa-angle-left" aria-hidden="true" role="presentation"></i> <span class="sr-only">Previous</span>',
                '<i class="fal fa-angle-right" aria-hidden="true" role="presentation"></i> <span class="sr-only">Next</span>'
            ];
            function navButtons(event) {
                var element = '#' + event.target.id,
                    carousel = document.getElementById(event.target.id),
                    prevBtn = $(element).find('.owl-prev'),
                    nextBtn = $(element).find('.owl-next'),
                    carouselHeight = verge.rectangle(carousel).height;
                $(element).prepend(prevBtn);
                $(prevBtn)
                    .addClass('owl-btn')
                    .css('top', carouselHeight / 2);
                $(nextBtn)
                    .addClass('owl-btn')
                    .css('top', carouselHeight / 2)
                    .insertBefore($(element).find('.owl-dots'));
            }
            args.onInitialized = navButtons;
            owl.owlCarousel(args);
        });
    });
});
