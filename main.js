// navigation menu
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".nav__burger");
  const navLinks = document.querySelector(".nav__links");

  burger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  const navLinksList = document.querySelectorAll(".nav__link");
  navLinksList.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
});


// slideshow
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".hero__img");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, idx) => {
      if (idx === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000);
});


// form validation
document.addEventListener("DOMContentLoaded", function () {
            const form = document.querySelector(".modal__form");
            
            form.addEventListener("submit", function (event) {
                event.preventDefault();
                
                let email = document.getElementById("email").value;
                let password = document.getElementById("password").value;
                let passwordConfirmation = document.getElementById("password_confirmation").value;

                if (email === "" || password === "" || passwordConfirmation === "") {
                    alert("Please fill out all required fields");
                    return;
                }

                let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    alert("Please enter a valid email address");
                    return;
                }

                if (password !== passwordConfirmation) {
                    alert("Passwords do not match");
                    return;
                }

                alert("Form submitted successfully!");
                form.reset();
            });
        });

// Scroll to top
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.textContent = "^";
  scrollToTopButton.classList.add("scrollToTopButton");

  document.body.appendChild(scrollToTopButton);

  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
});

// smooth scrolling
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav__link");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });
});


// modal windows
document.addEventListener("DOMContentLoaded", function () {
  const modalTriggers = document.querySelectorAll(".modal-trigger");
  const modalCloseBtns = document.querySelectorAll(".modal-close");
  const modalOverlay = document.querySelector(".modal-overlay");

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add("open");
        modalOverlay.classList.add("open");

        modalCloseBtns.forEach((closeBtn) => {
          closeBtn.addEventListener("click", function () {
            modal.classList.remove("open");
            modalOverlay.classList.remove("open");
          });
        });

        modalOverlay.addEventListener("click", function () {
          modal.classList.remove("open");
          modalOverlay.classList.remove("open");
        });
      }
    });
  });
});


// interactive features
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav__link");
  const heroBtn = document.querySelector(".hero__btn");
  const workCard = document.querySelector(".work__card");

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.classList.add("hover");
    });
    link.addEventListener("mouseleave", function () {
      this.classList.remove("hover");
    });
  });
  heroBtn.addEventListener("mouseenter", function () {
    this.classList.add("animate");
  });
  heroBtn.addEventListener("mouseleave", function () {
    this.classList.remove("animate");
  });
  workCard.addEventListener("mouseenter", function () {
    this.classList.add("animate");
  });
  workCard.addEventListener("mouseleave", function () {
    this.classList.remove("animate");
  });

  heroBtn.addEventListener("mousedown", function () {
    this.classList.add("active");
  });
  heroBtn.addEventListener("mouseup", function () {
    this.classList.remove("active");
  });
});

// event handling
document.addEventListener("DOMContentLoaded", function() {
    const cartButton = document.querySelector('.nav__cart');
    
    cartButton.addEventListener('click', function() {
        alert('Item added to cart!');
    });

    const orderButtons = document.querySelectorAll('.hero__btn');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Order placed successfully!');
            
        });
    });
});
