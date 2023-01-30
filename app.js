

const gifForm = document.getElementById('gifForm');
const deleteBtn = document.getElementById('deleteBtn');


gifForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    let query = document.getElementById('searchtxt').value;
    if(query === ''){
        alert("must enter query");
    } else await getGif(query);
});

deleteBtn.addEventListener("click", function(e) {
    const division = document.querySelector('div');
    while(division.firstChild){
        division.removeChild(division.firstChild);
    }

});


async function getGif(q){

    const res = await axios.get("http://api.giphy.com/v1/gifs/search", { params:{
      q,
      api_key:"B8bD4UxMWpDGqDCrzEkw6BCiKtnwyajg"
    }});
    

    let randitem = Math.floor(Math.random() * res.data.data.length+1);
    let gifitem = document.createElement('img');
    gifitem.src = res.data.data[randitem].images.original.url;

    const division = document.querySelector('div');
    division.append(gifitem);
    
}




