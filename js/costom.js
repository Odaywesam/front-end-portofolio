var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right ="0";

}
function closemenu(){
    sidemenu.style.right ="-200px";

}



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// // toggle dark mode 

//   const toggle = document.getElementById('toggleDark');
// const body = document.querySelector('body');

// toggle.addEventListener('click', function(){
//     this.classList.toggle('bi-moon');
//     if(this.classList.toggle('bi-brightness-high-fill')){
//         body.style.background = 'white';
//         body.style.color = 'black';
//         body.style.transition = '2s';
//     }else{
//         body.style.background = '#fff';
//         body.style.accentColor.color = 'black';
//         body.style.transition = '1.5s';
//     }
// });