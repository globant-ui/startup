

var functionFadeToggleSection = (function() {
  //Private variables
  var selectedSection = $('section.hidden-section');
  var text = $('input.alias');

  var callBackFunction = function() {
    text.trigger('focus'); //only in chrome?
    
  };

  var ft = function() {
    selectedSection.fadeIn("slow",callBackFunction);
  };
  
  //public API
  return {
    fadeAndToogle: ft

  };//end return 
  
})();


var removeClassFunction = (function() {
  //Private variables
  var section = $('section.hidden-section');

    var remove = function() {
        section.removeClass('hidden-section');
    };
  
  //public API
  return {
    remove: remove

  };//end return 
  
})();


var delegateFunction =  (function() {
  //Private variables
  var obj = $('button');
  var eventType = 'click';
  var selectedSection = $('section.hidden-section');
  var ajaxReturn ;

  var insertHtmlWithAjax = function(){ 
    $.ajax( "http://bootcamp.aws.af.cm/welcome/yourname" )

    .done(function(result) {
    ajaxReturn = result.response;
    selectedSection.append("<p>" + ajaxReturn + "</p>");
    })
    
    .always(function() {
      alert("Success Demian!!");
    })

    .fail(function() {
      alert( "error in section. Red color" );
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
$(document).ready(functionFadeToggleSection.fadeAndToogle());
$(document).ready(delegateFunction.delegate());
