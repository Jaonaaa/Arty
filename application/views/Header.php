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
            <div class="link_block link_selected">Home</div>
            <div class="link_block">Regimes</div>
            <div class="link_block">Bon d'achat </div>
            <div class="link_block">A propos</div>
        </div>
        <div class="user_param">
            <div class="block_user">
                <div class="user_pic">
                </div>
                <div class="username">
                    <?php echo $users["nom"] ?>
                </div>
            </div>
        </div>
    </div>
</div>