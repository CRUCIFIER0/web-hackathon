 $('.dropdown-item').on('click',  function(){
        var btnObj = $(this).parent().siblings('button');
        $(btnObj).text($(this).text());
        $(btnObj).val($(this).text());
    });

    $(function () {
        $('#my-welcome-message').firstVisitPopup({
            cookieName: 'homepag1e',
            showAgainSelector: '#show-message'
        });
    });