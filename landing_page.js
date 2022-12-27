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
const cont_list = document.getElementsByClassName("image_cont");
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

function hide_desc(wide){
    if(wide){
        for(i = 0;i < desc_list.length; i++){
            desc_list[i].style.display = "initial";
        }
    }
    else{
        for(i = 0;i < desc_list.length; i++){
            desc_list[i].style.display = "none";
        }
    }
}

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
        left_arrow.style.top = "590px";
        right_arrow.style.top= "590px";
        left_arrow.style.left = "20%";
        right_arrow.style.left= "70%";
    }
}

/*  Re-adjust layout as window width changes.
*/  
function rescale() {
    if(window.innerWidth < 700 && wide_toggle){
        wide_toggle = false;
        top_display(wide_toggle);
        dropdown_display(wide_toggle);
        move_arrow(wide_toggle);
        hide_desc(wide_toggle);
    }
    if(window.innerWidth >= 700 && !wide_toggle){
        wide_toggle = true;
        top_display(wide_toggle);
        dropdown_display(wide_toggle);
        move_arrow(wide_toggle);
        hide_desc(wide_toggle);
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

function menu_select(){
    title.addEventListener("click", function(){
        hide_all();
        about.style.display = "initial";
    });
    projects_btn.addEventListener("click", function(){
        hide_all();
        projects.style.display = "grid";
    });
    contact_btn.addEventListener("click", function(){
        hide_all();
        contact.style.display = "initial";
    });
    drop_projects.addEventListener("click", function(){
        hide_all();
        projects.style.display = "grid";
    });
    drop_contact.addEventListener("click", function(){
        hide_all();
        contact.style.display = "initial";
    });
}

window.onload = function(){
    dropdown_event();
    scroll();
    rescale();
    menu_select();
}

window.onresize = rescale;