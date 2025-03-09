<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import '../assets/main.css';
import '../assets/responsive.css';
import { ref, onMounted, onUnmounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";



const showScrollTop = ref(false);

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

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <div>
      <div>
         <Header />
      </div>
      <div class="page-section">
          <div class="page-title">
              <div>
                  <h4>
                     Pricing
                  </h4>
              </div>
              <div>

              </div>
          </div>
      </div>
      <div class="aboutus-section">
          
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
