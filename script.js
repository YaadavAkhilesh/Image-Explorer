const api_key = "MXax0HAmmgfTXBij1x8-6C5qrV3_xwkBOnt1QlZvPJU";

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-txtBox');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more');

let keyword = "";
let page = 1;

async function searchImages(){
  keyword = searchBox.value;
  const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${api_key}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if(page === 1){
    searchResult.innerHTML = "";
  }

  const results = data.results;

  results.map((result) =>{
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  })

  showMoreBtn.style.display = "block"
}


searchForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  page=1;
  searchImages();
})

showMoreBtn.addEventListener('click', ()=>{
    page++;
    searchImages();
})