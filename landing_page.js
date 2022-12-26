const header = document.getElementById("header");
const buttons_list = document.getElementsByClassName("header_button");
const item_list = document.getElementsByClassName("items");
const resume = document.getElementById("resume");
const about = document.getElementById("about");
const content = document.getElementById("dropdown_content");
const drop_btn = document.getElementById("drop_btn");
const left_arrow = document.getElementById("left");
const right_arrow = document.getElementById("right");

let wide_toggle = true;
let menu_toggled = false;
let project_no = 0;

/*  Hide/display top menu when scaling.
*/
function top_display(wide){
    if(wide){
        for(i = 0; i < buttons_list.length; i++){
            buttons_list[i].style.display = "initial";
        }
    }
    else{
        for(i = 0; i < buttons_list.length; i++){
            buttons_list[i].style.display = "none";
        }
    }
}

function hide(item){
    item.style.display = "none";
}

function display(item){
    item.style.display = "initial";
}

/*  Hide/display dropdown button when scaling.
*/
function dropdown_display(wide){
    if(wide){
        drop_btn.style.display = "none";
    }
    else{
        drop_btn.style.display = "initial";
    }
}

/*  Re-adjust layout as window width changes.
*/  
function rescale() {
    if(window.innerWidth < 700 && wide_toggle){
        wide_toggle = false;
        top_display(wide_toggle);
        dropdown_display(wide_toggle);
       
    }
    if(window.innerWidth >= 700 && !wide_toggle){
        wide_toggle = true;
        top_display(wide_toggle);
        dropdown_display(wide_toggle);
    }

}

/*  Hide/display dropdown menu
*   Event: click.
*/
function dropdown_event(){
    drop_btn.addEventListener("click", function(){
        if(!menu_toggled){
            content.style.display = "block";
            menu_toggled = true;
        }
        else{
            content.style.display = "none";
            menu_toggled = false;
        }
    });
    content.addEventListener("mouseleave", function(){
        content.style.display = "none";
        menu_toggled = false;
    });
}

function scroll(){
    left_arrow.addEventListener("click", function(){
        item_list[project_no].style.display = "none";
        if(project_no == 0){
            project_no = 2;
        }
        else{
            project_no -= 1;
        }
        item_list[project_no].style.display = "initial";
    });
    right_arrow.addEventListener("click", function(){
        item_list[project_no].style.display = "none";
        if(project_no == 2){
            project_no = 0;
        }
        else{
            project_no += 1;
        }
        item_list[project_no].style.display = "initial";
    });
}

window.onload = function(){
    dropdown_event();
    scroll();
    rescale();
}

window.onresize = rescale;