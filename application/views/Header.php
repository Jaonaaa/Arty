<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<div id="header">
    <div class="logo_site">
        <div class="pic">
            <!-- <img src="<?php echo base_url(); ?>assets/img/Arty_logo.png" alt=""> -->
        </div>
        <div class="name">
            <img src="<?php echo base_url(); ?>assets/img/Arty_text.png" alt="">
        </div>
    </div>
    <div class="params">
        <div class="links">
            <div class="link_block"><a class="<?php echo $ind == "Home" ? "link_selected" : "" ?>"
                    href="<?php echo base_url(); ?>HomeController/index">Home</a></div>
            <div class="link_block"><a class="<?php echo $ind == "regime" ? "link_selected" : "" ?>"
                    href="<?php echo base_url(); ?>HomeController/Regime">Regimes</a></div>
            <div class="link_block"><a class="<?php echo $ind == "bon_achat" ? "link_selected" : "" ?>"
                    href="<?php echo base_url(); ?>HomeController/bon_achat">Bon d'achat </a> </div>
            <div class="link_block"><a href="<?php echo base_url(); ?>HomeController/log_out">Deconnexion</a></div>
        </div>
        <div class="user_param">
            <div class="block_user">
                <div class="username">
                    <?php echo $users["nom"] ?>
                    <?php if ($users["data_user"] != null) { ?>
                        <div class="IMC_block">
                            <div class="text"> Votre IMC : </div>
                            <div class="value">
                                <?php
                                $taille = $users["data_user"]["taille"] / 100;
                                $imc = $users["data_user"]["poids"] / ($taille * $taille);
                                echo (number_format($imc, 2)) ?>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</div>