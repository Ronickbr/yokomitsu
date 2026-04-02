# Section Patterns Reference

Copy-paste starting points for common web page sections. Always customize to fit the aesthetic direction.

---

## Hero Variants

### Hero 1 — Centered, Bold Headline
```html
<section class="hero">
  <div class="hero-content">
    <span class="hero-eyebrow">The future of X</span>
    <h1>One Bold Line<br>That Changes Everything</h1>
    <p class="hero-sub">Supporting sentence that explains the what and why in under 20 words.</p>
    <div class="hero-actions">
      <a href="#" class="btn-primary">Get Started Free</a>
      <a href="#" class="btn-ghost">See how it works →</a>
    </div>
  </div>
  <div class="hero-visual"><!-- image or illustration --></div>
</section>
```

### Hero 2 — Left-aligned, Split Layout
```html
<section class="hero hero--split">
  <div class="hero-text">
    <h1>Bold Claim<br><em>Italic Emphasis</em></h1>
    <p>Short, punchy explanation.</p>
    <a href="#" class="btn-primary">Primary CTA</a>
  </div>
  <div class="hero-media">
    <img src="https://picsum.photos/600/500" alt="Product visual">
  </div>
</section>
```

### Hero 3 — Full-width background, overlay text
```html
<section class="hero hero--fullbg" style="background-image: url('...')">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>Maximum Impact</h1>
    <p>Subtitle here</p>
    <a href="#" class="btn-primary">CTA</a>
  </div>
</section>
```

---

## Feature / Benefit Grid

```html
<section class="features">
  <div class="container">
    <h2>Why choose us</h2>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Feature Name</h3>
        <p>Short explanation of the benefit, not the feature itself.</p>
      </div>
      <!-- repeat 3-6 times -->
    </div>
  </div>
</section>
```

CSS for 3-column grid:
```css
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
```

---

## Testimonials

```html
<section class="testimonials">
  <div class="container">
    <h2>Loved by thousands</h2>
    <div class="testimonials-grid">
      <blockquote class="testimonial-card">
        <p>"This changed how our team works completely. Couldn't imagine going back."</p>
        <footer>
          <img src="https://picsum.photos/48/48" alt="Avatar" class="avatar">
          <div>
            <strong>Jane Smith</strong>
            <span>Head of Design, Acme Corp</span>
          </div>
        </footer>
      </blockquote>
      <!-- repeat -->
    </div>
  </div>
</section>
```

---

## Stats / Social Proof Bar

```html
<section class="stats">
  <div class="container stats-grid">
    <div class="stat">
      <span class="stat-number">10,000+</span>
      <span class="stat-label">Happy customers</span>
    </div>
    <div class="stat">
      <span class="stat-number">99.9%</span>
      <span class="stat-label">Uptime guaranteed</span>
    </div>
    <div class="stat">
      <span class="stat-number">4.9★</span>
      <span class="stat-label">Average rating</span>
    </div>
  </div>
</section>
```

---

## Pricing Table

```html
<section class="pricing">
  <div class="container">
    <h2>Simple, transparent pricing</h2>
    <div class="pricing-grid">
      <div class="pricing-card">
        <h3>Starter</h3>
        <div class="price"><span class="price-amount">$0</span>/mo</div>
        <ul class="pricing-features">
          <li>✓ Feature one</li>
          <li>✓ Feature two</li>
          <li class="disabled">✗ Feature three</li>
        </ul>
        <a href="#" class="btn-ghost">Get started</a>
      </div>
      <div class="pricing-card pricing-card--featured">
        <span class="badge">Most Popular</span>
        <h3>Pro</h3>
        <div class="price"><span class="price-amount">$29</span>/mo</div>
        <ul class="pricing-features">
          <li>✓ Everything in Starter</li>
          <li>✓ Feature three</li>
          <li>✓ Feature four</li>
        </ul>
        <a href="#" class="btn-primary">Get started</a>
      </div>
    </div>
  </div>
</section>
```

---

## How It Works / Steps

```html
<section class="how-it-works">
  <div class="container">
    <h2>How it works</h2>
    <div class="steps">
      <div class="step">
        <div class="step-number">01</div>
        <div class="step-content">
          <h3>Step Title</h3>
          <p>Brief description of this step and what happens.</p>
        </div>
      </div>
      <!-- repeat for each step -->
    </div>
  </div>
</section>
```

---

## Final CTA Section

```html
<section class="cta-final">
  <div class="container">
    <h2>Ready to get started?</h2>
    <p>Join thousands of teams already using our product.</p>
    <a href="#" class="btn-primary btn--large">Start for free →</a>
    <small>No credit card required. Free plan available.</small>
  </div>
</section>
```

---

## Footer

```html
<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <a href="/" class="logo">BrandName</a>
      <p>Short tagline or mission statement.</p>
    </div>
    <div class="footer-links">
      <h4>Product</h4>
      <ul>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Changelog</a></li>
      </ul>
    </div>
    <div class="footer-links">
      <h4>Company</h4>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 BrandName. All rights reserved.</p>
  </div>
</footer>
```

---

## Navigation (Sticky)

```html
<header class="site-header">
  <nav class="navbar">
    <a href="/" class="nav-logo">Brand</a>
    <ul class="nav-links">
      <li><a href="#features">Features</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#about">About</a></li>
    </ul>
    <div class="nav-actions">
      <a href="#" class="btn-ghost btn--sm">Login</a>
      <a href="#" class="btn-primary btn--sm">Sign up</a>
    </div>
    <button class="nav-toggle" aria-label="Toggle menu">☰</button>
  </nav>
</header>
```

```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-bg);
  border-bottom: 1px solid rgba(0,0,0,0.08);
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1rem 2rem;
}
```
