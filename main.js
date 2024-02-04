let click=document.querySelector("div.click-me")
let hover=document.querySelector("div.hover-me")
click.addEventListener("click", function(){
    this.classList.toggle("addr")
})
hover.addEventListener("mousemove",function(e){
    console.log(e.x-e.target.offsetLeft,e.y-e.target.offsetTop);
    e.target.parentElement.style.backgroundColor=`rgb(${e.x-e.target.offsetLeft},20,${e.y-e.target.offsetTop})`
})