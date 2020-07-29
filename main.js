
var popup = prompt('Greeting, Please enter your name.');

 name2 = "<h1> Welcome " + popup + "</h1>";
 document.write(name2);


document.querySelector(".js-go").addEventListener('click' , function(){
    
    var input = document.querySelector("input").value;
    gettingInput(input);
    pushToDOM(input);
    
});

document.querySelector(".js-userinput").addEventListener('keyup' , function(e){
  
    var input = document.querySelector("input").value;
    if(e.which=== 13){
       
         gettingInput(input);
         pushToDOM(input);
        
    }
});

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