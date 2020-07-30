//popup to ask for name
var popup = prompt('Greeting, Please enter your name.');
//gives greetings 
 name2 = "<h1> Welcome " + popup + "</h1>";
 document.write(name2);

//eventlistener for when button is clicked
document.querySelector(".js-go").addEventListener('click' , function(){
    
    var input = document.querySelector("input").value;
    gettingInput(input);
    pushToDOM(input);
    
});
//event listener for when enter key is entered instead of button being clicked
document.querySelector(".js-userinput").addEventListener('keyup' , function(e){
  
    var input = document.querySelector("input").value;
    if(e.which=== 13){
       
         gettingInput(input);
         pushToDOM(input);
        
    }
});
//functions to pass input into url and make ajax request
    function gettingInput(search){
        // You have to request a key at Giphy
        var url = "http://api.giphy.com/v1/gifs/search?q="+search+"&api_key=3hIwOP9tZtOp0TbjLSmCaOT22FZMGFEp&q";
        

        var GiphyAJAXcall = new XMLHttpRequest();
        GiphyAJAXcall.open('GET',url);
        console.log(url);
        GiphyAJAXcall.send();

        GiphyAJAXcall.addEventListener('load',function(e){
            console.log(e);
            var data = e.target.response;
            pushToDOM(data);
            
        });
    };
        //function that loads the data and puts it on the screen
function pushToDOM(input) {

  var response = JSON.parse(input);
  var imageUrls = response.data;
  imageUrls.forEach(function(image){

    var src = image.images.fixed_height.url;
    console.log(src);

    var container = document.querySelector(".gif");
    container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

  });

}
//Proverbs 16:3 