// Button 1 (home page): reveal a tip
function showTip(){
  const tips=["Tip: Don't listen at full volume for long hours.",
              "Tip: This head-phones are crafted for bass music.",
              "Tip: Assembled in China."];
  const box=document.getElementById('tipBox');
  box.textContent=tips[Math.floor(Math.random()*tips.length)];
  box.style.display='block';
}
// Button 2 (products page): add to cart
let cartCount=0;
function addToCart(name){
  cartCount++;
  document.getElementById('cartCount').textContent=cartCount;
  alert(name+" was added to your cart!");
}
// Button 3 (contact page): send message
function sendMessage(){
  const n=document.getElementById('name').value.trim();
  const e=document.getElementById('email').value.trim();
  const m=document.getElementById('message').value.trim();
  const out=document.getElementById('formOutput');
  out.style.display='block';
  if(!n||!e||!m){out.textContent="Please fill in your name, email and message before sending.";return;}
  out.textContent="Thank you, "+n+"! We received your message and will reply to "+e+" within 24 hours.";
}
