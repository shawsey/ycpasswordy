// User passwords stored in Chrome persistent storage between sessions


var Store = function(jQuery, form) {
  var $ = jQuery;
  var $store = $(form);

  // Save and sync all store
  var save = function(){
    var options = {};

    // Processing all text and select inputs
    $('input[type="text"], select', $store).each(function(index, item) {
      options[$(item).attr('name')] = $(item).val();
    });

    // Syncing the data with the storage
    chrome.storage.sync.set(options, function() {
      console.log('Saved the store');
    });
  };

  // Initialize the store
  var initialize = function() {
    chrome.storage.sync.get(function(e) {
      var $item = null;
      $.each(e, function(key, value) {
        $item = $('[name="' + key + '"]', $store);
        if($item.length > 0){
          if($item[0].type == 'text' || $item[0].type == 'select-one'){
            $item.val(value);
          }
          
          else if($item[0].type == 'checkbox'){
            if(value){
              $item.prop('checked', true);
            }
          }

          else {
            $('[name="' + key + '"][value="' + value + '"]', $store).prop('checked', true);
          }
        }
      });
    });
  };

  // Pass a value by its key to a callback function
  this.get = function(key, callback) {
    var value = chrome.storage.sync.get(key, function(e) {
      callback(e[key]);
    });
  }

  // Action when the save button is clicked
  $('.save-pwstore').click(function(e) {
    e.preventDefault();
    save();
  });

  // Action when the cancel button is clicked
  $('.cancel-store').click(function(e) {
    e.preventDefault();
    initialize();
  });

  initialize();
};