<?php 
//headers

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

//collect post data
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

//clean post data
$firstName = $request->firstName ;
$lastName = $request->lastName;
$email = $request->email;
$message = $request->message;
$name = $firstName." ".$lastName;

// create email
$to = "jagmohan@localhost";
$email_subject = "Message from Contact Form on Ad Webapp: ".$name;
$headers = array(
	'MIME-Version' => '1.0',
    'From' => 'admin@admister.in',
    'Reply-To' => 'admin@admister.in',
    'X-Mailer' => 'PHP/' . phpversion(),
	'Content-type' => 'text/html; charset=iso-8859-1'
);
$email_body = '
<html>
<head>
  <title>This is an automated email from Ad webapp with the following message </title>
</head>
<body>
	<h2> Name of the person:'.$name.'</h2>
	<h3> Email Address:'.$email.' </h2>
	<h3> Message:'.$message.' </h2>
</body>
</html>';

//Post success or failure
$success = mail($to, $email_subject, $email_body, $headers);

if (!$success) {
    $errorMessage = error_get_last()['message'];
} else {
	echo json_encode( $success );
}

?>