<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import '../assets/main.css';
import { ref,  watchEffect, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";


const galleries = ref([
  "/images/service1.jpg",
  "/images/jpeg-optimizer_banner-img1.jpg",
  "/images/img7.jpg",
  "/images/img1.jpg",
  "/images/service4.jpg",
  // "/images/img3.jpg",
  "/images/service2.jpg",
  "/images/banner-img3.jpg",
  "/images/img6.jpg",
  "/images/img2.jpg",
  "/images/service3.jpg",
  // "/images/service5.jpg",
  "/images/service6.jpg",
  "/images/jpeg-optimizer_banner-img2.jpg",
  "/images/img4.jpg",
  // "/images/img6.jpg",
  "/images/banner-img3.jpg",
  "/images/service4.jpg",
]);

const selectedImage = ref(null);
const showScrollTop = ref(false);

const openModal = (image) => {
  selectedImage.value = image;
};

const closeModal = () => {
  selectedImage.value = null;
};

onMounted(() => {
  AOS.init();
});



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
        <div class="gallery-section">
            <div class="gallery-title">
                <div>
                    <h4>
                       Gallery
                    </h4>
                </div>
                <div>

                </div>
            </div>
            <div class="gallery-container">
                <div class="gallery" >
                    <img 
                    v-for="(gallery, index) in galleries" 
                    :key="index"
                    :src="gallery" 
                    alt="Gallery Image" 
                    class="gallery-item" 
                    @click="openModal(gallery)"
                    :class="{'tall': index % 5 === 0, 'wide': index % 7 === 0}"
                    data-aos="fade-up" data-aos-duration="2000"
                    
                    />
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div v-if="selectedImage" class="modal" @click="closeModal">
            <div class="modal-content" @click.stop>
                <button class="close-button" @click="closeModal">&times;</button>
                <img :src="selectedImage" alt="Modal Image" class="modal-image">
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