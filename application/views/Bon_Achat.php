<?php
defined('BASEPATH') or exit('No direct script access allowed');
// var_dump($codes);
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
                <div class="title_section">Liste Bon d'achat</div>
                <div class="table_container">
                    <table id="table_regime">
                        <tr>
                            <th>Code</th>
                            <th>Valeur</th>
                            <th>Commander</th>
                        </tr>
                        <?php foreach ($codes as $code) { ?>
                            <tr>
                                <td>
                                    <?php echo $code["code"]; ?>
                                </td>
                                <td class="end">
                                    <?php echo $code["prix"] ?> Ar
                                </td>
                                <td>
                                    <a
                                        href="<?php echo base_url(); ?>index.php/HomeController/requeste_bon_achat/<?php echo $code["id_code_recharge"]; ?>">
                                        Utiliser </a>
                                </td>
                            </tr>
                        <?php } ?>
                    </table>
                </div>

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
        <?php if (isset($_GET["setted"])) { ?>
            var bon_achat = true;
        <?php } ?>
    </script>
    <script type="module" src="<?php echo base_url(); ?>assets/js/P/PopUp.js"></script>
</body>

</html>