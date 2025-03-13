const navBar = document.querySelector('.nav-bar');
        const hamburger = document.querySelector('.mini-hamburger');

        hamburger.addEventListener('click', () => {
            navBar.classList.toggle('active');
        });



        // Theme function



        const toggleButton = document.getElementById('toggle-button');
        const body = document.body;

        // Check the current mode from localStorage
        let isDarkMode = localStorage.getItem('dark-mode') === 'true';

        // Apply the saved theme preference
        if (isDarkMode) {
            body.classList.add('dark-mode');
            toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for dark mode
        } else {
            toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for light mode
        }

        // Function to toggle between dark and light mode
        function toggleDarkMode() {
            isDarkMode = !isDarkMode;

            if (isDarkMode) {
                body.classList.add('dark-mode');
                toggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for dark mode
            } else {
                body.classList.remove('dark-mode');
                toggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for light mode
            }

            // Store the user's preference in localStorage
            localStorage.setItem('dark-mode', isDarkMode);
        }

        // Add event listener to the button
        toggleButton.addEventListener('click', toggleDarkMode);

