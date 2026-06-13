import { db } from './firebase.js';

import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from 'firebase/firestore';

async function loadData() {

  const reviewsSnap =
    await getDocs(
      collection(db, 'reviews')
    );

  const contactsSnap =
    await getDocs(
      collection(db, 'contacts')
    );

  document.getElementById(
    'reviewsCount'
  ).innerText =
    reviewsSnap.size;

  document.getElementById(
    'contactsCount'
  ).innerText =
    contactsSnap.size;

  const reviewsList =
    document.getElementById(
      'reviewsList'
    );

  reviewsList.innerHTML = '';

reviewsSnap.forEach((doc) => {

  const review = doc.data();
  const id = doc.id;

  reviewsList.innerHTML += `
    <div class="item">

      <strong>${review.name}</strong>

      <br>

      ${'⭐'.repeat(Number(review.rating))}

      <br><br>

      ${review.comment}

      <br><br>

      <button
        onclick="deleteReview('${id}')"
        class="delete-btn"
      >
        🗑️ מחק
      </button>

    </div>
  `;
});

  const contactsList =
    document.getElementById(
      'contactsList'
    );

  contactsList.innerHTML = '';

contactsSnap.forEach((doc) => {

  const contact = doc.data();
  const id = doc.id;

  contactsList.innerHTML += `
    <div class="item">

      <strong>${contact.name}</strong>

      <br>

      📞 ${contact.phone}

      <br><br>

      ${contact.message}

      <br><br>

      <button
        onclick="deleteContact('${id}')"
        class="delete-btn"
      >
        🗑️ מחק
      </button>

    </div>
  `;
});

}

loadData();




window.deleteReview = async (id) => {

  await deleteDoc(
    doc(db, 'reviews', id)
  );

  loadData();
};

window.deleteContact = async (id) => {

  await deleteDoc(
    doc(db, 'contacts', id)
  );

  loadData();
};