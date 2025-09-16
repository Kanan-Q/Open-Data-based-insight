 // Search functionality
        document.querySelector('input[type="text"]').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value;
                if (searchTerm.trim()) {
                    alert('Futbol xəbərlərində "${searchTerm}" üçün axtarış edilir...');
                }
            }
        });

        // News card click handlers
        document.querySelectorAll('.news-card').forEach(card => {
            card.addEventListener('click', function() {
                const title = this.querySelector('h3').textContent;
                alert('"${title}" xəbərinə keçid edilir...');
            });
        });

        // Sidebar item click handlers
        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.addEventListener('click', function() {
                const title = this.querySelector('h3').textContent;
                alert('"${title}" xəbərinə keçid edilir...');
            });
        });

        // Load more button
        document.querySelector('main button').addEventListener('click', function() {
            alert('Əlavə futbol xəbərləri yüklənir...');
        });

        // Breadcrumb navigation
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const page = this.textContent;
                alert('${page} səhifəsinə keçid edilir...');
            });
        });

        // Header navigation
        document.querySelectorAll('header a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const page = this.textContent;
                alert('${page} səhifəsinə keçid edilir...');
            });
        });

        // Subscribe button
        document.querySelector('header button').addEventListener('click', function() {
            alert('Abunəlik formu açılır...');
        });

        // Footer links
        document.querySelectorAll('footer a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const linkText = this.textContent;
                if (linkText.includes('@') || linkText.includes('+')) return;
                alert('${linkText} səhifəsinə keçid edilir...');
            });
        });