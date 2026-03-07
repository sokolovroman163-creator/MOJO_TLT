document.addEventListener('DOMContentLoaded', () => {
    // Reveal on scroll
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        for (let i = 0; i < revealElements.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = revealElements[i].getBoundingClientRect().top;
            let elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Booking Form Submission
    const bookingForm = document.querySelector('.res-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = bookingForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Отправка...';
            btn.disabled = true;

            // Сбор данных из формы
            const name = bookingForm.querySelector('input[name="name"]').value;
            const phone = bookingForm.querySelector('input[name="phone"]').value;
            const date = bookingForm.querySelector('input[name="date"]').value;
            const guests = bookingForm.querySelector('input[name="guests"]').value;

            // Формирование сообщения для Telegram
            const message = `🔥 *Новая заявка на бронь (MOJO)*\n\n` +
                `👤 *Имя:* ${name}\n` +
                `📞 *Телефон:* ${phone}\n` +
                `📅 *Дата:* ${date}\n` +
                `👥 *Гостей:* ${guests} чел.`;

            // ВАЖНО: Вставьте сюда токен вашего бота и ID чата
            const botToken = 'YOUR_BOT_TOKEN_HERE';
            const chatId = 'YOUR_CHAT_ID_HERE';

            const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                        parse_mode: 'Markdown'
                    })
                });

                if (response.ok) {
                    alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
                    bookingForm.reset();
                } else {
                    alert('Произошла ошибка при отправке. Пожалуйста, проверьте консоль.');
                    console.error('Telegram API Error:', await response.text());
                }
            } catch (error) {
                alert('Произошла ошибка при отправке. Проверьте подключение к интернету.');
                console.error('Fetch Error:', error);
            } finally {
                btn.innerText = originalText;
                btn.disabled = false;
            }
        });
    }

    // Booking Date Validation (min = today)
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
