// Variables Declaration

const requestURL = `https://brotherblazzard.github.io/canvas-content/fruit.json`;
const datas = document.querySelector(".datas");

// Fetch API
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const companies = jsonObject["fruits"];
      
    })

