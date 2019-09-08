// initial giphy array of tv shows
var tvShowsArr = ["Family Guy", "the Simpsons", "Futurama" , "HIMYM" , "Brooklyn99", "the Big Bang Theory"]

// <!--Space for all the giphy buttons-->
// <div id= "buttonDump"></div>

// <!--  Input form and button to search new tv shows -->
//     <form id="addShowForm">
//         <label for="show-input">Add a Show!</label>
//         <input type="text" id="show-input">
//         <br>
//         <input id="addShow" type="submit" value="Find a different GIF">
//     </form>

// <!-- Gif images container-->
//     <div id="gifs-view"></div>


// ridiculous (for me) function for all the things and to display the AJAX call
function displayShowGifs() {
    var tvShow =$(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=nbtnKFS5ycqrRpSRWBJjEH7Y48EcfuNL&q=" + tvShow + "&limit=10&offset=0&rating=PG&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response)
        var gifDiv = $("<div class = 'divGifStorage'>")  
        response.data.forEach(element => {
      
      //var gifURL = response.data[0].url;
      var gifURL = "https://media.giphy.com/media/" + element.id + "/200w_s.gif"
      console.log(gifURL)
      var gifImage =  $("<img>").attr("src",gifURL)
      gifDiv.append(gifImage);

    
       
    });
 $("#gifs-view").prepend(gifDiv);
    });
}
    function renderButtons() {
    $("#buttonDump").empty();
    for (var i =0; i < tvShowsArr.length; i++) {

    // dynamic buttons
    var a = $("<button>");
    a.addClass("show-btn");
    a.attr("data-name", tvShowsArr[i]);
    a.text(tvShowsArr[i]);
    $("#buttonDump").append(a);
    
     }
    }

    // Function Search Form button click events
    $("#addShow").on("click", function(event) {
        event.preventDefault();
    var tvShow =  $("#show-input").val().trim();
    tvShowsArr.push(tvShow);
    renderButtons();
    });

    $(document).on("click", ".show-btn", displayShowGifs);
    renderButtons();




