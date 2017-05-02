
	var gifs = ["Reactions", "Pandas", "Cats", "Dogs", "web developer", "bootcamp", ];
  var userInput;
//displaying gifs to div
function displayGifs() {

  var gifSRC = $(this).attr("title");
  var searchURL = "http://api.giphy.com/v1/gifs/search?q=funny+" + gifSRC + "&limit=5&api_key=dc6zaTOxFJmzC";
  //intentionally changed url so all results are funny

$.ajax({url: searchURL,method: "GET"}).done(function(response) {
    console.log("DONE WITH API");
    console.log(searchURL);

// Creates a div to hold the GIF info
for (var i = 4; i >= 0; i--) {
    var downsizedURL = response.data[i].images.fixed_height_small.url; 
    var staticURL = response.data[i].images.fixed_height_small_still.url;
    console.log("looping " + i);
    // var gifDiv = $("<img>").attr("src", downsizedURL);
          var gifDiv = $("<img>").attr("src", staticURL); 
          gifDiv.addClass("clickableImg");
          // var gifDiv = $("<div>").html("<button>this is a test</button> ");
    gifDiv.attr("alt");
    $("#userGifs").append(gifDiv);
     console.log(downsizedURL);
}//end of for loop
$("#userGifs").append("<strong> you've searched for: " + gifSRC +"</strong> <br> <hr>" );
        //gives each gif div a clickable function to make it clickable
        //on click changes the image to the animated gif
        //append the animated image to the preview bar 
       $(".clickableImg").on("click", function(){
       gifDiv = $("<img>").attr("src", downsizedURL);
       // ?(this).attr("src", downsizedURL);//TRY THIS - doesn't work
       console.log("clicks are working on gifs" + downsizedURL);
       console.log("src changed to " + downsizedURL);
       $("#previewDiv").append(gifDiv);
       });
      

  });//end of AJAX call
}//end of display function

//button and display functionality
 function renderButtons() {
  console.log("running render");
  //console log for debugging
  $("#gifResults").empty();
  for (var i = gifs.length - 1; i >= 0; i--) {
  	//loops through all gifs and assigns clickable class and associated title 
      var button  = $("<button>");
      button.addClass("gifButton"); 
      button.text(gifs[i]);
      button.attr("title", gifs[i]);
      console.log(button.title);
      $("#gifResults").append(button);	
  }//end of for loop
 }//end of render function     
 //click functionality for each gif, moves them to preview area and changes src to moving image    
  $("#addGif").on("click", function(event) {
    console.log("search term added");
    event.preventDefault();
    userInput = $("#searchInput").val().trim();
    gifs.push(userInput);
    console.log(gifs);
    renderButtons();
    $("#searchInput").empty();
    $(document).on("click", ".gifButton", displayGifs);
    
//add function to set still image here
  });//end of addGif function
renderButtons();


