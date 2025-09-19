<template>
  <main>
      <!-- Hero Section -->
      <section class="about-hero">
          <div class="container">
              <h1 class="fade-in">About Parkprov</h1>
              <p class="fade-in">We're on a mission to revolutionize parking management through innovative technology, making urban mobility smarter and more efficient for everyone.</p>
          </div>
      </section>

      <!-- Mission Section -->
      <section class="mission-section">
          <div class="container">
              <div class="mission-content">
                  <div class="mission-text fade-in">
                      <h2>Our Mission</h2>
                      <p>Founded in 2019, Parkprov emerged from a simple observation: parking shouldn't be a frustration. Our founders, experienced in both urban planning and cutting-edge technology, recognized the massive inefficiencies in traditional parking systems.</p>
                      <p>Today, we're the leading provider of intelligent parking solutions, serving over 500 enterprise clients across three continents. Our platform processes millions of parking transactions monthly, helping reduce urban congestion and improve the overall mobility experience.</p>
                      <p>We believe that smart cities start with smart parking. Every space optimized, every minute saved, and every frustration eliminated brings us closer to a more sustainable urban future.</p>
                  </div>
                  <div class="mission-image fade-in">
                      🌍
                  </div>
              </div>
          </div>
      </section>

      <!-- Locations Section -->
      <section class="locations-section">
          <div class="container">
              <div class="section-header">
                  <h2>Our Global Presence</h2>
                  <p>With offices strategically located across major metropolitan areas, we're positioned to serve clients worldwide while maintaining local market expertise.</p>
              </div>
              <div class="locations-grid">
                  <div class="location-card fade-in" v-for="location in locations" :key="location.id">
                      <span class="location-flag">{{ location.flag }}</span>
                      <h3>{{ location.city }}</h3>
                      <div class="office-type">{{ location.type }}</div>
                      <div class="address">{{ location.address }}</div>
                      <div class="team-count">{{ location.teamSize }} team members</div>
                  </div>
              </div>
          </div>
      </section>

      <!-- Team Section -->
      <section class="team-section">
          <div class="container">
              <div class="section-header">
                  <h2>Our Team</h2>
                  <p>A diverse group of engineers, designers, and industry experts united by a shared vision of transforming urban mobility through technology.</p>
              </div>

              <div class="team-stats">
                  <div class="stat-card fade-in" v-for="stat in teamStats" :key="stat.label">
                      <span class="stat-number">{{ stat.number }}</span>
                      <span class="stat-label">{{ stat.label }}</span>
                  </div>
              </div>

              <div class="team-values">
                  <div class="value-card fade-in" v-for="value in companyValues" :key="value.id">
                      <div class="value-icon">{{ value.icon }}</div>
                      <h3>{{ value.title }}</h3>
                      <p>{{ value.description }}</p>
                  </div>
              </div>
          </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
          <div class="container">
              <h2>Join Our Mission</h2>
              <p>Ready to be part of the parking revolution? We're always looking for talented individuals who share our passion for innovation and urban sustainability.</p>
              <a href="#careers" class="primary-btn">View Open Positions</a>
          </div>
      </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const locations = ref([
  {
    id: 1,
    flag: '🇺🇸',
    city: 'San Francisco',
    type: 'Global Headquarters',
    address: '1 Market Street, Suite 3600\nSan Francisco, CA 94105',
    teamSize: 85
  },
  {
    id: 2,
    flag: '🇬🇧',
    city: 'London',
    type: 'European Operations',
    address: '25 Old Broad Street\nLondon EC2N 1HN, UK',
    teamSize: 42
  },
  {
    id: 3,
    flag: '🇸🇬',
    city: 'Singapore',
    type: 'Asia-Pacific Hub',
    address: '1 Raffles Place, Level 20\nSingapore 048616',
    teamSize: 28
  }
])

const teamStats = ref([
  { number: '155+', label: 'Team Members' },
  { number: '23', label: 'Countries Represented' },
  { number: '47%', label: 'Women in Tech' },
  { number: '4.8/5', label: 'Employee Satisfaction' }
])

const companyValues = ref([
  {
    id: 1,
    icon: '🚀',
    title: 'Innovation First',
    description:
      'We constantly push boundaries and embrace new technologies to solve complex urban mobility challenges.'
  },
  {
    id: 2,
    icon: '🤝',
    title: 'Customer Success',
    description:
      "Our clients' success is our success. We build long-term partnerships based on trust and exceptional service."
  },
  {
    id: 3,
    icon: '🌱',
    title: 'Sustainability',
    description:
      'Every solution we create contributes to more sustainable cities and reduced environmental impact.'
  }
])

onMounted(() => {
  // Add fade-in animation to elements as they come into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = '0.1s'
          entry.target.classList.add('fade-in')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style>
/* Hero Section */
.about-hero {
    padding: 70px 0 70px;
    text-align: center;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.about-hero h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
}

.about-hero p {
    font-size: 1.3rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
}

/* Mission Section */
.mission-section {
    padding: 100px 0;
}

.mission-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.mission-text h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -0.02em;
}

.mission-text p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 25px;
    line-height: 1.7;
}

.mission-image {
    aspect-ratio: 4/3;
    background: linear-gradient(135deg, #007AFF, #00D4FF);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: white;
    box-shadow: 0 20px 60px rgba(0, 122, 255, 0.3);
}

/* Locations Section */
.locations-section {
    padding: 100px 0;
    background: #f8f9fa;
}

.section-header {
    text-align: center;
    margin-bottom: 80px;
}

.section-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
}

.section-header p {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
}

.locations-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
}

.location-card {
    background: white;
    padding: 40px 30px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    border: 1px solid #f0f0f0;
}

.location-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.location-flag {
    font-size: 3rem;
    margin-bottom: 20px;
    display: block;
}

.location-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
}

.location-card .office-type {
    color: #007AFF;
    font-weight: 500;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
}

.location-card .address {
    color: #666;
    margin-bottom: 15px;
    line-height: 1.5;
}

.location-card .team-count {
    background: #f0f8ff;
    color: #007AFF;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    display: inline-block;
}

/* Team Section */
.team-section {
    padding: 100px 0;
}

.team-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    margin-bottom: 80px;
}

.stat-card {
    text-align: center;
    padding: 30px 20px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #007AFF;
    display: block;
    margin-bottom: 10px;
}

.stat-label {
    color: #666;
    font-weight: 500;
}

.team-values {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: 60px;
}

.value-card {
    text-align: center;
    padding: 40px 20px;
}

.value-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 25px;
    background: linear-gradient(135deg, #007AFF, #00D4FF);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: white;
}

.value-card h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 15px;
}

.value-card p {
    color: #666;
    line-height: 1.6;
}

/* CTA Section */
.cta-section {
    padding: 100px 0;
    background: linear-gradient(135deg, #007AFF, #00D4FF);
    color: white;
    text-align: center;
}

.cta-section h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: white;
}

.cta-section p {
    font-size: 1.2rem;
    margin-bottom: 40px;
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
}

.primary-btn {
    background: white;
    color: #007AFF;
    padding: 15px 35px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    display: inline-block;
}

.primary-btn:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
}

/* Animations */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease forwards;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 1024px) {
    .mission-content {
        grid-template-columns: 1fr;
        gap: 50px;
    }

    .locations-grid {
        grid-template-columns: 1fr;
    }

    .team-stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .team-values {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .about-hero {
        padding: 60px 0 40px;
    }

    .mission-section,
    .locations-section,
    .team-section,
    .cta-section {
        padding: 60px 0;
    }

    .section-header {
        margin-bottom: 50px;
    }

    .team-stats {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .locations-grid {
        gap: 30px;
    }

    .location-card {
        padding: 30px 20px;
    }
}
</style>
