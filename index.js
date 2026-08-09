document.write("hello world");

const subTtl = document.querySelector("#subtitle");
const info =document.querySelector("#info")

subTtl.innerHTML = "Document Object Model - Web APIs "

const ageRef = document.querySelector("#age");

let age = Number(ageRef.innerHTML)

if (age >=18){
    info.innerHTML="You are eligible"
} else {
    info.innerHTML="You are not eligible"

}