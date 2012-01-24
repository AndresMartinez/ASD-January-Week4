$('#Home').live("pageshow", function () {
	 $.couch.db("goodone").view("app/legs", {
		 success: function(data) {
			 //console.log(data);
			 $('#homeitems').empty();
			 $.each(data.rows, function (index, value){
				 var item = (value.value || value.doc);
				 $('#homeitems').append(
					$('<li>').append(
					  $('<a>')
					       .attr("href", "legs.html")
					       .text(item.title)
					)	 
				 );
			 });
			 $('#homeitems').listview('refresh');
		 }
	 });
});

var urlVar = function(urlData) {
	var info = $($(mobile.activePage).data("url")
	var urlParts = urlData.split('?');
	var urlPairs = urlParts[1].split('&');
	var urlValues = {};
	for (var pair in urlPairs) {
		var keyValue = urlPairs[pair].split('=');
		var key = decodeURIComponent(KeyValue[0]);
		var Value = decodeURIComponent(KeyValue[1]);
		urlValues[key] = value;

	}
	return urlValues ;
};

$('#legshere').live("pageshow" , function(){
	var info = urlVARS()["legs"];
	$.couch.db("goodone").view("app/legs" , {
		key: "goodone:" info
		
	});
	
	
});



$(document).ready(function(){
	$.ajax({
		"url": "_view/chest",
		"dataType": "json",
		"success" : function(data) {
			 $.each(data.rows, function(index, chest){
				 var catagory = chest.value.catagory;
				 var  favorite = chest.value.favorite;
				 var workout = chest.value.workout;
				 var reps = chest.value.reps;
				 var cardio = chest.value.cardio;
				 $('#chestlist').append(
						 $('<li>').append(
                           $('<a>').attr("href", "#")
                               .text(catagory)
						 )
						 
				);
				 
			 });
			 $('#chestlist').listview('refresh');
		}
	});
});



var pworkout =  $('#pworkout').val();
var name     = $('#name').val();
var yes      =  $('#yes').val();
var reps     =  $('#reps').val();
var comments =  $('#comments').val();
var yes      =  $('#yes').val();



var viewInfo = [
    pworkout,
    name,
    yes,
    reps,
    wkdate,
    comments
];

























