<template>
  <main>
    <div class="parking-widget">
      <!-- <div class="widget-header">
        <h3>Find Parking</h3>
        <p>Reserve your parking spot in advance for a seamless experience</p>
      </div> -->

      <div class="map-container">
        <div class="map-header">
          <h4>📍 Location</h4>
          <p>181 Chestnut St, Providence, RI 02903</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6372.877253339207!2d-71.41193692384994!3d41.817677869194966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4456b1e81e559%3A0x660e0ee6a099f161!2s181%20Chestnut%20St%2C%20Providence%2C%20RI%2002903!5e1!3m2!1sen!2sus!4v1758308850244!5m2!1sen!2sus"
          class="map-iframe"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div class="map-overlay">
          <a
            :href="spotHeroLink"
            target="_blank"
            rel="noopener noreferrer"
            class="map-cta-btn"
          >
            Reserve Now
          </a>
        </div>
      </div>

      <div class="widget-content">
        <div class="parking-options">
          <!-- <div class="option-card">
            <div class="option-icon">🚗</div>
            <h4>SpotHero</h4>
            <p>Book convenient and affordable parking through our partner SpotHero</p>
            <a
              :href="spotHeroLink"
              target="_blank"
              rel="noopener noreferrer"
              class="primary-btn"
            >
              Reserve Parking
            </a>
          </div> -->

          <div class="option-card">
            <div class="option-icon">📧</div>
            <h4>Contact Us</h4>
            <p>Need help with parking arrangements? Get in touch with our team</p>
            <a
              :href="emailLink"
              class="secondary-btn"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      <!-- Tracking pixel for SpotHero -->
      <img
        :src="trackingPixelSrc"
        width="0"
        height="0"
        style="position:absolute;visibility:hidden;"
        border="0"
        alt=""
      />
    </div>
  </main>

</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  source: {
    type: String,
    default: 'parkingpage'
  },
  email: {
    type: String,
    default: 'parking@parkprov.com'
  }
})

// Computed properties
const spotHeroLink = computed(() => {
  return `https://spothero.app.link/ts1p2NqSe1?kind=city&id=157&$3p=a_hasoffers&$affiliate_json=http%3A%2F%2Ftracking.spothero.com%2Faff_c%3Foffer_id%3D1%26aff_id%3D2172%26file_id%3D28%26source%3D181chestnutst%26aff_sub2%3D${props.source}%26aff_sub3%3Dlink%26format%3Djson&spot-id=94332`
})

const emailLink = computed(() => {
  return `mailto:${props.email}?subject=Parking Inquiry&body=Hello, I would like to inquire about parking options.`
})

const trackingPixelSrc = computed(() => {
  return `http://tracking.spothero.com/aff_i?offer_id=1&aff_id=2172&file_id=28&source=181chestnutst&aff_sub2=${props.source}&aff_sub3=button`
})
</script>

<style scoped>
.parking-widget {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  max-width: 800px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.widget-header {
  text-align: center;
  margin-bottom: 40px;
}

.widget-header h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #1d1d1f;
  letter-spacing: -0.02em;
}

.widget-header p {
  font-size: 1.1rem;
  color: #666;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Map Container Styles */
.map-container {
  position: relative;
  margin-bottom: 40px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  background: white;
  border: 1px solid #f0f0f0;
}

.map-header {
  background: linear-gradient(135deg, #007AFF, #00D4FF);
  color: white;
  padding: 20px 30px;
  text-align: center;
}

.map-header h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  letter-spacing: -0.01em;
}

.map-header p {
  font-size: 0.95rem;
  margin: 0;
  opacity: 0.9;
  font-weight: 400;
}

.map-iframe {
  width: 100%;
  height: 400px;
  border: none;
  display: block;
}

.map-overlay {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.map-cta-btn {
  background: rgba(0, 122, 255, 0.95);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.map-cta-btn:hover {
  background: rgba(2, 86, 222);
  transform: translateX(-50%) translateY(-2px);
  box-shadow: 0 6px 25px rgba(0, 122, 255, 0.1);
  text-decoration: none;
  color: rgb(244, 244, 244);
}

.parking-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.option-card {
  text-align: center;
  padding: 30px 20px;
  border-radius: 15px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
  will-change: transform, box-shadow;
}

.option-card:hover {
  /* transform: translateY(-5px); */
  /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1); */
  background: rgb(254, 254, 254);
}

.option-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, #007AFF, #00D4FF);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
}

.option-card h4 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #1d1d1f;
}

.option-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 25px;
  font-size: 0.95rem;
}

.primary-btn {
  background: #007AFF;
  color: white;
  padding: 12px 30px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: inline-block;
}

.primary-btn:hover {
  background: #0051D0;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.3);
  text-decoration: none;
  color: white;
}

.secondary-btn {
  background: transparent;
  color: #007AFF;
  padding: 12px 30px;
  border: 2px solid #007AFF;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  display: inline-block;
}

.secondary-btn:hover {
  background: #007AFF;
  color: white;
  transform: translateY(-2px);
  text-decoration: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .parking-widget {
    padding: 30px 20px;
    margin: 0 20px;
  }

  .widget-header h3 {
    font-size: 1.6rem;
  }

  .map-container {
    margin: 30px 0;
    border-radius: 15px;
  }

  .map-header {
    padding: 15px 20px;
  }

  .map-header h4 {
    font-size: 1.1rem;
  }

  .map-header p {
    font-size: 0.9rem;
  }

  .map-iframe {
    height: 250px;
  }

  .map-cta-btn {
    padding: 10px 20px;
    font-size: 13px;
  }

  .parking-options {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .option-card {
    padding: 25px 15px;
  }

  .primary-btn, .secondary-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
