// Search functionality
document.querySelector('input[type="text"]').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value;
        if (searchTerm.trim()) {
            console.log('Futbol xəbərlərində "${searchTerm}" üçün axtarış edilir...');
        }
    }
});

// News card click handlers
document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', function () {
        const title = this.querySelector('h3').textContent;
        console.log('"${title}" xəbərinə keçid edilir...');
    });
});

// Sidebar item click handlers
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function () {
        const title = this.querySelector('h3').textContent;
        console.log('"${title}" xəbərinə keçid edilir...');
    });
});

// Load more button
document.querySelector('main button').addEventListener('click', function () {
    console.log('Əlavə futbol xəbərləri yüklənir...');
});

// Breadcrumb navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const page = this.textContent;
        console.log('${page} səhifəsinə keçid edilir...');
    });
});

// Header navigation
document.querySelectorAll('header a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const page = this.textContent;
        console.log('${page} səhifəsinə keçid edilir...');
    });
});

// Subscribe button
document.querySelector('header button').addEventListener('click', function () {
    console.log('Abunəlik formu açılır...');
});

// Footer links
document.querySelectorAll('footer a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const linkText = this.textContent;
        if (linkText.includes('@') || linkText.includes('+')) return;
        console.log('${linkText} səhifəsinə keçid edilir...');
    });
});


const fetchThirddata = async () => {
    try {
        const response = await fetch('https://admin.opendata.az/az/dataset/ec693731-30f7-4c49-8fac-dc4f0f0d5b9d.jsonld');
        const data = await response.json();

        const dataset = data["@graph"].find(item => item["dct:title"]);

        const titleAZObj = dataset["dct:title"].find(t => typeof t === "object" && t["@language"] === "az");
        const titleAZ = titleAZObj ? titleAZObj["@value"] : "";

        document.querySelector('#h1').innerText = titleAZ;

        console.log("P teqi üçün dct:title (AZ):", titleAZ);

    } catch (error) {
        console.error("Xəta baş verdi:", error);
    }

}

fetchThirddata();