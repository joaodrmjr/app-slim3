
var numerosSelecionados = [];

$("#tableNumeros td").click(function (e) {


	let num = parseInt($(this).attr("value"));


	if (numerosSelecionados.includes(num)) {
		let getI = numerosSelecionados.indexOf(num);
		if (getI !== -1) {
			numerosSelecionados.splice(getI, 1);
		}
	}else {
		if (numerosSelecionados.length == 10) {
			return;
		}

		numerosSelecionados.push(num);
	}


	console.log(numerosSelecionados);

	if ($(this).hasClass("sel")) {
		$(this).removeClass("sel");
	}else {
		$(this).addClass("sel");
	}

});