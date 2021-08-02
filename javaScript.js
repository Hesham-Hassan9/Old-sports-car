let weldcome = prompt("Hello on my website, What is your name")

let howOld = prompt("How old are you")

let favcar = prompt("what is your favorite car ford or dodge")

function favcars(favcar){

while(favcar != "ford" && favcar != "dodge"){

    favcar = prompt("The car you choose is not available in my website, please ford or dodge")

}

document.write("<h3>"+"your favorite car is:"+"</h3>")

if(favcar == "ford"){

    document.write("<h3>" + "ford"+"</h3>"
    +"<img  src='https://moneyinc.com/wp-content/uploads/2018/07/1970-Chevrolet-Chevelle-SS-454-750x422.jpg'/>")
    
    }
    
    else if (favcar =="dodge"){
    document.write( "<h3>" + "dodge"+"</h3>"
    + "<img  src='https://i.pinimg.com/originals/eb/70/27/eb702776a4fc930b4c1a06f16d734f78.jpg'/>")
    }
    else
{
  alert('You are not like any car in my page')
}
}
favcars(favcar);
function rating(){
  let yourRating = prompt("How do you rate the car from 0 to 5?")
  for(let i = 0; i <= yourRating; i++){
    let star = i;
    console.log(star)
  }
  document.write(
  "<div>" + "<h3>" + "your rating is:" +"</h3>"+"<h3>"+star+"<h3>" + "</div>")
}
rating();