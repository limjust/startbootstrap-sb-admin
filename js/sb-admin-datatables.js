// Call the dataTables jQuery plugin

function httpGetSync(theUrl)
{
	var response = "";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // true for asynchronous 
    xmlHttp.send(null);
    response = xmlHttp.responseText;
    return response;
}

$(document).ready(function() {
  response = JSON.parse(httpGetSync("https://cvvd7158f2.execute-api.us-west-2.amazonaws.com/prod/get-items").toString());
  console.log(response.body);
  var body = JSON.parse(response.body);
  console.log(body.Items);
  $('#dataTable').DataTable({
  	"aaData": body.Items,
  	"aoColumns": [
        { "mDataProp": "time" },
        { "mDataProp": "foodlevel" },
        { "mDataProp": "URL" }
    ],
    "columns": [
		{title: "time"},
		{title: "food level"},
		{title: "URL"}
    ]
  });
});
