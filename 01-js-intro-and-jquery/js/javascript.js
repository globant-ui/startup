//Module Patter Function
var functionFadeToggleSection = (function() {
  //Private variables
  var selectedSection = $('.hidden-section');
  var searchInputText = $('input.alias');
  //Private functions
  var focusSearchInputText = function() {
    searchInputText.trigger('focus'); //only in chrome?
  };
  var fadeInSection = function() {
    selectedSection.fadeIn('slow', focusSearchInputText);
  };
  //public API
  return {
    fadeAndToogle: fadeInSection
  };//end return 
})();

//Module Patter Function
var delegateFunction =  (function() {
  //Private variables
  var obj = $('.button-delegates');
  var eventType = 'click';
  var selectedSection = $('section.hidden-section');
  var ajaxReturn ;
  //Private functions
  var insertHtmlWithAjax = function() { 
    $.ajax( 'http://bootcamp.aws.af.cm/welcome/yourname' )

    .done(function(result) {
    ajaxReturn = result.response;
    selectedSection.append('<p>' + ajaxReturn + '</p>');
    })

    .always(function() {
      alert('delegateFunction working');
    })

    .fail(function() {
      alert( 'error in section. Red color' );
    })
  };//end jqxhr

  var functionDelegate = function() {
    obj.delegate(obj, eventType, insertHtmlWithAjax); 
  };
  //public API
  return {
    delegate: functionDelegate
  };//end return 
})();

//Passing a named function instead of an anonymous function 
functionFadeToggleSection.fadeAndToogle();
delegateFunction.delegate();
