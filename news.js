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

const keepShowing = () => {
  let answer = chat.value;
  if (answer == "si") {
    pc.innerHTML = "";
    news();
    chat.value = "";
    btn.removeEventListener("click", keepShowing);
    btn.addEventListener("click", selectedNews);
  } else if (answer == "no") {
    btn.removeEventListener("click", keepShowing);
    chat.value = "";
    pc.innerHTML = `<div class='flex flex-col items-center'>
        <p>Espero que estas noticias te hayan servido de algo</p>
        <p>Trabajo en progreso, el programa continuará ...</p>
        </div>`;
  }
};

const selectedNews = async () => {
  chatDiv.classList.add("hidden");

  pc.innerHTML = `
  <button disabled type="button" class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
    <svg role="status" class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
    </svg>
    Cargando...
  </button>
  `;

  newsSelection = Number(chat.value.toLowerCase());
  let choose = "";
  switch (newsSelection) {
    case 1:
      newsSelection = "business";
      choose = "negocios";
      break;
    case 2:
      newsSelection = "entertainment";
      choose = "entretenimiento";
      break;
    case 3:
      newsSelection = "general";
      choose = "noticias generales";
      break;
    case 4:
      newsSelection = "health";
      choose = "salud";
      break;
    case 5:
      newsSelection = "science";
      choose = "ciencia";
      break;
    case 6:
      newsSelection = "sports";
      choose = "deportes";
      break;
    case 7:
      newsSelection = "technology";
      choose = "tecnología";
      break;
    default:
      break;
  }

  if (choose && newsSelection) {
    btn.removeEventListener("click", selectedNews);

    let news = await getNews();

    pc.innerHTML = `<p class='pb-2 text-center'>Elegiste ${choose} &#128516; &#128516;</p>`;
    chat.value = "";

    news.forEach((e) => {
      pc.innerHTML += `<div class='flex flex-col items-center pt-2'>
            <p>${e.title}</p>
            <a class='text-blue-800' target="_blank" href=${e.url}>Link a la noticia</a>
            </div>`;
    });
    pc.innerHTML += `<div class='flex flex-col items-center'>
        <p class="text-center pt-4">Quieres saber algo mas?</p>
        <p class='pt-4'>Ingresa si o no</p>
        </div>`;

    chatDiv.classList.remove("hidden");
    chat.focus();
    
    btn.addEventListener("click", keepShowing);
  }
};
