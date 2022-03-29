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

    function myFunction() {
        document.getElementById('top-input').style.cssText = 'display:flex';
        document.getElementById('mob-input').style.cssText = 'display:none';
        document.getElementById('log-body').style.cssText = 'display:flex';
        document.getElementById('graph-body').style.cssText = 'display:flex';
    }

    function myFunction1() {
        
    }
