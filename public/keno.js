
var numerosSelecionados = [];

var faixaPremiacoes = {
	1: ["1/3,96x"], 2: ["2/17,10x"], 3: ["3/81,5x"], 4: ["3/10x", "4/259x"], 5: ["3/4,5x", "4/48x", "5/450x"],
	6: ["4/11x", "5/350x", "6/710x"], 7: ["4/7x", "5/90x", "6/400x", "7/800x"], 8: ["4/5x", "5/20x", "6/270x", "7/600x", "8/900x"],
	9: ["4/4x", "5/11x", "6/56x", "7/500x", "8/800x", "9/1000x"], 10: ["4/3,5x", "5/8x", "6/13x", "7/63x", "8/500x", "9/800x", "10/1000x"]
}

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

	mostraFaixa(numsCount);

	if ($(this).hasClass("sel")) {
		$(this).removeClass("sel");
	}else {
		$(this).addClass("sel");
	}
});


function mostraFaixa(faixaNum) {

	let table = $("#faixaPremiacoesTable");

	if (faixaNum == 0) {
		table.html("<tr><td colspan='2'>Selecione mais números</td></tr>")
		return;
	}
	let content = "";
	let faixa = faixaPremiacoes[faixaNum];

	for (let i = 0; i < faixa.length; i++) {

		let f = faixa[i].split("/");
		content += "<tr>";
		content += "<td>" + f[0] + "</td>";
		content += "<td>" + f[1] + "</td>";
		content += "</tr>";

	}


	table.html(content);
}