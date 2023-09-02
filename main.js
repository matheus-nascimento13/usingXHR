let showCountries = document.querySelector(".show")
showCountries.addEventListener("click", () => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true);

    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log("sucess");
            let countries = JSON.parse(this.response);
            console.log(countries);
            countries.forEach(capital => {
                const capitalName = document.createElement('div');
                capitalName.innerHTML = capital.capital
                document.querySelector("#countries").appendChild(capitalName)

            })
        }
    }

    xhr.send()
})

let startA = document.querySelector(".continent");
console.log(startA)
startA.addEventListener("click", () => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log("sucess")
            let region = JSON.parse(this.response);
            console.log(region)
            region.forEach(capital => {
                const regionCountry = document.createElement('div');
                regionCountry.innerHTML = capital.region
                document.querySelector('#region').appendChild(regionCountry)
            })
        }
    }

    xhr.send()
}
)

let onlyEurope = document.querySelector(".filter")
onlyEurope.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log("sucess");
            let europe = JSON.parse(this.response);
            console.log(europe)
            europe.forEach(capital => {
                let continentEurope = capital.region
                if (continentEurope == "Europe") {
                    console.log('verdade')
                    const elementEurope = document.createElement('div');
                    elementEurope.innerHTML = capital.capital
                    console.log(elementEurope)
                    document.querySelector('#europe').appendChild(elementEurope)
                } else { }



            })
        }
    }


    xhr.send()
}
)