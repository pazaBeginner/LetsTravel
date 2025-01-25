// Toggle Hamburger
const toggle = document.querySelector('#toggle-hamburger');
const navMenu = document.querySelector('.nav-link');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('hamburger-active');
    navMenu.classList.toggle('nav-link-active');
})

function handleScreenSize() {
    // Bersihkan event listener sebelumnya agar tidak duplikat
    document.removeEventListener('click', handleSmallScreenClick);  
    if (window.innerWidth < 1024) {
      // Tambahkan event listener untuk layar kecil
      document.addEventListener('click', handleSmallScreenClick);
    }
}

  // Fungsi untuk menangani layar kecil (< 768px)
function handleSmallScreenClick(e) {
    if (!toggle.contains(e.target) && !navMenu.contains(e.target)) {
      toggle.classList.remove('hamburger-active');
      navMenu.classList.remove('nav-link-active');
    }
  }
  // Jalankan fungsi saat halaman dimuat
  handleScreenSize();
  
  // Pantau perubahan ukuran layar
  window.addEventListener('resize', handleScreenSize);


// Header
window.onscroll = () => {
    const header = document.querySelector('.nav-container');
    const header_Fixed = header.offsetTop;

    if(window.pageYOffset > header_Fixed) {
        header.classList.add('navbar-container-fixed');
    } else {
        header.classList.remove('navbar-container-fixed');
    }
}

// memberikan atribut loading pada img
const images = document.querySelectorAll('.load');
images.forEach(img => {
  img.setAttribute('loading', 'lazy');
})

// slider
const cards = document.querySelectorAll(".card-images-slider .card");
const heroImage = document.querySelector(".hero-image");
const detailTitle = document.querySelector(".detail-title");
const detailParagraph = document.querySelector(".detail-paragraph");
const arrowLeft = document.querySelector(".arrow.left");
const arrowRight = document.querySelector(".arrow.right");
let currentIndex = 0;

function updateHeroContent(index) {
  // Update hero image
  const selectedCard = cards[index];
  heroImage.src = selectedCard.src;
  heroImage.alt = selectedCard.alt;
  heroImage.title = selectedCard.title;

  // Update hero text
  detailTitle.textContent = selectedCard.dataset.title || "";
  detailParagraph.textContent = selectedCard.dataset.paragraph || "";
}

function slideLeft() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateHeroContent(currentIndex);
}

function slideRight() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateHeroContent(currentIndex);
}

// Attach event listeners to arrows
arrowLeft.addEventListener("click", (e) => {
    e.preventDefault();
    slideLeft();
});

arrowRight.addEventListener("click", (e) => {
    e.preventDefault();
    slideRight();
});

updateHeroContent(currentIndex);

//Animasi AutoScroll 
const destinationSlider = document.querySelector('.destination-slider').cloneNode(true);
document.querySelector('.container-slider').appendChild(destinationSlider);

// destinationSlider.addEventListener('mouseover', () => {
//   destinationSlider.style.animationPlayState = 'paused';
// })

const currentYear = new Date().getFullYear();
const footerTeksYear = document.querySelector('.year');
footerTeksYear.innerHTML = currentYear;
