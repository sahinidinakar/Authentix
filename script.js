function sendOTP() {
	const email = document.getElementById('email');
	const otpverify = document.getElementsByClassName('otpverify')[0];
	const phe=document.getElementsByTagName('p')[0];
	const ph =document.getElementById('phno');
	let otp_val = Math.floor(Math.random() * 1000000);
	const name =document.getElementById('fn');
	if(name.value=="" || undefined){
	name.value="user";}
	let emailbody =
	`<h5>Dear ${name.value},<br>You have successfully generated OTP for Authentix portal.<br>Do not share the OTP with anyone to avoid misuse of your account.<br>The OTP is :  </h5><h2>${otp_val}</h2><br><h5>If you face any problems in our app Please Contact Us !.<br>Thank You,<br>Authentix Team</h5>`;
    Email.send({
    SecureToken : "YOUR_API_KEY",
    To : email.value,
    From : "YOUR_ID",
    Subject : "OTP verification",
    Body : emailbody,
}).then(

	message => {
		if (message === "OK") {
		  phe.style.display = "flex";
			otpverify.style.display="flex";
			const otp_inp = document.getElementById('otp_inp');
			const otp_btn = document.getElementById('otp-btn');

			otp_btn.addEventListener('click', () => {
				if (otp_inp.value == otp_val) {
					alert("OTP Veried successfully !");
					window.open("apps.html")
				}
				else {
					alert("Invalid OTP !");
				}
			})
			const ig_btn = document.getElementById('ig-btn');
				ig_btn.addEventListener('click', () =>
				window.open("/Authentix/insta.html"))
		}
	}
);
}
