<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Back-Office</title>
  <link rel="shortcut icon" href="<?php echo base_url(); ?>assets/icon/Arty_logo.ico" type="image/x-icon">
  <link rel="stylesheet" href="<?php echo base_url("backoffice/css/font.css"); ?>" />
  <link rel="stylesheet" href="<?php echo base_url("backoffice/css/style.css"); ?>" />
  <script src="<?php echo base_url("backoffice/lib/anime.min.js") ?>"></script>
  <script src="<?php echo base_url("backoffice/lib/chart.js"); ?>"></script>
  <script type="module" src="<?php echo base_url("backoffice/js/sidebar.js"); ?>" defer></script>
</head>

<body>
  <nav class="navbar">
    <img src="<?php echo base_url("backoffice/icon/logo.png"); ?>" alt="Logo du site web" class="navbar__logo" /><br>
    <img src="<?php echo base_url("backoffice/icon/arrow.png"); ?>" alt="Alterner la sidebar" class="navbar__toggle">
  </nav>
  <aside style="transform: translateX(-300px)" class="sidebar">
    <div id="dashboard__item" class="sidebar__item active">
      <img src="<?php echo base_url("backoffice/icon/dashboard.png"); ?>" alt="" class="sidebar__item__icon" />
      <div class="sidebar__item__name">Dashboard</div>
    </div>
    <div id="regime__item" class="sidebar__item">
      <img src="<?php echo base_url("backoffice/icon/regime.png"); ?>" alt="" class="sidebar__item__icon" />
      <div class="sidebar__item__name">Regime</div>
    </div>
    <div id="repas__item" class="sidebar__item">
      <img src="<?php echo base_url("backoffice/icon/plat.avif"); ?>" alt="" class="sidebar__item__icon" />
      <div class="sidebar__item__name">Repas</div>
    </div>
    <div id="sport__item" class="sidebar__item">
      <img src="<?php echo base_url("backoffice/icon/sport.png"); ?>" alt="" class="sidebar__item__icon" />
      <div class="sidebar__item__name">Sport</div>
    </div>
    <div id="code__item" class="sidebar__item">
      <img src="<?php echo base_url("backoffice/icon/code.jpg"); ?>" alt="" class="sidebar__item__icon" />
      <div class="sidebar__item__name">Code</div>
    </div>
    <div id="utilisateur__item" class="sidebar__item">
      <img src="<?php echo base_url("backoffice/icon/utilisateur.png"); ?>" alt="" class="sidebar__item__icon" />
      <div class="sidebar__item__name">Utilisateur</div>
    </div>
    <div id="type__aliment__item" class="sidebar__item">
      <img src="<?php echo base_url("backoffice/icon/type.webp"); ?>" alt="" class="sidebar__item__icon" />
      <div class="sidebar__item__name">Type d'aliment</div>
    </div>
  </aside>
  <div id="root"></div>
  <script type="module" src="<?php echo base_url("backoffice/js/graphic.js"); ?>" defer></script>
  <script type="module" src="<?php echo base_url("backoffice/js/ajax.js"); ?>" defer></script>
</body>

</html>