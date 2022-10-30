
//Call API and Set Quote Text
function getQuote() {
    return axios.get("https://api.quotable.io/random")
        .then(response => {
            result = response.data
            quoteStr = '"' + result["content"] + '"';
            authorStr = result["author"];
            //Set Quote Text
            $(".quote-text").text(quoteStr);
            //Set Author Text
            $(".quote-author").text(authorStr);
            //Twitter Button
            $('#tweet-quote').attr(
                'href',
                'https://twitter.com/intent/tweet?text=' +
                  encodeURIComponent(quoteStr + ' - ' + authorStr)
              );
        }).catch(error => console.log(error));
};

$(document).ready(function () {
    //Set Text on Page Load
    getQuote();
    //Refresh Text on Request
    $("#new-quote").on("click", getQuote);
});