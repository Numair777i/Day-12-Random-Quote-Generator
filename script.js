const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const api_url = "https://thequoteshub.com/api/";

async function getquote(){
  const response = await fetch(api_url);
  var data = await response.json();
  console.log(data);
  // quote.innerHTML = data.quote;
  // author.innerHTML = data.author;
   quote.textContent = data.text;
  author.textContent = data.author;
}

getquote();