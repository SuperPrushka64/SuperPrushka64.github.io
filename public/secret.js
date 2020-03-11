/*
 * /────────────────────────────────────────────────\
 * │                                            │
 * │ 		  YoRHa Server System ver 0.0.1        	│
 * │					'The Fortress Of Lies'						│
 * │     Run npm install -g npm to update!      │
 * │                                            │
 * \────────────────────────────────────────────────/
 */
var started = 0;
var score = 0;
var form = {
	"sco": document.getElementById('fscore'),
	"out": document.getElementById('ftitle'),
	"in": document.getElementById('ftext'),
	"button": document.getElementById('fbutton')
}
/*
 *	random key loop
 */
function rngK() {
	var keyboard = [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"0",
		"-",
		"=",
		"!",
		"@",
		"#",
		"$",
		"%",
		"^",
		"&",
		"*",
		"(",
		")",
		"_",
		"+",
		"q",
		"w",
		"e",
		"r",
		"t",
		"y",
		"u",
		"i",
		"o",
		"p",
		"[",
		"]",
		"\\",
		"a",
		"s",
		"d",
		"f",
		"g",
		"h",
		"j",
		"k",
		"l",
		";",
		"'",
		"z",
		"x",
		"c",
		"v",
		"b",
		"n",
		"m",
		",",
		".",
		"/",
		"Q",
		"W",
		"E",
		"R",
		"T",
		"Y",
		"U",
		"I",
		"O",
		"P",
		"{",
		"}",
		"|",
		"A",
		"S",
		"D",
		"F",
		"G",
		"H",
		"J",
		"K",
		"L",
		":",
		'"',
		"Z",
		"X",
		"C",
		"V",
		"B",
		"N",
		"M",
		"<",
		">",
		"?"
	];
	c = Math.floor(Math.random()*keyboard.length);
	bnk = "";
	key = "";
	console.log("Choice: ",c);
	key = keyboard[c];
	return {
						"a":bnk.concat("Press the '",key,"' key."), 
						"b":key
					}
}
/*
 * I/O
 */
function outp(txt) {
	output = output.concat("> ",txt,'\n')
	form.sco.value = "Score: "+score;
	form.out.value = output;
}
function outc() {
	output = ">"
	form.out.value = output;
}
var output = "";
function submitForm(event) {
	if(form.in.value == "outc") {
		outc();
		return;
	}
	if(started === 1) {
		if(form.in.value == rng.b) {
			outp("Success!");
			score++;
		}
		else {
			outp("FAIL!");
			score = 0;
		}
		if(form.in.value == "") {
			alert("No key pressed!");
			return;
		}
		rng = rngK();
		outp(form.in.value);
		outp(rng.a);
		form.in.value = "";
	}
	else {
		outp(form.in.value);
		if(form.in.value == "f")
		{
			form.in.value = "";
			started = 1;
			rng = rngK();
			outp(rng.a);
		}
	}
	console.log({
		"out": form.out.value,
		"in":  form.in.value
	});
	form.out.scrollTop = form.out.scrollHeight;
}
form.button.addEventListener('click',submitForm);
