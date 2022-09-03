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
                  <p class="card-text"> ${card.details.slice(0, 250)}... </p>
                  <div class="card-footer d-flex justify-content-around mt-5">
                  <div class="d-flex ">
                  <img src="${card.author.img}" class="img-fluid rounded-circle" style="height: 50px;" alt="...">
                  <div class="ms-3">
                  <h6>${card.author.name}</h6>
                  <p>${card.author.published_date}</p> 
                  </div>
                  </div>
                  <div>
                  <h6><i class="fa-solid fa-eye"></i> ${card.total_view}K</h6>
                  </div>
                  <div>
                   <p><i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i></p>
                  </div>
                  <div> 
                  <p> <i class="fa-solid fa-arrow-right text-primary"></i> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
          `
        cardContainer.appendChild(div)
      }
     ;
  } 
  
 
newsData('01')

// another page

// function myFunction(element) {
//   console.log('onno page')
//   // window.location.href ="question.html";
// };
// // console.log(element)
