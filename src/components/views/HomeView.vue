<template>
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>The Future of<br>Parking Management</h1>
                <p>Transform your parking operations with intelligent automation, real-time analytics, and seamless integration. Trusted by 500+ enterprises worldwide.</p>
                <div class="hero-buttons">
                    <button class="primary-btn" @click="startDemo">Start Free Trial</button>
                    <a href="#features" class="secondary-btn">Learn More</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="section" :class="{ visible: featuresVisible }">
        <div class="container">
            <div class="section-header">
                <h2>Everything you need to manage parking</h2>
                <p>Our comprehensive platform combines cutting-edge technology with intuitive design to deliver unparalleled parking management solutions.</p>
            </div>
            <div class="features-grid">
                <div class="feature-card" v-for="feature in features" :key="feature.id">
                    <div class="feature-icon">{{ feature.icon }}</div>
                    <h3>{{ feature.title }}</h3>
                    <p>{{ feature.description }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="section stats" :class="{ visible: statsVisible }">
        <div class="container">
            <div class="section-header">
                <h2>Trusted by industry leaders</h2>
                <p>Join hundreds of companies that have transformed their parking operations with Parkprov.</p>
            </div>
            <div class="stats-grid">
                <div class="stat-item" v-for="stat in stats" :key="stat.label">
                    <span class="stat-number">{{ stat.number }}</span>
                    <span class="stat-label">{{ stat.label }}</span>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section" :class="{ visible: ctaVisible }">
        <div class="container">
            <h2>Ready to optimize your parking?</h2>
            <p>Start your free 30-day trial today. No credit card required.</p>
            <button class="primary-btn" @click="startTrial">Start Free Trial</button>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// reactive state
const isScrolled = ref(false)
const featuresVisible = ref(false)
const statsVisible = ref(false)
const ctaVisible = ref(false)

const features = ref([
  {
    id: 1,
    icon: '🚗',
    title: 'Smart Space Detection',
    description:
      'AI-powered sensors automatically detect available parking spaces in real-time, reducing search time by up to 70%.'
  },
  {
    id: 2,
    icon: '📊',
    title: 'Advanced Analytics',
    description:
      'Comprehensive dashboards provide insights into usage patterns, revenue optimization, and operational efficiency.'
  },
  {
    id: 3,
    icon: '💳',
    title: 'Seamless Payments',
    description:
      'Integrated payment processing with mobile apps, contactless payments, and automated billing systems.'
  },
  {
    id: 4,
    icon: '🔒',
    title: 'Enterprise Security',
    description:
      'Bank-level encryption, compliance with SOC 2 Type II, and advanced access control management.'
  },
  {
    id: 5,
    icon: '🔧',
    title: 'Easy Integration',
    description:
      'RESTful APIs and webhooks allow seamless integration with existing property management systems.'
  },
  {
    id: 6,
    icon: '☁️',
    title: 'Cloud Infrastructure',
    description:
      '99.9% uptime SLA with automatic scaling, real-time backups, and global CDN distribution.'
  }
])

const stats = ref([
  { number: '500+', label: 'Enterprise Clients' },
  { number: '2M+', label: 'Parking Spaces' },
  { number: '99.9%', label: 'Uptime SLA' },
  { number: '70%', label: 'Cost Reduction' }
])

// methods as functions
function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

function setupIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'features') {
            featuresVisible.value = true
          } else if (entry.target.classList.contains('stats')) {
            statsVisible.value = true
          } else if (entry.target.classList.contains('cta-section')) {
            ctaVisible.value = true
          }
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section)
  })
}

function startDemo() {
  alert('Demo started! This would typically redirect to a demo signup page.')
}

function startTrial() {
  alert('Free trial initiated! This would typically redirect to a registration page.')
}

// lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setupIntersectionObserver()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        color: #1d1d1f;
        background: #fff;
        overflow-x: hidden;
        display: block;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    /* Hero Section */
    .hero {
        display: flex;
        width: 100%;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        position: relative;
        overflow: hidden;
    }

    .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        opacity: 0.5;
    }

    .hero-content {
        z-index: 2;
        position: relative;
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInUp 1s ease forwards;
    }

    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .hero h1 {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 700;
        margin-bottom: 20px;
        letter-spacing: -0.02em;
        line-height: 1.1;
    }

    .hero p {
        font-size: clamp(1.1rem, 2vw, 1.3rem);
        color: #666;
        margin-bottom: 40px;
        max-width: 600px;
    }

    .hero-buttons {
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .primary-btn {
        background: #007AFF;
        color: white;
        padding: 15px 35px;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 600;
        font-size: 18px;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
    }

    .primary-btn:hover {
        background: #0051D0;
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(0, 122, 255, 0.3);
    }

    .secondary-btn {
        background: transparent;
        color: #007AFF;
        padding: 15px 35px;
        border: 2px solid #007AFF;
        border-radius: 25px;
        text-decoration: none;
        font-weight: 600;
        font-size: 18px;
        transition: all 0.3s ease;
    }

    .secondary-btn:hover {
        background: #007AFF;
        color: white;
        transform: translateY(-2px);
    }

    /* Section Styles */
    .section {
        display: block;
        width: 100%;
        padding: 100px 0;
        opacity: 0;
        transform: translateY(25px);
        transition: all 0.8s ease;
    }

    .section.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .section-header {
        text-align: center;
        margin-bottom: 80px;
    }

    .section h2 {
        font-size: clamp(2rem, 4vw, 3rem);
        font-weight: 700;
        margin-bottom: 20px;
        letter-spacing: -0.02em;
    }

    .section p {
        font-size: 1.2rem;
        color: #666;
        max-width: 600px;
        margin: 0 auto;
    }

    /* Features Grid */
    .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 40px;
        margin-top: 60px;
    }

    .feature-card {
        text-align: center;
        padding: 40px 20px;
        border-radius: 20px;
        background: white;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
        transition: all 0.05s ease;
        border: 1px solid #f0f0f0;
        will-change: transform, opacity;
    }

    .feature-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    .feature-icon {
        width: 80px;
        height: 80px;
        margin: 0 auto 30px;
        background: linear-gradient(135deg, #007AFF, #00D4FF);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 35px;
        color: white;
    }

    .feature-card h3 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .feature-card p {
        color: #666;
        line-height: 1.6;
    }

    /* Stats Section */
    .stats {
        background: #f8f9fa;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 40px;
    }

    .stat-item {
        text-align: center;
    }

    .stat-number {
        font-size: 3rem;
        font-weight: 700;
        color: #007AFF;
        display: block;
        margin-bottom: 10px;
    }

    .stat-label {
        font-size: 1.1rem;
        color: #666;
        font-weight: 500;
    }

    /* CTA Section */
    .cta-section {
        background: linear-gradient(135deg, #007AFF, #00D4FF);
        color: white;
        text-align: center;
    }

    .cta-section h2 {
        color: white;
        margin-bottom: 20px;
    }

    .cta-section p {
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 40px;
    }

    .cta-section .primary-btn {
        background: white;
        color: #007AFF;
    }

    .cta-section .primary-btn:hover {
        background: #f0f0f0;
        transform: translateY(-2px);
    }
</style>
