// Variables
const r_side_panel = document.getElementById("right-panel");
const s2_project_slide_panel = document.getElementById("s2-wrapper-2");
const s6_posts_slide_panel = document.getElementById("s6-wrapper-2");

var s2_left=0;
var s6_left=0;

// For the right side panel toggle
function rightPanel(val) {
    r_side_panel.classList.toggle("panel-on")
}

// For the sliding projects on 2nd Section
function s2Projects(dir) {
    if (dir=='l') if (s2_left>0) s2_left--;
    if (dir=='r') if (s2_left<3) s2_left++;
}

// For the sliding of posts on 6th Section
function s6Posts(dir) {
    if (dir=='l') if (s6_left>0) s6_left--;
    if (dir=='r') if (s6_left<1) s6_left++;
}

// Scroll effects

const objects = document.querySelectorAll(".scroll-effect");
const options = {threshold: 0.17};
const observer = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("add-effect");
            appearOnScroll.unobserve(entry.target);
        }
        });
    },
    options);

objects.forEach(object => {
        observer.observe(object);
    });


// Function scrolls slide options
function interv_call() {
    if (s2_left==0) s2_project_slide_panel.style.left = '0rem';
    else if (s2_left==1) s2_project_slide_panel.style.left = '-38rem';
    else if (s2_left==2) s2_project_slide_panel.style.left = '-76rem';
    else if (s2_left==3) s2_project_slide_panel.style.left = '-114rem';

    if (s6_left==0) s6_posts_slide_panel.style.left = '0%';
    else if (s6_left==1) s6_posts_slide_panel.style.left = '-100%';
}

window.setInterval(interv_call, 25)