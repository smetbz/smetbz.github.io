// مدیریت تغییر تم
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const body = document.body;

// بررسی وضعیت تم در localStorage
if (localStorage.getItem('theme') === 'light') {
    body.classList.replace('dark-theme', 'light-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i><span>تغییر تم</span>';
}

function toggleTheme() {
    if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i><span>تغییر تم</span>';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i><span>تغییر تم</span>';
        localStorage.setItem('theme', 'dark');
    }
}

if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);

// مدیریت اسکرول هدر
const header = document.getElementById('page-header');

window.addEventListener('scroll', function() {
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
});

// مدیریت منوی موبایل
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileNavContainer = document.getElementById('mobile-nav-container');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mainLogo = document.getElementById('main-logo');

function toggleMobileMenu() {
    mobileMenuToggle.classList.toggle('active');
    mobileNavContainer.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    if (mainLogo) mainLogo.classList.toggle('hidden');
    document.body.style.overflow = mobileNavContainer.classList.contains('active') ? 'hidden' : '';
}

if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', toggleMobileMenu);
if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

// بستن منوی موبایل در صورت کلیک روی لینک‌ها
const navLinks = document.querySelectorAll('.mobile-nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMobileMenu();
        }
    });
});

// مدیریت سرفصل‌های دوره
const sectionHeaders = document.querySelectorAll('.cours_data-section-header');

sectionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

// مدیریت دکمه خرید دوره
const enrollButton = document.querySelector('.cours_data-btn-enroll');

if (enrollButton) {
    enrollButton.addEventListener('click', function() {
        // نمایش پیام موفقیت
        this.innerHTML = '<i class="fas fa-check"></i><span>افزوده شد به سبد</span>';
        this.style.background = 'var(--success-color)';
        
        // بازگشت به حالت اولیه بعد از 2 ثانیه
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-shopping-cart"></i><span>افزودن به سبد خرید</span>';
            this.style.background = 'linear-gradient(135deg, var(--primary-color), var(--accent-color))';
        }, 2000);
        
        // در اینجا می‌توانید منطق افزودن به سبد خرید را پیاده‌سازی کنید
        console.log('دوره به سبد خرید افزوده شد.');
    });
}

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
            button.style.background = 'var(--success-color)';
            
            // بازگشت به حالت اولیه بعد از 3 ثانیه
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-paper-plane"></i><span>عضویت در خبرنامه</span>';
                button.style.background = 'linear-gradient(135deg, var(--primary-color), var(--accent-color))';
                emailInput.value = '';
            }, 3000);
            
            // در اینجا می‌توانید درخواست AJAX برای ذخیره ایمیل ارسال کنید
            console.log(`ایمیل ${emailInput.value} برای خبرنامه ثبت شد.`);
        }
    });
}

// مدیریت ریسپانسیو در هنگام تغییر اندازه پنجره
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
        if (mobileNavContainer) mobileNavContainer.classList.remove('active');
        if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
        if (mainLogo) mainLogo.classList.remove('hidden');
        document.body.style.overflow = '';
    }
});

// ==================== مدیریت صفحه درباره ما ====================
const aboutsThemeToggle = document.getElementById('abouts-theme-toggle');
const aboutsMobileThemeToggle = document.getElementById('abouts-mobile-theme-toggle');
const aboutsBody = document.body;

// بررسی وضعیت تم در localStorage برای صفحه درباره ما
if (localStorage.getItem('theme') === 'light') {
    aboutsBody.classList.replace('abouts-dark-theme', 'abouts-light-theme');
    if (aboutsThemeToggle) aboutsThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    if (aboutsMobileThemeToggle) aboutsMobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i><span>تغییر تم</span>';
}

function aboutsToggleTheme() {
    if (aboutsBody.classList.contains('abouts-dark-theme')) {
        aboutsBody.classList.replace('abouts-dark-theme', 'abouts-light-theme');
        if (aboutsThemeToggle) aboutsThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        if (aboutsMobileThemeToggle) aboutsMobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i><span>تغییر تم</span>';
        localStorage.setItem('theme', 'light');
    } else {
        aboutsBody.classList.replace('abouts-light-theme', 'abouts-dark-theme');
        if (aboutsThemeToggle) aboutsThemeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        if (aboutsMobileThemeToggle) aboutsMobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i><span>تغییر تم</span>';
        localStorage.setItem('theme', 'dark');
    }
}

if (aboutsThemeToggle) aboutsThemeToggle.addEventListener('click', aboutsToggleTheme);
if (aboutsMobileThemeToggle) aboutsMobileThemeToggle.addEventListener('click', aboutsToggleTheme);

// مدیریت اسکرول هدر برای صفحه درباره ما
const aboutsHeader = document.getElementById('abouts-page-header');

window.addEventListener('scroll', function() {
    if (aboutsHeader) {
        if (window.scrollY > 100) {
            aboutsHeader.classList.add('abouts-header-scrolled');
        } else {
            aboutsHeader.classList.remove('abouts-header-scrolled');
        }
    }
});

// مدیریت منوی موبایل برای صفحه درباره ما
const aboutsMobileMenuToggle = document.getElementById('abouts-mobile-menu-toggle');
const aboutsMobileNavContainer = document.getElementById('abouts-mobile-nav-container');
const aboutsMobileMenuOverlay = document.getElementById('abouts-mobile-menu-overlay');
const aboutsMainLogo = document.getElementById('abouts-main-logo');

function aboutsToggleMobileMenu() {
    aboutsMobileMenuToggle.classList.toggle('active');
    aboutsMobileNavContainer.classList.toggle('active');
    aboutsMobileMenuOverlay.classList.toggle('active');
    if (aboutsMainLogo) aboutsMainLogo.classList.toggle('hidden');
    document.body.style.overflow = aboutsMobileNavContainer.classList.contains('active') ? 'hidden' : '';
}

if (aboutsMobileMenuToggle) aboutsMobileMenuToggle.addEventListener('click', aboutsToggleMobileMenu);
if (aboutsMobileMenuOverlay) aboutsMobileMenuOverlay.addEventListener('click', aboutsToggleMobileMenu);

// بستن منوی موبایل در صورت کلیک روی لینک‌ها برای صفحه درباره ما
const aboutsNavLinks = document.querySelectorAll('.abouts-mobile-nav-link');
aboutsNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            aboutsToggleMobileMenu();
        }
    });
});

// انیمیشن اسکرول برای عناصر صفحه درباره ما
const aboutsAnimateOnScroll = function() {
    const aboutsElements = document.querySelectorAll('.abouts-mission-card, .abouts-vision-card, .abouts-value-card, .abouts-team-card, .abouts-timeline-content');
    
    aboutsElements.forEach(element => {
        const aboutsElementPosition = element.getBoundingClientRect().top;
        const aboutsScreenPosition = window.innerHeight / 1.2;
        
        if (aboutsElementPosition < aboutsScreenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// تنظیم حالت اولیه برای انیمیشن صفحه درباره ما
document.querySelectorAll('.abouts-mission-card, .abouts-vision-card, .abouts-value-card, .abouts-team-card, .abouts-timeline-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', aboutsAnimateOnScroll);
window.addEventListener('load', aboutsAnimateOnScroll);

// ==================== مدیریت صفحه بلاگ ====================
const blogsThemeToggle = document.getElementById('blogs-theme-toggle');
const blogsMobileThemeToggle = document.getElementById('blogs-mobile-theme-toggle');
const blogsBody = document.body;

// بررسی وضعیت تم در localStorage برای صفحه بلاگ
if (localStorage.getItem('theme') === 'light') {
    blogsBody.classList.replace('blogs-dark-theme', 'blogs-light-theme');
    if (blogsThemeToggle) blogsThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    if (blogsMobileThemeToggle) blogsMobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i><span>تغییر تم</span>';
}

function blogsToggleTheme() {
    if (blogsBody.classList.contains('blogs-dark-theme')) {
        blogsBody.classList.replace('blogs-dark-theme', 'blogs-light-theme');
        if (blogsThemeToggle) blogsThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        if (blogsMobileThemeToggle) blogsMobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i><span>تغییر تم</span>';
        localStorage.setItem('theme', 'light');
    } else {
        blogsBody.classList.replace('blogs-light-theme', 'blogs-dark-theme');
        if (blogsThemeToggle) blogsThemeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        if (blogsMobileThemeToggle) blogsMobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i><span>تغییر تم</span>';
        localStorage.setItem('theme', 'dark');
    }
}

if (blogsThemeToggle) blogsThemeToggle.addEventListener('click', blogsToggleTheme);
if (blogsMobileThemeToggle) blogsMobileThemeToggle.addEventListener('click', blogsToggleTheme);

// مدیریت اسکرول هدر برای صفحه بلاگ
const blogsHeader = document.getElementById('blogs-page-header');

window.addEventListener('scroll', function() {
    if (blogsHeader) {
        if (window.scrollY > 100) {
            blogsHeader.classList.add('blogs-header-scrolled');
        } else {
            blogsHeader.classList.remove('blogs-header-scrolled');
        }
    }
});

// مدیریت منوی موبایل برای صفحه بلاگ
const blogsMobileMenuToggle = document.getElementById('blogs-mobile-menu-toggle');
const blogsMobileNavContainer = document.getElementById('blogs-mobile-nav-container');
const blogsMobileMenuOverlay = document.getElementById('blogs-mobile-menu-overlay');

function blogsToggleMobileMenu() {
    blogsMobileMenuToggle.classList.toggle('active');
    blogsMobileNavContainer.classList.toggle('active');
    blogsMobileMenuOverlay.classList.toggle('active');
    document.body.style.overflow = blogsMobileNavContainer.classList.contains('active') ? 'hidden' : '';
}

if (blogsMobileMenuToggle) blogsMobileMenuToggle.addEventListener('click', blogsToggleMobileMenu);
if (blogsMobileMenuOverlay) blogsMobileMenuOverlay.addEventListener('click', blogsToggleMobileMenu);

// بستن منوی موبایل در صورت کلیک روی لینک‌ها برای صفحه بلاگ
const blogsNavLinks = document.querySelectorAll('.blogs-mobile-nav-link');
blogsNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            blogsToggleMobileMenu();
        }
    });
});

// مدیریت فرم‌های جستجو برای صفحه بلاگ
const blogsSearchForms = document.querySelectorAll('.blogs-search-box, .blogs-blog-hero-search, .blogs-mobile-search-box');

blogsSearchForms.forEach(form => {
    const input = form.querySelector('input[type="text"], input[type="search"]');
    const button = form.querySelector('button');
    
    if (button) {
        button.addEventListener('click', function() {
            if (input && input.value.trim() !== '') {
                // در اینجا می‌توانید منطق جستجو را پیاده‌سازی کنید
                alert('جستجو برای: ' + input.value);
            }
        });
    }
    
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                if (input.value.trim() !== '') {
                    // در اینجا می‌توانید منطق جستجو را پیاده‌سازی کنید
                    alert('جستجو برای: ' + input.value);
                }
            }
        });
    }
});

// مدیریت فرم خبرنامه برای صفحه بلاگ
const blogsNewsletterForms = document.querySelectorAll('.blogs-newsletter-form');

blogsNewsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('.blogs-newsletter-input');
        const button = this.querySelector('.blogs-btn-newsletter');
        
        if (emailInput && emailInput.value.trim() !== '' && button) {
            // ذخیره ایمیل در localStorage (شبیه‌سازی)
            localStorage.setItem('newsletter_email', emailInput.value);
            
            // نمایش پیام موفقیت
            button.innerHTML = '<i class="fas fa-check"></i><span>عضویت موفق</span>';
            button.style.background = 'var(--success-color)';
            
            // بازگشت به حالت اولیه بعد از 3 ثانیه
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-paper-plane"></i><span>عضویت در خبرنامه</span>';
                button.style.background = '';
                emailInput.value = '';
            }, 3000);
            
            // در اینجا می‌توانید درخواست AJAX برای ذخیره ایمیل ارسال کنید
            console.log(`ایمیل ${emailInput.value} برای خبرنامه ثبت شد.`);
        }
    });
});

// انیمیشن اسکرول برای عناصر صفحه بلاگ
const blogsAnimateOnScroll = function() {
    const blogsElements = document.querySelectorAll('.blogs-blog-post, .blogs-sidebar-widget');
    
    blogsElements.forEach(element => {
        const blogsElementPosition = element.getBoundingClientRect().top;
        const blogsScreenPosition = window.innerHeight / 1.2;
        
        if (blogsElementPosition < blogsScreenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// تنظیم حالت اولیه برای انیمیشن صفحه بلاگ
document.querySelectorAll('.blogs-blog-post, .blogs-sidebar-widget').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', blogsAnimateOnScroll);
window.addEventListener('load', blogsAnimateOnScroll);

// انیمیشن اسکرول عمومی برای عناصر
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.blog-1-related-post, .blog-1-sidebar-widget');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// تنظیم حالت اولیه برای انیمیشن عمومی
document.querySelectorAll('.blog-1-related-post, .blog-1-sidebar-widget').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// مدیریت ریسپانسیو برای تمام صفحات
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        // بستن منوی موبایل اصلی
        if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
        if (mobileNavContainer) mobileNavContainer.classList.remove('active');
        if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
        if (mainLogo) mainLogo.classList.remove('hidden');
        
        // بستن منوی موبایل صفحه درباره ما
        if (aboutsMobileMenuToggle) aboutsMobileMenuToggle.classList.remove('active');
        if (aboutsMobileNavContainer) aboutsMobileNavContainer.classList.remove('active');
        if (aboutsMobileMenuOverlay) aboutsMobileMenuOverlay.classList.remove('active');
        if (aboutsMainLogo) aboutsMainLogo.classList.remove('hidden');
        
        // بستن منوی موبایل صفحه بلاگ
        if (blogsMobileMenuToggle) blogsMobileMenuToggle.classList.remove('active');
        if (blogsMobileNavContainer) blogsMobileNavContainer.classList.remove('active');
        if (blogsMobileMenuOverlay) blogsMobileMenuOverlay.classList.remove('active');
        
        document.body.style.overflow = '';
    }
});

// مقداردهی اولیه برای انیمیشن‌ها هنگام لود صفحه
document.addEventListener('DOMContentLoaded', function() {
    aboutsAnimateOnScroll();
    blogsAnimateOnScroll();
    animateOnScroll();
});
// ==================== مدیریت صفحه دوره‌ها ====================

// مدیریت فرم‌های جستجو برای صفحه دوره‌ها
const searchForms = document.querySelectorAll('.search-box, .cours-courses-hero-search, .mobile-search-box');

searchForms.forEach(form => {
    const input = form.querySelector('input[type="text"], input[type="search"]');
    const button = form.querySelector('button');
    
    if (button && input) {
        button.addEventListener('click', function() {
            if (input.value.trim() !== '') {
                // در اینجا می‌توانید منطق جستجو را پیاده‌سازی کنید
                alert('جستجو برای: ' + input.value);
            }
        });
        
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                if (input.value.trim() !== '') {
                    // در اینجا می‌توانید منطق جستجو را پیاده‌سازی کنید
                    alert('جستجو برای: ' + input.value);
                }
            }
        });
    }
});

// مدیریت دکمه‌های خرید برای صفحه دوره‌ها
const enrollButtons = document.querySelectorAll('.cours-btn-enroll');

enrollButtons.forEach(button => {
    button.addEventListener('click', function() {
        const courseCard = this.closest('.cours-course-card');
        if (courseCard) {
            const courseTitle = courseCard.querySelector('.cours-course-title')?.textContent || 'دوره ناشناخته';
            const coursePrice = courseCard.querySelector('.cours-course-price')?.textContent || 'قیمت نامشخص';
            
            // نمایش پیام موفقیت
            this.innerHTML = '<i class="fas fa-check"></i><span>افزوده شد به سبد</span>';
            this.style.background = 'var(--success-color)';
            
            // بازگشت به حالت اولیه بعد از 2 ثانیه
            setTimeout(() => {
                if (coursePrice === 'رایگان') {
                    this.innerHTML = '<i class="fas fa-play-circle"></i><span>شروع یادگیری</span>';
                } else {
                    this.innerHTML = '<i class="fas fa-shopping-cart"></i><span>افزودن به سبد خرید</span>';
                }
                this.style.background = 'linear-gradient(135deg, var(--primary-color), var(--accent-color))';
            }, 2000);
            
            // در اینجا می‌توانید منطق افزودن به سبد خرید را پیاده‌سازی کنید
            console.log(`دوره "${courseTitle}" با قیمت ${coursePrice} به سبد خرید افزوده شد.`);
        }
    });
});

// مدیریت تغییر نمای دوره‌ها
const viewButtons = document.querySelectorAll('.cours-view-btn');

viewButtons.forEach(button => {
    button.addEventListener('click', function() {
        viewButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const coursesGrid = document.querySelector('.cours-courses-grid');
        if (coursesGrid) {
            // در اینجا می‌توانید منطق تغییر نمای دوره‌ها را پیاده‌سازی کنید
            if (this.querySelector('.fa-th')) {
                coursesGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(320px, 1fr))';
            } else {
                coursesGrid.style.gridTemplateColumns = '1fr';
            }
        }
    });
});

// مدیریت صفحه‌بندی برای صفحه دوره‌ها
const paginationButtons = document.querySelectorAll('.cours-pagination-btn');

paginationButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (!this.querySelector('i')) {
            paginationButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // در اینجا می‌توانید منطق تغییر صفحه را پیاده‌سازی کنید
            console.log('صفحه تغییر کرد به: ' + this.textContent);
        }
    });
});

// انیمیشن اسکرول برای کارت‌های دوره
const coursesAnimateOnScroll = function() {
    const elements = document.querySelectorAll('.cours-course-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// تنظیم حالت اولیه برای انیمیشن کارت‌های دوره
document.querySelectorAll('.cours-course-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', coursesAnimateOnScroll);
window.addEventListener('load', coursesAnimateOnScroll);

// ==================== مدیریت صفحه ورود ====================
const loginTogglePassword = document.getElementById('togglePassword');
const loginPassword = document.getElementById('password');

if (loginTogglePassword && loginPassword) {
    loginTogglePassword.addEventListener('click', function() {
        const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        loginPassword.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
}

const loginBtn = document.querySelector('.login-btn');
const loginForm = document.getElementById('loginForm');

if (loginBtn && loginForm) {
    loginBtn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('login-ripple');
        this.appendChild(ripple);
        
        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        
        if(username && password && (username.value.trim() === '' || password.value.trim() === '')) {
            e.preventDefault();
            if(username.value.trim() === '') {
                username.style.borderColor = '#f44336';
            }
            if(password.value.trim() === '') {
                password.style.borderColor = '#f44336';
            }
        } else {
            loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال ورود...';
            loginBtn.disabled = true;
            
            setTimeout(() => {
                loginBtn.innerHTML = '<i class="fas fa-check"></i> ورود موفق';
                setTimeout(() => {
                    loginBtn.innerHTML = 'ورود به سیستم';
                    loginBtn.disabled = false;
                }, 1500);
            }, 2000);
        }
    });
}

const loginUsername = document.getElementById('username');
if (loginUsername) {
    loginUsername.addEventListener('focus', function() {
        this.style.borderColor = '#e0e0e0';
    });
}

if (loginPassword) {
    loginPassword.addEventListener('focus', function() {
        this.style.borderColor = '#e0e0e0';
    });
}

// مدیریت تم برای صفحه ورود
const loginThemeToggle = document.getElementById('login-theme-toggle');
const loginBody = document.body;

// بررسی وضعیت تم در localStorage برای صفحه ورود
if (localStorage.getItem('theme') === 'light') {
    loginBody.classList.replace('login-dark-theme', 'login-light-theme');
    if (loginThemeToggle) loginThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

function loginToggleTheme() {
    if (loginBody.classList.contains('login-dark-theme')) {
        loginBody.classList.replace('login-dark-theme', 'login-light-theme');
        if (loginThemeToggle) loginThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        loginBody.classList.replace('login-light-theme', 'login-dark-theme');
        if (loginThemeToggle) loginThemeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    }
}

if (loginThemeToggle) loginThemeToggle.addEventListener('click', loginToggleTheme);
// ==================== مدیریت صفحه ثبت نام ====================
const registerTogglePassword = document.getElementById('togglePassword');
const registerPassword = document.getElementById('password');
const registerForm = document.getElementById('registerForm');
const registerSubmitBtn = document.getElementById('submitBtn');
const registerBtnText = document.getElementById('btnText');
const registerStrengthBar = document.getElementById('strengthBar');
const registerStrengthText = document.getElementById('strengthText');

// نمایش/مخفی کردن رمز عبور
if (registerTogglePassword && registerPassword) {
    registerTogglePassword.addEventListener('click', function() {
        const type = registerPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        registerPassword.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
}

// نمایش قدرت رمز عبور
if (registerPassword && registerStrengthBar && registerStrengthText) {
    registerPassword.addEventListener('input', function() {
        const passwordValue = this.value;
        let strength = 0;
        
        // بررسی طول رمز عبور
        if (passwordValue.length > 0) strength += 1;
        if (passwordValue.length >= 8) strength += 1;
        
        // بررسی وجود حروف
        if (/[A-Za-z]/.test(passwordValue)) strength += 1;
        
        // بررسی وجود اعداد
        if (/[0-9]/.test(passwordValue)) strength += 1;
        
        // بررسی وجود کاراکترهای خاص
        if (/[^A-Za-z0-9]/.test(passwordValue)) strength += 1;
        
        // محاسبه درصد قدرت
        const width = (strength / 5) * 100;
        registerStrengthBar.style.width = `${width}%`;
        
        // تغییر رنگ و متن بر اساس قدرت
        if (strength <= 2) {
            registerStrengthBar.style.background = '#f44336';
            registerStrengthText.textContent = 'قدرت رمز عبور: ضعیف';
            registerStrengthText.style.color = '#f44336';
        } else if (strength <= 4) {
            registerStrengthBar.style.background = '#ff9800';
            registerStrengthText.textContent = 'قدرت رمز عبور: متوسط';
            registerStrengthText.style.color = '#ff9800';
        } else {
            registerStrengthBar.style.background = '#4caf50';
            registerStrengthText.textContent = 'قدرت رمز عبور: قوی';
            registerStrengthText.style.color = '#4caf50';
        }
    });
}

// اعتبارسنجی فرم
function registerValidateForm() {
    let isValid = true;
    
    // اعتبارسنجی نام کامل
    const fullname = document.getElementById('fullname');
    const fullnameError = document.getElementById('fullname-error');
    if (fullname && fullnameError) {
        if (fullname.value.trim() === '') {
            fullname.classList.add('error');
            fullnameError.style.display = 'block';
            isValid = false;
        } else {
            fullname.classList.remove('error');
            fullnameError.style.display = 'none';
        }
    }
    
    // اعتبارسنجی ایمیل
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    if (email && emailError) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add('error');
            emailError.style.display = 'block';
            isValid = false;
        } else {
            email.classList.remove('error');
            emailError.style.display = 'none';
        }
    }
    
    // اعتبارسنجی رمز عبور
    if (registerPassword) {
        const passwordValue = registerPassword.value;
        if (passwordValue.length < 8) {
            registerPassword.classList.add('error');
            isValid = false;
        } else {
            registerPassword.classList.remove('error');
        }
    }
    
    // اعتبارسنجی شرایط و قوانین
    const agreeTerms = document.getElementById('agreeTerms');
    const termsError = document.getElementById('terms-error');
    if (agreeTerms && termsError) {
        if (!agreeTerms.checked) {
            termsError.style.display = 'block';
            isValid = false;
        } else {
            termsError.style.display = 'none';
        }
    }
    
    return isValid;
}

// ارسال فرم
if (registerForm && registerSubmitBtn && registerBtnText) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (registerValidateForm()) {
            // شبیه‌سازی ارسال فرم
            registerSubmitBtn.disabled = true;
            registerBtnText.textContent = 'در حال ثبت نام...';
            
            setTimeout(() => {
                registerSubmitBtn.style.backgroundColor = '#4caf50';
                registerBtnText.innerHTML = '<i class="fas fa-check"></i> ثبت نام موفق';
                const successMessage = document.getElementById('successMessage');
                if (successMessage) successMessage.style.display = 'block';
                
                setTimeout(() => {
                    // در اینجا معمولاً کاربر به صفحه دیگری هدایت می‌شود
                    // window.location.href = 'dashboard.html';
                }, 1500);
            }, 2000);
        }
    });
}

// بازنشانی رنگ border هنگام focus
const registerInputs = document.querySelectorAll('.register-form-control');
registerInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.classList.remove('error');
        const errorId = this.id + '-error';
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    });
});

// افکت ripple روی دکمه
if (registerSubmitBtn) {
    registerSubmitBtn.addEventListener('click', function(e) {
        if (!registerSubmitBtn.disabled) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
}

// مدیریت تم برای صفحه ثبت نام
const registerThemeToggle = document.getElementById('register-theme-toggle');
const registerBody = document.body;

// بررسی وضعیت تم در localStorage برای صفحه ثبت نام
if (localStorage.getItem('theme') === 'light') {
    registerBody.classList.replace('register-dark-theme', 'register-light-theme');
    if (registerThemeToggle) registerThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

function registerToggleTheme() {
    if (registerBody.classList.contains('register-dark-theme')) {
        registerBody.classList.replace('register-dark-theme', 'register-light-theme');
        if (registerThemeToggle) registerThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        registerBody.classList.replace('register-light-theme', 'register-dark-theme');
        if (registerThemeToggle) registerThemeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    }
}

if (registerThemeToggle) registerThemeToggle.addEventListener('click', registerToggleTheme);
// ==================== مدیریت صفحه علاقه‌مندی‌ها ====================
const favoriteThemeToggle = document.getElementById('favorite-theme-toggle');
const favoriteBody = document.body;

// بررسی وضعیت تم در localStorage برای صفحه علاقه‌مندی‌ها
if (localStorage.getItem('favorite-theme') === 'light') {
    favoriteBody.classList.replace('favorite-dark-theme', 'favorite-light-theme');
    if (favoriteThemeToggle) favoriteThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

function favoriteToggleTheme() {
    if (favoriteBody.classList.contains('favorite-dark-theme')) {
        favoriteBody.classList.replace('favorite-dark-theme', 'favorite-light-theme');
        if (favoriteThemeToggle) favoriteThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('favorite-theme', 'light');
    } else {
        favoriteBody.classList.replace('favorite-light-theme', 'favorite-dark-theme');
        if (favoriteThemeToggle) favoriteThemeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('favorite-theme', 'dark');
    }
}

if (favoriteThemeToggle) favoriteThemeToggle.addEventListener('click', favoriteToggleTheme);

// مدیریت منوی موبایل برای صفحه علاقه‌مندی‌ها
const favoriteMobileMenuToggle = document.getElementById('favorite-mobile-menu-toggle');
const favoriteSidebar = document.getElementById('favorite-sidebar');
const favoriteMobileMenuOverlay = document.getElementById('favorite-mobile-menu-overlay');

function favoriteToggleMobileMenu() {
    if (favoriteSidebar) favoriteSidebar.classList.toggle('active');
    if (favoriteMobileMenuOverlay) favoriteMobileMenuOverlay.classList.toggle('active');
}

if (favoriteMobileMenuToggle) favoriteMobileMenuToggle.addEventListener('click', favoriteToggleMobileMenu);
if (favoriteMobileMenuOverlay) favoriteMobileMenuOverlay.addEventListener('click', favoriteToggleMobileMenu);

// مدیریت دکمه‌های علاقه‌مندی
const favoriteFavoriteButtons = document.querySelectorAll('.favorite-favorite-btn');

favoriteFavoriteButtons.forEach(button => {
    button.addEventListener('click', function() {
        const courseId = this.getAttribute('data-course');
        const isActive = this.classList.contains('active');
        
        if (isActive) {
            this.classList.remove('active');
            // در اینجا می‌توانید منطق حذف از علاقه‌مندی‌ها را پیاده‌سازی کنید
            
            // حذف کارت دوره از صفحه با انیمیشن
            const favoriteCourseCard = this.closest('.favorite-course-card');
            if (favoriteCourseCard) {
                favoriteCourseCard.style.opacity = '0';
                favoriteCourseCard.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    favoriteCourseCard.remove();
                    favoriteCheckEmptyState();
                }, 300);
            }
        } else {
            this.classList.add('active');
            // در اینجا می‌توانید منطق افزودن به علاقه‌مندی‌ها را پیاده‌سازی کنید
        }
    });
});

// مدیریت دکمه‌های سبد خرید
const favoriteCartButtons = document.querySelectorAll('.favorite-cart-btn');

favoriteCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const courseId = this.getAttribute('data-course');
        const btn = this;
        
        // شبیه‌سازی افزودن به سبد خرید
        btn.innerHTML = '<span class="favorite-loading-spinner"></span>';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-shopping-cart"></i>';
                btn.disabled = false;
            }, 1000);
        }, 1000);
    });
});

// مدیریت فیلترها
const favoriteApplyFiltersBtn = document.getElementById('favorite-apply-filters');
const favoriteResetFiltersBtn = document.getElementById('favorite-reset-filters');

if (favoriteApplyFiltersBtn) {
    favoriteApplyFiltersBtn.addEventListener('click', function() {
        const category = document.getElementById('favorite-category-filter')?.value || 'all';
        const level = document.getElementById('favorite-level-filter')?.value || 'all';
        const price = document.getElementById('favorite-price-filter')?.value || 'all';
        const sort = document.getElementById('favorite-sort-filter')?.value || 'newest';
        
        // شبیه‌سازی اعمال فیلترها
        favoriteApplyFiltersBtn.innerHTML = '<span class="favorite-loading-spinner"></span> در حال اعمال...';
        favoriteApplyFiltersBtn.disabled = true;
        
        setTimeout(() => {
            favoriteApplyFiltersBtn.innerHTML = '<i class="fas fa-filter"></i> اعمال فیلترها';
            favoriteApplyFiltersBtn.disabled = false;
        }, 1000);
    });
}

if (favoriteResetFiltersBtn) {
    favoriteResetFiltersBtn.addEventListener('click', function() {
        const categoryFilter = document.getElementById('favorite-category-filter');
        const levelFilter = document.getElementById('favorite-level-filter');
        const priceFilter = document.getElementById('favorite-price-filter');
        const sortFilter = document.getElementById('favorite-sort-filter');
        
        if (categoryFilter) categoryFilter.value = 'all';
        if (levelFilter) levelFilter.value = 'all';
        if (priceFilter) priceFilter.value = 'all';
        if (sortFilter) sortFilter.value = 'newest';
    });
}

// بررسی وضعیت خالی بودن صفحه
function favoriteCheckEmptyState() {
    const favoriteFavoritesContainer = document.getElementById('favorite-favorites-container');
    if (!favoriteFavoritesContainer) return;
    
    const favoriteCourseCards = favoriteFavoritesContainer.querySelectorAll('.favorite-course-card');
    
    if (favoriteCourseCards.length === 0) {
        // اگر هیچ دوره‌ای وجود ندارد، پیام خالی نمایش دهید
        const favoriteEmptyState = document.createElement('div');
        favoriteEmptyState.className = 'favorite-empty-state favorite-fade-in';
        favoriteEmptyState.innerHTML = `
            <div class="favorite-empty-state-icon">
                <i class="far fa-heart"></i>
            </div>
            <h3 class="favorite-empty-state-title">هنوز دوره‌ای به علاقه‌مندی‌ها اضافه نکرده‌اید</h3>
            <p class="favorite-empty-state-description">
                دوره‌هایی که دوست دارید را به علاقه‌مندی‌ها اضافه کنید تا بعداً به راحتی به آن‌ها دسترسی داشته باشید.
            </p>
            <button class="favorite-btn favorite-btn-primary" id="favorite-browse-courses">
                <i class="fas fa-search"></i>
                <span>مرور دوره‌ها</span>
            </button>
        `;
        
        favoriteFavoritesContainer.appendChild(favoriteEmptyState);
        
        // مدیریت دکمه مرور دوره‌ها
        const browseCoursesBtn = document.getElementById('favorite-browse-courses');
        if (browseCoursesBtn) {
            browseCoursesBtn.addEventListener('click', function() {
                // در اینجا می‌توانید کاربر را به صفحه دوره‌ها هدایت کنید
                window.location.href = 'courses.html';
            });
        }
    }
}

// مدیریت ریسپانسیو در هنگام تغییر اندازه پنجره برای صفحه علاقه‌مندی‌ها
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        if (favoriteSidebar) favoriteSidebar.classList.remove('active');
        if (favoriteMobileMenuOverlay) favoriteMobileMenuOverlay.classList.remove('active');
    }
});

// جستجوی دوره‌ها در صفحه علاقه‌مندی‌ها
const favoriteSearchInput = document.querySelector('.favorite-search-input');
if (favoriteSearchInput) {
    favoriteSearchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const favoriteCourseCards = document.querySelectorAll('.favorite-course-card');
        
        favoriteCourseCards.forEach(card => {
            const titleElement = card.querySelector('.favorite-course-title');
            if (titleElement) {
                const title = titleElement.textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
}

// مقداردهی اولیه برای صفحه علاقه‌مندی‌ها
document.addEventListener('DOMContentLoaded', function() {
    favoriteCheckEmptyState();
});
// ==================== مدیریت صفحه FAQ ====================
// استفاده از همان توابع اصلی برای جلوگیری از تداخل

// مدیریت دسته‌بندی‌های FAQ
const faqsCategoryLinks = document.querySelectorAll('.faqs-category-link');
const faqsCategorySections = document.querySelectorAll('.faqs-category-section');

if (faqsCategoryLinks.length > 0) {
    faqsCategoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // حذف کلاس active از همه لینک‌ها
            faqsCategoryLinks.forEach(item => {
                item.classList.remove('active');
            });
            
            // اضافه کردن کلاس active به لینک فعلی
            this.classList.add('active');
            
            // مخفی کردن همه بخش‌ها
            faqsCategorySections.forEach(section => {
                section.classList.remove('active');
            });
            
            // نمایش بخش مربوطه
            const categoryId = this.getAttribute('data-category');
            const targetSection = document.getElementById(categoryId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // اسکرول به بخش مربوطه در موبایل
                if (window.innerWidth <= 768) {
                    setTimeout(() => {
                        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 300);
                }
            }
        });
    });
}

// مدیریت آکاردئون FAQ
const faqsItems = document.querySelectorAll('.faqs-item');

if (faqsItems.length > 0) {
    faqsItems.forEach(item => {
        const question = item.querySelector('.faqs-question');
        
        question.addEventListener('click', function() {
            // بستن سایر آیتم‌ها
            faqsItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // باز/بسته کردن آیتم فعلی
            item.classList.toggle('active');
        });
        
        // پشتیبانی از کلیدهای کیبورد
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                item.classList.toggle('active');
            }
        });
    });
}

// مدیریت جستجو در FAQ
const faqsSearchInput = document.querySelector('.faqs-hero-search-input');
const faqsSearchBtn = document.querySelector('.faqs-hero-search-btn');

function performFaqsSearch() {
    if (faqsSearchInput && faqsSearchBtn) {
        const searchTerm = faqsSearchInput.value.trim().toLowerCase();
        
        if (searchTerm) {
            // نمایش وضعیت لودینگ
            const originalText = faqsSearchBtn.innerHTML;
            faqsSearchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            faqsSearchBtn.disabled = true;
            
            setTimeout(() => {
                // بستن همه آیتم‌ها
                faqsItems.forEach(item => {
                    item.classList.remove('active');
                });
                
                // جستجو در سوالات و پاسخ‌ها
                let found = false;
                faqsItems.forEach(item => {
                    const questionText = item.querySelector('.faqs-question-text').textContent.toLowerCase();
                    const answerText = item.querySelector('.faqs-answer-content').textContent.toLowerCase();
                    
                    if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
                        // نمایش دسته‌بندی مربوطه
                        const categorySection = item.closest('.faqs-category-section');
                        if (categorySection) {
                            const categoryId = categorySection.id;
                            
                            // فعال کردن دسته‌بندی مربوطه
                            faqsCategoryLinks.forEach(link => {
                                if (link.getAttribute('data-category') === categoryId) {
                                    link.classList.add('active');
                                } else {
                                    link.classList.remove('active');
                                }
                            });
                            
                            // نمایش بخش مربوطه
                            faqsCategorySections.forEach(section => {
                                if (section.id === categoryId) {
                                    section.classList.add('active');
                                } else {
                                    section.classList.remove('active');
                                }
                            });
                            
                            // باز کردن آیتم مربوطه
                            item.classList.add('active');
                            found = true;
                        }
                    }
                });
                
                // بازگشت دکمه به حالت اولیه
                faqsSearchBtn.innerHTML = originalText;
                faqsSearchBtn.disabled = false;
                
                if (!found) {
                    alert('هیچ نتیجه‌ای برای جستجوی شما یافت نشد.');
                }
            }, 500);
        }
    }
}

if (faqsSearchBtn) {
    faqsSearchBtn.addEventListener('click', performFaqsSearch);
}

if (faqsSearchInput) {
    faqsSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performFaqsSearch();
        }
    });
}

// انیمیشن اسکرول برای عناصر صفحه FAQ
const faqsAnimateOnScroll = function() {
    const faqsElements = document.querySelectorAll('.faqs-item, .faqs-category-section');
    
    faqsElements.forEach(element => {
        const faqsElementPosition = element.getBoundingClientRect().top;
        const faqsScreenPosition = window.innerHeight / 1.2;
        
        if (faqsElementPosition < faqsScreenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// تنظیم حالت اولیه برای انیمیشن صفحه FAQ
document.addEventListener('DOMContentLoaded', function() {
    const faqsAnimatedElements = document.querySelectorAll('.faqs-item, .faqs-category-section');
    faqsAnimatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // اجرای اولیه انیمیشن
    setTimeout(faqsAnimateOnScroll, 100);
});

window.addEventListener('scroll', faqsAnimateOnScroll);
window.addEventListener('load', faqsAnimateOnScroll);
// ==================== مدیریت صفحه پروفایل کاربری ====================
const profilesThemeToggle = document.getElementById('theme-toggle');
const profilesBody = document.body;

// تابع برای تنظیم تم
function profilesSetTheme(theme) {
    if (theme === 'light') {
        profilesBody.classList.remove('profiles-dark-theme');
        profilesBody.classList.add('profiles-light-theme');
        if (profilesThemeToggle) profilesThemeToggle.innerHTML = '<i class="fas fa-sun"></i><span class="profiles-tooltip-text"></span>';
        localStorage.setItem('theme', 'light');
    } else {
        profilesBody.classList.remove('profiles-light-theme');
        profilesBody.classList.add('profiles-dark-theme');
        if (profilesThemeToggle) profilesThemeToggle.innerHTML = '<i class="fas fa-moon"></i><span class="profiles-tooltip-text"></span>';
        localStorage.setItem('theme', 'dark');
    }
}

// بررسی وضعیت تم در localStorage برای صفحه پروفایل
const profilesSavedTheme = localStorage.getItem('theme');
if (profilesSavedTheme === 'light') {
    profilesSetTheme('light');
} else {
    profilesSetTheme('dark');
}

// مدیریت کلیک روی دکمه تغییر تم
if (profilesThemeToggle) {
    profilesThemeToggle.addEventListener('click', function() {
        if (profilesBody.classList.contains('profiles-dark-theme')) {
            profilesSetTheme('light');
        } else {
            profilesSetTheme('dark');
        }
    });
}

// مدیریت منوی موبایل برای صفحه پروفایل
const profilesMobileMenuToggle = document.getElementById('mobile-menu-toggle');
const profilesSidebar = document.getElementById('sidebar');
const profilesMobileMenuOverlay = document.getElementById('mobile-menu-overlay');

function profilesToggleMobileMenu() {
    if (profilesSidebar) profilesSidebar.classList.toggle('active');
    if (profilesMobileMenuOverlay) profilesMobileMenuOverlay.classList.toggle('active');
}

if (profilesMobileMenuToggle) profilesMobileMenuToggle.addEventListener('click', profilesToggleMobileMenu);
if (profilesMobileMenuOverlay) profilesMobileMenuOverlay.addEventListener('click', profilesToggleMobileMenu);

// مدیریت مودال ویرایش پروفایل
const profilesEditProfileBtn = document.getElementById('edit-profile-btn');
const profilesEditProfileModal = document.getElementById('edit-profile-modal');
const profilesModalClose = document.getElementById('modal-close');
const profilesCancelEdit = document.getElementById('cancel-edit');
const profilesProfileForm = document.getElementById('profile-form');
const profilesSaveProfileBtn = document.getElementById('save-profile');

function profilesOpenEditModal() {
    if (profilesEditProfileModal) {
        profilesEditProfileModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function profilesCloseEditModal() {
    if (profilesEditProfileModal) {
        profilesEditProfileModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

if (profilesEditProfileBtn) profilesEditProfileBtn.addEventListener('click', profilesOpenEditModal);
if (profilesModalClose) profilesModalClose.addEventListener('click', profilesCloseEditModal);
if (profilesCancelEdit) profilesCancelEdit.addEventListener('click', profilesCloseEditModal);

// بستن مودال با کلیک خارج از آن
if (profilesEditProfileModal) {
    profilesEditProfileModal.addEventListener('click', function(e) {
        if (e.target === profilesEditProfileModal) {
            profilesCloseEditModal();
        }
    });
}

// مدیریت ارسال فرم پروفایل
if (profilesProfileForm && profilesSaveProfileBtn) {
    profilesProfileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // شبیه‌سازی بارگذاری
        profilesSaveProfileBtn.disabled = true;
        profilesSaveProfileBtn.innerHTML = '<span class="profiles-loading-spinner"></span> در حال ذخیره...';
        
        // شبیه‌سازی تاخیر در ذخیره‌سازی
        setTimeout(function() {
            // در اینجا می‌توانید منطق ذخیره اطلاعات را پیاده‌سازی کنید
            profilesSaveProfileBtn.disabled = false;
            profilesSaveProfileBtn.innerHTML = '<i class="fas fa-check"></i> ذخیره تغییرات';
            
            // نمایش پیام موفقیت
            alert('تغییرات با موفقیت ذخیره شد!');
            profilesCloseEditModal();
        }, 1500);
    });
}

// مدیریت دکمه‌های ویرایش جزئی
const profilesEditPersonalInfo = document.getElementById('edit-personal-info');
const profilesEditSkills = document.getElementById('edit-skills');
const profilesEditBio = document.getElementById('edit-bio');

if (profilesEditPersonalInfo) {
    profilesEditPersonalInfo.addEventListener('click', function(e) {
        e.preventDefault();
        profilesOpenEditModal();
    });
}

if (profilesEditSkills) {
    profilesEditSkills.addEventListener('click', function(e) {
        e.preventDefault();
        profilesOpenEditModal();
    });
}

if (profilesEditBio) {
    profilesEditBio.addEventListener('click', function(e) {
        e.preventDefault();
        profilesOpenEditModal();
    });
}

// مدیریت آپلود آواتار
const profilesAvatarEdit = document.querySelector('.profiles-avatar-edit');

if (profilesAvatarEdit) {
    profilesAvatarEdit.addEventListener('click', function() {
        // در اینجا می‌توانید منطق آپلود تصویر را پیاده‌سازی کنید
        alert('آپلود تصویر پروفایل');
    });
}

// مدیریت ریسپانسیو در هنگام تغییر اندازه پنجره برای صفحه پروفایل
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        if (profilesSidebar) profilesSidebar.classList.remove('active');
        if (profilesMobileMenuOverlay) profilesMobileMenuOverlay.classList.remove('active');
    }
});

// مدیریت حذف مهارت‌ها
const profilesSkillRemoveButtons = document.querySelectorAll('.profiles-skill-remove');
profilesSkillRemoveButtons.forEach(button => {
    button.addEventListener('click', function() {
        const skillTag = this.closest('.profiles-skill-tag');
        if (skillTag) {
            skillTag.style.opacity = '0';
            setTimeout(() => {
                skillTag.remove();
            }, 300);
        }
    });
});

// بهبود تجربه کاربری: نمایش وضعیت بارگذاری برای عملیات زمان‌بر
document.querySelectorAll('.profiles-btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('profiles-btn-primary') && !this.id.includes('cancel')) {
            // اضافه کردن افکت کلیک برای دکمه‌های اصلی
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        }
    });
});// ==================== مدیریت صفحه مدرسین ====================
const instruThemeToggle = document.getElementById('theme-toggle');
const instruBody = document.body;

// بررسی وضعیت تم در localStorage برای صفحه مدرسین
if (localStorage.getItem('theme') === 'light') {
    instruBody.classList.replace('instru-dark-theme', 'instru-light-theme');
    if (instruThemeToggle) instruThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

function instruToggleTheme() {
    if (instruBody.classList.contains('instru-dark-theme')) {
        instruBody.classList.replace('instru-dark-theme', 'instru-light-theme');
        if (instruThemeToggle) instruThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        instruBody.classList.replace('instru-light-theme', 'instru-dark-theme');
        if (instruThemeToggle) instruThemeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    }
}

if (instruThemeToggle) instruThemeToggle.addEventListener('click', instruToggleTheme);

// مدیریت اسکرول هدر برای صفحه مدرسین
const instruHeader = document.getElementById('page-header');

window.addEventListener('scroll', function() {
    if (instruHeader) {
        if (window.scrollY > 100) {
            instruHeader.classList.add('header-scrolled');
        } else {
            instruHeader.classList.remove('header-scrolled');
        }
    }
});

// مدیریت منوی موبایل برای صفحه مدرسین
const instruMobileMenuToggle = document.getElementById('mobile-menu-toggle');
const instruNavContainer = document.getElementById('nav-container');
const instruMobileMenuOverlay = document.getElementById('mobile-menu-overlay');

function instruToggleMobileMenu() {
    const isActive = instruNavContainer.classList.toggle('active');
    instruMobileMenuOverlay.classList.toggle('active');
    if (instruMobileMenuToggle) {
        instruMobileMenuToggle.setAttribute('aria-expanded', isActive);
        
        // تغییر آیکون منو
        if (isActive) {
            instruMobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            instruMobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    }
    document.body.style.overflow = isActive ? 'hidden' : '';
}

if (instruMobileMenuToggle) instruMobileMenuToggle.addEventListener('click', instruToggleMobileMenu);
if (instruMobileMenuOverlay) instruMobileMenuOverlay.addEventListener('click', instruToggleMobileMenu);

// بستن منوی موبایل در صورت کلیک روی لینک‌ها برای صفحه مدرسین
const instruNavLinks = document.querySelectorAll('.instru-nav-link');
instruNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            instruToggleMobileMenu();
        }
    });
});

// مدیریت فیلترها برای صفحه مدرسین
const instruCategoryFilter = document.getElementById('category-filter');
const instruExperienceFilter = document.getElementById('experience-filter');
const instruRatingFilter = document.getElementById('rating-filter');

function instruFilterInstructors() {
    const category = instruCategoryFilter ? instruCategoryFilter.value : '';
    const experience = instruExperienceFilter ? instruExperienceFilter.value : '';
    const rating = instruRatingFilter ? instruRatingFilter.value : '';
    
    // در اینجا می‌توانید منطق فیلتر کردن مدرسین را پیاده‌سازی کنید
    console.log(`فیلترها: دسته‌بندی=${category}, تجربه=${experience}, امتیاز=${rating}`);
}

if (instruCategoryFilter) instruCategoryFilter.addEventListener('change', instruFilterInstructors);
if (instruExperienceFilter) instruExperienceFilter.addEventListener('change', instruFilterInstructors);
if (instruRatingFilter) instruRatingFilter.addEventListener('change', instruFilterInstructors);

// مدیریت جستجو برای صفحه مدرسین
const instruSearchInput = document.querySelector('.instru-filter-search-input');
const instruSearchButton = document.querySelector('.instru-filter-search-btn');

function instruPerformSearch() {
    if (instruSearchInput) {
        const query = instruSearchInput.value.trim();
        if (query !== '') {
            // در اینجا می‌توانید منطق جستجو را پیاده‌سازی کنید
            console.log(`جستجو برای: ${query}`);
        }
    }
}

if (instruSearchButton) {
    instruSearchButton.addEventListener('click', instruPerformSearch);
}

if (instruSearchInput) {
    instruSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            instruPerformSearch();
        }
    });
}

// مدیریت پاپ آپ مدرسین
const instruInstructorPopup = document.getElementById('instructor-popup');
const instruPopupClose = document.getElementById('popup-close');
const instruProfileButtons = document.querySelectorAll('.instru-btn-profile');

// داده‌های نمونه برای پاپ آپ
const instruInstructorsData = {
    1: {
        name: "علی رضایی",
        title: "متخصص توسعه Front-end",
        rating: 4.7,
        courses: 12,
        students: 3456,
        reviews: 4200,
        bio: "علی با بیش از ۸ سال تجربه در توسعه Front-end، تخصص عمیقی در فریمورک‌های مدرن جاوااسکریپت دارد. او علاقه زیادی به آموزش و به اشتراک گذاری دانش خود با دیگران دارد. علی در شرکت‌های معتبری مانند دیجی‌کالا و اسنپ تجربه کاری داشته و اکنون به عنوان مدرس و مشاور فنی فعالیت می‌کند.",
        skills: ["React.js", "Vue.js", "JavaScript", "TypeScript", "HTML/CSS", "SASS"],
        avatar: "./assets/images/me2.png"
    },
    2: {
        name: "مریم کریمی",
        title: "متخصص هوش مصنوعی و داده‌کاوی",
        rating: 5.0,
        courses: 8,
        students: 2891,
        reviews: 3100,
        bio: "مریم دکترای هوش مصنوعی از دانشگاه شریف دارد و بیش از ۶ سال در صنعت فناوری فعالیت می‌کند. او علاقه زیادی به آموزش مفاهیم پیچیده هوش مصنوعی به زبان ساده دارد. مریم در پروژه‌های متعددی در زمینه بینایی کامپیوتر و پردازش زبان طبیعی مشارکت داشته است.",
        skills: ["Python", "TensorFlow", "PyTorch", "Data Science", "Machine Learning", "Deep Learning"],
        avatar: "./assets/images/me.png"
    },
    3: {
        name: "رضا نوروزی",
        title: "طراح تجربه و رابط کاربری",
        rating: 4.9,
        courses: 10,
        students: 4123,
        reviews: 3800,
        bio: "رضا با بیش از ۷ سال تجربه در طراحی محصولات دیجیتال، تخصص ویژه‌ای در طراحی رابط کاربری و تجربه کاربری دارد. او برنده چندین جایزه بین‌المللی در زمینه طراحی شده است. رضا در شرکت‌های بزرگی مانند ایرانسل و تپسی به عنوان طراح ارشد فعالیت کرده است.",
        skills: ["UI Design", "UX Research", "Figma", "Adobe XD", "Prototyping", "Design Systems"],
        avatar: "./assets/images/me3.jpg"
    }
};

function instruOpenInstructorPopup(instructorId) {
    const instructor = instruInstructorsData[instructorId];
    if (instructor && instruInstructorPopup) {
        document.getElementById('popup-name').textContent = instructor.name;
        document.getElementById('popup-title').textContent = instructor.title;
        document.getElementById('popup-avatar').src = instructor.avatar;
        document.getElementById('popup-avatar').alt = instructor.name;
        
        // به‌روزرسانی امتیاز
        const ratingElement = document.getElementById('popup-rating');
        if (ratingElement) {
            ratingElement.innerHTML = '';
            const fullStars = Math.floor(instructor.rating);
            const hasHalfStar = instructor.rating % 1 !== 0;
            
            for (let i = 0; i < fullStars; i++) {
                ratingElement.innerHTML += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                ratingElement.innerHTML += '<i class="fas fa-star-half-alt"></i>';
            }
            
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
            for (let i = 0; i < emptyStars; i++) {
                ratingElement.innerHTML += '<i class="far fa-star"></i>';
            }
            
            ratingElement.innerHTML += `<span>${instructor.rating}</span>`;
        }
        
        // به‌روزرسانی آمار
        document.getElementById('popup-courses').textContent = instructor.courses;
        document.getElementById('popup-students').textContent = instructor.students.toLocaleString();
        document.getElementById('popup-reviews').textContent = instructor.reviews.toLocaleString();
        
        // به‌روزرسانی بیوگرافی
        document.getElementById('popup-bio').textContent = instructor.bio;
        
        // به‌روزرسانی مهارت‌ها
        const skillsContainer = document.getElementById('popup-skills');
        if (skillsContainer) {
            skillsContainer.innerHTML = '';
            instructor.skills.forEach(skill => {
                const skillElement = document.createElement('span');
                skillElement.className = 'instru-skill-tag';
                skillElement.textContent = skill;
                skillsContainer.appendChild(skillElement);
            });
        }
        
        // نمایش پاپ آپ
        instruInstructorPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // فوکوس روی دکمه بستن برای دسترسی پذیری
        setTimeout(() => {
            if (instruPopupClose) instruPopupClose.focus();
        }, 100);
    }
}

function instruCloseInstructorPopup() {
    if (instruInstructorPopup) {
        instruInstructorPopup.classList.remove('active');
        document.body.style.overflow = '';
        
        // بازگرداندن فوکوس به دکمه‌ای که پاپ آپ را باز کرده
        const activeElement = document.activeElement;
        if (activeElement && activeElement.classList.contains('instru-btn-profile')) {
            activeElement.focus();
        }
    }
}

if (instruProfileButtons.length > 0) {
    instruProfileButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const instructorId = this.getAttribute('data-instructor');
            instruOpenInstructorPopup(instructorId);
        });
    });
}

if (instruPopupClose) {
    instruPopupClose.addEventListener('click', instruCloseInstructorPopup);
}

// بستن پاپ آپ با کلیک خارج از محتوا
if (instruInstructorPopup) {
    instruInstructorPopup.addEventListener('click', function(e) {
        if (e.target === instruInstructorPopup) {
            instruCloseInstructorPopup();
        }
    });
}

// بستن پاپ آپ با کلید Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && instruInstructorPopup && instruInstructorPopup.classList.contains('active')) {
        instruCloseInstructorPopup();
    }
});

// انیمیشن اسکرول برای عناصر صفحه مدرسین
const instruAnimateOnScroll = function() {
    const instruElements = document.querySelectorAll('.instru-instructor-card, .instru-why-instructor-card, .instru-process-step');
    
    instruElements.forEach((element, index) => {
        const instruElementPosition = element.getBoundingClientRect().top;
        const instruScreenPosition = window.innerHeight / 1.2;
        
        if (instruElementPosition < instruScreenPosition) {
            // تاخیر برای انیمیشن‌های پلکانی
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
};

// تنظیم حالت اولیه برای انیمیشن صفحه مدرسین
document.addEventListener('DOMContentLoaded', function() {
    const instruAnimatedElements = document.querySelectorAll('.instru-instructor-card, .instru-why-instructor-card, .instru-process-step');
    instruAnimatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // اجرای اولیه انیمیشن
    setTimeout(instruAnimateOnScroll, 100);
});

window.addEventListener('scroll', instruAnimateOnScroll);
window.addEventListener('load', instruAnimateOnScroll);

// مدیریت ریسپانسیو برای صفحه مدرسین
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        // بستن منوی موبایل صفحه مدرسین
        if (instruNavContainer) instruNavContainer.classList.remove('active');
        if (instruMobileMenuOverlay) instruMobileMenuOverlay.classList.remove('active');
        if (instruMobileMenuToggle) {
            instruMobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            instruMobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
    }
});

// بهبود بارگذاری تصاویر برای صفحه مدرسین
function instruLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// فراخوانی تابع بارگذاری تصاویر
document.addEventListener('DOMContentLoaded', function() {
    instruLoadImages();
});
// ==================== مدیریت صفحه قوانین و مقررات ====================
const termsThemeToggle = document.getElementById('theme-toggle');
const termsMobileThemeToggle = document.getElementById('mobile-theme-toggle');
const termsBody = document.body;

// بررسی وضعیت تم در localStorage برای صفحه قوانین
if (localStorage.getItem('theme') === 'light') {
    termsBody.classList.replace('dark-theme', 'light-theme');
    if (termsThemeToggle) termsThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    if (termsMobileThemeToggle) termsMobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

function termsToggleTheme() {
    if (termsBody.classList.contains('dark-theme')) {
        termsBody.classList.replace('dark-theme', 'light-theme');
        if (termsThemeToggle) termsThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        if (termsMobileThemeToggle) termsMobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        termsBody.classList.replace('light-theme', 'dark-theme');
        if (termsThemeToggle) termsThemeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        if (termsMobileThemeToggle) termsMobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    }
}

if (termsThemeToggle) termsThemeToggle.addEventListener('click', termsToggleTheme);
if (termsMobileThemeToggle) termsMobileThemeToggle.addEventListener('click', termsToggleTheme);

// مدیریت اسکرول هدر برای صفحه قوانین
const termsHeader = document.getElementById('page-header');

window.addEventListener('scroll', function() {
    if (termsHeader) {
        if (window.scrollY > 100) {
            termsHeader.classList.add('header-scrolled');
        } else {
            termsHeader.classList.remove('header-scrolled');
        }
    }
});

// مدیریت منوی موبایل برای صفحه قوانین
const termsMobileMenuToggle = document.getElementById('mobile-menu-toggle');
const termsMobileNavContainer = document.getElementById('mobile-nav-container');
const termsMobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const termsMainLogo = document.getElementById('main-logo');

function termsToggleMobileMenu() {
    termsMobileMenuToggle.classList.toggle('active');
    termsMobileNavContainer.classList.toggle('active');
    termsMobileMenuOverlay.classList.toggle('active');
    if (termsMainLogo) termsMainLogo.classList.toggle('hidden');
    document.body.style.overflow = termsMobileNavContainer.classList.contains('active') ? 'hidden' : '';
}

if (termsMobileMenuToggle) termsMobileMenuToggle.addEventListener('click', termsToggleMobileMenu);
if (termsMobileMenuOverlay) termsMobileMenuOverlay.addEventListener('click', termsToggleMobileMenu);

// بستن منوی موبایل در صورت کلیک روی لینک‌ها برای صفحه قوانین
const termsNavLinks = document.querySelectorAll('.term-1-mobile-nav-link');
termsNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            termsToggleMobileMenu();
        }
    });
});

// مدیریت ناوبری قوانین
const termsNavLinksList = document.querySelectorAll('.term-1-terms-nav-link');
const termsSections = document.querySelectorAll('.term-1-terms-section');

if (termsNavLinksList.length > 0) {
    termsNavLinksList.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // حذف کلاس active از همه لینک‌ها
            termsNavLinksList.forEach(item => {
                item.classList.remove('active');
            });
            
            // اضافه کردن کلاس active به لینک فعلی
            this.classList.add('active');
            
            // اسکرول به بخش مربوطه
            const sectionId = this.getAttribute('href');
            const targetSection = document.querySelector(sectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// مدیریت اسکرول و برجسته‌سازی بخش فعال
function termsHighlightActiveSection() {
    let fromTop = window.scrollY + 100;
    
    termsSections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
            termsNavLinksList.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

if (termsSections.length > 0) {
    window.addEventListener('scroll', termsHighlightActiveSection);
}

// مدیریت فرم خبرنامه برای صفحه قوانین
const termsNewsletterForm = document.querySelector('.term-1-newsletter-form');

if (termsNewsletterForm) {
    termsNewsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('.term-1-newsletter-input');
        const button = this.querySelector('.term-1-btn-newsletter');
        
        if (emailInput && emailInput.value.trim() !== '' && button) {
            // ذخیره ایمیل در localStorage (شبیه‌سازی)
            localStorage.setItem('newsletter_email', emailInput.value);
            
            // نمایش پیام موفقیت
            button.innerHTML = '<i class="fas fa-check"></i><span>عضویت موفق</span>';
            button.style.background = 'var(--success-color)';
            
            // بازگشت به حالت اولیه بعد از 3 ثانیه
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-paper-plane"></i><span>عضویت در خبرنامه</span>';
                button.style.background = '';
                emailInput.value = '';
            }, 3000);
            
            // در اینجا می‌توانید درخواست AJAX برای ذخیره ایمیل ارسال کنید
            console.log(`ایمیل ${emailInput.value} برای خبرنامه ثبت شد.`);
        }
    });
}

// انیمیشن اسکرول برای عناصر صفحه قوانین
const termsAnimateOnScroll = function() {
    const termsElements = document.querySelectorAll('.term-1-terms-section');
    
    termsElements.forEach(element => {
        const termsElementPosition = element.getBoundingClientRect().top;
        const termsScreenPosition = window.innerHeight / 1.2;
        
        if (termsElementPosition < termsScreenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// تنظیم حالت اولیه برای انیمیشن صفحه قوانین
document.querySelectorAll('.term-1-terms-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', termsAnimateOnScroll);
window.addEventListener('load', termsAnimateOnScroll);

// بهبود UX: اسکرول نرم به بخش‌ها
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// مدیریت ریسپانسیو برای صفحه قوانین
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        // بستن منوی موبایل صفحه قوانین
        if (termsMobileMenuToggle) termsMobileMenuToggle.classList.remove('active');
        if (termsMobileNavContainer) termsMobileNavContainer.classList.remove('active');
        if (termsMobileMenuOverlay) termsMobileMenuOverlay.classList.remove('active');
        if (termsMainLogo) termsMainLogo.classList.remove('hidden');
        
        document.body.style.overflow = '';
    }
});

// مقداردهی اولیه برای انیمیشن‌های صفحه قوانین هنگام لود صفحه
document.addEventListener('DOMContentLoaded', function() {
    termsAnimateOnScroll();
});
// ==================== مدیریت صفحه سبد خرید ====================
const cardsThemeToggle = document.getElementById('cards-theme-toggle');
const cardsBody = document.body;

// بررسی وضعیت تم در localStorage برای صفحه سبد خرید
if (localStorage.getItem('theme') === 'light') {
    cardsBody.classList.replace('dark-theme', 'light-theme');
    if (cardsThemeToggle) cardsThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

function cardsToggleTheme() {
    if (cardsBody.classList.contains('dark-theme')) {
        cardsBody.classList.replace('dark-theme', 'light-theme');
        if (cardsThemeToggle) cardsThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        cardsBody.classList.replace('light-theme', 'dark-theme');
        if (cardsThemeToggle) cardsThemeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    }
}

if (cardsThemeToggle) cardsThemeToggle.addEventListener('click', cardsToggleTheme);

// مدیریت منوی موبایل برای صفحه سبد خرید
const cardsMobileMenuToggle = document.getElementById('cards-mobile-menu-toggle');
const cardsSidebar = document.getElementById('cards-sidebar');
const cardsMobileMenuOverlay = document.getElementById('cards-mobile-menu-overlay');

function cardsToggleMobileMenu() {
    if (cardsSidebar) cardsSidebar.classList.toggle('active');
    if (cardsMobileMenuOverlay) cardsMobileMenuOverlay.classList.toggle('active');
}

if (cardsMobileMenuToggle) cardsMobileMenuToggle.addEventListener('click', cardsToggleMobileMenu);
if (cardsMobileMenuOverlay) cardsMobileMenuOverlay.addEventListener('click', cardsToggleMobileMenu);

// مدیریت دکمه‌های کمیت
const cardsQuantityButtons = document.querySelectorAll('.cards-quantity-btn');

cardsQuantityButtons.forEach(button => {
    button.addEventListener('click', function() {
        const action = this.getAttribute('data-action');
        const quantityElement = this.parentElement.querySelector('.cards-quantity-value');
        let quantity = parseInt(quantityElement.textContent);
        
        if (action === 'increase') {
            quantity++;
        } else if (action === 'decrease' && quantity > 1) {
            quantity--;
        }
        
        quantityElement.textContent = quantity;
        cardsUpdateCartTotal();
    });
});

// مدیریت دکمه‌های حذف
const cardsRemoveButtons = document.querySelectorAll('.cards-remove-btn');

cardsRemoveButtons.forEach(button => {
    button.addEventListener('click', function() {
        const cartItem = this.closest('.cards-cart-item');
        cartItem.style.opacity = '0';
        cartItem.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            cartItem.remove();
            cardsUpdateCartTotal();
            cardsCheckEmptyCart();
            cardsShowNotification('دوره با موفقیت از سبد خرید حذف شد');
        }, 300);
    });
});

// مدیریت دکمه‌های افزودن به سبد خرید
const cardsAddToCartButtons = document.querySelectorAll('.cards-add-to-cart-btn');

cardsAddToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const cartItem = this.closest('.cards-cart-item');
        const itemTitle = cartItem.querySelector('.cards-item-title').textContent;
        const itemPrice = cartItem.querySelector('.cards-item-price').textContent;
        
        cardsShowNotification(`دوره "${itemTitle}" به سبد خرید اضافه شد!`);
        
        // در اینجا می‌توانید منطق افزودن به سبد خرید را پیاده‌سازی کنید
    });
});

// به‌روزرسانی مجموع سبد خرید
function cardsUpdateCartTotal() {
    // در اینجا می‌توانید منطق محاسبه مجموع را پیاده‌سازی کنید
    console.log('مجموع سبد خرید به‌روزرسانی شد');
}

// بررسی خالی بودن سبد خرید
function cardsCheckEmptyCart() {
    const cartItems = document.querySelectorAll('.cards-cart-items .cards-cart-item');
    if (cartItems.length === 0) {
        // در اینجا می‌توانید منطق نمایش سبد خرید خالی را پیاده‌سازی کنید
        console.log('سبد خرید خالی است');
    }
}

// مدیریت فرم جستجو
const cardsSearchForm = document.querySelector('.cards-search-box');

if (cardsSearchForm) {
    cardsSearchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const input = this.querySelector('.cards-search-input');
        if (input && input.value.trim() !== '') {
            // در اینجا می‌توانید منطق جستجو را پیاده‌سازی کنید
            cardsShowNotification('جستجو برای: ' + input.value);
        }
    });
}

// مدیریت دکمه پرداخت
const cardsCheckoutBtn = document.querySelector('.cards-checkout-btn');

if (cardsCheckoutBtn) {
    cardsCheckoutBtn.addEventListener('click', function() {
        // شبیه‌سازی پردازش پرداخت
        cardsShowLoading();
        setTimeout(() => {
            cardsHideLoading();
            cardsShowNotification('در حال انتقال به درگاه پرداخت...');
        }, 2000);
    });
}

// نمایش نوتیفیکیشن
function cardsShowNotification(message) {
    // ایجاد عنصر نوتیفیکیشن در صورت عدم وجود
    let notification = document.getElementById('cards-notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'cards-notification';
        notification.className = 'cards-notification';
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// نمایش لودینگ
function cardsShowLoading() {
    const loadingOverlay = document.getElementById('cards-loading-overlay');
    if (loadingOverlay) loadingOverlay.classList.add('active');
}

// پنهان کردن لودینگ
function cardsHideLoading() {
    const loadingOverlay = document.getElementById('cards-loading-overlay');
    if (loadingOverlay) loadingOverlay.classList.remove('active');
}

// مدیریت ریسپانسیو در هنگام تغییر اندازه پنجره برای صفحه سبد خرید
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        if (cardsSidebar) cardsSidebar.classList.remove('active');
        if (cardsMobileMenuOverlay) cardsMobileMenuOverlay.classList.remove('active');
    }
});

// بهبود UX: نمایش انیمیشن هنگام بارگذاری صفحه
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.cards-cart-item');
    cartItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'opacity 0.3s, transform 0.3s';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// مدیریت کد تخفیف
const cardsPromoBtn = document.querySelector('.cards-promo-btn');
const cardsPromoInput = document.querySelector('.cards-promo-input');

if (cardsPromoBtn && cardsPromoInput) {
    cardsPromoBtn.addEventListener('click', function() {
        const promoCode = cardsPromoInput.value.trim();
        if (promoCode !== '') {
            // شبیه‌سازی اعمال کد تخفیف
            cardsPromoBtn.innerHTML = '<span class="cards-loading-spinner"></span>';
            cardsPromoBtn.disabled = true;
            
            setTimeout(() => {
                cardsPromoBtn.innerHTML = 'اعمال';
                cardsPromoBtn.disabled = false;
                
                if (promoCode === 'DISCOUNT20') {
                    cardsShowNotification('کد تخفیف با موفقیت اعمال شد!');
                    cardsPromoInput.value = '';
                } else {
                    cardsShowNotification('کد تخفیف معتبر نیست!');
                }
            }, 1500);
        }
    });
    
    cardsPromoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            cardsPromoBtn.click();
        }
    });
}

