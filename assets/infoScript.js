document.querySelectorAll('.related-news-item, .popular-news-item').forEach(item => {
    item.addEventListener('click', function () {
        const title = this.querySelector('h3').textContent;
        alert('"${title}" xəbərinə keçid edilir...');
    });
});

document.querySelector('header button').addEventListener('click', function () {
    if (document.referrer) {
        window.history.back();
    } else {
        alert('Ana səhifəyə qayıdılır...');
    }
});

window.addEventListener('scroll', function () {
    const article = document.querySelector('.article-content');
    const articleTop = article.offsetTop;
    const articleHeight = article.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;

    const progress = Math.min(100, Math.max(0,
        ((scrollTop + windowHeight - articleTop) / articleHeight) * 100
    ));

});

const fetchdata = async () => {
    let response = await fetch('https://admin.opendata.az/az/dataset/the-number-of-sports-facilities-and-people-involved-in-physical-education-has-increased-since-2009-.jsonld');
    let data = await response.json();

    const dataset = data["@graph"].find(item => item["dct:title"]);
    const title = dataset["dct:title"].find(t => typeof t === "string" || t["@language"] === "az");

    const modifiedObj = data["@graph"].find(item => item["dct:modified"]);
    const modifiedValue = modifiedObj?.["dct:modified"]?.["@value"];

    const orgObj = data["@graph"].find(item => item["foaf:name"]);
    const orgName = orgObj?.["foaf:name"] || "Organization tapılmadı";

    let formattedDate = "Modified tapılmadı";
    if (modifiedValue) {
        const d = new Date(modifiedValue);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
    }

    // HTML-a yazdırmaq
    document.querySelector('#h1').innerText = typeof title === "string" ? title : title["@value"];
    document.querySelector('#span').innerText = formattedDate;
    document.querySelector('#p').innerText = 'Mənbə:' + orgName;

    console.log(data);
};

fetchdata();




