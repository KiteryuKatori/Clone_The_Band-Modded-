
   /*
   Chị ơi, em là Tuấn Anh - 1 participant trong Hackathon vừa rồi á chị. 
   Đầu tiên là em xin chúc mừng team của chị đã đoạt giải nhất của Hackathon vừa rồi ạ. Project của anh chị đỉnh lắm!!!! Em nhìn mà thấy mê luôn ấy ạ C:
   Hôm nay em nhắn chị với mục đích xin hỏi kinh nghiệm của anh chị ấy ạ. Em cũng vừa học lập trình được vài tháng thôi nên là kinh nghiệm bằng 0 ấy ạ.
   Nếu được thì em xin phép xin source code và workflow của anh chị được không ạ?
   Tối T6 team em cũng chốt Idea game là Drawing game ấy chị, nên đó cũng chính là lý do em rất mong được xem source code của anh chị để được học hỏi thêm.
   Em tò mò không biết board vẽ của anh chị dùng canva hay phương pháp nào, lẫn cách sửa dụng socket để connect giữa các user, cách link socket không bị "Failed to load resource"... nhưng có vẻ hỏi mấy cái basic quá thì sẽ phiền anh chị, nên em tính xin source code để tìm hiểu để đỡ hỏi ngoo ạ.
   */

   /*
   Em chào chị ạ C:
   Em là Tuấn Anh, 1 participant trong Hackathon của JunctionX Hanoi vừa rồi á chị. 
   */

   const buyBtns = document.querySelectorAll(".ticket-buy-btn");
   const closeModalBtn = document.querySelector(".ti-close");
   const ticket_modal = document.querySelector(".ticket-modal");

   buyBtns.forEach(btn => {
      btn.addEventListener("click", () => {
         // const activatedPanel =  panel.closest(".navBar").querySelector(".active");
         openModal(ticket_modal);
      })
   })
  
   // closeModalBtn.addEventListener("click", closeModal(ticket_modal));
   ticket_modal.addEventListener("click", () => {
      closeModal(ticket_modal);
   });
   
   closeModalBtn.addEventListener("click", () => {
      closeModal(ticket_modal);
   });

   function closeModal(modal) {
      modal.classList.remove("active");
      console.log("Deactivate ", modal, " modal sucessfully.");
   }

   function openModal(modal) {
      modal.classList.add("active");
      console.log("Modal ", ticket_modal, " activated.");
   }

   // TRR: 3/1
   // DSTT, GT: 7/1
   // LTCB: 9/1 
   // QP: 19/1
   // Eng: 21/1

