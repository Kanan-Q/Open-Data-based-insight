        document.querySelectorAll('.related-news-item, .popular-news-item').forEach(item => {
            item.addEventListener('click', function () {
                const title = this.querySelector('h3').textContent;
                alert('"${title}" xəbərinə keçid edilir...');
            });
        });

        // Back button functionality
        document.querySelector('header button').addEventListener('click', function () {
            if (document.referrer) {
                window.history.back();
            } else {
                alert('Ana səhifəyə qayıdılır...');
            }
        });

        // Reading progress indicator
        window.addEventListener('scroll', function () {
            const article = document.querySelector('.article-content');
            const articleTop = article.offsetTop;
            const articleHeight = article.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollTop = window.pageYOffset;

            const progress = Math.min(100, Math.max(0,
                ((scrollTop + windowHeight - articleTop) / articleHeight) * 100
            ));

            // You could add a progress bar here if needed
        });