image=document.querySelectorAll(".image");
image.forEach(element=>{
  element.addEventListener("click", function(e){
    image.forEach(el=>{
      el.classList.remove("active");
    });
    element.classList.add("active");
  })
});