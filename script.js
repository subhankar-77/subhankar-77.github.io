document.addEventListener('DOMContentLoaded', () => {
    // Scroll-based fade-in animation
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    /*contactForm.addEventListener('submit', (e) => {
        //e.preventDefault();
        formStatus.innerHTML = '<p style="color: green;">Thank you! Your message has been sent.</p>';
        contactForm.reset();
    });*/
    window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    formStatus.innerHTML = '<p style="color: green;">Thank you! Your message has been sent.</p>';
    form.reset();
  }
}

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            const filter = button.dataset.filter;

            projectItems.forEach(item => {
                const category = item.dataset.category;
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});