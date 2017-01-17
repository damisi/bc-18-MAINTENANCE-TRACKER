$(document).ready(function() {
  // Initialize Firebase
	var config = {
		apiKey: "AIzaSyBUMVJxXB1jyfWi3a6yY1UDuezKYfAdHu4",
		authDomain: "maintenance-tracker-4e247.firebaseapp.com",
		databaseURL: "https://maintenance-tracker-4e247.firebaseio.com",
		storageBucket: "maintenance-tracker-4e247.appspot.com",
		messagingSenderId: "162015622216"
	};
	var myFire = firebase.initializeApp(config);
	// var FIR    = firebase.initializeApp(config),
	myFireRef = myFire.database().ref();
	// playersRef = FIR.database().ref('players');
	serviceMasterRef = myFire.database().ref('service master');
	var pak = 'petEr'
	//Adding new service master
	serviceMasterRef.push({
		pak :{
			'name' : pak.charAt(0).toUpperCase() + pak.substr(1).toLowerCase(),
			'equipment serviving' : {
				'generator': true,
				'fan' : true
			}
		}
	})


	serviceMasterRef.on('value', snap => console.log(snap.val()));





	// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	// 	// Handle Errors here.
	// 	var errorCode = error.code;
	// 	var errorMessage = error.message;
	// 	// ...
	// });

	/*var thatone = document.getElementById('issues');
	var dbRefThatone = firebase.database().ref().child('service master');
	dbRefThatone.on('value', snap => {
		thatone.innerText = snap.val()
	};*/
});













/*/*function login(){};

	//getting the login elements
	const textEmail = document.getElementById('textEmail');
	const textPassword = document.getElementById('textPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignup = document.getElementById('btnSignup');
	const btnLogout = document.getElementById('btnLogout');

	//adding the login events
	btnLogin.addEventListener('click', loginevents => {

		const email = textEmail.value;
		const pass = textPassword.value;
		const auth = firebase.auth();

		const promise = auth.signInWithEmailAndPassword(email, pass);
		// auth.createUserWithEmailAndPassword(email, pass);
		promise.catch(err => console.log(e.message));

  });
*/
/*  btnSignup.addEventListener('click', loginevents => {

  	//TODO: check for real email
  	const email = textEmail.value;
  	const password = textPassword.value;
  	const auth = firebase.auth();

	const promise = auth.createUserWithEmailAndPassword(email, pass);
	// auth.createUserWithEmailAndPassword(email, pass);
	promise.catch(err => console.log(e.message));

  });*/
/*var textEmail = document.getElementById('textEmail');
const textPassword = document.getElementById('textPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignup');
const btnLogout = document.getElementById('btnLogout');

var email = textEmail.value;
console.log(email);
const password = textPassword.value;
const auth = firebase.auth();

	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
	});

	firebase.auth().onAuthStateChanged(function(user) {
		if (user){
			console.log(firebaseUser);
		} else {
			console.log('not logged in');
		}
	});

  // const auth = firebase.auth();
  // auth.signInWithEmailAndPassword(email, pass);
  // auth.createUserWithEmailAndPassword(email, pass);

  // auth.onAuthStateChanged(firebaseUser => {

  // });

*/
