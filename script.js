        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            teal: '#2BBBAD',
                            tealDark: '#20968a',
                            lightGreen: '#A5D6A7',
                            lightGreenBg: '#f2fbf3'
                        },
                        dark: '#1a202c',
                    },
                    fontFamily: {
                        sans: ['Open Sans', 'sans-serif'],
                        heading: ['Poppins', 'sans-serif'],
                    },
                    boxShadow: {
                        'apple': '0 20px 40px rgba(0, 0, 0, 0.06)',
                        'apple-hover': '0 25px 50px rgba(43, 187, 173, 0.15)',
                        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
                    }
                }
            }
        }

               // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close mobile menu on click
        const mobileLinks = menu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Header Background on Scroll
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('shadow-sm');
                header.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                header.classList.remove('shadow-sm');
                header.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        });

        // Form Submission Mock
        const form = document.getElementById('booking-form');
        const successMsg = document.getElementById('form-success');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, you would handle AJAX submission here
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Processing...';
            lucide.createIcons();
            
            setTimeout(() => {
                form.reset();
                btn.innerHTML = originalText;
                successMsg.classList.remove('hidden');
                setTimeout(() => successMsg.classList.add('hidden'), 5000);
            }, 1500);
        });

        // Set minimum date to today for the date picker
        const dateInput = document.querySelector('input[type="date"]');
        if(dateInput){
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }