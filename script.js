// Update current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Typing effect script
        const typingTextElement = document.getElementById('typing-text');
        const phrases = [
            "Hi, I'm Avantika Padhi!",
            "A MERN Stack Developer",
            "Crafting Robust Web Apps",
            "Solving Problems with Code"
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 100; // milliseconds per character
        const deletingSpeed = 50; // milliseconds per character
        const pauseBeforeDelete = 1500; // milliseconds before deleting
        const pauseBeforeType = 500; // milliseconds before typing next phrase

        function typeWriter() {
            const currentPhrase = phrases[phraseIndex];
            if (isDeleting) {
                typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                // Pause at end of phrase, then start deleting
                setTimeout(() => isDeleting = true, pauseBeforeDelete);
            } else if (isDeleting && charIndex === 0) {
                // Done deleting, move to next phrase
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(() => typeWriter(), pauseBeforeType); // Pause before typing next
                return; // Exit to prevent immediate re-type
            }

            const speed = isDeleting ? deletingSpeed: typingSpeed;
            setTimeout(typeWriter, speed);
        }

        // Start the typing effect when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            typeWriter();
        });
