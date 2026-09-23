let displayElement = document.querySelector(".display");


let temp = "";
function calculation(input){
temp = temp + input; 
displayElement.innerHTML = `${temp}`;

}


function result(){
let res = eval(temp);
displayElement.innerHTML = `${res}`;

}


function clears(){
temp = " ";
displayElement.innerHTML = ` `;
}