        // Burger Menu Toggle
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('nav');

        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            burger.textContent = nav.classList.contains('active') ? '✕' : '☰';
        });

        // Smooth scroll for navigation
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const section = document.querySelector(this.getAttribute('href'));
                section.scrollIntoView({ behavior: 'smooth' });
                nav.classList.remove('active');
                burger.textContent = '☰';
            });
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent! (This is a demo)');
            this.reset();
        });

        // Scroll animation for sections and images
        const sections = document.querySelectorAll('.section');
        const sectionImages = document.querySelectorAll('.section-image');
        let lastScrollTop = 0;

        function checkVisibility() {
            const triggerBottom = window.innerHeight * 0.8;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollingDown = scrollTop > lastScrollTop;

            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < triggerBottom) {
                    section.classList.add('visible');
                }
            });

            sectionImages.forEach(image => {
                const imageTop = image.getBoundingClientRect().top;
                if (scrollingDown && imageTop < triggerBottom) {
                    image.classList.add('visible');
                } else if (!scrollingDown && imageTop < triggerBottom) {
                    image.classList.remove('visible');
                }
            });

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }

        window.addEventListener('scroll', checkVisibility);
        checkVisibility();