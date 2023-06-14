
function showQuotes(data){
     let btn = document.getElementById("btn");
     let quotes = document.getElementsByClassName("quotes")[0];
     let authorName = document.getElementsByClassName("authorName")[0];
     btn.addEventListener("click", ()=>{
        let randomNumber = Number.parseInt(Math.random()*data.length);
        let randomQuotes = data[randomNumber]
        quotes.textContent = randomQuotes.text;
        authorName.textContent = randomQuotes.author;
     })
}





async function getRequest(){
    const url = 'https://type.fit/api/quotes';
   
 let response = await fetch(url)
 let results = await response.json()
 console.log(results);
 showQuotes(results);

}
getRequest()
 