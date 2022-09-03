
const receiveData = async () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`
  try {
    const res = await fetch(url)
    const data = await res.json()
    displayData(data.data.news_category)
  }
  catch (error) {
    console.log(error)
  }
  
}

const displayData = (types) => {
  // console.log(types)
  const newsTypeList = document.getElementById('news-type-list')
  types.forEach(news => {
    // console.log(news);
    const  ol = document.createElement('ol')
    ol.innerHTML = `
    <ol  onclick="newsData('${news.category_id}')">${news.category_name}</ol> 
    `
    newsTypeList.appendChild(ol)
  });
};
receiveData();


// card part 

const newsData = (search, news_id) => {
  fetch(`https://openapi.programming-hero.com/api/news/category/${search}`)
    .then(res => res.json())
    .then(data => displayNewsData(data.data))
    .catch(error => console.log(error))
  
  
}


  // console.log(data)
  
const displayNewsData = data => {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  const emptyCard = document.getElementById('empty-card')
  emptyCard.innerHTML = ''
  // console.log(data)
  if(data.length !== 0) {
    for (const card of data) {
      // console.log(card);
      const div = document.createElement('div')
      div.classList.add('d-flex')
      div.innerHTML = `
              <div> 
             <div class="d-sm-block d-md-flex d-lg-flex">
            <div class="card row g-0 ">
                <img src="${card.thumbnail_url}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body ms-lg-5 ms-md-5">
                  <h5 class="card-title"> ${card.title} </h5>
                  <p class="card-text"> ${card.details.slice(0,250)+'...'} </p>
                  <div class="card-footer d-sm-block d-lg-flex justify-content-around mt-5">
                  <div class="d-flex ">
                  <img src="${card.author.img?card.author.img:''}" class="img-fluid rounded-circle" style="height:50px;" alt="...">
                  <div class="ms-3">
                  <h6>${card.author.name?card.author.name :'Please include name'}</h6>
                  <p>${card.author.published_date?card.author.published_date : 'No date available'}</p> 
                  </div>
                  </div>
                  <div>
                  <h6><i class="fa-solid fa-eye"></i> ${card.total_view?card.total_view:'No view'}</h6>
                  </div>
                  <div>
                   <p><i class="fa-solid fa-star-half-stroke"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i></p>
                  </div>
                  <div>
                  <button onclick="modalOpen('${card.title}','${card.thumbnail_url}')" type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i class="fa-solid fa-arrow-right text-primary"></i> 
                  </button>
                  </div>
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
   
  else {emptyCard.innerHTML = `
    <h1> No Card Found </h1> 
    `
     } 
  }
  
  
function displayByNewId() {
  const url2 = `https://openapi.programming-hero.com/api/news/${news_id}`
  // console.log(url2)
}
 

function modalOpen(data, imge) {
  const getModal = document.getElementById('modal-body-open')
  const getModalValue =document.createElement('div')
  getModalValue.innerHTML = `

          skjdfhaisaisnfuchisxhjlmiuwexyj`
  getModal.appendChild(getModalValue)
  console.log(data, imge)
}



 

 