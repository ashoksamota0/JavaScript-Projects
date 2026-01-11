const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://api.quotable.io/random";

async function getquote(url){
    try {
        const response = await fetch(url);
        var data = await response.json();
        // console.log(data);
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    } catch (error) {
        quote.innerHTML = "Failed to load quote ";
        author.innerHTML = "";
    }
}

getquote(api_url);

// function tweet(){
//     window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet Window", "width=600, height=300");
// }

function tweet(){
    const tweetText = `${quote.innerHTML} — by ${author.innerHTML}`;
    const tweetUrl =
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(tweetText);

    window.open(tweetUrl, "Tweet Window", "width=600,height=300");
}