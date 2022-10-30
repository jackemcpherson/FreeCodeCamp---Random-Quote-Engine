function getQuote() {
    axios.get("https://api.quotable.io/random")
        .then(response => {
            result = response.data
            quoteStr = '"' + result["content"] + '"';
            authorStr = result["author"];
            $(".quote-text").text(quoteStr);
            $(".quote-author").text(authorStr);
        }).catch(error => console.log(error));
};

$(document).ready(function () {
    getQuote();
    $("#new-quote").on("click", getQuote);
});

