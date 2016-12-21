var a = prompt("Podaj wartość liczby a");
	b = prompt("Podaj wartość liczby b");
 
var value = (a * a) + (2 * a * b) - (b * b);
 
alert("Wynik działania to " + value);

console.log('Wynikiem równania: (a * a) + (2 * a * b) - (b * b) jest '+ value);

if (value >= 0) {
	alert("Super, wynik Twojego działania jest dodatni");
} else {
    alert("Uwaga, wynik Twojego działania jest ujemny")
}