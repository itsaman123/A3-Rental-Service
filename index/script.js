function validateForm() {
    const startDate = document.querySelector("#startDate").value;
    const startTime = document.querySelector("#startTime").value;
    const endDate = document.querySelector("#endDate").value;
    const endTime = document.querySelector("#endTime").value;

    if (startDate === "" || startTime === "" || endDate === "" || endTime === "") {
      alert("All fields are required");
      return false;
    }

    if (startDate > endDate) {
      alert("Start date should be before end date");
      return false;
    }

    if (startDate === endDate && startTime >= endTime) {
      alert("Start time should be before end time");
      return false;
    }

    return true;
  }



const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});