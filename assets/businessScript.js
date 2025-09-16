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



const fetchSeconddata = async () => {
    try {
        const response = await fetch('https://admin.opendata.az/az/dataset/number-of-computers-available-in-schools.jsonld');
        const data = await response.json();

        const dataset = data["@graph"].find(item => item["dct:title"]);

        const titleAZObj = dataset["dct:title"].find(t => typeof t === "object" && t["@language"] === "az");
        const titleAZ = titleAZObj ? titleAZObj["@value"] : "";

        document.querySelector('#next1').innerText = titleAZ;


    } catch (error) {
        console.error("Xəta baş verdi:", error);
    }
}

fetchSeconddata();



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

fetchCrimeData();

const fetchdata = async () => {
    let response = await fetch('https://admin.opendata.az/az/dataset/the-number-of-sports-facilities-and-people-involved-in-physical-education-has-increased-since-2009-.jsonld');
    let data = await response.json();

    const dataset = data["@graph"].find(item => item["dct:title"]);
    const title = dataset["dct:title"].find(t => typeof t === "string" || t["@language"] === "az");

    const modifiedObj = data["@graph"].find(item => item["dct:modified"]);
    const modifiedValue = modifiedObj?.["dct:modified"]?.["@value"];




    document.querySelector('#next2').innerText = typeof title === "string" ? title : title["@value"];

};

fetchdata();