/*
 * /────────────────────────────────────────────────\
 * │                                            │
 * │ 		  YoRHa Server System ver 0.0.1        	│
 * │					'The Fortress Of Lies'						│
 * │     Run npm install -g npm to update!      │
 * │                                            │
 * \────────────────────────────────────────────────/
 */
var postBox = document.getElementById('ddonPost');
var form = {
	"title": document.getElementById('ftitle'),
	"text": document.getElementById('ftext'),
	"button": document.getElementById('fbutton')
}
function submitForm(event) {
	console.log({
		"title": form.title.value,
		"text":  form.text.value
	});
	if(form.title.value == "" || form.text.value == "") {
		alert("You did not fill out all fields!");
		return;
	}
	var post = document.createElement('div');
	var postTitle = document.createElement('h3');
	var postText = document.createElement('p');
	postTitle.innerHTML = form.title.value;
	postText.innerHTML = form.text.value;
	post.appendChild(postTitle);
	post.appendChild(postText);
	postBox.appendChild(post);
}
form.button.addEventListener('click',submitForm);
