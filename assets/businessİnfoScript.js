
const fetchdata = async () => {
    const response = await fetch('https://admin.opendata.az/az/dataset/ec693731-30f7-4c49-8fac-dc4f0f0d5b9d.jsonld');
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