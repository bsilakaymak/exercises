

const quotes = [
    {
        quote:"Freedom is a heavy load, a great and strange burden for the spirit to undertake. It is not easy. It is not a gift given, but a choice made, and the choice may be a hard one.",
        author: "Ursula K. Le Guin"
    },
    {
        quote:"We leave something of ourselves behind when we leave a place, we stay there, even though we go away. And there are things in us that we can find again only by going back there.",
        author: "Pascal Mercier - Night Train to Lisbon"
    },
    {
        quote:"When everything goes wrong, what a joy to test your soul and see if it has endurance and courage! An invisible and all-powerful enemy—some call him God, others the Devil, seem to rush upon us to destroy us; but we are not destroyed.",
        author: "Nikos Kazantzakis - Zorba The Greek"
    },
    {
        quote:"As if you could kill time without injuring eternity.",
        author: "Henry David Thoreau - Walden"
    },
    {
        quote:"What do I want to happen? I simply want our life here to become more human. We need to return to those places to find much of what is still important and authentic to our lives.",
        author: "Theodoros Angelopoulos"
    },
    {
        quote:"If we opened people up, we'd find landscapes.",
        author: "Agnès Varda"
    },
    {
        quote:"Definitions belong to the definers, not the defined.",
        author: "Toni Morrison - Beloved"
    },
    {
        quote:"Today I believe in the possibility of love; that is why I endeavor to trace its imperfections, its perversions.",
        author: "Frantz Fanon - Black Skin, White Masks"
    },
    {
        quote:"A woman without a man is like a fish without a bicycle.",
        author: "Irina Dunn"
    },
    {
        quote:"Beyond right and wrong there is a field. I will meet you there.",
        author:"Rumi"
    },
    {
        quote:"All that is gold does not glitter.Not all those who wander are lost.",
        author:"J. R. R. Tolkien"
    },
    {
        quote:"The worst is when people - knowingly or not -carry prison inside themselves",
        author:"Nazim Hikmet Ran"
    },
    {
        quote:"I've often lost myself,in order to find the burn that keeps everything awake",
        author:"Federico Garcia-Lorca"
    },
    {
        quote:"Dominance functions best in a culture of disconnections and fragmentation. Feminism recognizes connections. Imagine",
        author:"Carol J.Adams-Sexual Politics of Meat"
    },
    {
        quote:"That is what learning is. You suddenly understand something you've understood all your life, but in a new way.",
        author:"Doris Lessing"
    },
    {  
        quote:"You are not Atlas carrying the world on your shoulder. It is good to remember that the planet is carrying you.",
        author:"Vandana Shiva"
    },
    {
        quote:"Peace is not the absence of war, it is a virtue, a state of mind, a disposition of benevolence, confidence, justice.",
        author:"Baruch Spinoza"
    },
    {
        quote:"Someone, I tell you, in another time will remember us.",
        author:"Sappho"
    },
    {
        quote:"The only way to escape the abyss is to look at it, gauge it, sound it out and descend into it.",
        author:"Cesare Pavese"
    }


]
const quoteTextEl = document.getElementById("quote-text");
const authorNameEl = document.getElementById("author-name");
const buttonEl = document.getElementById("quote-button");
const quoteBodyEl = document.getElementById("quote-body");

//just trying out some new stuff here
function randomColor(){
    return 'rgb(' +Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')'
}
const animateQuote = function(e){
    e.preventDefault;
    quoteBodyEl.classList.remove("animation");    
    void quoteBodyEl.offsetWidth;
    quoteBodyEl.classList.add("animation");
  };


function randomQuote(){
    const randomNumber = Math.floor(Math.random() * quotes.length)
    quoteTextEl.innerText = quotes[randomNumber].quote;
    authorNameEl.innerText = quotes[randomNumber].author;
    document.body.style.backgroundColor = randomColor();
    document.body.style.color =randomColor();
}
buttonEl.addEventListener("click", animateQuote, false);
buttonEl.addEventListener("click", randomQuote);