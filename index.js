const input = document.getElementById('autocomplete-input');

// input.onkeydown = function(){
//     console.log ('key down',input.value);
// }

// input.onkeypress = function (){
//     console.log('key press', input.value)

// }

input.onkeyup = function() {
    console.log('key up',input.value);{

const movieName = input.value.toLowerCase();
const ul = document.querySelector ("ul");
if (input.value) {
    

     fetch ('https://api.themoviedb.org/3/search/movie?api_key=a70dbfe19b800809dfdd3e89e8532c9e&query='+ movieName)
.then (res => res.json())
.then (data =>{
console.log(data)

ul.style.display='block';
let lis= '';
for (let index = 0; index < data.results.length; index++) {
  lis+=
  `<li>
  <p>${data.results[index].title}<p>
  </li>`
    
}
 ul.innerHTML = lis;


})
} 
else{ul.style.display='none'}
}
}
