
var numerosSelecionados = [];

var faixaPremiacoes = {
	1: ["1/3,96x"], 2: ["2/17,10x"], 3: ["3/81,5x"], 4: ["3/10x", "4/259x"], 5: ["3/4,5x", "4/48x", "5/450x"],
	6: ["4/11x", "5/350x", "6/710x"], 7: ["4/7x", "5/90x", "6/400x", "7/800x"], 8: ["4/5x", "5/20x", "6/270x", "7/600x", "8/900x"],
	9: ["4/4x", "5/11x", "6/56x", "7/500x", "8/800x", "9/1000x"], 10: ["4/3,5x", "5/8x", "6/13x", "7/63x", "8/500x", "9/800x", "10/1000x"]
};


var isAnimating = false;
var isPlaying = false;

var hits = [];


$("#tableNumeros td").click(function (e) {

	if (isAnimating) {
		return;
	}

	limpaAnimate();

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

$("#btSortear").click(function () {

	isAnimating = true;
	$("#btSortear").attr("disabled", true);

	$(".keno .balls span").css("display", "none");

	limpaAnimate();
	hits = [];

	// alert("teste");
	animateWinnerNumbers([1, 3, 7, 8, 11, 26, 28, 33, 34, 37], 0, function () {
		stopAnimation();
	});
});


function limpaAnimate() {

	for (let i = 1; i <= 40; i++) {

		let curBtNumber = $("#btNumber"+i);
		if (curBtNumber.hasClass("selHit")) {
			curBtNumber.removeClass("selHit").addClass("sel");
		}

		if (curBtNumber.hasClass("miss")) curBtNumber.removeClass("miss");

	}

}

function animateWinnerNumbers(winnerNumbers, idx, callback) {

	if (idx < winnerNumbers.length) {

		let nDrawn = winnerNumbers[idx];
		console.log(nDrawn);
		let curBtNumber = $("#btNumber"+nDrawn);

		let isHit = false;

		if (numerosSelecionados.includes(nDrawn)) {
			hits.push(nDrawn);
			isHit = true;

			$(".faixaPremiacoes table").find("td").removeClass("hit");
			$(".faixaPremiacoes table td.fx"+hits.length).addClass("hit");
		}

		curBtNumber.removeClass("miss");
		if (curBtNumber.hasClass("sel")) {
			curBtNumber.removeClass("sel").addClass("selHit");
		}else {
			curBtNumber.addClass("miss");
		}

		let curBall = $("#ball"+idx);
		if (curBall.hasClass("hit")) curBall.removeClass("hit");
		curBall.html(nDrawn);
		if (isHit) {
			curBall.addClass("hit");
		}

		curBall.show();

		setTimeout(function() {
			animateWinnerNumbers(winnerNumbers, idx + 1, callback);
		}, 200);

	}else {
		// alert("teste");
		setTimeout(callback, 500);

	}

};

function stopAnimation() {
	isAnimating = false;
	$("#btSortear").attr("disabled", false);

	alert(hits);
	// alert("teste");
};

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
		$(".faixaPremiacoes .hits").append("<td class='fx"+h+"'>" + h + "</td>");

		let r = faixa[i].split('/')[1];
		$(".faixaPremiacoes .rewards").append("<td class='fx"+h+"'>" + r + "</td>");

	}
};

atualizaFaixaPremiacoes(0);