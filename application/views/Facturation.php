<?php
defined('BASEPATH') or exit('No direct script access allowed');
// var_dump($users);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Facturation</title>
    <link rel="shortcut icon" href="<?php echo base_url(); ?>assets/icon/Arty_logo.ico" type="image/x-icon">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/PopUp.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/P/index.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/P/Home.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/P/footer.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/fonts/fontawesome-5/css/all.min.css">
    <?php if ($users["data_user"] == null) { ?>
        <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/P/Form.css">
    <?php } ?>
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

        @font-face {
            font-family: Dancing;
            src: url(<?php echo base_url(); ?>assets/fonts/Dancing/DancingScript-Regular.ttf);
        }
    </style>
    <?php include("Header.php"); ?>
    <div id="root">
        <div class="header_blanking"></div>
        <div class="container_home">
            <?php
            if ($users["data_user"] != null) {
                ?>
                Facturation
                <?php
            } else {
                include("Form_data_user.php");
            }
            ?>
        </div>
    </div>
    <?php include("Footer.php"); ?>
    <script>
        var base_url = `<?php echo base_url(); ?>`;
    </script>
</body>

</html>