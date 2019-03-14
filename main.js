$(() => {
    $("#action").on("click", main);

    function main(){

    // Add the "big" class to the "grow-me" paragraph.
    $("#grow-me").addClass("big"); //adds a class

    // Remove the "big" class to the "shrink-me" paragraph.
    $('#shrink-me').removeClass("big");

    // Find all the <li>s and log their text content to the console.
    let listItems = $("li");
    console.log(listItems);

    //Set the href of the link to "https://www.example.com".
    $(".link").attr("href", "https://www.example.com");

    //Update the text to say "somewhere" instead of "nowhere".
    $(".link").text("Somewhere");
    
    //Set the "display" CSS property of the "hide-me" paragraph to "none".
    $("#hide-me").css("display", "none");

    //Set the "display" CSS property of the "show-me" paragraph to "block".
    $("#show-me").css("display", "block");

    //Get the text that the user enters into the "name" input box 
    //and use it to set a welcome message in the <h1>, e.g., "Hello Grant!".
    let inputName = $("#name").val();
    $("h1").text(`Hello ${inputName}`);

    }
});

