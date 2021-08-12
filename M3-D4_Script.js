const getBooks = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((data) => {
        displayData(data)
    }).catch((error) => {
        console.log(error)
    })
};

getBooks();

const displayData = (data) => {
    let row = document.querySelector("#bookContainer")
    for ( let book of data){
        row.innerHTML +=  `
        
        <div class="col-md-3">
        <div class="card-deck">
        <div class="card">
        <img src="${book.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
        </div>
        </div>
        </div>
        `
    }
}
