export default function getCountriesOptions(callback) {
  let countriesJSON;
  let countriesOptions;
  // If the storage object hasn't already been populated, we call the API and store the array in sessionStorage
  if(!sessionStorage.getItem("countries")) {
    fetch("http://api.geonames.org/countryInfoJSON?username=julian.aiup")
      .then((response) => {
        return response.json()
      })
      .then((countries) => {
        // Save countries to sessionStorage
        countriesJSON = countries.geonames;
        sessionStorage.setItem("countries", JSON.stringify(countriesJSON));
        countriesOptions = selectCountries(countriesJSON);
        callback(countriesOptions);
      });
  } else {
    // If the storage object has already been populated, we only select the countries from sessionStorage
    countriesJSON = JSON.parse(sessionStorage.getItem("countries"));
    countriesOptions = selectCountries(countriesJSON);
    callback(countriesOptions);
  }
}

function selectCountries(countries) {
  const TOTAL_OPTIONS = 4;
  let option = 0;
  let countriesOptions = [];
  let incorrectCountry;
  let indexCountry;

  // Select correct country first
  countriesOptions = countriesOptions.concat(selectCountry(countries, true));

  // Selects other incorrect options
  while(option < TOTAL_OPTIONS - 1) {
    incorrectCountry = selectCountry(countries, false);
    // Equals -1 when isn't already selected
    indexCountry = countriesOptions.findIndex((arrayCountry) => {
        return incorrectCountry.position === arrayCountry.position;
      });
    if(indexCountry === -1) {
      countriesOptions = countriesOptions.concat(incorrectCountry);
      option++;
    }
  }

  // Shuffle array
  countriesOptions = shuffle(countriesOptions);
  return countriesOptions;
}

function selectCountry(countries, correct) {
  // Selects country randomly (between 0 and the quantity of countries)
  let countryPosition = Math.floor(Math.random() * countries.length);
  // Select country from countryPosition and store country info in variable
  let countryInfo = countries[countryPosition];
  // Create the country option and add it to the array
  let countryOption = Object.assign(
    {},
    { position: countryPosition },
    { info: countryInfo },
    { correct }
  );
  return countryOption;
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
