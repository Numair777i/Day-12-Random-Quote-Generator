const quotes=[
  "Be yourself; everyone else is already taken. – Oscar Wilde",
  "In the middle of every difficulty lies opportunity. – Albert Einstein",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Happiness depends upon ourselves. – Aristotle",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "Don’t count the days, make the days count. – Muhammad Ali",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
]

const quoteElement=document.querySelector("#quote");

const usedIndexes=new Set();

function generateQuote(){
  while(true){
  const randomIdx=Math.floor(Math.random()*quotes.length);
  if(usedIndexes.has(randomIdx))continue
  const quote=quotes[randomIdx];
  quoteElement.innerHTML=quote;
  usedIndexes.add(randomIdx);
  break
  }
}