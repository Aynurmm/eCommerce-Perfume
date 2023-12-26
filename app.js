let ul=document.querySelector(".classUl")
let nextbtn=document.querySelector(".next")
let prevbtn=document.querySelector(".prev")
let cardsContainer = document.querySelector('.cards-container');
let newcllctContainer=document.querySelector('.newcllct-container')
const nextCollectionBtn = document.querySelector('.next-collection');
const prevCollectionBtn = document.querySelector('.prev-collection');
let sliderContainer=document.querySelector(".sliderContainer2");
let sliderWrapper=document.querySelector(".sliderWrapper");
let divcollectionList=document.querySelector(".divcollectionList")
let ulCollection=document.querySelector(".ulCollection")
const rightButton = document.querySelector('.rightButton');
const leftButton = document.querySelector('.leftButton');
const imageList = document.querySelector('.image-list');
const imageItems = document.querySelectorAll('.imageItem');
const formbox= document.querySelector('.formbox');
const loginlink= document.querySelector('.Login_link');
const registerlink= document.querySelector('.register');
const openlogin=document.querySelector('.login')
const closelogin=document.querySelector('.close_form');
let favimg = document.querySelector(".favimg")
let slider=document.querySelector(".slider");
let classNav=document.querySelector(".classNav")
let fasolildfabars=document.querySelector(".fa-solid fa-bars")
let navList=document.querySelector(".navList")
let menuIcon=document.querySelector("fa-solid")
let divHidden=document.querySelector(".divHidden");




    const data = []; 

    data.forEach(text => {
        const paragraph = document.createElement('p'); 
        paragraph.textContent = product.productName; 

        divHidden.appendChild(paragraph); 
    });


window.onload = function() {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
}



nextbtn.addEventListener ('click',function(){
    let items = document.querySelectorAll(".item")
    document.querySelector(".slide").appendChild(items[0])

})

prevbtn.addEventListener ('click',function(){
    let items = document.querySelectorAll(".item")
    document.querySelector(".slide").prepend(items[items.length-1])

})














// -------------------------------------------------------------------
const method=async()=>{
  const url = 'https://sephora.p.rapidapi.com/us/products/v2/search?q=parfum&pageSize=60&currentPage=1';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a0fc6069dcmshc30c5a65515040fp1f9b14jsn296ef487cfa3',
      'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    const products=result.products
    renderCharacters(products);
    
  } catch (error) {
    console.error(error);
  }}
method();


function renderCharacters(products) {
  // console.log(products)
  const cardsContainer = document.querySelector('.cards-container');

  const productDivs = products.map(product => {
    console.log(product);
    const div = document.createElement('div');
    let favimg=document.createElement("img")
    let addCard=document.createElement("img")
    let priceP=document.createElement("p");
    let morebtn=document.createElement("button")
    morebtn.classList.add("moreP")
    morebtn.style.width=("45px")
    morebtn.style.borderRadius=("5px")
    morebtn.innerText="More"


    div.classList.add('card');
    priceP.classList.add("priceP");
    priceP.innerText=`price ${product.currentSku.listPrice}`
    const image = document.createElement('img');
    image.classList.add('product-image');
    image.src = product.heroImage; 
    addCard.classList.add("addCard")
    favimg.classList.add("favimg")
    favimg.src="https://cdn-icons-png.flaticon.com/128/3208/3208597.png "

    addCard.src="https://cdn-icons-png.flaticon.com/128/5962/5962078.png"
    
    div.appendChild(image);
    const productName = document.createElement('h3');
    const brandName=document.createElement('h3')
    brandName.innerText=product.brandName;
    productName.innerText = product.productName; 
    const iconsContainer = document.createElement('div');
    const favImgContainer = document.createElement('div');
    iconsContainer.classList.add("containericon")
    favImgContainer.classList.add("favImgContainer")
    favImgContainer.appendChild(favimg);
    iconsContainer.appendChild(favImgContainer);
    favImgContainer.appendChild(favimg);
    div.appendChild(iconsContainer);
    div.appendChild(productName);
    div.appendChild(brandName);
    div.appendChild(priceP);
    div.appendChild(morebtn)

    div.style.border = '1px solid #ccc';
    div.style.padding = '10px';
    div.style.margin = '10px';
    div.style.textAlign = 'center';
    div.style.backgroundColor = 'white';
    div.style.width = '30rem';
    div.style.borderRadius='10px'

    iconsContainer.style.display="flex"


    div.addEventListener('mouseover', () => {
     div.style.transform=' translate(-12px,-12px)';
     div.style.borderRadius='25px'
     div.style.boxShadow='12px 12px 10px #505050';
    div.style.transform="0.5s"
    div.style.transition="box-shadow 0.2s"
    favImgContainer.style.display="block"



    });
   div.addEventListener('mouseout', () => {
      div.style.backgroundColor = '';
      div.style.transform=' translate(0px,0px)';
    div.style.transition=""
      div.style.boxShadow='';
      div.style.borderRadius='10px'
    favImgContainer.style.display="none"


  

  

    });
    
    iconsContainer.style.display="flex"
    iconsContainer.style.justifyContent="flex-end"
   

    favImgContainer.style.width="3rem"
    favImgContainer.style.height="3rem"
    favImgContainer.style.backgroundColor="#f6e7e7"
    favImgContainer.style.borderRadius="50%"
    favImgContainer.style.marginRight="4px"
  
    favImgContainer.style.transition=".5s"
    favImgContainer.style.boxShadow="0 10px 20px #505050"

    favImgContainer.style.display="none"
    





   

    





    favimg.style.width='2rem'
    favimg.style.margingRight="1rem"
    favimg.style.paddingTop="13px"
 

    favimg.style.cursor="pointer"







    return div;
  });

  productDivs.forEach(productDiv => {
    cardsContainer.appendChild(productDiv);
  });
}
const input = document.getElementById('searchInput');
let inp='';
const inpHandle=(e)=>{

 inp=e.target.value.trim()}
// ========================================================

function addToFavorites(productName, heroImage) {
  const favoriteList = document.querySelector('.favoriteList');
  const favoriteItem = document.createElement('div');
  const productNameElement = document.createElement('p');
  const productImage = document.createElement('img');
  const closeIcon = document.createElement('i');
  productImage.classList.add("favListImg")
  productImage.style.width=("50px")
  productNameElement.style.fontSize=("7px")
  productNameElement.style.height=("21px")
  productNameElement.style.padding=("3px")
  productNameElement.style.marginTop=("18px")
  productNameElement.style.width=("6rem")
  closeIcon.classList.add("fa-solid", "fa-xmark");
  closeIcon.style.width=("1rem")
  closeIcon.style.textAlign=("center")
  closeIcon.style.height=("1rem")
  closeIcon.style.marginTop=("20px")
  closeIcon.style.cursor=("pointer")


  productNameElement.style.backgroundColor=("#f5f5f5")
  // productNameElement.style.width=("2rem")
  productNameElement.style.borderRadius=("5px")
  // productName.style.marginLeft=("2px")
  favoriteItem.classList.add("favItem")
  favoriteItem.style.display=("flex")
  favoriteItem.style.marginLeft=("unset")
  favoriteItem.style.width=("10rem")

  


  productNameElement.textContent = productName;
  productImage.src = heroImage;

  favoriteItem.appendChild(productImage);
  favoriteItem.appendChild(productNameElement);
  favoriteItem.appendChild(closeIcon);

  favoriteList.appendChild(favoriteItem);
}

document.addEventListener('click', function(event) {

  if (event.target.classList.contains('fa-xmark')) {
    const favoriteItem = event.target.closest('.favItem');
    if (favoriteItem) {
      favoriteItem.remove();
      const favImgContainer = document.querySelector('.favImgContainer');
      if (favImgContainer) {
        favImgContainer.style.backgroundColor = '#f6e7e7'; 
      }
    }
  }
    

  
  
  if (event.target.classList.contains('favimg')) {
    const productDiv = event.target.closest('.card');
    const productName = productDiv.querySelector('h3').innerText;
    const heroImage = productDiv.querySelector('.product-image').src;
    const favImgContainer = event.target.closest('.favImgContainer');
    

    if (favImgContainer.style.backgroundColor === 'darkblue') {
      favImgContainer.style.backgroundColor = '#f6e7e7'; 
      const favoriteItems = document.querySelectorAll('.favItem');
      favoriteItems.forEach(item => {
        if (item.querySelector('p').textContent === productName) {
          item.remove(); 
        }
      });
    } else {
      favImgContainer.style.backgroundColor = 'darkblue'; 
      
      
      const favoriteItems = document.querySelectorAll('.favItem');
      let alreadyInFavorites = false;
      favoriteItems.forEach(item => {
        if (item.querySelector('p').textContent === productName) {
          alreadyInFavorites = true;
        }
      });

      if (!alreadyInFavorites) {

    addToFavorites(productName, heroImage);
  }}}
})


document.addEventListener('DOMContentLoaded', function() {
  const imgFav = document.querySelector('.imgFav');
  const favoriteList = document.querySelector('.favoriteList');
  const allDiv = document.querySelector('.all');
  const closeIcon = document.querySelector('.fa-xmark'); 
  imgFav.addEventListener('click', function() {
    if (favoriteList.style.display === 'none') {
      favoriteList.style.display = 'block';
      allDiv.style.display = 'none';
    } else {
      favoriteList.style.display = 'none';
      allDiv.style.display = 'block';
    }
  });

  closeIcon.addEventListener('click', function() {
    favoriteList.style.display = 'none';
    allDiv.style.display = 'block';
  });
});





// ===================================================================

const fetchData = async () => {
const url = `https://sephora.p.rapidapi.com/us/products/v2/search?q=${inp ? inp:' Dior'}`;
const options = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Key': 'a0fc6069dcmshc30c5a65515040fp1f9b14jsn296ef487cfa3',
		'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
	}
};
try {
  const response = await fetch(url, options);
  const result = await response.json();
  // console.log(result);
  const products=result.products || [];
      // console.log(products);
  // console.log(input.value); 

  const filteredProducts = products.filter(product =>
    product.productName.toLowerCase().trim().includes('parfum') ||
    product.displayName.toLowerCase().trim().includes('perfume')
  );
  // console.log(filteredProducts)
renderCharacters(filteredProducts);


} catch (error) {
  console.error(error);
}}


input.addEventListener('input', (event) => {
  const query = event.target.value.trim(); 
  const cardsContainer = document.querySelector('.cards-container');
  if (input.value.trim()=== '') {
  if (query.length===0) {
   alert("ne results found")

  } }else {
    fetchData(query);
    cardsContainer.innerHTML = '';
  }
});
// console.log(products);




// -------------------------
registerlink.addEventListener('click', (e)=>{
    formbox.classList.add('activation')
});
loginlink.addEventListener('click', (e)=>{
    formbox.classList.remove('activation')
});

openlogin.addEventListener('click', (e)=>{
    formbox.classList.add('activation-login')
    formbox.classList.remove('close')
});
closelogin.addEventListener('click', (e)=>{
    formbox.classList.remove('activation-login')
    formbox.classList.add('close')
});
const button1=document.querySelector('.changecolor');
const body1=document.querySelector('.bodyelemet')
button1.addEventListener('click',(e)=>{
  
    body1.classList.toggle('new')
})


console.log(product)