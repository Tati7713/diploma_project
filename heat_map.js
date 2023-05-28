let links = document.getElementsByTagName('a');
let clickData;

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
        clickData = {
            x: event.clientX,
            y: event.clientY,
            timestamp: new Date().toISOString()
        };
    });
}

fetch('https://your-analytics-server.com/heatmap', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(clickData)
})
    .then(function(response) {

    })
    .catch(function(error) {

    });
