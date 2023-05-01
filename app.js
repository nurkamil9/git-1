const btn = document.querySelector("button")
const root = document.querySelector("#root")
const spinner = document.querySelector("#spinner")


const  laptops = [

    {    title:"Apple",
        img:`https://login.kg/image/cache/catalog/new/Notebook/Apple/MacBook%20Air%202020%20M1/1-500x500.jpeg`,
        name:"V",
        price:150000
        
    },
    {   title:"Apple",
        img:`https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg`,
        name:"MacBook",
        price:20000
        
    },
    {   title:"Apple",
        img:`https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg`,
        name:"hp",
        price:450000
        
    },
    {      title:"Apple",
        img:`https://m.media-amazon.com/images/I/61bX2AoGj2L._SL1500_.jpg`,
        name:"dell",
        price:70000
        
    },
    {   title:"Apple",
        img:`https://www.digitaltrends.com/wp-content/uploads/2022/08/macbook-air-m2-1.jpg?resize=625%2C417&p=1`,
        name:"apple",
        price:90000
        
    },
    {    title:"Apple",
        img:`https://login.kg/image/cache/catalog/new/Notebook/Apple/MacBook%20Pro%2014%202021/1-500x500.jpg`,
        name:"ACER",
        price:140000
        
    },
    {    title:"Apple",
        img:`https://www.zdnet.com/a/img/2020/11/16/37e33024-2892-4bb7-9d21-6ac6f7544def/apple-macbook-pro-m1-2020-5.jpg`,
        name:"lenovo",
        price:24000
     }
]


function func(prm) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(prm){
                resolve(laptops)
            }
            else{
              reject("error")
            }
        }, 2000);
    })
}

btn.onclick=()=>{
    spinner.style.display="block"
    console.log(
    func(true)
    .then(req=>{
     render(req)
    })
    .catch(err=>{
      error(err)
      console.log(err);
    })
    .finally(()=>{
        console.log('final');
        spinner.style.display="none"
        
    })
 );
}


function render(params) {
    for (const item of params) {
        root.innerHTML+=`
        <div class="card" style="width: 18rem;">
  <img id='img' class="card-img-top"  src=${item.img} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">купить</a>
  </div>
</div>
        
        `
    }
}


function error(params) {
    root.innerHTML=`
    <div class="alert alert-primary d-flex align-items-center" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>
  <div>
    An example alert with an icon
  </div>
</div>
    `
}