  // Sidebar resposnivenss

  const menuIcon = document.querySelector(".menu-icon");

  const sidebar = document.querySelector(".sidebar");
  const navMenu = document.querySelector(".navmenu");
  const navOverlay = document.querySelector(".nav-overlay");

  function toggleSidebar() {
    sidebar.classList.toggle("open");
    navOverlay.classList.toggle("open");
  }

  menuIcon.addEventListener("click", toggleSidebar);
  navOverlay.addEventListener("click", toggleSidebar);



  const imgBtn = document.querySelector(".img-btn");
    const imageInput = document.querySelector(".image-input");
    const uploadTxt = document.querySelector(".upload-txt");

    imgBtn.addEventListener("click", function () {
      // alert('clicked');
      imageInput.click();
    });
    imageInput.addEventListener("change", function () {
      const file = imageInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          imgBtn.style.backgroundImage = `url(${e.target.result})`;
          imgBtn.style.height = "150px";
          imgBtn.style.border = "none";
          uploadTxt.classList.toggle("hide");
        };

        reader.readAsDataURL(file);
      } else {
        alert("didnt work");
      }
      // console.log({ file: imageInput.files[0]})
    });
