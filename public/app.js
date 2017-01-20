
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
var issuesListRef = myFire.database().ref().child('issues list');
var	masterRef = myFire.database().ref().child('service master');



function hide(){
	$('#goToLog, #btnLogout, #addEmployee, #addIssues').hide();
};

function add(){
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
				$('#addEmployee').hide();
			});
		};

	});

	$("#addRequest").click(function(){
		console.log('add issue clicked');
		var store = document.getElementById("storeList").value;
		var equipment = document.getElementById("issueEquipment").value;
		var issue = document.getElementById("issue").value;
		var master;

		if (store === "" || equipment === "" ||issue === ""){
			alert('please fill all fields');
		}else{

			masterRef.on("value", function(snap) {
				snap.forEach(function(snap){
					if(equipment == snap.val().equipmentServicing){
						master = snap.val().name;
						console.log(master);
						issuesListRef.once('value', function(snap) {
							issue = store + " has the following issue with "+ equipment + ":  " + issue;
							issuesListRef.push({
								'issue': issue,
								'status': 'NEW!!  ',
								'serviceMaster' : master
							});
							alert("Issue Logged");
							$('#addIssues').hide();
				
						});

						return true;
					}else{
						master = 'External Vendor';
						
					};

				});
			});
			if (master === 'External Vendor'){
				alert('PLEASE CONTACT AN EXTERNAL VENDOR');
			};

		};

	});
};

function childListeners(){
	issuesListRef.on("child_added", function(snap) {
		var total = snap.val().issue;
		var status = snap.val().status;
		var master = snap.val().serviceMaster;
		

		$('#issues').append(
		'<li class="list-group-item" id="' + snap.key + '"> <span class= "badge">'+status +'</span>'+ total +                   
	   '</br><button  class= "delete">Issue Resolved</button> <button  class= "escalate">Escalate</button><a href="#">Contact ' 
	   + master +'?</a></li>');

		$('.delete').click(function(){

			console.log('delete clicked');
			var pushId = $(this).parent().attr('id');
			// console.log(pushId);
			issuesListRef.child(pushId).remove();
		});

		$('.escalate').click(function(){
			$(this).prop('disabled', true);
			$(this).text("ESCALATED");
			console.log('escalate clicked');
			var pushId = $(this).parent().attr('id');
			// console.log(pushId);

			issuesListRef.child(pushId).update({
				status : '!!TREAT NOW!!  '
			});
		});

	});

	issuesListRef.on("child_removed", function(snap) {
		console.log('it has just been removed');
		var liRemoved = document.getElementById(snap.key);
		// console.log(snap.key);
		liRemoved.remove();

	});

	issuesListRef.on("child_changed", function(snap) {
		console.log('it has just been changed');
		var total = snap.val().issue;
		var status = snap.val().status;
		var master;
		$('#issues').append(
		'<li id="' + snap.key + '"> <span style="color:red;font-weight:bold">'+status +'</span>'+ total +                   
	   '</br><button  class= "delete">Issue Resolved</button> <button  class= "escalate">Escalate</button><a href="#">Contact ' 
	   + master +'?</a></li>');

	});
};

function buttonSpaz(){
	$("#addEmployeeBtn").click(function(){
		$('#addEmployee').toggle();
	});

	$("#closeAddEmployee").click(function(){
		$('#addEmployee').toggle();
	});

	$("#addIssuesBtn").click(function(){
		$('#addIssues').toggle();
	});

	$("#closeAddIssues").click(function(){
		$('#addIssues').toggle();
	});
};

function authenticate(){
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
			$('#goToLog, #btnLogout').hide();
			$('#btnLogin, #btnSignUp').show();

		}, function(error) {
			console.log(error.code);
			console.log(error.message);
		});
	});

	$("#btnLogoutLog").click(function(){
		myFire.auth().signOut().then(function() {
			console.log("Logged out!")
			
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
			// console.log(user);
			var email = user.email;
			document.getElementById('sign-in-status').textContent = email + ' is signed in';
			$('#goToLog, #btnLogout').show();
			$('#btnLogin, #btnSignUp').hide();
	    }
		else {
			console.log("not logged in");
			// btnLogOut.classList.remove('hide');
	    }
	});
};

authenticate();
buttonSpaz();
childListeners();
add();
hide();
