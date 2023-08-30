//elemento que referencia al contenedor de los items
const contenedorItems = document.querySelector("[data-itemscontainer]");
//elemento que referencia al boton de agregar items 
const addbtn = document.querySelector("[data-login]");


const additemfunction=(evento)=>{
    //prevenimos el comportamiento por defecto
    evento.preventDefault();

    //este es el elemnto container del producto
    const card = document.createElement("div");
    card.classList.add("product__item");

    const image = document.createElement("img");
    image.classList.add("product__image");

    const title = document.createElement("h2");
    title.textContent="Product";
    title.classList.add("product__title");

    const description = document.createElement("h3");
    description.textContent="Description";
    title.classList.add("product__description");

    const link = document.createElement("h4");
    link.textContent="Link";
    title.classList.add("product__seemore");

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);

    contenedorItems.appendChild(card);


}
//el primer parametro es el evento, el segundo sera el img source
const addHtml=(evento, imgSource)=>{

    const source=imgSource;
    evento.preventDefault();

    const content=`<div class="product__item">
<img class="product__image" alt="product image" src="${source}">
<h2 class="product__title">Product title</h2>
<h3 class="product__description">Product description</h3>
<a class="product__seemore" href="">ver mas</a>
</div>`;

    const card = document.createElement("div");
    card.innerHTML = content;
    contenedorItems.appendChild(card);
}

const productscreen=(event)=>{
    console.log(event);
    window.location.href ="login.html";
    
}

//evento para la imagen de logo cada vez que se clickee nos lleve a la pantalla principal


addbtn.addEventListener("click",productscreen);
