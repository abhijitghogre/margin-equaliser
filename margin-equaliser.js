$(document).ready(function(){
    
     $('.margin-equalizer-wrapper').each(function () {
        var clientHeight = $(this).height() - 65;
        var totalChildEqualizers = $(this).find('.margin-equalizer').length;
        var totalChildrenHeight = 0;
        $(this).find('.margin-equalizer').each(function () {
            totalChildrenHeight = totalChildrenHeight + $(this).height();
        });

        var remainingHeight = clientHeight - totalChildrenHeight;
        var topMargin = remainingHeight / (totalChildEqualizers + 1);
        if (clientHeight <= totalChildrenHeight) {
            topMargin = 20;
        }
        $(this).find('.margin-equalizer').css('margin-top', topMargin);
    });
    
});