const news = () => {
    pc.innerHTML += `<div class='flex flex-col items-center space-y-2 pt-2'>
    <p>Quisiera darte noticias que sean de tu interes &#128541; &#128541;</p>
    <p>Estas son las categorías que tengo para ofrecerte</p>
    <p>Ingresa el número correspondiente a la categoría que te interesa</p>
    <ol> 
        <li>1. Negocios</li>
        <li>2. Entretenimiento</li>
        <li>3. Noticias generales</li>
        <li>4. Salud</li>
        <li>5. Ciencia</li>
        <li>6. Deportes</li>
        <li>7. Tecnología</li>
    </ol>
    </div>`;
};

const keepShowing = () =>{
    let answer = chat.value;
    if (answer == 'si') {
        pc.innerHTML = '';
        news();
        chat.value = '';
        btn.removeEventListener('click',keepShowing)
        btn.addEventListener('click',selectedNews)
    }else if(answer == 'no'){
        btn.removeEventListener('click',keepShowing);
        chat.value = '';
        pc.innerHTML = `<div class='flex flex-col items-center'>
        <p>Espero que estas noticias te hayan servido de algo</p>
        <p>Trabajo en progreso, el programa continuará ...</p>
        </div>`

    }
}

const selectedNews = async () => {
    newsSelection = Number(chat.value.toLowerCase());
    let choose = '';
    switch (newsSelection) {
        case 1:
            newsSelection = 'business';
            choose = 'negocios'
            break;
        case 2:
            newsSelection = 'entertainment';
            choose = 'entretenimiento'
            break;
        case 3:
            newsSelection = 'general';
            choose = 'noticias generales'
            break;
        case 4:
            newsSelection = 'health';
            choose = 'salud'
            break;
        case 5:
            newsSelection = 'science';
            choose = 'ciencia'
            break;
        case 6:
            newsSelection = 'sports';
            choose = 'deportes'
            break;
        case 7:
            newsSelection = 'technology';
            choose = 'tecnología'
            break;
        default:
            break;
    }

    if (choose && newsSelection) {

        btn.removeEventListener('click',selectedNews)

        let news = await getNews();

        pc.innerHTML = `<p class='pb-2 text-center'>Elegiste ${choose} &#128516; &#128516;</p>`;
        chat.value = '';

        news.forEach(e => {
            pc.innerHTML += `<div class='flex flex-col items-center pt-2'>
            <p>${e.title}</p>
            <a class='text-blue-800' target="_blank" href=${e.url}>Link a la noticia</a>
            </div>`
        });
        pc.innerHTML += `<div class='flex flex-col items-center'>
        <p class="text-center pt-4">Quieres saber algo mas?</p>
        <p class='pt-4'>Ingresa si o no</p>
        </div>`;
        btn.addEventListener('click',keepShowing)
            
    }

};
