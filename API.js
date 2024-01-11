const url="https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const button = document.getElementById("joke");
const joke = document.getElementById("sentence");
///const img = async () =>{
   // let response = await fetch(url);
   // console.log(response);
  //  let data=await response.json();
//    console.log(data.networks[0]);
//    console.log(data.networks[0].location["city"]);
//};
function city(){
    joke.classList.remove("fade");
    fetch(url)
    .then((response)=> {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        let datase=data.joke;
        joke.textContent=datase;
        joke.classList.add("fade");
    })
}

button.addEventListener("click",city);
city();