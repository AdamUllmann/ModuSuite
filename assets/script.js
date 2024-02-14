$(document).ready(function(){
    $('#productDropdown').on('click', function(e){
        e.stopPropagation();
        $(this).toggleClass('show');
    });

    $(document).on('click', function(e){
        if (!$('#productDropdown').is(e.target) && $('#productDropdown').has(e.target).length === 0) {
            $('#productDropdown').removeClass('show');
        }
    });
});
