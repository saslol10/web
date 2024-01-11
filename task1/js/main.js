class productData {
    constructor(name,
                image,
                description,
                provider){
        this.name = name;
        this.image = image;
        this.description = description;
        this.provider = provider;
    }
}

async function sendForm(form){
    let name = form.name.value;
    let image = form.image.value;
    let description = form.description.value;
    let id = form.code.value;
    let provider = form.provider.value;

    product = new productData(name,
                          image,
                          description,
                          //id,
                          provider);
    localStorage.setItem(id,JSON.stringify(product));

    drawingСards();



}

function addClasses(el, styles){
    for(let style in styles){
        el.classList.add(styles[style]);
    }
}

const divPArray = ['form-block_in_card','text__font', 'text__block', 'text_size'];
const divBArray = ['button_gap','text__font', 'text__block', 'text_size'];
const pArray = ['text__font', 'text__block', 'text_size'];
const hArray = ['text__font', 'text__block', 'text_h'];
const bArray = ['button-block','button_gap','text__font', 'text__block', 'text_size'];

const fData = ['form-data'];

const fBICard = ['form-block_in_card'];
const fRBlock = ['form-block-right'];
const fLBlock = ['form-block-left'];

const fImage = ['form-block__img'];


function cardCreate(  name,
                image,
                description,
                id,
                provider){
    let div_card = document.createElement('div');
    let div_form_block = document.createElement('div');
    let div_description = document.createElement('div');
    let p_description = document.createElement('p');
    let div_left = document.createElement('div');
    let div_right = document.createElement('div');
    let div_id = document.createElement('div');
    let p_id = document.createElement('p');
    let img_content = document.createElement('img');
    let div_button_group = document.createElement('div');
    let button_redact = document.createElement('button');
    let button_delete = document.createElement('button');
    let div_name = document.createElement('div');
    let p_name = document.createElement('p');
    let div_provider = document.createElement('div');
    let p_provider = document.createElement('p');

    div_card.id = "div"+id;



    p_description.innerHTML = description;
    p_id.innerHTML = id;
    img_content.src = image;
    p_name.innerHTML = name;
    p_provider.innerHTML = provider;

    addClasses(div_card,fData);
    addClasses(div_form_block,fBICard);
    addClasses(div_left,fLBlock);
    addClasses(div_right,fRBlock);

    addClasses(div_id,divPArray);
    addClasses(div_description,divPArray);


    addClasses(p_id,pArray);
    addClasses(p_description,pArray);
    addClasses(p_name,hArray);
    addClasses(p_provider,hArray);

    addClasses(button_delete,bArray);
    addClasses(button_redact,bArray);

    addClasses(div_button_group,divBArray);

    addClasses(img_content,fImage);


    img_content.classList.add();
    img_content.alt= "";


    div_id.innerHTML="ID: ";
    div_description.innerHTML="Описание: ";
    div_id.append(p_id);

    div_left.append(div_name);
    div_left.append(div_provider);

    div_name.append(p_name);
    div_provider.append(p_provider);

    div_left.append(div_id);
    div_right.append(img_content);

    div_button_group.append(button_redact);
    div_button_group.append(button_delete);

    button_redact.innerHTML="Редактировать";
    button_delete.innerHTML="Удалить";

    button_redact.id = id;
    button_delete.id = id;

    button_redact.onclick = ()=>{updateCard();};
    button_delete.onclick = ()=>{deleteCard();};

    div_form_block.append(div_left);
    div_form_block.append(div_right);

    div_card.append(div_button_group);
    div_card.append(div_form_block);
    div_card.append(div_description);
    div_description.append(p_description);



    return div_card;
}

function deleteEl(id) {
    var parent = document.getElementById("cartContainer");
    var child = document.getElementById("div"+id);
    parent.removeChild(child);
}


function deleteCard() {
    var parent = document.getElementById("cartContainer");
    var child = document.getElementById("div"+event.target.id);
    parent.removeChild(child);
    localStorage.removeItem(event.target.id);

}

function updateCard() {

    let name = document.getElementById('name');
    let image = document.getElementById('image');
    let description = document.getElementById('description');
    let id = document.getElementById('code');
    let provider = document.getElementById('provider');

    let content = JSON.parse(localStorage.getItem(event.target.id));

    console.log(content);


    name.value = content.name;
    image.value = content.image;
    description.value = content.description;
    id.value = event.target.id;
    provider.value = content.provider;
}

async function elementUpdate() {
    var parent = document.getElementById("cartContainer");
    parent.innerHTML='';
}

async function handleFormSubmit(event) {
    event.preventDefault();
    const response = await sendForm(event.target);
}

const applicantForm = document.getElementById('card-block');
applicantForm.addEventListener('submit', handleFormSubmit);


function drawingСards(){
    var parent = document.getElementById("cartContainer");
    parent.innerHTML='';
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        let content = JSON.parse(localStorage.getItem(key));
        if (!content.hasOwnProperty('name')&&
            !content.hasOwnProperty('image')&&
            !content.hasOwnProperty('description')&&
            !content.hasOwnProperty('provider')) {continue;}

        let card = cardCreate(content.name,content.image,content.description,key,content.provider);
        document.getElementById('cartContainer').appendChild(card);
    }
}

window.onload = function (){
    drawingСards();

}

function defaultOnClick(){
    localStorage.clear();

    product = new productData(name,
        image,
        description,
        provider);


    let cCreate1 = new productData('1',"/web/task1/img/1.jpg",'один','one');
    let cCreate2 = new productData('2',"/web/task1/img/2.jpg",'dva','ту');

    localStorage.setItem(1,JSON.stringify(cCreate1));
    localStorage.setItem(2,JSON.stringify(cCreate2));
    localStorage.setItem(3,JSON.stringify(cCreate3));


    drawingСards();
}


