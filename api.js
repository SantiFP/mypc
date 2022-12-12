const apiKeyNews = "830088fb3b694641a117a16018ee21cb";
const apiKeyWeather = "34afa1ae92e324d4db64606ceed9407f";

const getRandom = (arr, n) => {
  let result = new Array();
  let randomNumbersArray = new Array();
  let randomNumber;
  if (n > arr.length) {
    throw new RangeError("mas elementos de los disponibles");
  } else {
    for (let i = 0; i < n; i++) {
      do {
        randomNumber = Math.floor(Math.random() * arr.length);
      } while (randomNumbersArray.includes(randomNumber));
      randomNumbersArray.push(randomNumber);
      result[i] = arr[randomNumber];
    }
    return result;
  }
};

console.log(getRandom([1, 2, 3, 4, 5, 6], 3));

const getNews = async () => {
  let url = `https://newsapi.org/v2/top-headlines?language=es&category=${newsSelection}&apiKey=${apiKeyNews}`;
  try {
    const response = await fetch(url);
    const news = await response.json();
    return getRandom(news.articles, 4);
  } catch (error) {
    console.log("error: ", error);
  }
};

const getWeather = async () => {
  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${citySelection}&units=metric&appid=${apiKeyWeather}`;
  try {
    const response = await fetch(urlWeather);
    const weather = await response.json();
    return weather.main.temp;
  } catch (error) {
    console.log("error: ", error);
  }
};

function getRandom2(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

let arr = ['hola','que','tal','estas']

let n = 3;

let result = new Array(n);

console.log(result);

let len = arr.length;

console.log(len);

let taken = new Array(len);

console.log(taken);

while (n--) {
  var x = Math.floor(Math.random() * len);

  console.log(n);
                    
  console.log(x);

  result[n] = arr[x in taken ? taken[x] : x];

  console.log(result);

  console.log(len);

//   taken[x] = -- len;
 
  taken[x] = --len in taken ? taken[len] : len;

  console.log(taken);
                                  
}
       
           

                                                                                                               
                                                                                                  