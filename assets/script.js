document.querySelector('input[type="text"]').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value;
        if (searchTerm.trim()) {
            alert('"${searchTerm}" üçün axtarış nəticələri yüklənir...');
        }
    }
});

// News card click handlers
document.querySelectorAll('.news-card button').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const article = this.closest('.news-card');
        const title = article.querySelector('h1, h3').textContent;
        alert('"${title}" xəbərinin tam mətnini oxuyursunuz...');
    });
});

// Sidebar category interactions
document.querySelectorAll('.sidebar-item > div').forEach(item => {
    item.addEventListener('click', function () {
        const category = this.querySelector('span').textContent;
        alert('${ category } kateqoriyasının xəbərləri yüklənir...');
    });
});

// Subscribe button
document.querySelector('header button').addEventListener('click', function () {
    alert('Abunəlik formu açılır...');
});

// Load more button
document.querySelector('main button:last-of-type').addEventListener('click', function () {
    alert('Əlavə xəbərlər yüklənir...');
});

// Mobile responsive sidebar toggle (for smaller screens)
if (window.innerWidth < 768) {
    const sidebar = document.querySelector('aside');
    sidebar.classList.add('hidden');

    // Add mobile menu button to header
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.className = 'md:hidden text-2xl text-gray-600';
    mobileMenuBtn.onclick = () => sidebar.classList.toggle('hidden');

    document.querySelector('header .flex').insertBefore(mobileMenuBtn, document.querySelector('header .flex > div:last-child'));
}