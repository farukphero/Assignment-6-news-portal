const receiveData = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`
  fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.data.news_category))
  
}
const displayData = (types) => {
  const newsTypeList = document.getElementById('news-type-list')
  types.forEach(news => {
    // console.log(news);
    const ol = document.createElement('ol')
    ol.innerText = `
    ${news.category_name}`
    newsTypeList.appendChild(ol)
  });
}
receiveData();


// card part 

const newsData = (search) => {
  fetch(`https://openapi.programming-hero.com/api/news/category/${search}`)
    .then(res => res.json())
    .then(data => displayNewsData(data.data))
  
}


  // console.log(data)
  
const displayNewsData = data => {
  console.log(data)

  const cardContainer = document.getElementById('card-container');
    for (const card of data) {
      console.log(card);
      const div = document.createElement('div')
      div.classList.add('d-flex')
      div.innerHTML = `
             <div class="d-sm-block d-md-flex d-lg-flex">
            <div class="card row g-0 ">
                <img src="${card.thumbnail_url}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body ms-lg-5 ms-md-5">
                  <h5 class="card-title"> ${card.title} </h5>
                  <p class="card-text"> ${card.details.slice(0, 200)}... </p>
                </div>
              </div>
            </div>
          </div>`
        cardContainer.appendChild(div)
      }
     ;
  } 
  
 
newsData('08')

// another page

function myFunction() {
  window.location.href ="question.html";
}