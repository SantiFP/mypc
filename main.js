const chat = document.getElementById("res");
const chatDiv = document.getElementById("resdiv");
const btn = document.getElementById("send");
const pc = document.getElementById("pc");
const form = document.getElementById("form");
const sendDiv = document.getElementById("senddiv");
const body = document.getElementById("body");
let citySelection = "";
let newsSelection = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const country = async () => {
  pc.innerHTML = `
  <button disabled type="button" class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
    <svg role="status" class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
    </svg>
    Cargando...
  </button>
  `;

  citySelection = chat.value.toLowerCase();
  let temp = Math.round(Number(await getWeather()));
  if (citySelection && temp) {
    chat.value = "";
    if (citySelection == "pekin") {
      pc.innerHTML = `<div class='flex flex-col items-center'>
            <div class='flex flex-row space-x-2'> 
                <p> Eres de ${citySelection} como yo!!! &#128529; &#128529;  </p>
                <img class='china' src='./china.png'>
            </div>
                <p> Actualmente tenemos ${temp}°C en ${citySelection}, la capital de nuestra querida china.</p>
            </div>`;
    } else {
      pc.innerHTML = `<div class='flex flex-col items-center'>
            <div class='flex flex-row space-x-2'> 
                <p> Hermoso lugar ${citySelection}, yo soy una computadora lenovo y vengo de pekin, china &#128529; &#128529;</p>
                <img class='china' src='./china.png'>
            </div>
            </div>
             </div>`;
      if (temp <= 10) {
        pc.innerHTML += `<p class='text-center'>Veo que en ${citySelection} hay ${temp}°C, debes tener un poco
                de frío &#129398; &#129398;</p>`;
      } else if (temp > 10 && temp <= 20) {
        pc.innerHTML += `<p class='text-center'>Veo que en ${citySelection} hay ${temp}°C, una temperatura
                agradable &#128527; &#128527;</p>`;
      } else if (temp > 20) {
        pc.innerHTML += `<p class='text-center'>Veo que en ${citySelection} hay ${temp}°C, debes estar pasando calor &#129397; &#129397;</p>`;
      }
    }
    btn.removeEventListener("click", country);
    btn.addEventListener("click", selectedNews);
    news();
  } else {
    chat.value = "";
    pc.innerHTML = `<div class='flex flex-col items-center'>
        <p>Vaya no he encontrado esa ciudad en mi base de datos &#128563;&#128563;</p>
        <p>Por favor revisa errores de ortografía, comas o espacios innecesarios</p>
        <p class='pt-2'>Ingresa una ciudad</p>
        <p class='pt-1 text-xs'>(Intenta ingresar el nombre de la ciudad en su idioma original)</p>
        <p class='text-xs'>Por ejemplo ingresa new york en vez de nueva york</p>
        </div>`;
  }
};

const state = () => {
  let answer = chat.value.toLowerCase();
  if (answer == "bien") {
    chat.value = "";
    pc.innerHTML = `<div class='flex flex-col items-center space-y-1'> 
        <p>Me alegro &#128513;</p>
        <p>Quisiera saber de donde eres</p>
        <p class='pt-2'>Ingresa una ciudad</p>
        <p class='pt-1 text-xs'>(Intenta ingresar el nombre de la ciudad en su idioma original)</p>
        <p class='text-xs'>Por ejemplo ingresa new york en vez de nueva york</p>
        </div>`;
    btn.addEventListener("click", country);
  } else if (answer == "mal") {
    chat.value = "";
    pc.innerHTML = `<div class='flex flex-col items-center space-y-1'>
            <p>Me apena escuchar eso &#128532;, puedo sugerirte algo de música?</p>
            <p>Tal vez te haga sentir mejor.</>
            <p class='pt-2'>Ingresa si o no</p>
        </div>`;
    btn.removeEventListener("click", state);
    btn.addEventListener("click", chooseMusic);
  }
};

const hello = () => {
  let name = chat.value.toLowerCase();
  if (name && name.length > 2) {
    chat.value = "";
    pc.innerHTML = `<div class='flex flex-col items-center'>
        <p>Hola ${name} como estas? &#128526;</p>
        <p class='pt-2'>Ingresa bien o mal</p>
        </div>`;
    btn.removeEventListener("click", hello);
    btn.addEventListener("click", state);
  } else if (name.length <= 2 && name.length >= 1) {
    pc.innerHTML = "<p>Debes tener un nombre mas largo que eso &#128533;</p>";
  } else {
    pc.innerHTML = "<p>Ingresa tu nombre no seas tímido &#128515;</p>";
  }
};

btn.addEventListener("click", hello);
