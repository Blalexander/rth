function watchLogoutButton(){
	$('.logout-btn').on('click', function(){
		localStorage.clear();
		window.location = '/';
	});
}

function getUserId(user){
	let loginUrl 
	if(window.location.href.includes('localhost')) {
    loginUrl = "http://localhost:3000"
  }
  else {
    loginUrl = "https://rth-server.azurewebsites.net"
  }
	fetch(`${loginUrl}/users/id/${user}`, {
	// fetch(`https://rth-server.azurewebsites.net/users/id/${user}`, {
		// headers: {
		// 	"Authorization": "Bearer "+localStorage.authToken
		// },
  })
	.then(res=>{
		if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
	})
	.then(user_id => {
		localStorage.user_id = user_id.id;
		localStorage.user_preferences = JSON.stringify(user_id.prefs);
		localStorage.user_background = JSON.stringify(user_id.bg)
		// getInitialData(user_id);
    location.assign('/rth/dashboard.html')
	})
	.catch(err=>{
		console.error(err);
	});
}

function getToken(user){
	let _user = user;
  console.log(user)
	let loginUrl 
	if(window.location.href.includes('localhost')) {
    loginUrl = "http://localhost:3000"
  }
  else {
    loginUrl = "https://rth-server.azurewebsites.net"
  }

	fetch(`${loginUrl}/auth/login`, {
	// fetch("https://rth-server.azurewebsites.net/auth/login", {
		method: "POST",
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(res=> res.json())
	.then(data=>{
		localStorage.setItem('authToken', data.authToken)
		console.log(data);
		getUserId(_user.username); 
	})
	.catch(err=>{
		// console.error(err); //this handles incorrect logins
		document.querySelector('.error-container').style.opacity = 1;
		setTimeout(() => {
			document.querySelector('.error-container').style.opacity = 0;
		}, 10000)
	});
}

// $(".submitLogin").on('touchstart click', function(event) {
// 	if (event.type == "touchstart") {
// 			$(this).off('click');
// 			console.log("Only touch event is fired");
// 			watchLoginForm()
// 	} else if (event.type == "click") {
// 			$(this).off('touchstart');
// 			console.log("Only click event is fired");
// 			watchLoginForm()
// 	}
// });

function watchLoginForm(){
	// console.log(e)
	$('#login').submit(function(e){
		$('.error').remove();
		e.preventDefault();
		let username = $("#username-input").val();
		let password = $("#password-input").val();
    localStorage.setItem('username', username)
		getToken({
			username,
			password
		});
	});
}

$(()=>{
	if(localStorage.authToken && localStorage.authToken != undefined){
		getUserId(localStorage.username);
	}else{
		// $('#landing').css('display', 'flex');
		watchLoginForm();
	}
});