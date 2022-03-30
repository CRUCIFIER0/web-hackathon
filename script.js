 $('.dropdown-item').on('click',  function(){
        var btnObj = $(this).parent().siblings('button');
        $(btnObj).text($(this).text());
        $(btnObj).val($(this).text());
    });

   

    function myFunction() {
        document.getElementById('mob-input').style.cssText = 'display:none';
        document.getElementById('loader').style.cssText = 'display:flex';
        document.getElementById('top-input').style.cssText = 'display:flex';
        sleep(3000).then(() => {
            document.getElementById('loader').style.cssText = 'display:none';
            document.getElementById('log-body').style.cssText = 'visibility: visible; opacity: 1;';
            document.getElementById('graph-body').style.cssText = 'visibility: visible; opacity: 1;';
        
         });
         
         
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    $( function() {
        var availableTags = [
          "ActionScript",
          "AppleScript",
          "Asp",
          "BASIC",
          "C",
          "C++",
          "Clojure",
          "COBOL",
          "ColdFusion",
          "Erlang",
          "Fortran",
          "Groovy",
          "Haskell",
          "Java",
          "JavaScript",
          "Lisp",
          "Perl",
          "PHP",
          "Python",
          "Ruby",
          "Scala",
          "Scheme"
        ];
        $( "#tags" ).autocomplete({
          source: availableTags
        });
      } );