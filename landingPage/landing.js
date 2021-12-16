document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })

// shoaib(sharing our values ) define colume JS. function starting --> colume
function shopNow()
   {
       window.location.href="https://www.salvationarmyusa.org/usn/walmart-angel-tree/"
   }
   function sd(){
       window.location.href ="https://www.walmart.com/cp/somos-mas/5593510?gbo=1"
   }
   function ln(){
       window.location.href ="https://www.walmart.com/cp/built-for-better/8747893"
   }
// Js code related to vaccine colume start
function shopCovidVaccine()
   {
   }
   function bookSlot(){
       window.location.href ="https://www.cowin.gov.in/"
   }
   function recordCheck(){
       window.location.href ="https://dashboard.cowin.gov.in/"
   }
// js code for vaccine column end
// ending