
var numerosSelecionados = [];

var faixaPremiacoes = {
	1: ["1/3,96x"], 2: ["2/17,10x"], 3: ["3/81,5x"], 4: ["3/10x", "4/259x"], 5: ["3/4,5x", "4/48x", "5/450x"],
	6: ["4/11x", "5/350x", "6/710x"], 7: ["4/7x", "5/90x", "6/400x", "7/800x"], 8: ["4/5x", "5/20x", "6/270x", "7/600x", "8/900x"],
	9: ["4/4x", "5/11x", "6/56x", "7/500x", "8/800x", "9/1000x"], 10: ["4/3,5x", "5/8x", "6/13x", "7/63x", "8/500x", "9/800x", "10/1000x"]
};

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

	let numsCount = numerosSelecionados.length;

	atualizaFaixaPremiacoes(numsCount);

	if ($(this).hasClass("sel")) {
		$(this).removeClass("sel");
	}else {
		$(this).addClass("sel");
	}
});

function atualizaFaixaPremiacoes(faixaCount) {
	$(".faixaPremiacoes .hits").find("td").remove();
	$(".faixaPremiacoes .rewards").find("td").remove();
	if (faixaCount <= 0) {
		$(".faixaPremiacoes .hits").append("<td>Selecione + numeros!</td>");
		$(".faixaPremiacoes .rewards").append("<td>-</td>");
		return;
	}
	let faixa = faixaPremiacoes[faixaCount];
	for (let i = 0; i < faixa.length; i++) {
		let h = faixa[i].split('/')[0];
		$(".faixaPremiacoes .hits").append("<td>" + h + "</td>");

		let r = faixa[i].split('/')[1];
		$(".faixaPremiacoes .rewards").append("<td>" + r + "</td>");

	}
};

atualizaFaixaPremiacoes(0);