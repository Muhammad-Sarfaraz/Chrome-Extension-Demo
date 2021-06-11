function init() {
  fetch('https://coronavirus-19-api.herokuapp.com/countries/bangladesh')
      .then(response => response.json())
      .then(function(result) {
          inject(result);
      })
      .catch(error => {
          console.error('Error:', error);
      });
}

function inject(data) {

  let total = document.querySelector('#total');
  let today = document.querySelector('#today');
  let deaths = document.querySelector('#deaths');

  total.innerHTML = data.cases;
  today.innerHTML = data.todayCases;
  deaths.innerHTML = data.deaths;

}

init();