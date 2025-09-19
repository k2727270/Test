<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-main">
                    <div class="footer-brand">
                        <img src="../../assets/logo.svg" alt="Parkprov Logo" class="footer-logo">
                        <p class="footer-tagline">Smart parking management for modern enterprises</p>
                        <div class="social-links">
                            <a href="#" class="social-link">📧</a>
                            <a href="#" class="social-link">🐦</a>
                            <a href="#" class="social-link">💼</a>
                            <a href="#" class="social-link">📺</a>
                        </div>
                    </div>

                    <div class="footer-links">
                        <div class="footer-column">
                            <h4>Product</h4>
                            <ul>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#integrations">Integrations</a></li>
                                <li><a href="#security">Security</a></li>
                                <li><a href="#api">API Docs</a></li>
                                <li><a href="#updates">What's New</a></li>
                            </ul>
                        </div>

                        <div class="footer-column">
                            <h4>Solutions</h4>
                            <ul>
                                <li><a href="#enterprise">Enterprise</a></li>
                                <li><a href="#retail">Retail Centers</a></li>
                                <li><a href="#healthcare">Healthcare</a></li>
                                <li><a href="#education">Education</a></li>
                                <li><a href="#municipal">Municipal</a></li>
                            </ul>
                        </div>

                        <div class="footer-column">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#documentation">Documentation</a></li>
                                <li><a href="#case-studies">Case Studies</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#webinars">Webinars</a></li>
                                <li><a href="#help">Help Center</a></li>
                            </ul>
                        </div>

                        <div class="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#careers">Careers</a></li>
                                <li><a href="#press">Press Kit</a></li>
                                <li><a href="#partners">Partners</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- <div class="footer-newsletter">
                    <h4>Stay Updated</h4>
                    <p>Get the latest parking industry insights and product updates</p>
                    <div class="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            v-model="newsletterEmail"
                            @keyup.enter="subscribeNewsletter"
                        >
                        <button @click="subscribeNewsletter" class="newsletter-btn">Subscribe</button>
                    </div>
                </div> -->

                <div class="footer-bottom">
                    <div class="footer-legal">
                        <p>&copy; 2025 Parkprov. All rights reserved.</p>
                        <div class="legal-links">
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Service</a>
                            <a href="#cookies">Cookie Policy</a>
                            <a href="#compliance">Compliance</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'

const newsletterEmail = ref('')

function subscribeNewsletter() {
  if (newsletterEmail.value && newsletterEmail.value.includes('@')) {
    alert(`Thank you for subscribing with ${newsletterEmail.value}!`)
    newsletterEmail.value = ''
  } else {
    alert('Please enter a valid email address.')
  }
}
</script>

<style scoped>
.footer {
    background: #1d1d1f;
    color: white;
    padding: 80px 0 0;
}

.footer-content {
    display: flex;
    flex-direction: column;
    gap: 60px;
}

.footer-main {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 60px;
    align-items: start;
}

.footer-brand {
    max-width: 300px;
}

.footer-logo {
    max-width: 150px;
    height: auto;
    margin-bottom: 15px;
}

.footer-tagline {
    color: #8e8e93;
    margin-bottom: 30px;
    line-height: 1.5;
}

.social-links {
    display: flex;
    gap: 15px;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    text-decoration: none;
    font-size: 18px;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.social-link:hover {
    background: rgba(0, 122, 255, 0.2);
    transform: translateY(-2px);
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
}

.footer-column h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
    color: white;
}

.footer-column ul {
    list-style: none;
}

.footer-column li {
    margin-bottom: 12px;
}

.footer-column a {
    color: #8e8e93;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
}

.footer-column a:hover {
    color: #007AFF;
}

.footer-newsletter {
    background: rgba(255, 255, 255, 0.05);
    padding: 40px;
    border-radius: 16px;
    text-align: center;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-newsletter h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
}

.footer-newsletter p {
    color: #8e8e93;
    margin-bottom: 30px;
}

.newsletter-form {
    display: flex;
    gap: 10px;
    max-width: 400px;
    margin: 0 auto;
}

.newsletter-form input {
    flex: 1;
    padding: 12px 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 14px;
}

.newsletter-form input::placeholder {
    color: #8e8e93;
}

.newsletter-form input:focus {
    outline: none;
    border-color: #007AFF;
}

.newsletter-btn {
    padding: 12px 24px;
    background: #007AFF;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
}

.newsletter-btn:hover {
    background: #0051D0;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-legal {
    display: flex;
    align-items: center;
    gap: 30px;
}

.footer-legal p {
    color: #8e8e93;
    font-size: 14px;
}

.legal-links {
    display: flex;
    gap: 20px;
}

.legal-links a {
    color: #8e8e93;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
}

.legal-links a:hover {
    color: #007AFF;
}

.footer-certifications {
    display: flex;
    gap: 15px;
}

.cert-badge {
    padding: 6px 12px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
    color: #8e8e93;
    border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
