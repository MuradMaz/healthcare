document.addEventListener("DOMContentLoaded", function () {
  function showPopup(message) {
    const popup = document.createElement("div");
    popup.className = "custom-popup";
    popup.textContent = message;
    document.body.appendChild(popup);

  
    setTimeout(() => popup.classList.add("show"), 100);

    
    setTimeout(() => {
      popup.classList.remove("show");
      setTimeout(() => popup.remove(), 500);
    }, 3000);
  }

  const appointmentForm = document.querySelector("#appointmentForm");
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showPopup("✅ Your appointment has been successfully booked!");
      appointmentForm.reset();
    });
  }
const pages = [
  { url: 'index.html', title: 'Home', keywords: ['home', 'welcome', 'healthcare'] },
  { url: 'doctors.html', title: 'Our Doctors', keywords: ['doctors', 'staff', 'team', 'physicians'] },
  { url: 'appointment.html', title: 'Book Appointment', keywords: ['appointment', 'schedule', 'booking'] },
  { url: 'locations.html', title: 'Our Locations', keywords: ['locations', 'clinics', 'hospitals'] },
  { url: 'stats.html', title: 'Statistics', keywords: ['stats', 'data', 'statistics'] },
  { url: 'contact.html', title: 'Contact Us', keywords: ['contact', 'help', 'support'] }
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  searchResults.innerHTML = ''; 

  if (searchTerm.length > 0) {
    const filteredPages = pages.filter(page =>
      page.title.toLowerCase().includes(searchTerm) ||
      page.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
    );

    if (filteredPages.length > 0) {
      filteredPages.forEach(page => {
        const resultElement = document.createElement('a');
        resultElement.href = page.url;
        resultElement.textContent = page.title;
        searchResults.appendChild(resultElement);
      });
    } else {
      const noResult = document.createElement('p');
      noResult.textContent = 'No results found.';
      searchResults.appendChild(noResult);
    }
  }
});

  const contactForm = document.querySelector("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showPopup("📬 Your message has been sent! We'll get back to you soon.");
      contactForm.reset();
    });
  }

});
