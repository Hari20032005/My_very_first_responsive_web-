let toggle_btn;
let big_wrapper;
let hamburger_menu;
function declare(){
    toggle_btn = document.querySelector(".toggle-btn");
 big_wrapper =  document.querySelector(".big-wrapper");
 hamburger_menu=document.querySelector(".hamburger-menu");
}
const main=document.querySelector("main")
declare();
let dark = false;
function toggleAnimation(){
let clone= big_wrapper.cloneNode(true);
dark=!dark;
if(dark){
    clone.classList.remove("light");
    clone.classList.add("dark");

    
}
else{
    clone.classList.remove("dark");
    clone.classList.add("light");
}
clone.classList.add("copy");
main.appendChild(clone);
document.body.classList.add("stop-scrolling");

clone.addEventListener("animationend", ()=>
{
    document.body.classList.remove("stop-scrolling");

big_wrapper.remove();
clone.classList.remove("copy");
declare();
events();
});

}

function events(){
toggle_btn.addEventListener("click",toggleAnimation);
hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}
events();