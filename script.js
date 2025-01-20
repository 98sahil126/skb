



// navbar

document.addEventListener('DOMContentLoaded', function() {
  // Store references to frequently used elements
  const navLinks = document.querySelectorAll('.nav-link');
  const dropdownLinks = document.querySelectorAll('.dropdown-link');
  
  // Function to close all dropdowns
  function closeAllDropdowns() {
      document.querySelectorAll('.dropdown').forEach(dropdown => {
          dropdown.style.display = 'none';
      });
  }

  // Function to close all child dropdowns of a parent
  function closeChildDropdowns(parent) {
      const childDropdowns = parent.querySelectorAll('.dropdown');
      childDropdowns.forEach(dropdown => {
          dropdown.style.display = 'none';
      });
  }

  // Handle mobile nav link clicks
  navLinks.forEach(link => {
      const linkAnchor = link.querySelector('a');
      const dropdown = link.querySelector('.dropdown');

      linkAnchor.addEventListener('click', function(e) {
          if (window.innerWidth <= 920) {
              e.preventDefault();
              e.stopPropagation();

              // Close other top-level dropdowns
              navLinks.forEach(otherLink => {
                  if (otherLink !== link) {
                      const otherDropdown = otherLink.querySelector('.dropdown');
                      if (otherDropdown) {
                          otherDropdown.style.display = 'none';
                      }
                  }
              });

              // Toggle current dropdown
              if (dropdown) {
                  const isVisible = dropdown.style.display === 'block';
                  closeAllDropdowns();
                  dropdown.style.display = isVisible ? 'none' : 'block';
              }
          }
      });
  });

  // Handle dropdown link clicks
  dropdownLinks.forEach(link => {
      const linkAnchor = link.querySelector('a');
      const subDropdown = link.querySelector('.dropdown');

      linkAnchor.addEventListener('click', function(e) {
          if (window.innerWidth <= 920) {
              e.preventDefault();
              e.stopPropagation();

              // Close sibling dropdowns
              const siblings = link.parentElement.children;
              Array.from(siblings).forEach(sibling => {
                  if (sibling !== link) {
                      const siblingDropdown = sibling.querySelector('.dropdown');
                      if (siblingDropdown) {
                          siblingDropdown.style.display = 'none';
                      }
                  }
              });

              // Toggle current dropdown
              if (subDropdown) {
                  const isVisible = subDropdown.style.display === 'block';
                  subDropdown.style.display = isVisible ? 'none' : 'block';
              }
          }
      });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
      if (window.innerWidth <= 920) {
          if (!e.target.closest('.nav-links')) {
              closeAllDropdowns();
          }
      }
  });

  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
          if (window.innerWidth > 920) {
              // Reset all dropdown displays
              document.querySelectorAll('.dropdown').forEach(dropdown => {
                  dropdown.style = '';
              });
          }
      }, 250);
  });

  // Handle hamburger menu checkbox
  const checkbox = document.getElementById('check');
  checkbox.addEventListener('change', function() {
      if (!this.checked) {
          closeAllDropdowns();
      }
  });
});








// animation on scroll

AOS.init({
    duration: 1200,
  })

  
  



  // about us
  class WASlider {
    constructor() {
        this.sliderTrack = document.querySelector('.wa-slider-track');
        this.dotsContainer = document.querySelector('.wa-slider-dots');
        this.currentSlide = 0;
        this.images = [
            'images/CA Shivam Bhavsar cover.jpeg',
            'images/business meeting uae-min.jpg',
            'images/core values.jpeg'
           
        ];
        
        this.initSlider();
        this.startAutoSlide();
    }
    
    initSlider() {
        // Create slides
        this.images.forEach((img, index) => {
            const slide = document.createElement('div');
            slide.className = `wa-slide ${index === 0 ? 'active' : ''}`;
            
            const image = document.createElement('img');
            image.src = img;
            image.alt = 'Team member';
            
            slide.appendChild(image);
            this.sliderTrack.appendChild(slide);
            
            // Create dots
            const dot = document.createElement('div');
            dot.className = `wa-dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
    }
    
    goToSlide(index) {
        const slides = this.sliderTrack.querySelectorAll('.wa-slide');
        const dots = this.dotsContainer.querySelectorAll('.wa-dot');
        
        slides[this.currentSlide].classList.remove('active');
        dots[this.currentSlide].classList.remove('active');
        
        this.currentSlide = index;
        
        slides[this.currentSlide].classList.add('active');
        dots[this.currentSlide].classList.add('active');
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.images.length;
        this.goToSlide(nextIndex);
    }
    
    startAutoSlide() {
        setInterval(() => this.nextSlide(), 5000); // Change slide every 5 seconds
    }
}

// Initialize the slider when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WASlider();
});





// number counter animation

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounterAnimation(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 1 });

counters.forEach((counter) => {
  counter.innerText = "0";
  observer.observe(counter);
});

function startCounterAnimation(counter) {
  const target = +counter.getAttribute("data-target");
  let count = 0;
  const increment = target / 200;

  function updateCounter() {
    if (count < target) {
      count += increment;
      counter.innerText = `${Math.ceil(count)}+`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = `${target}+`;
    }
  }

  updateCounter();
}




// services


function showMoreServices() {
  var hiddenServices = document.querySelectorAll('.hidden');
  for (var i = 0; i < hiddenServices.length; i++) {
    hiddenServices[i].classList.remove('hidden');
  }
  document.querySelector('.more-button').style.display = 'none';
}




// function toggleServices() {
//   var hiddenServices = document.querySelectorAll('.whole-box.hidden, .whole-box.visible');
//   var button = document.querySelector('.more-button a');

//   if (button.textContent === "Load More") {
//       hiddenServices.forEach(service => {
//           service.classList.remove('hidden');
//           service.classList.add('visible');
//       });
//       button.textContent = "Show Less";
//   } else {
//       hiddenServices.forEach(service => {
//           service.classList.remove('visible');
//           service.classList.add('hidden');
//       });
//       button.textContent = "Load More";
//   }
// }




// function showMoreServices() {
//   var hiddenServices = document.querySelectorAll('.hidden');
//   for (var i = 0; i < hiddenServices.length; i++) {
//     hiddenServices[i].classList.remove('hidden');
//   }
//   document.querySelector('.more-button').style.display = 'none';
// }




// industries


  document.addEventListener('DOMContentLoaded', () => {
    const slidesData = [
      { src: './images/mining.jpeg', industry: 'Mining Industry', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { src: './images/manufacturing.jpeg', industry: 'Manufacturing', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { src: './images/textile.jpeg', industry: 'Textiles', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { src: './images/it.jpeg', industry: 'IT Industry', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { src: './images/pharma.jpeg', industry: 'Pharmaceutical', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { src: './images/chemicals.jpeg', industry: 'Chemicals', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { src: './images/food.jpeg', industry: 'Food & Beverages', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
      { src: './images/retail.jpeg', industry: 'Retail', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
    ];
  
    const carouselTrack = document.querySelector('.carousel-track');
  
    const createSlide = ({ src, industry, description }) => {
      const slideElement = document.createElement('div');
      slideElement.className = 'slide';
  
      const slideImageDiv = document.createElement('div');
      slideImageDiv.className = 'slide-image';
  
      const imgElement = document.createElement('img');
      imgElement.src = src;
      imgElement.alt = `${industry} image`;
  
      const overlayElement = document.createElement('div');
      overlayElement.className = 'second-overlay';
      overlayElement.textContent = description;
  
      const industryElement = document.createElement('div');
      industryElement.className = 'industry-name';
      industryElement.textContent = industry;
  
      slideImageDiv.append(imgElement, overlayElement);
      slideElement.append(slideImageDiv, industryElement);
  
      return slideElement;
    };
  
    const populateCarouselTrack = (slides) => {
      const fragment = document.createDocumentFragment();
      slides.forEach(slide => fragment.appendChild(createSlide(slide)));
      slides.forEach(slide => fragment.appendChild(createSlide(slide)));
  
      carouselTrack.appendChild(fragment);
  
      const slideWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--slide-width'));
      const gapWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap-width'));
      const totalWidth = (slideWidth + gapWidth) * slides.length;
      const duplicatedTotalWidth = totalWidth * 2;
      const halfTotalWidth = duplicatedTotalWidth / 2;
  
      carouselTrack.style.setProperty('--total-width', `${halfTotalWidth}px`);
  
      const baseDuration = 60;
      const baseWidth = 5000;
      const scrollDuration = (halfTotalWidth / baseWidth) * baseDuration;
  
      carouselTrack.style.setProperty('--scroll-duration', `${scrollDuration}s`);
    };
  
    populateCarouselTrack(slidesData);
  });





  // testimonials

  $(document).ready(function() {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
        effect: 'slide',
    });
    
    });
