<?php
defined('BASEPATH') or exit('No direct script access allowed');
$nom = "";
if ($this->session->has_userdata('logged_in')) {
	$this->session->unset_userdata('logged_in');

} else {
	$nom = "back, Olivia";
	$this->session->set_userdata('logged_in', "Hello");
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Arty</title>
	<link rel="shortcut icon" href="<?php echo base_url(); ?>assets/icon/Arty_logo.ico" type="image/x-icon">
	<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/PopUp.css">
	<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/P/index.css">
	<link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/P/Login.css">
	<link rel="stylesheet" href="<?php echo base_url(); ?>assets/fonts/fontawesome-5/css/all.min.css">
</head>

<body>
	<style>
		@font-face {
			font-family: Poppins_L;
			src: url(<?php echo base_url(); ?>assets/fonts/Poppins/Poppins-Light.ttf);
		}

		@font-face {
			font-family: Poppins_B;
			src: url(<?php echo base_url(); ?>assets/fonts/Poppins/Poppins-Bold.ttf);
		}

		@font-face {
			font-family: Poppins_EB;
			src: url(<?php echo base_url(); ?>assets/fonts/Poppins/Poppins-ExtraBold.ttf);
		}
	</style>
	<div id="root">
		<div id="id_login_bg">
			<div class="container_login">
				<div id="hider_form"></div>
				<div id="text_hider_form">
					<img src="<?php echo base_url(); ?>/assets/img/sign_in.jpg" alt="">
				</div>
				<div class="form_container" id="left_container">

					<div class="title_site_logo">
						<div class="mini_logo">
							<img src="<?php echo base_url(); ?>assets/img/Arty_logo.png" alt="logo">
						</div>
						<div class="name_site">
							<img src="<?php echo base_url(); ?>assets/img/Arty_text.png" alt="">
						</div>
					</div>

					<form action="/" method="post" id="form_sign_in">
						<div class="title_form" id="sign_in_title">
							Welcome
							<?php echo $nom; ?>
						</div>
						<div class="subtitle_form">
							Welcome back! Please enter your details
						</div>
						<div class="input">
							<input type="email" name="email_user" required id="email_user">
							<label>Email</label>

						</div>
						<div class="input">
							<input type="password" name="pwd_user" required id="pwd_user">
							<label>Password</label>
						</div>
						<div class="options_row">
							<div class="option">
							</div>
							<div class="option">
								<div class="link" id="forgot_pwd">Forgot password</div>
							</div>
						</div>
						<div class="btn large">
							<button>Sign in</button>
						</div>
						<div class="sign_up_row">
							Don't have an account ? <div class="link" id="sign_up_btn">
								Sign up for free
								<div class="img_under_link">
									<img src="<?php echo base_url(); ?>assets/img/under_link.png" alt="under_link">
								</div>
							</div>

						</div>
					</form>

				</div>
				<div class="picture_form_container" id="rigth_container">
					<div id="controller_slider">
					</div>
					<div class="picture_slide" title="Fast Service"
						subtitle="
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias fuga sed tempora maxime eaque assumenda delectus dolore? Accusamus tempora, dolorum excepturi dolore nisi natus recusandae ex consectetur, dolorem vero aliquid.">
						<img src="<?php echo base_url(); ?>assets/img/login_1.jpg" alt="">
					</div>
					<div class="picture_slide" title="Midddle speed Service" subtitle="
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias fuga sed tempora maxime eaque assumenda delectus dolore? Accusamus tempora, dolorum excepturi dolore nisi natus recusandae ex consectetur, dolorem vero aliquid.
					">
						<img src="<?php echo base_url(); ?>assets/img/login_2.jpg" alt="">
					</div>
					<div class="picture_slide" title="Not a Service" subtitle="Hello World">
						<img src="<?php echo base_url(); ?>assets/img/login_3.jpg" alt="">
					</div>

					<div class="content_picture_container">
						<div class="bottom_section">
							<div class="couvert">
								<div class="title"></div>
							</div>
							<div class="couvert">
								<div class="subtitle">
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
	<script>
		var base_url = `<?php echo base_url(); ?>`;
	</script>
	<script type="module" src="<?php echo base_url(); ?>assets/js/index_P.js"></script>
</body>

</html>