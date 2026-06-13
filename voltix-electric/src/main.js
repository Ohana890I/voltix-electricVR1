import emailjs from '@emailjs/browser';
emailjs.init('vhiSaK6v-HT69yJ3P');

import { db } from './firebase.js';
import {
  collection,
  addDoc,
  getDocs
} from 'firebase/firestore';

import './style.css';

document.querySelector('#app').innerHTML = `

<header class="navbar">

  <div class="logo">
    ⚡ VOLTIX
    <span>ELECTRIC</span>
  </div>

  <nav class="nav-links">
    <a href="#services">שירותים</a>
    <a href="#works">עבודות</a>
    <a href="#reviews">ביקורות</a>
    <a href="#contact">יצירת קשר</a>
  </nav>

  <a href="tel:0508712221" class="phone-btn">
    📞 050-871-2221
  </a>

</header>

<section class="hero">

  <div class="glow"></div>

  <div class="hero-content">

    <div class="badge">
      ⚡ חשמלאי מוסמך
    </div>

    <h1>
      פתרונות חשמל
      <span>לבית ולעסק</span>
    </h1>

    <p>
      שירות מקצועי, אמין ומהיר.
      תיקונים, התקנות, לוחות חשמל ושירות חירום 24/7.
    </p>

    <div class="hero-buttons">

      <a href="tel:0508712221" class="primary-btn">
        התקשר עכשיו
      </a>

      <a
        href="https://wa.me/972508712221"
        target="_blank"
        class="secondary-btn"
      >
        WhatsApp
      </a>

    </div>

  </div>

</section>

<section class="services" id="services">

  <h2>השירותים שלנו</h2>

  <div class="services-grid">

    <div class="service-card">
      <span>⚡</span>
      <h3>תיקון תקלות חשמל</h3>
      <p>טיפול מהיר ומקצועי בכל סוגי התקלות.</p>
    </div>

    <div class="service-card">
      <span>💡</span>
      <h3>התקנת גופי תאורה</h3>
      <p>התקנה בטוחה ומדויקת לבית ולעסק.</p>
    </div>

    <div class="service-card">
      <span>🔌</span>
      <h3>נקודות חשמל</h3>
      <p>הוספת שקעים ונקודות חשמל חדשות.</p>
    </div>

    <div class="service-card">
      <span>📋</span>
      <h3>לוחות חשמל</h3>
      <p>החלפה ושדרוג של לוחות חשמל ישנים.</p>
    </div>

    <div class="service-card">
      <span>🏠</span>
      <h3>חשמל לבתים פרטיים</h3>
      <p>כל עבודות החשמל לבית ולדירה.</p>
    </div>

    <div class="service-card">
      <span>🚨</span>
      <h3>שירות חירום 24/7</h3>
      <p>זמינות מלאה למקרים דחופים.</p>
    </div>

  </div>

</section>

<section class="stats">

  <div class="stat-box">
    <h3>500+</h3>
    <p>לקוחות מרוצים</p>
  </div>

  <div class="stat-box">
    <h3>24/7</h3>
    <p>זמינות מלאה</p>
  </div>

  <div class="stat-box">
    <h3>5★</h3>
    <p>דירוג ממוצע</p>
  </div>

  <div class="stat-box">
    <h3>10+</h3>
    <p>שנות ניסיון</p>
  </div>

</section>

<section class="gallery" id="works">

  <h2>העבודות שלנו</h2>

  <p class="gallery-subtitle">
    חלק מהפרויקטים והעבודות שביצענו ללקוחותינו
  </p>

  <div class="gallery-grid">

    <div class="gallery-card">
      <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200" alt="">
    </div>

    <div class="gallery-card">
      <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200" alt="">
    </div>

    <div class="gallery-card">
      <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200" alt="">
    </div>

    <div class="gallery-card">
      <img src="https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1200" alt="">
    </div>

    <div class="gallery-card">
      <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200" alt="">
    </div>

    <div class="gallery-card">
      <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200" alt="">
    </div>

  </div>

</section>

<section class="reviews-section" id="reviews">

  <h2>ביקורות לקוחות</h2>

  <form id="reviewForm" class="review-form">

    <input
      type="text"
      id="name"
      placeholder="השם שלך"
      required
    >

  <div class="rating-stars">

  <span class="star" data-rating="1">★</span>
  <span class="star" data-rating="2">★</span>
  <span class="star" data-rating="3">★</span>
  <span class="star" data-rating="4">★</span>
  <span class="star" data-rating="5">★</span>

</div>

    <textarea
      id="comment"
      placeholder="כתוב ביקורת..."
      required
    ></textarea>

    <button type="submit">
      שלח ביקורת
    </button>

  </form>

  <div id="reviews-container"></div>

</section>

<section class="contact-section" id="contact">

  <div class="contact-box">

    <h2>יצירת קשר</h2>

    <p>
      השאירו פרטים ונחזור אליכם בהקדם האפשרי ⚡
    </p>

    <form id="contactForm" class="contact-form">

      <input
        type="text"
        id="contactName"
        placeholder="👤 שם מלא"
        required
      >

      <input
        type="tel"
        id="contactPhone"
        placeholder="📞 מספר טלפון"
        required
      >

      <textarea
        id="contactMessage"
        placeholder="✍️ תוכן הפנייה"
        required
      ></textarea>

      <button type="submit">
        🚀 שלח פנייה
      </button>

    </form>

  </div>

</section>

`;






const reviewForm =
  document.getElementById('reviewForm');

const reviewsContainer =
  document.getElementById('reviews-container');

async function loadReviews() {

  reviewsContainer.innerHTML = '';

  const snapshot =
    await getDocs(collection(db, 'reviews'));



  const reviews = [];

snapshot.forEach((doc) => {
  reviews.push(doc.data());
});

reviews.reverse();

reviews.slice(0,5).forEach((review) => {

  const date =
    review.createdAt
      ? new Date(review.createdAt)
          .toLocaleDateString('he-IL')
      : 'תאריך לא ידוע';

  reviewsContainer.innerHTML += `
    <div class="review-card">

      <h3>${review.name}</h3>

      <div class="review-stars">
        ${'⭐'.repeat(Number(review.rating))}
      </div>

      <p>${review.comment}</p>

      <small>📅 ${date}</small>

    </div>
  `;
});
}

let selectedRating = 0;

const stars =
  document.querySelectorAll('.star');

stars.forEach((star) => {

  star.addEventListener('click', () => {

    selectedRating =
      Number(star.dataset.rating);

    stars.forEach((s) => {

      if (
        Number(s.dataset.rating)
        <= selectedRating
      ) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }

    });

  });

});






reviewForm.addEventListener(
  'submit',
  async (e) => {

    e.preventDefault();

    const name =
      document.getElementById('name').value;

  const rating = selectedRating;

    const comment =
      document.getElementById('comment').value;


if (!rating) {

  alert('בחר דירוג');

  return;
}





await addDoc(
  collection(db, 'reviews'),
  {
    name,
    rating,
    comment,
    createdAt: new Date().toISOString()
  }
);

    reviewForm.reset();

selectedRating = 0;

stars.forEach((star) => {
  star.classList.remove('active');
});






    loadReviews();
  }
);

loadReviews();









const contactForm =
  document.getElementById('contactForm');

contactForm.addEventListener(
  'submit',
  async (e) => {

    e.preventDefault();
    const name =
      document.getElementById('contactName').value;

    const phone =
      document.getElementById('contactPhone').value;

    const message =
      document.getElementById('contactMessage').value;

    try {
      await addDoc(
        collection(db, 'contacts'),
        {
          name,
          phone,
          message,
        }
      );

      await emailjs.send(
        'service_5rrd2k4',
        'template_xie0j4q',
        {
          name,
          phone,
          message
        }
      );

      console.log('EMAIL SENT');

    } catch(error) {

      console.log('STATUS:', error.status);
      console.log('TEXT:', error.text);

      alert(
        `STATUS: ${error.status}
TEXT: ${error.text}`
      );

    }
  }
);