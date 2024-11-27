'use strict'
let elem=document.querySelector('.elem1');
/*function clickOn(){
    elem.style.display="block";
}
function dontClick(){
    elem.style.display="none";
}*/
/*function Clicks(){
    elem.textContent="fuck off";
}
let paragraph=document.querySelector('.pp');
function shit(){
    if(paragraph.style.display==="block")
        paragraph.style.display="none";
    else
        paragraph.style.display="block";
}
let elem1=document.getElementById('colorBox');
let elem2=elem1.style.backgroundColor;
function changeColor(){
    elem1.style.backgroundColor="red";
}
function resetColor(){
    
    elem1.style.backgroundColor=elem2;
}
const elem1=document.querySelectorAll('.parag');
function changeColor(color) {
    for(let i=0 ; i<elem1.length;i++)
    elem1[i].className=color;
}
const elem1=document.querySelector('body');
function toggleTheme(){
    if(elem1.className==='light-theme')
        elem1.className='dark-theme';
    else
        elem1.className='light-theme';
}

const elem2=document.querySelector('.neo');
function hideShow(){
    elem2.classList.toggle('hide');
    

}
const elem1=document.querySelectorAll('li');
function some(i){
    elem1[i].classList.toggle('hide');
}
const im=document.querySelector('img');
function onit(img){
    im.src=img;
}
const myinput= document.querySelector('#MyInput');
function changeWidthImg(){
    im.width=myinput.value;
}
const link1= document.querySelector("#input1");
const link2=document.querySelector("#input2");
let e=document.querySelector(".maybe");
function toggleText(){
    e.href=link1.value;
    e.textContent=link2.value;
}
const name1 = document.getElementById('name');
const comments = document.getElementById('comments');
const country = document.getElementById('country');
const gender=document.getElementById('radio-group');
let p1=document.getElementById('displayName');
let p2=document.getElementById('displayComments');
let p3=document.getElementById('displayCountry');
let p4=document.getElementById('displayGender');
let shows= document.getElementById('result');
function clickme(){
    p1.textContent=name1.value;
    p2.textContent=comments.value;
    p3.textContent=country.value;
    //p4.textContent=gender.value;
    shows.style.display="block";
}
const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
// בקשת מספר מהמשתמש
const index = parseInt(prompt('Enter the index of the character you want to see:'), 10);

// בדיקת תקינות הקלט
if (!isNaN(index) && index >= 0 && index < str.length) {
    // הצגת התו המתאים
    alert(`The character at index ${index} is '${str[index]}'`);
} else {
    // הצגת הודעת שגיאה במקרה של קלט לא תקין
    alert('Invalid index. Please enter a number between 0 and ' + (str.length - 1));
}
let arr = [1,2,3];
arr.forEach(function(elem,index,arr){
    arr[index]+=1;
});
console.log(arr);

let arr = [1, 2, [3, 4], 5, [6, 7]]; // -> // [1, 2, 5]
arr = arr.filter(function(elem){
	return typeof (elem)=="number"
})
console.log(arr);*/
let check = function(arr, n){
	return arr.every(function(elem) {
		return (elem.length>n);
	});
};
let arrForCheck = ["sdf","xcvxcv","wer","qweweqw","sdfg"]
console.log(check(arrForCheck, 3));