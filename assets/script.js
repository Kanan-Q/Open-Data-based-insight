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
const fetchdata = async () => {
    try {
        const response = await fetch('https://admin.opendata.az/az/dataset/bakalavriat-seviyyesi-uzre-ixtisaslar.jsonld');
        const data = await response.json();

        const dataset = data["@graph"].find(item => item["dct:description"]);

        if (!dataset || !dataset["dct:description"]) return;

        const descriptionAZ = dataset["dct:description"].find(d => typeof d === "object" && d["@language"] === "az")?.["@value"] || "";


        document.querySelector('#h3').innerText = descriptionAZ;

    } catch (error) {
        console.error("Xəta baş verdi:", error);
    }
}

fetchdata();


const fetchSeconddata = async () => {
    try {
        const response = await fetch('https://admin.opendata.az/az/dataset/number-of-computers-available-in-schools.jsonld');
        const data = await response.json();

        // "dct:title" sahəsi olan dataset-i tapırıq
        const dataset = data["@graph"].find(item => item["dct:title"]);

        // AZ dilində olan @value-ni tapırıq
        const titleAZObj = dataset["dct:title"].find(t => typeof t === "object" && t["@language"] === "az");
        const titleAZ = titleAZObj ? titleAZObj["@value"] : "";

        // p teqinə yazdırırıq
        document.querySelector('#next1').innerText = titleAZ;

        console.log("P teqi üçün dct:title (AZ):", titleAZ);

    } catch (error) {
        console.error("Xəta baş verdi:", error);
    }
}

fetchSeconddata();
const fetchThirddata = async () => {
    try {
        const response = await fetch('https://admin.opendata.az/az/dataset/ec693731-30f7-4c49-8fac-dc4f0f0d5b9d.jsonld');
        const data = await response.json();

        const dataset = data["@graph"].find(item => item["dct:title"]);

        const titleAZObj = dataset["dct:title"].find(t => typeof t === "object" && t["@language"] === "az");
        const titleAZ = titleAZObj ? titleAZObj["@value"] : "";

        document.querySelector('#next2').innerText = titleAZ;

        console.log("P teqi üçün dct:title (AZ):", titleAZ);

    } catch (error) {
        console.error("Xəta baş verdi:", error);
    }

}

fetchThirddata();


const fetchFourthdata = async () => {
    try {
        const response = await fetch('https://admin.opendata.az/az/dataset/e1965f38-6377-4cf6-96ef-4cca129c719d.jsonld');
        const data = await response.json();

        // "@graph" içindən dct:title olan obyekt
        const dataset = data["@graph"].find(item => item["dct:title"]);

        // AZ dilindəki @value-ni tapırıq
        const titleAZObj = dataset["dct:title"].find(t => typeof t === "object" && t["@language"] === "az");
        const titleAZ = titleAZObj ? titleAZObj["@value"] : "";

        // p teqinə yazdırırıq
        document.querySelector('#next3').innerText = titleAZ;


    } catch (error) {
        console.error("Xəta baş verdi:", error);
    }

}

fetchFourthdata();


const fetchdatas = async () => {
    try {
        const response = await fetch('https://admin.opendata.az/az/dataset/768012c5-e2a5-4b73-a20e-93a201e6ff4b.jsonld');
        const data = await response.json();

        const dataset = data["@graph"].find(item => item["@type"] && item["@type"].includes("schema1:Dataset"));

        const titleAZObj = dataset["schema1:name"].find(t => typeof t === "object" && t["@language"] === "az");
        const titleAZ = titleAZObj ? titleAZObj["@value"] : "";

        document.querySelector('#next5').innerText = titleAZ;

    } catch (error) {
        console.error("Xəta baş verdi:", error);
    }
}

fetchdatas();

const fetchCrimeData = async () => {
    try {
        const response = await fetch('https://admin.opendata.az/az/dataset/ef6558b0-8abe-4867-9e30-54da7ee6dafb.jsonld');
        const data = await response.json();

        // "@graph" içindən Dataset tipli obyekt
        const dataset = data["@graph"].find(item => item["@type"] && item["@type"].includes("schema1:Dataset"));

        // AZ dilindəki @value-ni tapırıq
        const titleAZObj = dataset["schema1:name"].find(t => typeof t === "object" && t["@language"] === "az");
        const titleAZ = titleAZObj ? titleAZObj["@value"] : "";

        // p teqinə yazdırırıq
        document.querySelector('#next6').innerText = titleAZ;

    } catch (error) {
        console.error("Xəta baş verdi:", error);
    }
}

// Funksiyanı işə salırıq
fetchCrimeData();
