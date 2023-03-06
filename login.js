const wrapper = document.querySelector(".formulaire"),
            signupHeader = document.querySelector(".signup h1"),
            loginHeader = document.querySelector(".login h1");
  
          loginHeader.addEventListener("click", () => {
            wrapper.classList.add("active");
          });
          signupHeader.addEventListener("click", () => {
            wrapper.classList.remove("active");
          });