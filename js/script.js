// ========================================
// مطعم سِدْرَة - جافا سكريبت بسيط وشغال
// ========================================

// ----------------------------------------
// 1. قائمة الهامبرغر للجوال
// ----------------------------------------
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // تغيير شكل الهامبرغر (X)
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// ----------------------------------------
// 2. إغلاق القائمة عند الضغط على رابط
// ----------------------------------------
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            // إعادة الهامبرغر للشكل الطبيعي
            const spans = document.querySelectorAll('.hamburger span');
            if (spans) {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });
});

// ----------------------------------------
// 3. إغلاق القائمة عند تغيير حجم الشاشة
// ----------------------------------------
window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = document.querySelectorAll('.hamburger span');
        if (spans) {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
});

// ----------------------------------------
// 4. تأثير ظهور العناصر عند التمرير
// ----------------------------------------
const animatedElements = document.querySelectorAll('.view-card, .gallery-item, .seating-card');

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

animatedElements.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// ----------------------------------------
// 5. تكبير الصور عند المرور عليها (hover)
// ----------------------------------------
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        const img = this.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1.05)';
            img.style.transition = '0.3s';
        }
    });
    item.addEventListener('mouseleave', function() {
        const img = this.querySelector('img');
        if (img) {
            img.style.transform = 'scale(1)';
        }
    });
});

// ----------------------------------------
// 6. تأثير على بطاقات الإطلالة
// ----------------------------------------
const viewCards = document.querySelectorAll('.view-card');
viewCards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.transition = '0.3s';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ----------------------------------------
// 7. تأثير على بطاقات الجلسات
// ----------------------------------------
const seatingCards = document.querySelectorAll('.seating-card');
seatingCards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = '0.3s';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ----------------------------------------
// 8. تفعيل الرابط النشط عند التمرير
// ----------------------------------------
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-menu a').forEach(function(link) {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (href === `#${current}` || (href === 'index.html' && current === 'home')) {
            link.classList.add('active');
        }
        if (current === 'home' && href === 'index.html') {
            link.classList.add('active');
        }
    });
});

// ----------------------------------------
// 9. منع النقر الأيمن على الصور (حماية)
// ----------------------------------------
document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
});

// ----------------------------------------
// 10. رسالة ترحيب في console
// ----------------------------------------
console.log('✅ مطعم سِدْرَة - أجمل إطلالة في المدينة');
console.log('📍 الموقع: دمشق، تلة المزة');
console.log('📞 للحجز: +963 123 456 789');