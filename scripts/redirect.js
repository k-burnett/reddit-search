var googleQuery = 'http://www.google.com/search?q=';

var form = document.getElementById('searchForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    var unformattedQueryString = form.elements["query"].value;
    
    // append query
    if (form.elements["site:"].checked)
        var formattedQueryString = unformattedQueryString.replace(/ /g, '+') + "+site:reddit.com";
    else
        var formattedQueryString = unformattedQueryString.replace(/ /g, '+') + "+reddit";
    
    // redirect
    googleQuery += formattedQueryString;
    location.href = googleQuery;
});