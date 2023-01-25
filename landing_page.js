const header = document.getElementById("header");
const buttons_list = document.getElementsByClassName("header_button");
const item_list = document.getElementsByClassName("items");
//Body elements.
const resume = document.getElementById("resume");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const title = document.getElementById("title");
const projects_btn = document.getElementById("projects_btn");
const contact_btn = document.getElementById("contact_btn");
const drop_projects = document.getElementById("drop_projects");
const drop_contact = document.getElementById("drop_contact");
const project_imgs = document.getElementsByClassName("project_img");
const desc_list = document.getElementsByClassName("pro_desc");
const imageCont_list = document.getElementsByClassName("image_cont")
const cont_list = document.getElementsByClassName("image_cont");
const brand_list = document.getElementsByClassName("brands");
const paragraph_list = document.getElementsByClassName("paragraph");
//Dropdown elements.
const content = document.getElementById("dropdown_content");
const drop_btn = document.getElementById("drop_btn");
const left_arrow = document.getElementById("left");
const right_arrow = document.getElementById("right");
const children = document.getElementById("center").children;

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

/*Hide project image.
*/
function hide_project(wide){
    if(wide){
        for(i = 0; i < imageCont_list.length; i++){
            imageCont_list[i].style.display = "initial";
            paragraph_list[i].style.width = "70%";  
        }
        move_arrow(wide);
    }
    else{
        for(i = 0;i < imageCont_list.length; i++){
            imageCont_list[i].style.display = "none";
            paragraph_list[i].style.width = "100%";
        }
        move_arrow(wide);
    }
}

/*Readjust arrow position base on wide or small screen.
*/
function move_arrow(wide){
    if(wide){
        left_arrow.style.position = "relative";
        right_arrow.style.position = "relative";
        left_arrow.style.top = "0px";
        right_arrow.style.top= "0px";
        left_arrow.style.left = "0px";
        right_arrow.style.left= "0px";
    }
    else{
        left_arrow.style.position = "absolute";
        right_arrow.style.position = "absolute";
        left_arrow.style.top = "50%";
        right_arrow.style.top= "50%";
        left_arrow.style.left = "2%";
        right_arrow.style.left= "90%";
    }
}

/*  Re-adjust layout as window width changes.
*/  
function rescale() {
    if(window.innerWidth < 1000 && wide_toggle){
        wide_toggle = false;
        top_display(wide_toggle);
        dropdown_display(wide_toggle);
        hide_project(wide_toggle);
    }
    if(window.innerWidth >= 1000 && !wide_toggle){
        wide_toggle = true;
        top_display(wide_toggle);
        dropdown_display(wide_toggle);
        hide_project(wide_toggle);
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

/* Hide all element within body
*/
function hide_all(){
    for(i = 0; i < children.length; i++){
        children[i].style.display = "none";
    }
}

function hide_media_icon(){
    for(i = 0; i < brand_list.length; i++){
        brand_list[i].style.display = "none";
    }
}

function show_media_icon(){
    for(i = 0; i < brand_list.length; i++){
        brand_list[i].style.display = "initial";
    }
}

/* Project navigation, scroll left or right
*/
function scroll(){
    left_arrow.addEventListener("click", function(){
        item_list[project_no].style.display = "none";
        if(project_no == 0){
            project_no = 2;
        }
        else{
            project_no -= 1;
        }
        item_list[project_no].style.display = "flex";
    });
    right_arrow.addEventListener("click", function(){
        item_list[project_no].style.display = "none";
        if(project_no == 2){
            project_no = 0;
        }
        else{
            project_no += 1;
        }
        item_list[project_no].style.display = "flex"; 
    });
}

/* Page change function, changes page base on which menu is selected.
*/
function menu_select(){
    title.addEventListener("click", function(){
        hide_all();
        show_media_icon();
        about.style.display = "initial";
    });
    projects_btn.addEventListener("click", function(){
        hide_all();
        show_media_icon();
        projects.style.display = "grid";
    });
    contact_btn.addEventListener("click", function(){
        hide_all();
        hide_media_icon();
        contact.style.display = "grid";
    });
    drop_projects.addEventListener("click", function(){
        hide_all();
        show_media_icon();
        projects.style.display = "grid";
    });
    drop_contact.addEventListener("click", function(){
        hide_all();
        hide_media_icon();
        contact.style.display = "grid";
    });
}

window.onload = function(){
    dropdown_event();
    scroll();
    rescale();
    menu_select();
}

window.onresize = rescale;