////////////////////adding new value to vat ////////////////////////////////////
document.getElementById('vat').addEventListener('change', function() {
	if (this.value === 'other') {
		var taxPrompt = prompt("wpisz wartość podatku Vat");
		if(isNaN(taxPrompt)){
			 			// user pressed OK, but the input field was empty
			 			alert('Serio? nie wiesz nawet jak zapisać Wysokość Podatku?');
				}else if(taxPrompt){
						var vatTax = document.getElementById('vat');
						var vatTaxSum = (Number(taxPrompt)/100);
						var opt = document.getElementById('vat').options[3];
						opt.value = Number(vatTaxSum);
						opt.innerHTML = taxPrompt + "%";
						console.log(vatTaxSum);
					}else{
									 // user pressed OK, but the input field was empty
									 alert('nic nie wpisałeś gamoniu');
				}
		}
		}, false);
////////////////////adding new value to tax //////////////////////////////
document.getElementById('tax').addEventListener('change', function() {
	if (this.value === 'other') {
		var taxPrompt = prompt("wpisz wartość podatku Dochodowego");
		if(isNaN(taxPrompt)){
						 			// user pressed OK, but the input field was empty
						 			alert('Serio? nie wiesz nawet jak zapisać Wysokość Podatku?');
					 }else if(taxPrompt){
									var tax = document.getElementById('tax');
									var taxSum = (Number(taxPrompt)/100);
									var opt = document.getElementById('tax').options[4];
									opt.value = Number(taxSum);
									opt.innerHTML = taxPrompt + "%";
						}else{
										 // user pressed OK, but the input field was empty
										 alert('nic nie wpisałeś gamoniu');
					}
	}
}, false);
//////////////////////////////////////////////////////////////////////////////
	var calcState = 'brutto';
		document.getElementById("myonoffswitch").addEventListener("change", function() {
  	calcState = (this.checked) ? 'brutto':'netto';
	});


document.getElementById('count').addEventListener('click', function() {
  if (calcState === 'brutto') {
    brutto();
  } else {
    netto();
  }
});





//calculation if you entered the brutto
function brutto() {
  var incomeTax = document.getElementById('tax');
  var bruttoValue = document.getElementById("item");
  var vatTax = document.getElementById('vat');
  var netto =(Number(bruttoValue.value) / (Number(vatTax.value) + 1)).toFixed(2);
  var taxValue = (Number(netto) * Number(incomeTax.value)).toFixed(2);
  var vatValue =( Number(bruttoValue.value) - Number(netto)).toFixed(2);
  var totalCost = (Number(bruttoValue.value) - (Number(vatValue)+Number(taxValue))).toFixed(2);

  document.getElementById('price-netto').innerHTML = 'Cena Netto: ' + netto + ' zł';
  document.getElementById('tax-value').innerHTML =  'Wartość podatku dochodowego:  ' + taxValue + ' zł';
  document.getElementById('vat-value').innerHTML = 'Wartość podatku Vat:  ' + vatValue + ' zł';
  document.getElementById('price-brutto').innerHTML = 'Cena brutto: ' + bruttoValue.value + ' zł';
  document.getElementById('total-cost').innerHTML = 'Całkowity koszt dla przedsiębiorcy ' + totalCost + ' zł';


}

function netto(){
  var incomeTax = document.getElementById('tax');
  var placeholderValue = document.getElementById("item");
  var vatTax = document.getElementById('vat');

  var taxValueNetto = (Number(placeholderValue.value) * Number(incomeTax.value)).toFixed(2);
  var bruttoPrice = (Number(placeholderValue.value) + ( Number(placeholderValue.value) * (Number(vatTax.value)))).toFixed(2);
  var vatValueNettoFunction = (Number(bruttoPrice) - Number(placeholderValue.value)).toFixed(2);
  var totalCost = (Number(bruttoPrice) - (Number(vatValueNettoFunction)+Number(taxValueNetto))).toFixed(2);

  document.getElementById('price-netto').innerHTML = 'Cena Netto: ' + placeholderValue.value + ' zł';
  document.getElementById('tax-value').innerHTML =  'Wartość podatku dochodowego:  ' + taxValueNetto + ' zł';
  document.getElementById('vat-value').innerHTML = 'Wartość podatku Vat:  ' + vatValueNettoFunction + ' zł';
  document.getElementById('price-brutto').innerHTML = 'Cena brutto: ' + bruttoPrice + ' zł';
  document.getElementById('total-cost').innerHTML = 'Całkowity koszt dla przedsiębiorcy ' + totalCost + ' zł';

}
