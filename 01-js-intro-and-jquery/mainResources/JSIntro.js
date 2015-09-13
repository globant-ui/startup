// Will Run on DOM Ready!
$(document).ready(function() {
    // When the page has finished loading the section must fade in.
    // Topic 1, exercise 5

    // Add a textbox with the class "alias", and put the cursor inside it right after the section fades in.
    // Function will focus when fade in completes.
    // Topic 1, exercise 6

    $('#hiddenSection').fadeIn(400, function()
    {
        $('.alias').focus();
    });

    //Attach an event to the created button which calls a function that gets a response from (...)
    // Topic 1, exercise 7
    $('#responseButton').click(getResponse);
});

// Will Handle Response Errors
function handleError(xhr, status, error)
{
    // jQuery Target
    var targetText = $('#targetText');

    // Clean element classes
    targetText.removeClass();

    // Add Failed Class
    targetText.addClass('failed');

    // Add Text on Target
    targetText.text(xhr.responseText);
}

// Will Handle a successful response
function sucessfulResponse (data)
{
    // jQuery Target
    var targetText = $('#targetText');

    // Check for errors
    if (data['error'])
    {
        var xhrerr = {responseText: data['error']};
        return handleError(xhrerr, status, '');
    }
    // Check if data has no response
    else if (!data['response'])
    {
        var xhrnull = {responseText: 'Response is Invalid!'};
        return handleError(xhrnull, status, '');
    }
    else
    {
        // Clean element classes
        targetText.removeClass();

        // Add Failed Class
        targetText.addClass('success');

        // Add Text on Target
        targetText.text(data.response);

        /* Mark name */
        var html = targetText.html();
        html = markName(html);
        targetText.html(html)
    }
}
// Mark name
function markName(internalHtml)
{
    return html.substring(0, 8) + '<mark>' + html.substring(8) + '</mark>';
}

// On Button Click
function getResponse()
{
    // Get the name of the user!
    var name = $('.alias').val();

    // Url of webserver
    var url = 'http://bootcamp.aws.af.cm/welcome/';

    // Get the response
    $.ajax({
        type: 'GET',
        url: ((name != null) && (name != undefined)) ? url + name : name,
        async: true,
        data: { get_param: 'response' },
        dataType: 'json',
        error: handleError,
        success: sucessfulResponse
    });
}


