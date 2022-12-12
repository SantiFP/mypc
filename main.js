const chat = document.getElementById('res');
const chatDiv = document.getElementById('resdiv');
const btn = document.getElementById('send');
const pc = document.getElementById('pc');
const form = document.getElementById('form');
const sendDiv = document.getElementById('senddiv');
const body = document.getElementById('body');
let citySelection = '';
let newsSelection = ''

form.addEventListener('submit', (e) => {
    e.preventDefault()
});


const country = async () => {

    citySelection = chat.value.toLowerCase();
    let temp = Math.round(Number(await getWeather()));
    if (citySelection && temp) {
        chat.value = '';
        if (citySelection == 'pekin') {
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
                de frío &#129398; &#129398;</p>`
            } else if (temp > 10 && temp <= 20) {
                pc.innerHTML += `<p class='text-center'>Veo que en ${citySelection} hay ${temp}°C, una temperatura
                agradable &#128527; &#128527;</p>`
            } else if (temp > 20) {
                pc.innerHTML += `<p class='text-center'>Veo que en ${citySelection} hay ${temp}°C, debes estar pasando calor &#129397; &#129397;</p>`
            }
        }
        btn.removeEventListener('click',country);
        btn.addEventListener('click',selectedNews)
        news();
    } else {
        chat.value = '';
        pc.innerHTML = `<div class='flex flex-col items-center'>
        <p>Vaya no he encontrado esa ciudad en mi base de datos &#128563;&#128563;</p>
        <p>Por favor revisa errores de ortografía, comas o espacios innecesarios</p>
        <p class='pt-2'>Ingresa una ciudad</p>
        <p class='pt-1 text-xs'>(Intenta ingresar el nombre de la ciudad en su idioma original)</p>
        <p class='text-xs'>Por ejemplo ingresa new york en vez de nueva york</p>
        </div>`
    };

};

const state = () => {
    let answer = chat.value.toLowerCase();
    if (answer == 'bien') {
        chat.value = '';
        pc.innerHTML = `<div class='flex flex-col items-center space-y-1'> 
        <p>Me alegro &#128513;</p>
        <p>Quisiera saber de donde eres</p>
        <p class='pt-2'>Ingresa una ciudad</p>
        <p class='pt-1 text-xs'>(Intenta ingresar el nombre de la ciudad en su idioma original)</p>
        <p class='text-xs'>Por ejemplo ingresa new york en vez de nueva york</p>
        </div>`;
        btn.addEventListener('click', country)
    } else if (answer == 'mal') {
        chat.value = '';
        pc.innerHTML = `<div class='flex flex-col items-center space-y-1'>
            <p>Me apena escuchar eso &#128532;, puedo sugerirte algo de música?</p>
            <p>Tal vez te haga sentir mejor.</>
            <p class='pt-2'>Ingresa si o no</p>
        </div>`;
        btn.removeEventListener('click', state);
        btn.addEventListener('click', chooseMusic);
    }
};

const hello = () => {
    let name = chat.value.toLowerCase();
    if (name && name.length > 2) {
        chat.value = '';
        pc.innerHTML = `<div class='flex flex-col items-center'>
        <p>Hola ${name} como estas? &#128526;</p>
        <p class='pt-2'>Ingresa bien o mal</p>
        </div>`;
        btn.removeEventListener('click', hello);
        btn.addEventListener('click', state)
    } else if (name.length <= 2 && name.length >= 1) {
        pc.innerHTML = '<p>Debes tener un nombre mas largo que eso &#128533;</p>'
    } else {
        pc.innerHTML = '<p>Ingresa tu nombre no seas tímido &#128515;</p>'
    }
};

btn.addEventListener('click', hello)
