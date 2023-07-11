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
	<title>Eat</title>
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
			<spining-dots class="loading" id="loader_page" circle="2" borderWidth="4.5" width="150">
			</spining-dots>
			<div class="container_login" style="opacity:0">
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
							Bienvenue
							<?php echo $nom; ?>
						</div>
						<div class="subtitle_form">
							Veuillez entre vos données de connexion
						</div>
						<div class="input">
							<input type="email" name="email_user" required id="email_user">
							<label>Email</label>
						</div>
						<div class="input">
							<input type="password" name="pwd_user" required id="pwd_user">
							<label>Mot de passe</label>
						</div>
						<div class="options_row">
							<div class="option">
							</div>
							<div class="option">
								<div class="link" id="forgot_pwd"><a
										href="<?php echo base_url() ?>BackOfficeController">Se connecter au tant
										qu'admin</a></div>
							</div>
						</div>
						<div class="btn large">
							<button>Se connecter</button>
						</div>
						<div class="sign_up_row">
							Pas de compte ? <div class="link" id="sign_up_btn">
								Incrivez-vous gratuitement
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
					<div class="picture_slide" title="Une alimentation saine" subtitle="
						Transformez votre corps, vivez en meilleure santé et atteignez vos objectifs 
						de remise en forme avec notre programme de régime personnalisé. 
						Découvrez une nouvelle version de vous-même et adoptez un mode de vie équilibré pour une transformation durable.
					">
						<img src="<?php echo base_url(); ?>assets/img/sign_in_1.webp" alt="">
					</div>
					<div class="picture_slide" title="Un poids idéal" subtitle="
					Découvrez votre poids idéal et réalisez une transformation incroyable. Trouvez l'équilibre parfait pour votre corps, atteignez votre poids idéal et vivez en pleine santé. 
					Libérez le meilleur de vous-même et embrassez une vie épanouissante.
					">
						<img src="<?php echo base_url(); ?>assets/img/sign_in_2.webp" alt="">
					</div>
					<div class="picture_slide" title="Livraison rapide" subtitle="
					Profitez d'une livraison rapide de repas sains et équilibrés directement chez vous, 
					pour une remise en forme efficace sans compromis sur la qualité. 
					">
						<img src="<?php echo base_url(); ?>assets/img/sign_in_3.webp" alt="">
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
		var bon_achat = undefined;
		var base_url = `<?php echo base_url(); ?>`;
	</script>
	<script src="<?php echo base_url(); ?>assets/js/P/Loading.js"></script>
	<script type="module" src="<?php echo base_url(); ?>assets/js/index_P.js"></script>
</body>

</html>