/*

var payload = 'https://api.import.io/store/connector/3bcafba9-b5f3-4feb-a248-6265c0119606/_query?input=webpage/url:https%3A%2F%2Fwww.packtpub.com%2Fpackt%2Foffers%2Ffree-learning&&_apikey=81c93652057b496d886a97b5465b35816a2e3c29f89aeb50093e05ceef67b1fb244271b5156fdafb31f67b08e9eb8a3b99f12fc06f2d6eb1f86d081e206b852b63487fc7f22be6301831da2dda4142fe';

=====================================================
 var thing = "1024 CODE Squad";
	alert(thing);

var ROOT = 'https://your_app_id.appspot.com/_ah/api';
gapi.client.load('your_api_name', 'v1', function() {
  doSomethingAfterLoading();
}, ROOT);

console.log(payload);

$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});

*/

var payload = {
	"offset": 0,
	"results": [{"book": "The Game Jam Survival Guide"}],
	"cookies": [],
	"connectorVersionGuid": "8f316190-c522-43c7-898f-a9945d1e1ab8",
	"connectorGuid": "3bcafba9-b5f3-4feb-a248-6265c0119606",
	"pageUrl": "https://www.packtpub.com/packt/offers/free-learning",
	"outputProperties": [{
		"name": "my_column",
		"type": "STRING"
	}, {
		"name": "book",
		"type": "STRING"
	}]
};

//var motherlode = (payload.results[0].book);
//console.log(motherlode);

console.log(payload.results[0].book);
