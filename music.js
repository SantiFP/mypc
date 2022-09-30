const musicSelection = () => {
    let music = ['https://www.youtube.com/watch?v=XRb7AJgTZeA', 'https://www.youtube.com/watch?v=Vfjc1V8DVMs&list=RDXRb7AJgTZeA&index=3',
        'https://www.youtube.com/watch?v=j6n4FpHbqZs&list=RDXRb7AJgTZeA&index=6', 'https://www.youtube.com/watch?v=8fbH-7eAeFk',
        'https://www.youtube.com/watch?v=tvCyONtrn4M','https://www.youtube.com/watch?v=D7aYjRl_6Zw'];
    let selected = Math.floor(Math.random() * (music.length));
    return music[selected];
};

const chooseMusic = () => {
    let answer = chat.value.toLowerCase();
    switch (answer) {
        case 'si':
            chatDiv.classList.add('hidden');
            pc.innerHTML = `<div class='flex flex-col items-center space-y-1'>
                <p>Espero que te guste &#128523;</p>
                <p>Recuerda volver a esta pestaña a contarme que te pareció &#128075; &#128075;.</p>
                <p class='pt-2'>Por favor espera...</p>
                </div>`
            setTimeout(() => {
                window.open(musicSelection());
            }, 6000);
            setTimeout(() => {
                chat.value = '';
                pc.innerHTML = `<div class="flex flex-col items-center">
                        <p>Te sientes algo mejor?&#128556;</p>
                        <p>Ingresa si o no</p>
                    </div>`
                chatDiv.classList.remove('hidden');
                btn.removeEventListener('click', chooseMusic);
                btn.addEventListener('click', feedback)
            }, 10000);
            break;
        case 'no':
            chat.value = '';
            pc.innerHTML = `<div class='flex flex-col items-center space-y-1'>
            <p>Como tú desees.</p>
            <p>Si en algún momento deseas escuchar mi sugerencia musical presiona la 
            tecla <strong>Shift</strong>.</p>
            <p>Sigamos conociéndonos, tal vez conversar conmigo te haga sentir mejor &#129300; &#129300;<p>
            <p class='pt-2'>De donde eres?</p>
            <p class='pt-2'>Ingresa una ciudad</p>
            <p class='pt-1 text-xs'>(Intenta ingresar el nombre de la ciudad en su idioma original)</p>
            <p class='text-xs'>Por ejemplo ingresa new york en vez de nueva york</p>
            </div>`;
            btn.removeEventListener('click', chooseMusic);
            btn.addEventListener('click', country);
            break;
        default:
            break;
    }
    window.addEventListener('keydown',playMusic)
}

const playMusic = (e) => {
    if (e.key == 'Shift') {
        window.removeEventListener('keydown',playMusic);
        chatDiv.classList.add('hidden');
        pc.innerHTML = `<div class='flex flex-col items-center space-y-2'>
                <p>Presionaste la tecla Shift, aquí esta mi sugerencia musical &#128541;</p>
                <p>Espero que te guste &#128523;</p>
                <p>Recuerda volver a esta pestaña a contarme que te pareció &#128075; &#128075;.</p>
                <p class='pt-2'>Por favor espera...</p>
                </div>
            `;
        setTimeout(() => {
            window.open(musicSelection());
        }, 6000);
        setTimeout(() => {
            pc.innerHTML = `<div class="flex flex-col items-center">
                    <p>Te sientes algo mejor?&#128556;</p>
                    <p class='pt-2'>Ingresa si o no</p>
                </div>`
            chatDiv.classList.remove('hidden');
            btn.removeEventListener('click', chooseMusic);
            btn.removeEventListener('click', country);
            btn.removeEventListener('click',keepShowing)
            btn.addEventListener('click', feedback);
            window.addEventListener('keydown',playMusic)
        }, 10000);
    }
}

const feedback = () => {
    let answer = chat.value.toLowerCase();
    switch (answer) {
        case 'si':
            chat.value = '';
            pc.innerHTML = `<div class='flex flex-col items-center space-y-1'>
            <p>Me alegro de haberte ayudado!! &#128516; &#128516;</p>
            <p>En cualquier momento puedes presionar la tecla <strong>Shift</strong> y seleccionaré una pieza musical para ti.</p>
            <p>Sigamos conociéndonos.</p>
            <p class='pt-2'>De donde eres?<p>
            <p class='pt-2'>Ingresa una ciudad</p>
            <p class='pt-1 text-xs'>(Intenta ingresar el nombre de la ciudad en su idioma original)</p>
            <p class='text-xs'>Por ejemplo ingresa new york en vez de nueva york</p>
            </div>`
            btn.removeEventListener('click', feedback);
            btn.addEventListener('click', country)
            break;
        case 'no':
            chat.value = '';
            pc.innerHTML = `<div class='flex flex-col items-center space-y-1'>
            <p>Lamento no haberte podido ayudar &#128542; &#128542;</p>
            <p>En cualquier momento puedes presionar la tecla <strong>Shift</strong> y seleccionare una pieza musical para ti esperando que te haga
            sentir mejor.</p>
            <p>Mientras tanto sigamos conociéndonos, tal vez conversar conmigo te haga sentir mejor &#129300; &#129300;.</p>
            <p class='pt-2'>De donde eres?<p>
            <p class='pt-2'>Ingresa una ciudad</p>
            <p class='pt-1 text-xs'>(Intenta ingresar el nombre de la ciudad en su idioma original)</p>
            <p class='text-xs'>Por ejemplo ingresa new york en vez de nueva york</p>
            </div>`;

            btn.removeEventListener('click', feedback);
            btn.addEventListener('click', country);
            break;
        default:
            break;
    }

}