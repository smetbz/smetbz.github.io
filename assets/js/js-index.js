
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// بررسی وضعیت تم در localStorage
if (localStorage.getItem('theme') === 'light') {
    body.classList.replace('dark-theme', 'light-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

function toggleTheme() {
    if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    }
}

themeToggle.addEventListener('click', toggleTheme);

// مدیریت اسکرول هدر
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// مدیریت منوی موبایل
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileClose = document.getElementById('mobile-close');
const mobileNav = document.getElementById('mobile-nav');
const overlay = document.getElementById('overlay');

function openMobileMenu() {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

mobileMenuToggle.addEventListener('click', openMobileMenu);
mobileClose.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);

// مدیریت دکمه‌های خرید
const enrollButtons = document.querySelectorAll('.btn-enroll');

enrollButtons.forEach(button => {
    button.addEventListener('click', function() {
        const courseTitle = this.closest('.course-card').querySelector('.course-title').textContent;
        
        // نمایش پیام موفقیت
        this.innerHTML = '<i class="fas fa-check"></i><span>افزوده شد به سبد</span>';
        this.style.background = 'var(--success)';
        
        // بازگشت به حالت اولیه بعد از 2 ثانیه
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-shopping-cart"></i><span>افزودن به سبد خرید</span>';
            this.style.background = 'linear-gradient(135deg, var(--primary), var(--primary-light))';
        }, 2000);
        
        // در اینجا می‌توانید منطق افزودن به سبد خرید را پیاده‌سازی کنید
        console.log(`دوره "${courseTitle}" به سبد خرید افزوده شد.`);
    });
});

// مدیریت فرم خبرنامه
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('.newsletter-input');
        const button = this.querySelector('.btn-newsletter');
        
        if (emailInput.value.trim() !== '') {
            // ذخیره ایمیل در localStorage (شبیه‌سازی)
            localStorage.setItem('newsletter_email', emailInput.value);
            
            // نمایش پیام موفقیت
            button.innerHTML = '<i class="fas fa-check"></i><span>عضویت موفق</span>';
            button.style.background = 'var(--success)';
            
            // بازگشت به حالت اولیه بعد از 3 ثانیه
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-paper-plane"></i><span>عضویت در خبرنامه</span>';
                button.style.background = 'linear-gradient(135deg, var(--primary), var(--primary-light))';
                emailInput.value = '';
            }, 3000);
            
            // در اینجا می‌توانید درخواست AJAX برای ذخیره ایمیل ارسال کنید
            console.log(`ایمیل ${emailInput.value} برای خبرنامه ثبت شد.`);
        }
    });
}

// مدیریت سوالات متداول
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // بستن سایر آیتم‌ها
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // باز/بستن آیتم فعلی
        item.classList.toggle('active');
    });
});

// انیمیشن اسکرول برای عناصر
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.feature-card, .course-card, .category-card, .stat-box, .video-wrapper');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// تنظیم حالت اولیه برای انیمیشن
document.querySelectorAll('.feature-card, .course-card, .category-card, .stat-box, .video-wrapper').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


