jQuery.noConflict();
(function($) { 
  $(function() {
    // shorthand logging function
  	var l = function(message) {
      console.log('Log:', message);
    }

    // Initializing the settings
    settings = new Settings($, 'form.settings');
    settings.get('text-field', l);

    // Activate tabbing
    $('#main-nav a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });

    /**
     * Add your production codehere.
     */   

    /** BADGE START
     *
     * Add buttons to set and reset the Badge. The badge is in the lower right
     * of the extensin plugin and should be max 4 chars long.
     */
    /*$('#home').append('<div class="button-wrapper" />');
    $('#home .button-wrapper').append('<button type="button" class="btn btn-success set-badge">Set badge</button>');
    $('#home .button-wrapper').append('<button type="button" class="btn btn-warning reset-badge">Reset badge</button>');
                    
    $('.set-badge').click(function() {
      chrome.browserAction.setBadgeText({'text': '1111'});
    });

    $('.reset-badge').click(function() {
      chrome.browserAction.setBadgeText({'text': ''});
    });
    /* BADGE END*/

    /** TEXT START
     *
     *
     */


    function checkwordlist(){
    console.log("Reached Checkwordlist")
    localStorage.nucle = document.getElementById("checkpass").value;
    document.getElementById("checkpass").value =localStorage.nucle;

    console.log("localStorage.nucle");
    /* for (var x = 0; x < text.length; x++)
      $('input[type="text"], select', $settings).each(function(index, item) {
        options[$(item).attr('name')] = $(item).val();
      });*/

    }




    /*
    document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("checkpass_submit").addEventListener("click", handler);
    });

    function handler() {
      console.log("Reached Handler");
      checkwordlist();

    }*/


  $('.check-start').click(function() {
    console.log("Passing into Checkwordlist()");
    checkwordlist();


  });




    var text = ['Everyone has passwords.', 'We simply want to help you keep them safe.', 'YCPasswordy is an extension utility to check your password strength locally and store your passwords behind 2FA.', '<span class="glyphicon glyphicon-star"></span>'];
    var show = function(text, index) {
      if(index >= text.length) return;
      $('#about').append($('<div class="line">' + text[index] + '</div>').fadeIn(3000, function(){
        show(text, index+1);
      }));
    }
    show(text, 0);
    /* TEXT END */

  });
})(jQuery);