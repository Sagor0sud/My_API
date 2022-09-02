const loadQoute = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQoute(data))
}
const displayQoute = quote => {
    const blockQuote = document.getElementById('quote');
    // console.log(quote);
    blockQuote.innerText = quote.quote;
}
