function restCountries()
    {
        let cntry_name=search.value
        fetch(`https://restcountries.com/v2/name/${cntry_name}?fullText=true`).
        then(res=>res.json()).
        then(data=>displayValues(data))
    }
    function displayValues(data)
    {
        let country_name=data[0].name
        let population=data[0].population
        let flag=data[0].flags["svg"]
        let currency=data[0].currencies[0].name
        let curr_symbol=data[0].currencies[0].symbol
        let region=data[0].region
        let sub_region=data[0].subregion
        let html_data=``
        html_data+=`<div class="card" style="width: 18rem;">
  <img src="${flag}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title fw-bolder">COUNTRY : ${country_name}</h5>
    <p class="card-text fw-bold">Region is ${region} and the sub region is ${sub_region}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item fw-bold">POPULATION : ${population}</li>
    <li class="list-group-item fw-bold">CURRENCY : ${currency}</li>
    <li class="list-group-item fw-bold">CURRENCY SYMBOL : ${curr_symbol}</li>
  </ul>
  <div class="know_more">
  <a target="_blank" href="https://en.wikipedia.org/wiki/${country_name}" class="btn btn-outline-info">KNOW MORE</a>
  </div>
</div>`

document.querySelector("#result").innerHTML=html_data
    }