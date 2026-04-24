document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Navigation Scroll Effect
    const nav = document.getElementById("navbar");
    const desktopNavLinks = document.getElementById("desktop-nav");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("bg-royal-dark/80", "backdrop-blur-md", "py-4");
            nav.classList.remove("bg-transparent", "py-6");
            desktopNavLinks.classList.remove("text-royal-cream/90");
            desktopNavLinks.classList.add("text-royal-cream");
        } else {
            nav.classList.add("bg-transparent", "py-6");
            nav.classList.remove("bg-royal-dark/80", "backdrop-blur-md", "py-4");
            desktopNavLinks.classList.remove("text-royal-cream");
            desktopNavLinks.classList.add("text-royal-cream/90");
        }
    });

    // Mobile Menu Toggle
    const mobileMenuOpen = document.getElementById("mobile-menu-open");
    const mobileMenuClose = document.getElementById("mobile-menu-close");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = mobileMenu.querySelectorAll("a");

    const openMenu = () => {
        mobileMenu.classList.remove("hidden");
        // Small delay to allow display:block to apply before transition
        setTimeout(() => {
            mobileMenu.classList.remove("translate-x-full", "opacity-0");
        }, 10);
    };

    const closeMenu = () => {
        mobileMenu.classList.add("translate-x-full", "opacity-0");
        // Wait for transition to finish
        setTimeout(() => {
            mobileMenu.classList.add("hidden");
        }, 500); // 500ms duration matches Tailwind duration-500
    };

    mobileMenuOpen.addEventListener("click", openMenu);
    mobileMenuClose.addEventListener("click", closeMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // Reservations Button Scroll
    const reservationsBtn = document.getElementById("reservations-btn");
    if(reservationsBtn) {
        reservationsBtn.addEventListener("click", () => {
            document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Scroll Animations (IntersectionObserver)
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                // Optional: Stop observing once animated if we only want it once
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach(el => observer.observe(el));
});
