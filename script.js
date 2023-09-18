// Call API and Set Quote Text
function getQuote() {
  // Make an API request using Axios
  axios
    .get("https://api.quotable.io/random")
    .then((response) => {
      const result = response.data; // Extract response data
      const quoteStr = `"${result["content"]}"`; // Format the quote string
      const authorStr = result["author"]; // Extract the author

      // Set Quote Text
      $(".quote-text").text(quoteStr);
      // Set Author Text
      $(".quote-author").text(authorStr);

      // Twitter Button: Set href attribute for tweeting the quote
      $("#tweet-quote").attr(
        "href",
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          quoteStr + " - " + authorStr
        )}`
      );
    })
    .catch((error) => {
      console.log(error); // Log any errors
      // Consider adding UI error handling here
    });
}

// Initialize when document is ready
$(document).ready(() => {
  // Set text on page load
  getQuote();
  // Refresh text when "new-quote" button is clicked
  $("#new-quote").on("click", getQuote);
});
