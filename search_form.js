document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let country = document.getElementById("countryInput").value.toLowerCase();

    switch(country) {
        case "austria":
            window.location.href = "Austria.html";
            break;
        case "china":
            window.location.href = "China.html";
            break;
        case "egypt":
            window.location.href = "Egypt.html";
            break;
        case "england":
            window.location.href = "England.html";
            break;
        case "france":
            window.location.href = "France.html";
            break;
        case "germany":
            window.location.href = "Germany.html";
            break;
        case "italy":
            window.location.href = "Italy.html";
            break;
        case "japan":
            window.location.href = "Japan.html";
            break;
        case "norway":
            window.location.href = "Norway.html";
            break;
        case "peru":
            window.location.href = "Peru.html";
            break;
        case "spain":
            window.location.href = "Spain.html";
            break;
        case "thailand":
            window.location.href = "Thailand.html";
            break;
        default:
            alert("Країна не знайдена!");
    }
});
