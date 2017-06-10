<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
	<title>.::Web Developer::.</title>
	<meta name="description" content="Web Developer" />
	<meta name="keywords" content="HTML,CSS,XML,JavaScript,jQuery,PHP,MySQL" />
	<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<link rel="manifest" href="manifest.json">  
	<script src="https://www.gstatic.com/firebasejs/3.7.2/firebase.js"></script>
	<script>
		// Initialize Firebase
		var config = {
			apiKey: "AAAAlvfjlKE:APA91bGd6aFtLCqJcH0sEVR8OGzSbhnPRVD2TN2bQ-DcI-WUknwFMqBunk6JDzPqdHcCmoxyuV9-gCZGKrig6SDEHLzLoJ9K-nQCCVgD-O4aWqGORAzk4ImGzPDnjG-TPDpAHwvMTaBl",
			authDomain: "fcmproject-11b1f.firebaseapp.com",
			databaseURL: "https://fcmproject-11b1f.firebaseio.com/",
			storageBucket: "gs://fcmproject-11b1f.appspot.com",
			messagingSenderId: "648403981473"
		  };
		firebase.initializeApp(config);

		const messaging = firebase.messaging();

		messaging.requestPermission()
		.then(function() {
		  console.log('Notification permission granted.');
		  return messaging.getToken();
		})
		.then(function(token) {
		  console.log(token); // Display user token
		})
		.catch(function(err) { // Happen if user deney permission
		  console.log('Unable to get permission to notify.', err);
		});

		messaging.onMessage(function(payload){
			console.log('onMessage',payload);
		})
		$.ajax({
			type:'POST',
			url:'token.php',
			data:{token : token, _token: "<?php echo csrf_token(); ?>"},
			success:function(data){
				$("#msg").html(data);
			}
		}); 
	</script>
</head>
<body>
</body>
</html>
