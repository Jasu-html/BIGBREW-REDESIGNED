// Toggle Mobile Menu
const hamburger = document.getElementById('menu-toggle');
const menu = document.getElementById('main-menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close menu when a link is clicked 
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

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

if(orderNowBtn) {
    orderNowBtn.addEventListener('click', () => {
        orderPopup.style.display = 'flex';
    });
}

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

if(openFranchiseBtn) {
    openFranchiseBtn.addEventListener('click', () => {
        franchisePopup.style.display = 'flex';
    });
}

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

if(openWorkBtn) {
    openWorkBtn.addEventListener('click', () => {
        workPopup.style.display = 'flex';
    });
}

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
if(exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        const border1 = document.getElementById('border1');
        if(border1) border1.scrollIntoView({ behavior: 'smooth' });
    });
}



// Sticky Navbar Logic
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    // If we scroll more than 5 pixels, enable the sticky style
    if (window.scrollY > 5) {
        header.classList.add('scrolled');
    } else {
        // If we are at the very top, revert to the floating style
        header.classList.remove('scrolled');
    }
});
// Contact Form Animation
    function submitContactForm(event) {
        event.preventDefault(); 
        
        const btn = event.target.querySelector('button');
        const originalText = btn.innerHTML;
        
        // Change button state
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.style.opacity = '0.8';
        
        // Simulate form submission delay
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            btn.style.backgroundColor = '#4caf50'; // Green
            btn.style.color = 'white';
            
            // Reset form
            document.getElementById('contactForm').reset();
            
            // Restore button after 3 seconds
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = ''; 
                btn.style.color = '';
                btn.style.opacity = '1';
            }, 3000);
        }, 1500);
    }