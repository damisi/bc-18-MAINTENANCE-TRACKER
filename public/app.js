$(document).ready(function() {});

  // Initialize Firebase
  	

	var config = {
		apiKey: "AIzaSyBUMVJxXB1jyfWi3a6yY1UDuezKYfAdHu4",
		authDomain: "maintenance-tracker-4e247.firebaseapp.com",
		databaseURL: "https://maintenance-tracker-4e247.firebaseio.com",
		storageBucket: "maintenance-tracker-4e247.appspot.com",
		messagingSenderId: "162015622216"
	};
	var myFire = firebase.initializeApp(config);
	
	myFireRef = myFire.database().ref();

	var	serviceMasterRef = myFire.database().ref('service master');
	

	// var storeOneEquipRef = myFire.database().ref('stores/1/equipment');
	// var storeTwoEquipRef = myFire.database().ref('stores/2/equipment');
	// var storeThreeEquipRef = myFire.database().ref('stores/3/equipment');
	// var storeFourEquipRef = myFire.database().ref('stores/4/equipment');
	// var storeFiveEquipRef = myFire.database().ref('stores/5/equipment');
	// var storeSixEquipRef = myFire.database().ref('stores/6/equipment');
	// var storeSevenEquipRef = myFire.database().ref('stores/7/equipment');


	
	
	
	$('#goToLog').hide();
	$('#btnLogout').hide();
	$('#addEmployee').hide();
	$('#addIssues').hide();
	

	$("#addServiceMaster").click(function(){
		console.log('clicked');
		var name = document.getElementById("name").value;
		var equipment = document.getElementById("equipmentServicing").value;
		var number = document.getElementById("phoneNumber").value;
		
		if (name === "" || equipment === "" ||number === ""){
			alert('please fill all fields');
		}else{
			serviceMasterRef.once('value', function(snap) {
				serviceMasterRef.push({
					"name" : name,
					"Phone number": number,
					"equipment servicing": equipment				
				});
				alert("Employee added");
			});
		};

	});

	// $("#addIssues").click(function(){
	// 		issuesListRef.push({issues});
	

	var issuesListRef = myFire.database().ref().child('issues list');

	var	masterRef = myFire.database().ref().child('service master');

	$("#addIssues").click(function(){
		console.log('add issue clicked');
		var store = document.getElementById("store").value;
		var equipment = document.getElementById("issueEquipment").value;
		var issue = document.getElementById("issue").value;

		if (store === "" || equipment === "" ||issue === ""){
			alert('please fill all fields');
		}else{
			issuesListRef.once('value', function(snap) {
				issuesListRef.push({
					'issue': issue
				});
				alert("Issue Logged");
				masterRef.on("child_added", function(snap) {
					var master = snap.val().name;
				});
			});
		};
	});

	issuesListRef.on("child_added", function(snap) {
		var total = snap.val().issue
		$('#issues').append(
		'<li id="' + snap.key + '">' + total +                   
       // '<button data-event="done">Done</button> ' +    
       '<li><button  class= "delete">Delete</button><li>' 
       +  '<li id= "master">'+ master +'</li></li>');

		$('.delete').click(function(error){
			error.preventDefault();
			console.log('delete clicked');
			var pushId = $(this).parent().attr('id');
			console.log(pushId);
			issuesListRef.child(pushId).remove();
		});

	});

	issuesListRef.on("child_removed", function(snap) {
		console.log('it has just been removed');
		var liRemoved = document.getElementById(snap.key);
		console.log(snap.key);
		liRemoved.remove();

	});



	// total = '(DONE)' + total;
	
	$(".editbtn").click(function(){
		$(this).parent().css('text-decoration','line-through')
		console.log('editbtn clicked');

	});

		
	$("#addEmployeeBtn").click(function(){
		$('#addEmployee').show();
	});

	$("#closeAddEmployee").click(function(){
		$('#addEmployee').hide();
	});

	$("#addIssuesBtn").click(function(){
		$('#addIssues').show();
	});

	$("#closeAddIssues").click(function(){
		$('#addIssues').hide();
	});
	

	$("#btnSignUp").click(function(){

		var email = $('#txtEmail').val();
	    var pass = $('#txtPassword').val();

		myFire.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
				console.log(error.code);
				alert(error.message);
		});

	});

	$("#btnLogout").click(function(){
		myFire.auth().signOut().then(function() {
			console.log("Logged out!")
			document.getElementById('sign-in-status').textContent = 'Logged out!'
			$('#goToLog').hide();
			$('#btnLogout').hide();
			$('#btnLogin').show();
			$('#btnSignUp').show();
		}, function(error) {
			console.log(error.code);
			console.log(error.message);
		});
	});

	$("#btnLogin").click(function(){

		var email = $('#txtEmail').val();
	    var pass = $('#txtPassword').val();

		firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
			
			alert(error.code);
			console.log(error.message);
			
		});

	});


	myFire.auth().onAuthStateChanged(function(user) {
		if (user) {
			console.log(user);
			var email = user.email;
			document.getElementById('sign-in-status').textContent = email + ' is signed in';
			$('#goToLog').show();
			$('#btnLogout').show();
			$('#btnLogin').hide();
			$('#btnSignUp').hide();
			// $('#btnLogOut').show();
			// $('#btnSignUp').hide();
			////alert("Login Success");
			//$.session.set('loggedIn', 'yes');
			//window.location.replace("/dashboard.html");

	    }
		else {
			console.log("not logged in");
			// btnLogOut.classList.remove('hide');
	    }
	});
	$('#goToLog').click(function(){
		myFire.auth().onAuthStateChanged(function(user) {
			window.location.href = '/issuesPage.html';
			console.log(user.email);
			if (user.email !== "damisi@gmail.com"){
				$('#addEmployee').hide();
			}else{
				$('#addEmployee').show();
			}
			
		});
	});

	
	





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













/*/*function login(){};

	//getting the login elements
	const textEmail = document.getElementById('textEmail');
	const textPassword = document.getElementById('textPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignup = document.getElementById('btnSignUp');
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
/*  btnSignUp.addEventListener('click', loginevents => {

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
const btnSignUp = document.getElementById('btnSignUp');
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
