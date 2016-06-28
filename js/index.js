var arr = [
 "red",
 "orange",
 "yellow",
 "green",
 "blue",
 "indigo",
 "violet"
];
var count = 0;

var cycle = function(array) {
	console.log(array[count];

	if (count == array.length-1) {
		count = 0;
} else {
		count++;
	};
};

var display = function(array) {
	if (count == array.length-1) {
		count = 0;
	} else {
			count++;

	};	
};

var display = function(){
	document.body.style.color = colors[count];
	cycle(colors);

};

var listAll = function(array) {
	for (var i = 0; i < array.length;  i++) {
		console.log(i)
		document.getElementById('colorSpace').innerHTML += "<li>" + array[i] + "</li>";
	}

}
listAll(colors)