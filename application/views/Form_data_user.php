<div id="form_data">
    <div class="header_form">
        <div class="title">
            Saluut !!
        </div>
        <div class="subtitle">
            Parlez nous un peu plus de vous en détails. <br>
        </div>
    </div>
    <div class="form_container">
        <div class="form">
            <div class="subtitle_choice" id="choice_title">
                Votre genre<br>
            </div>
            <div class="choice_">
                <div class="block_gender" gender="homme">
                    <div class="label">Homme</div>
                    <div class="hidden">
                        <img src="<?php echo base_url() ?>assets/img/sign_in_1.webp" alt="">
                    </div>
                </div>
                <div class="block_gender" gender="femme">
                    <div class="label">Femme</div>
                    <div class="hidden">
                        <img src="<?php echo base_url() ?>assets/img/sign_in_1.webp" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="form">
            <div class="subtitle_choice" id="choice_title">
                Vos mesures<br>
            </div>
            <div class="choice_col">
                <div class="input">
                    <input type="text" name="taille_user" required id="taille_user">
                    <label>Votre taille</label>
                </div>
                <div class="input">
                    <input type="text" name="poids_user" required id="poids_user">
                    <label>Votre poids</label>
                </div>
            </div>
        </div>
        <div class="btn">
            <button id="btn_next">Suivant</button>
        </div>
    </div>

</div>

<script type="module" src="<?php echo base_url(); ?>assets/js/Form_data_P.js"></script>