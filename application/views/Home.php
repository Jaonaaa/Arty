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
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/P/Home.css">
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
    <?php include("Header.php"); ?>
    <div id="root">
        <div class="header_blanking"></div>
        <div class="container_home">
            Peter
        </div>
    </div>
    <script>
        var base_url = `<?php echo base_url(); ?>`;
    </script>
</body>

</html>