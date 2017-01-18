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
	
	myFireRef = myFire.database().ref();
	
	var	serviceMasterFiveRef = myFire.database().ref('service master/5');
	var	serviceMasterSixRef = myFire.database().ref('service master/6');
	var	serviceMasterSevenRef = myFire.database().ref('service master/7');
	var	serviceMasterEightRef = myFire.database().ref('service master/8');
	var	serviceMasterNineRef = myFire.database().ref('service master/9');
	var	serviceMasterTenRef = myFire.database().ref('service master/10');

	var storeOneEquipRef = myFire.database().ref('stores/1/equipment');
	var storeTwoEquipRef = myFire.database().ref('stores/2/equipment');
	var storeThreeEquipRef = myFire.database().ref('stores/3/equipment');
	var storeFourEquipRef = myFire.database().ref('stores/4/equipment');
	var storeFiveEquipRef = myFire.database().ref('stores/5/equipment');
	var storeSixEquipRef = myFire.database().ref('stores/6/equipment');
	var storeSevenEquipRef = myFire.database().ref('stores/7/equipment');


	
	
	
	var store = document.getElementById("");
	$('#goToLog').hide();
	$('#btnLogout').hide();
	
	

	

	$("#addServiceMaster").click(function(){
		console.log('clicked');
		var name = document.getElementById("name").value;
		var equipment = document.getElementById("equipmentServicing").value;
		var number = document.getElementById("phoneNumber").value;
		
		if (name === "" || equipment === "" ||number === ""){
			alert('please fill all fields');
		}else{
			serviceMasterFiveRef.once('value', function(snap) {
				if(snap.val()===""){
					serviceMasterFiveRef.update({
						"name" : name,
						"Phone number": number,
						"equipment servicing": equipment
						
					});
					alert("Employee added");
				}else{
					serviceMasterSixRef.once('value', function(snap){
						if(snap.val() ===""){
							serviceMasterSixRef.update({
								"name" : name,
								"Phone number": number,
								"equipment servicing":equipment
								
							});
							alert("Employee added");
						}else{
							serviceMasterSevenRef.once('value', function(snap){
								if(snap.val() ===""){
									serviceMasterSevenRef.update({
										"name" : name,
										"Phone number": number,
										"equipment servicing":equipment
										
									});
									alert("Employee added");
								}else{
									serviceMasterEightRef.once('value', function(snap){
										if(snap.val() ===""){
											serviceMasterEightRef.update({
												"name" : name,
												"Phone number": number,
												"equipment servicing":equipment
												
											});
											alert("Employee added");
										}else{
											serviceMasterNineRef.once('value', function(snap){
												if(snap.val() ===""){
													serviceMasterNineRef.update({
														"name" : name,
														"Phone number": number,
														"equipment servicing":equipment
														
													});
													alert("Employee added");
												}else{
													serviceMasterTenRef.once('value', function(snap){
														if(snap.val() ===""){
															serviceMasterTenRef.update({
																"name" : name,
																"Phone number": number,
																"equipment servicing":equipment
																
															});
															alert("Employee added");
														}else{
															alert("You are not authorized, please contact the board");
														}
													});
												}
											});
										}
									});
								}
							});
						}
					});
				};
			});
		};
	});

	$("#addIssues").click(function(){
		if (store === "PK-Ajegule" && equipment === "generator"){

			storeOneEquipRef.update({
				generator : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Ajegule" && equipment === "rice cooker"){

			storeOneEquipRef.update({
				"rice cooker" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Ajegule" && equipment === "rotisserie oven"){

			storeOneEquipRef.update({
				"rotisserie oven" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Bodija" && equipment === "deep fryer"){

			storeTwoEquipRef.update({
				"deep fryer" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Bodija" && equipment === "solar oven"){

			storeTwoEquipRef.update({
				"solar oven" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Bodija" && equipment === "rotisserie oven"){

			storeTwoEquipRef.update({
				"rotisserie oven" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Challenge" && equipment === "deep fryer"){

			storeThreeEquipRef.update({
				"deep fryer" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Challenge" && equipment === "gas oven"){

			storeThreeEquipRef.update({
				"gas oven" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Challenge" && equipment === "heating cabinet"){

			storeThreeEquipRef.update({
				"heating cabinet" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Garki" && equipment === "rice cooker"){

			storeFourEquipRef.update({
				"rice cooker" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Garki" && equipment === "gas oven"){

			storeFourEquipRef.update({
				"gas oven" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Garki" && equipment === "solar inverter"){

			storeFourEquipRef.update({
				"solar inverter" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Ikorodu" && equipment === "deep fryer"){

			storeFiveEquipRef.update({
				"deep fryer" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Ikorodu" && equipment === "gas oven"){

			storeFiveEquipRef.update({
				"gas oven" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Ikorodu" && equipment === "heating cabinet"){

			storeFiveEquipRef.update({
				"heating cabinet" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Wuse" && equipment === "deep fryer"){

			storeSixEquipRef.update({
				"deep fryer" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Wuse" && equipment === "solar oven"){

			storeSixEquipRef.update({
				"solar oven" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "PK-Wuse" && equipment === "heating cabinet"){

			storeSixEquipRef.update({
				"heating cabinet" : issues
			});
			issuesListRef.push({issues});
		}
		//TESTING
		if (store === "aaaaaaaaa" && equipment === "oven"){

			storeSevenEquipRef.update({
				"oven" : issues
			});
			issuesListRef.push({issues});
		}
		if (store === "aaaaaaaaa" && equipment === "generator"){

			storeSevenEquipRef.update({
				"generator" : issues
			});
			issuesListRef.push({issues});
		}
	});
	// addIssue();

	var issuesListRef = myFire.database().ref().child('issues list');

	issuesListRef.orderByKey().on("child_added", function(snapshot) {
		var total = snapshot.val().issue
		$('#issues').append("<tr class = 'issueRow'><td>" + total + "<button class='editbtn'>X</button></td></tr>")
		total = '(DONE)' + total;
		console.log(total);
		// $(".editbtn").click(function(){
		// 	$(this).parent()

		// });
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
