const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
  } catch (error) {
    console.error("Failed to fetch the quote:", error);
    quote.innerHTML = "Failed to fetch the quote. Please try again later.";
    author.innerHTML = "";
  }
}

getquote(api_url);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " ---- by " +
      author.innerHTML,
    "Tweet Window",
    "width=600",
    "height=300"
  );
}
