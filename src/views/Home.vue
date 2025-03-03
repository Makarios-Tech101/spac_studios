<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import '../assets/main.css';
import '../assets/responsive.css';
import { ref,  watchEffect, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, Pagination, EffectFade, Navigation  } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";




const typedTitle = ref(""); // Stores the animated title
const currentSlideIndex = ref(0); // Track current slide
const selectedImage = ref(null);
const selectedTitle = ref("");
const showScrollTop = ref(false);
const activeIndex = ref(null);

const slides = ref([
  {
    title: "CAPTURE THE MOMENT",
    description: "Preserve your special moments with our professional photography services.",
    image: "/images/banner-img2.jpg",
  },
  {
    title: "CREATIVE STUDIO SHOOTS",
    description: "Explore artistic expressions with our expert studio photography.",
    image: "/images/banner-img6.jpg",
  },
  {
    title: "EVENT COVERAGE EXPERTS",
    description: "From corporate events to private celebrations, we capture it all.",
    image: "/images/banner-img3.jpg",
  },
]);



// Function to create typing effect
const typeTitle = (text) => {
  typedTitle.value = ""; // Reset the typed title
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      typedTitle.value += text[i]; // Append each character
      i++;
    } else {
      clearInterval(interval); // Stop typing when finished
    }
  }, 100); // Adjust typing speed (milliseconds per letter)
};

// Watch for slide change and update typed title
watchEffect(() => {
  typeTitle(slides.value[currentSlideIndex.value].title);
});

const images = ref([
  { src: "/images/img12.jpg", title: "Studio Photography" },
  { src: "/images/service1.jpg", title: "Wedding Photography" },
  { src: "/images/service2.jpg", title: "Child(ren) Photography" },
  { src: "/images/service3.jpg", title: "Fashion Photography" },
  { src: "/images/img8.jpg", title: "Outdoor Shoots" },
  { src: "/images/product.jpg", title: "Product Photography" },
]);

const testimonials = [
  {
    image: "/images/jpeg-optimizer_banner-img1.jpg",
    name: "BLESSING OGODOGU",
    role: "Software Developer and Founder",
    message:
      "The process was smooth, and the results were outstanding! He knew exactly how to bring out the best in each shot, and now my LinkedIn profile looks so much more professional!. Looking forward to working with Spac Studio again.",
  },
  {
    image: "/images/img3.jpg",
    name: "FEMI OYEBADE",
    role: "Senior Advocate",
    message:
      "We had a wonderful experience during our family shoot. The photographer was so patient with our little ones, and the final pictures were heartwarming. These are moments we’ll treasure forever",
  },
  {
    image: "/images/service1-c.jpg",
    name: "FUNMI AINA",
    role: "Business Owner",
    message:
      "I wanted some professional portraits, and they completely exceeded my expectations. The lighting, the angles, and the editing were all top-notch. I have never felt more confident in front of a camera!",
  },
  {
    image: "/images/img1.jpg",
    name: "PASCAL EKEH",
    role: "Senior Advocate, Deloitte",
    message:
      "For one who approached Spac Studio unprepared, I got the support I needed. ",
  }
];

// const gallerySlides = ref([
//   { name: "Portrait & Headshot", img: "/images/img9.jpg" },
//   { name: "Child Photography", img: "/images/service2.jpg" },
//   { name: "Fashion Photography", img: "/images/img8.jpg" },
//   { name: "Weddings & Events", img: "/images/service1.jpg" },
//   { name: "Birthday Shoots", img: "/images/service4.jpg" },
//   { name: "Corporate Events", img: "/images/jpeg-optimizer_banner-img1.jpg" },
//   { name: "Outdoor Shoot", img: "/images/img_book.jpg" },
//   { name: "Product Photography", img: "/images/product.jpg" },
// ]);
const gallerySlides = ref([
  { img: "/images/img9.jpg" },
  { img: "/images/service2.jpg" },
  { img: "/images/img8.jpg" },
  { img: "/images/service1.jpg" },
  { img: "/images/img11.jpg" },
  { img: "/images/service4.jpg" },
  { img: "/images/jpeg-optimizer_banner-img1.jpg" },
  { img: "/images/img_book.jpg" },
  { img: "/images/product.jpg" }
]);



// Open Modal (works for both Services & Gallery)
const openModal = (image) => {
  if (typeof image === "object") {
    selectedImage.value = image.src;
    selectedTitle.value = image.title || ""; // Set title if available
  } else {
    selectedImage.value = image;
    selectedTitle.value = ""; // No title for gallery images
  }
};

const closeModal = () => {
  selectedImage.value = null;
};


onMounted(() => {
  AOS.init();
});


const pricingOptions = ref([
  {
    title: "Lite Package",
    price: "£99",
    description: [
      "- 1 Hour Shoot ",
      "- 1 Cloth ",
      "- 3 Hi-Res Retouched Images ",
      "- Styling & Posing gGide",
      "- One person"
    ],
  },
  {
    title: "Classic Package",
    price: "£150",
    description: [
      "- 1-2 Hour Shoot",
      "- 2 Cloth Change",
      "- 7 Hi-Res Retouched Images ",
      "- Styling & Posing gGide",
      "- Up To 2 Persons"
    ],
  },
  {
    title: "Deluxe Package",
    price: "£250",
    description: [
      "- 2 Hours Shoot",
      "- 3 Cloth Change",
      "- 12 Hi-Res Retouched Images ",
      "- Styling & Posing gGide",
      "- Up To 4 Persons",
      "- £30 for every additional person"
    ],
  },
  {
    title: "Event Package",
    price: "",
    description: [
      "- 1st Hour £150",
      "- 15 Edited Photos Per Hour",
      "- Additional Hour £70",
    ],
  },
  {
    title: "Other Charges ",
    price: "",
    description: [
      "- Travel Fee For Home Shoot - Beyond 10 Mile Radius",
      "- Studio Rental Charges",
      "- Extra Edited Images @£20",
      "- 30+ Digital Unedited Images @£30",
      "- All Photos Sent Via Free Download Link. USB Delivered  Images Attracts Extra @£20 Charge",
      "- Additional Charges Will Be Incurred For Time Extension Beyond Agreed Hours",
    ],
  },
]);

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 200; // Show button after scrolling 200px
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

</script>


<template>
  <div>
    <div>
      <Header />
    </div>
    <div class="carousel-section">
      <div class="carousel-container">
      <swiper
        :modules="[Autoplay, Pagination, EffectFade]"
        :slides-per-view="1"
        :loop="true"
        :effect="'fade'"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        style="--swiper-pagination-color: white;"
        class="custom-swiper"
        @slideChange="(swiper) => (currentSlideIndex = swiper.realIndex)"
      >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="slide-content" :style="{ backgroundImage: `url(${slide.image})` }">
          <div class="overlay-container">
            <div class="overlay-1"></div>
            <div class="overlay-2"></div>
          </div> <!-- Gradient Shade on Left -->
          <div class="text-content">
            <h1>{{ typedTitle }}</h1>
            <p>{{ slide.description }}</p>
            <button class="cta-button">Book Now</button>
          </div>
        </div>
      </swiper-slide>
     </swiper>
     </div>
    </div>  
    <div class="our-service-section">
       <div class="our-service-title">
            <div>
              <h4>
                Our Services
              </h4>
            </div>
            <div>
    
            </div>
       </div>
       <div class="our-service-grid-section">
         <div>
           <div class="service-grid">
              <div 
                v-for="(image, index) in images" 
                :key="index" 
                class="grid-item group cursor-pointer" 
                @click="openModal(image)"
                data-aos="fade-up" data-aos-duration="2000"
              >
                <img :src="image.src" alt="Services Image" class="image">
              
                <!-- Hover Overlay -->
                <div class="hover-overlay">
                  <span class="overlay-text">{{ image.title }}</span>
                </div>
              </div>  
           </div>
         </div>
       </div>
    </div>
    <div class="testimonial-section">
       <div class="testimonial-title">
          <div>
            <h4>
              Testimonial
            </h4>
          </div>
          <div>

          </div>
       </div>
       <div class="testimonial-container">
        <swiper
            :modules="[Navigation]"
            :slides-per-view="1"
            :space-between="30"
            :navigation="true"
            :breakpoints="{
              992: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }"
            class="testimonial-slider"
          >
          <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="mobile-testimonial">
              <img :src="testimonial.image" alt="Testimonial" id="profile-pic" />
            </div>
            <div class="testimonial-card">
              <div class="desktop-testimonial">
                <img :src="testimonial.image" alt="Testimonial" class="profile-pic" />
              </div>
              <div class="testimonial-content">
                <h3>{{ testimonial.name }}</h3>
                <h4>{{ testimonial.role }}</h4>
                <p>{{ testimonial.message }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
       </div>
    </div>
    <div class="booknow-section">
      <div class="booknow-container">
         <div class="booknow-empty">

         </div>
         <div class="booknow-introduction">
            <span>Capture . Frame . Illuminate </span>
            <p>
              Every picture tells a story, 
              and at Spac Studio, we turn fleeting 
              moments into timeless memories. Whether 
              it's a portrait, an event, or a brand shoot, 
              we bring creativity and passion to every frame.
            </p>
            <button class="book-now">Book Now</button>
         </div>
      </div>
    </div>
    <div class="gallery-carousel-section">
       <div class="our-service-title">
            <div>
              <h4>
                Gallery
              </h4>
            </div>
            <div>
    
            </div>
       </div>
       <div class="gallery-carousel-container">
          <swiper
            :modules="[Autoplay]"
            :slides-per-view="4"
            :space-between="0"
            :loop="true"
            :breakpoints="{
                320: { slidesPerView: 1 },  
                600: { slidesPerView: 2 },  
                768: { slidesPerView: 3 },  
                992: { slidesPerView: 3 },  
                1024: { slidesPerView: 4 }   
            }"
            :autoplay="{ delay: 1500, disableOnInteraction: false }"
            class="gallery-carousel-slider"
            data-aos="fade-up" data-aos-duration="2000"
          >
            <swiper-slide v-for="(gallerySlide, index) in gallerySlides" :key="index">
              <div class="gallery-carousel-card">
                <router-link to="/gallery">
                  <img :src="gallerySlide.img" :alt="gallerySlide.name" class="gallery-carousel-image" />
                </router-link>

                <!-- <div class="overlay">
                  <h3>{{ gallerySlide.name }}</h3>
                </div> -->
              </div>
            </swiper-slide>
          </swiper>
       </div>
    </div>
    <div class="pricing-section">
      <div class="our-service-title">
            <div>
              <h4>
                Pricing
              </h4>
            </div>
            <div>
    
            </div>
       </div>
        <div class="pricing-container">
            <div class="pricing-accordion">
              <div v-for="(option, index) in pricingOptions" :key="index" class="accordion-item">
                <div class="accordion-header" @click="toggleAccordion(index)">
                  <h3>{{ option.title }} <span class="price">{{ option.price }}</span></h3>
                  <span class="icon">{{ activeIndex === index ? "-" : "+" }}</span>
                </div>
                <div class="accordion-content" v-if="activeIndex === index">
                  <ul>
                    <li v-for="(item, i) in option.description" :key="i">{{ item }}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="pricing-image">
                <img src="/images/pricing_image.jpg">
            </div>
        </div>
    </div>
    <div class="contact-section">
      <div class="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9905.016569687965!2d-0.19122115409877188!3d51.636870671592575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487619cc3ef6a4a1%3A0x518034b5f7d00bad!2sBuckingham%20Ave%2C%20London%2C%20UK!5e0!3m2!1sen!2sng!4v1740335035232!5m2!1sen!2sng"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <div class="contact-details">
         <h4>Reach Out To Us</h4>
         <h6>456 Main street, Buckingham Av. XV34 London</h6>
         <p>+44 7507 971045</p>
         <p>hello@spacstudio.com</p>
         <button>Contact Form</button>
      </div>
    </div>
     <!-- Modal (Works for both Services & Gallery) -->
     <div v-if="selectedImage" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">&times;</button>
        <img :src="selectedImage" alt="Modal Image" class="modal-image">
        <p v-if="selectedTitle" class="modal-text">{{ selectedTitle }}</p>
      </div>
    </div>
    <div>
       <Footer />
    </div>
       <!-- WhatsApp Floating Button -->
    <div>
      <a href="https://wa.me/447507971045" target="_blank" class="whatsapp-button">
        <img src="/images/WhatsApp_icon.png" alt="WhatsApp">
      </a>
    </div>  
    <div>
       <!-- Scroll to Top Button -->
      <button v-if="showScrollTop" @click="scrollToTop" class="scroll-top-button">
        ↑
      </button>
    </div>  
  </div>
</template>


