// let request= new XMLHttpRequest();
// let data;
// request.open("GET","https://api.nasa.gov/planetary/apod?api_key=PwLJWPu41m0iAh3eJLAJBoqfTvy01zm0hiHtPNJb&count=1");
// let response;
// request.onload=()=>{
//     response=request.response;
//     data=JSON.parse(response);
//     //console.log(data);
// let imgurl=data[0].url;
// let img=document.getElementsByTagName("img")[0];
// img.setAttribute('src',imgurl);
// }
// request.send();
// //let img=document.getElementsByTagName("img")[0];
// //img.src=data[0].url;
// //console.log(data);

const NASA_URL= "https://api.nasa.gov/planetary/apod?api_key=B8TcQmfdvwGMJh8fjQwfxlGwwgxQbqK9jeXDBh28&count=10";

let count=0;
function addNasa()
    {
        const promise=fetch(NASA_URL);
 promise
.then(function(response)
{
    return response.json();
})
.then(function(data)
{
    const img= document.createElement("img");
    img.src =data[count].url;
    img.alt="nasa images";
    console.log(data);

    document.querySelector(".image-section").appendChild(img);
    count++;
})
    }

 

document.querySelector(".button-class").addEventListener("click", addNasa);
