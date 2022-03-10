const buyBtns = document.querySelectorAll(".product-buy-btn");
const closeModalBtn = document.querySelector(".ti-close");
const product_modal_overlay = document.querySelector(".product-modal");
const product_modal_buy = document.querySelector(".modal-Container");
const toggleMenuDropdown = document.querySelector(".toggle");
const navBar = document.querySelector(".navBar");
const navBtn = document.querySelectorAll(".navBtn");

   toggleMenuDropdown.onclick = function() {
      toggleMenuDropdown.classList.toggle('active');
      navBar.classList.toggle('active');
      console.log("toggle= ", toggleMenuDropdown.classList);
      console.log("navBar= ", navBar.classList);
   }

   navBtn.forEach(btn => {
      btn.onclick = function() {
         toggleMenuDropdown.classList.toggle('active');
         navBar.classList.toggle('active');
         console.log("toggle= ", toggleMenuDropdown.classList);
         console.log("navBar= ", navBar.classList);
      }
   })

   buyBtns.forEach(btn => {
      btn.addEventListener("click", () => {
         // const activatedPanel =  panel.closest(".navBar").querySelector(".active");
         openModal(product_modal_overlay);
      })
   })
  
  closeModalBtn.addEventListener("click", () => {
     closeModal(product_modal_overlay);
  })
   product_modal_overlay.addEventListener("click", () => {
      closeModal(product_modal_overlay);
   });
   

   product_modal_buy.addEventListener("click", function (event) {
      event.stopPropagation();
   })
   // closeModalBtn.addEventListener("click", () => {
   //    closeModal(product_modal_overlay);
   // });

   function closeModal(modal) {
      modal.classList.remove("active");
      console.log("Deactivate ", modal, " modal sucessfully.");
   }

   function openModal(modal) {
      modal.classList.add("active");
      console.log("Modal ", product_modal_overlay, " activated.");
   }