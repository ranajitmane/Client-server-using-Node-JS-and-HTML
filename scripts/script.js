    window.onload = (event) => {
        const xhttp = new XMLHttpRequest();
        console.log('page is fully loaded');
        xhttp.open("GET", "/getData", true);
        xhttp.send();
        xhttp.onload = function() {
          console.log(this.responseText);
          var parentElement = document.createElement('div');
          var childElement = document.createElement('span');
          childElement.innerHTML = JSON.parse(this.responseText).name;
          parentElement.appendChild(childElement);
          document.getElementById("dynamic-data").appendChild(parentElement)
        };
    };