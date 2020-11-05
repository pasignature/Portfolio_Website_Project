<?php
error_reporting(0);

//default error message, if everything else fails
$responseText = "<strong style ='color:orange'>Sorry, we're fixing an error. Kindly check back later. Thanks.</strong>";

if(isset($_POST) && !empty($_POST)){
	//extract all html POST fields, captcha must be left empty
	extract($_POST);
	if(!empty($name) && !empty($email) && !empty($message) && empty($captcha)){

		//store textarea values in <pre> tag
		$msg="<pre>$message</pre>";

		###### Send mail to Andrew ###########
		$to = "Andrew Godwin <message@andrew-godwin.com>";
		$subject = "Portfolio Website Message from ".$name."";

		//set the mail headers
		$header = 'MIME-Version: 1.0' . "\r\n";
		$header .= 'Content-Type: text/html' . "\r\n";
		$header .= 'From: Andrew Godwin <message@andrew-godwin.com>' . "\r\n";

		//create mail message body
		$message = "Excuse me Boss, you have a visitor message.<br />
		<strong>Visitor Info:</strong><br />
		Name: ".$name."<br />
		Email: ".$email."<br />
		Message: ".$msg."<br />";

		//send the mail
		$sendmail = mail($to,$subject,$message,$header);

		if($sendmail){
			$responseText = "<strong style ='color:green'>Congrats! Your message was sent successfully.</strong>";
		}else{
			$responseText = "<strong style ='color:red'>Sorry! Your message could not be sent. Pls try again.</strong>";
		}

	}else{
		$responseText = "<strong style ='color:red'>Error validating your inputs, your message was not sent. Pls try again.</strong>";
	}
}

echo $responseText;