<!DOCTYPE html>
<html lang="en">
  <head>  
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Back-Office</title>
    <link rel="stylesheet" href="<?php echo base_url("backoffice/css/font.css"); ?>" />
    <link rel="stylesheet" href="<?php echo base_url("backoffice/css/style.css"); ?>" />
    <script src="<?php echo base_url("backoffice/lib/anime.min.js") ?>"></script>
    <script src="<?php echo base_url("backoffice/lib/chart.js"); ?>"></script>
    <script src="<?php echo base_url("backoffice/js/sidebar.js"); ?>" defer></script>
    <script src="<?php echo base_url("backoffice/js/pagination.js"); ?>" type="module" defer></script>
  </head>
  <body>
    <nav class="navbar">
      <img src="<?php echo base_url("backoffice/icon/logo.png"); ?>" alt="Logo du site web" class="navbar__logo" />
    </nav>
    <aside style="transform: translateX(-300px)" class="sidebar">
      <div class="sidebar__item active">
        <img src="<?php echo base_url("backoffice/icon/dashboard.png"); ?>" alt="" class="sidebar__item__icon" />
        <div class="sidebar__item__name">Dashboard</div>
      </div>
      <div class="sidebar__item">
        <img src="<?php echo base_url("backoffice/icon/dashboard.png"); ?>" alt="" class="sidebar__item__icon" />
        <div class="sidebar__item__name">Dashboard</div>
      </div>
      <div class="sidebar__item">
        <img src="<?php echo base_url("backoffice/icon/dashboard.png"); ?>" alt="" class="sidebar__item__icon" />
        <div class="sidebar__item__name">Dashboard</div>
      </div>
    </aside>
    <div id="root">
      <div class="table">
        <div class="table__container">
          <table>
            <thead>
              <tr>
                <td style="width: 200px">Id</td>
                <td style="width: 300px">Nom</td>
                <td style="width: 300px">Prenom</td>
                <td style="width: 300px">Email</td>
                <td style="width: 200px">Date de naissance</td>
                <td style="width: 300px">Adresse</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="width: 200px">ETU001765</td>
                <td style="width: 300px">ANDRIANJAKATSIHOARANA</td>
                <td style="width: 300px">Tony Rakotodrazaka</td>
                <td style="width: 300px">andrianjaka.tony@gmail.com</td>
                <td style="width: 200px">2004-03-01</td>
                <td style="width: 300px">Lot F04 Bis Ambohitromby</td>
              </tr>
              <tr>
                <td style="width: 200px">ETU001765</td>
                <td style="width: 300px">ANDRIANJAKATSIHOARANA</td>
                <td style="width: 300px">Tony Rakotodrazaka</td>
                <td style="width: 300px">andrianjaka.tony@gmail.com</td>
                <td style="width: 200px">2004-03-01</td>
                <td style="width: 300px">Lot F04 Bis Ambohitromby</td>
              </tr>
              <tr>
                <td style="width: 200px">ETU001765</td>
                <td style="width: 300px">ANDRIANJAKATSIHOARANA</td>
                <td style="width: 300px">Tony Rakotodrazaka</td>
                <td style="width: 300px">andrianjaka.tony@gmail.com</td>
                <td style="width: 200px">2004-03-01</td>
                <td style="width: 300px">Lot F04 Bis Ambohitromby</td>
              </tr>
              <tr>
                <td style="width: 200px">ETU001765</td>
                <td style="width: 300px">ANDRIANJAKATSIHOARANA</td>
                <td style="width: 300px">Tony Rakotodrazaka</td>
                <td style="width: 300px">andrianjaka.tony@gmail.com</td>
                <td style="width: 200px">2004-03-01</td>
                <td style="width: 300px">Lot F04 Bis Ambohitromby</td>
              </tr>
              <tr>
                <td style="width: 200px">ETU001765</td>
                <td style="width: 300px">ANDRIANJAKATSIHOARANA</td>
                <td style="width: 300px">Tony Rakotodrazaka</td>
                <td style="width: 300px">andrianjaka.tony@gmail.com</td>
                <td style="width: 200px">2004-03-01</td>
                <td style="width: 300px">Lot F04 Bis Ambohitromby</td>
              </tr>
              <tr>
                <td style="width: 200px">ETU001765</td>
                <td style="width: 300px">ANDRIANJAKATSIHOARANA</td>
                <td style="width: 300px">Tony Rakotodrazaka</td>
                <td style="width: 300px">andrianjaka.tony@gmail.com</td>
                <td style="width: 200px">2004-03-01</td>
                <td style="width: 300px">Lot F04 Bis Ambohitromby</td>
              </tr>
              <tr>
                <td style="width: 200px">ETU001765</td>
                <td style="width: 300px">ANDRIANJAKATSIHOARANA</td>
                <td style="width: 300px">Tony Rakotodrazaka</td>
                <td style="width: 300px">andrianjaka.tony@gmail.com</td>
                <td style="width: 200px">2004-03-01</td>
                <td style="width: 300px">Lot F04 Bis Ambohitromby</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table__pagination"></div>
      </div>
    </div>
    <script src="<?php echo base_url("backoffice/js/graphic.js"); ?>" defer></script>
  </body>
</html>
