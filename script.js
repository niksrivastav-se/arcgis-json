document.addEventListener("DOMContentLoaded", function() {
    const url = "https://<YOUR_ARCGIS_SERVER>/arcgis/rest/services/<SERVICE_NAME>/FeatureServer/<LAYER_ID>/query";
    const params = {
        f: "json",
        where: "1=1",
        outFields: "Code"
    };

    fetch(url + "?" + new URLSearchParams(params))
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("data-table").getElementsByTagName("tbody")[0];
            data.features.forEach(feature => {
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = feature.attributes.Code;
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});