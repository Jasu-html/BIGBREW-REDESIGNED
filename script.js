
// Buy Now popup 
const buyButtons = document.querySelectorAll('.buy-btn');
const buyPopup = document.getElementById('buyNowPopup');
const closeBuyBtn = document.getElementById('closePopup');

buyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
    buyPopup.style.display = 'flex';
    });
});

closeBuyBtn.addEventListener('click', () => {
    buyPopup.style.display = 'none';
});

buyPopup.addEventListener('click', (e) => {
    if (e.target === buyPopup) {
    buyPopup.style.display = 'none';
    }
});

// Order Now popup 
const orderNowBtn = document.querySelector('.cta');
const orderPopup = document.getElementById('orderNowPopup');
const closeOrderBtn = document.getElementById('closeOrderPopup');

orderNowBtn.addEventListener('click', () => {
    orderPopup.style.display = 'flex';
});

closeOrderBtn.addEventListener('click', () => {
    orderPopup.style.display = 'none';
});

orderPopup.addEventListener('click', (e) => {
    if (e.target === orderPopup) {
    orderPopup.style.display = 'none';
    }
});

// Franchise popup 
const openFranchiseBtn = document.getElementById('openFranchiseBtn');
const franchisePopup = document.getElementById('franchisePopup');
const closeFranchiseBtn = document.getElementById('closeFranchisePopup');

openFranchiseBtn.addEventListener('click', () => {
    franchisePopup.style.display = 'flex';
});

closeFranchiseBtn.addEventListener('click', () => {
    franchisePopup.style.display = 'none';
});

franchisePopup.addEventListener('click', (e) => {
    if (e.target === franchisePopup) {
    franchisePopup.style.display = 'none';
    }
});

// Work With Us popup logic
const openWorkBtn = document.getElementById('openWorkBtn');
const workPopup = document.getElementById('workPopup');
const closeWorkBtn = document.getElementById('closeWorkPopup');

openWorkBtn.addEventListener('click', () => {
    workPopup.style.display = 'flex';
});

closeWorkBtn.addEventListener('click', () => {
    workPopup.style.display = 'none';
});

workPopup.addEventListener('click', (e) => {
    if (e.target === workPopup) {
    workPopup.style.display = 'none';
    }
});

// Smooth scroll for "Explore" button
const exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', () => {
    document.getElementById('border1').scrollIntoView({ behavior: 'smooth' });
});

// Smooth scroll for "View Full Menu" button
const viewFullMenuBtn = document.querySelector('.view-full-menu');
viewFullMenuBtn.addEventListener('click', () => {
    document.getElementById('border1').scrollIntoView({ behavior: 'smooth' });
});

// Franchise form submission handler
const franchiseForm = document.getElementById('franchiseForm');
franchiseForm.addEventListener('submit', function(event) {
event.preventDefault(); // Prevent actual form submission / page reload
alert('Thank you for your interest in becoming a franchise partner! We will contact you shortly.');
franchiseForm.reset(); 
document.getElementById('franchisePopup').style.display = 'none'; 
});

// Work With Us form submission handler
const workForm = document.getElementById('workForm');
workForm.addEventListener('submit', function(event) {
event.preventDefault();
alert('Thank you for wanting to work with us! We will review your message and get back to you.');
workForm.reset();
document.getElementById('workPopup').style.display = 'none';
});
