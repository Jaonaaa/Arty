<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LOgin backoffice</title>
  <link rel="stylesheet" href="<?php echo base_url("backoffice/css/font.css"); ?>" />
  <link rel="stylesheet" href="<?php echo base_url("backoffice/css/style.css"); ?>" />
</head>
<body>
  <div class="login__container">
    <form method="post" action="<?php echo base_url("backOfficeController/sign_in"); ?>"  class="form">
      <h1 class="form__title">Backoffice</h1>
      <div class="input__container">
        <label for="email">Adresse e-mail</label>
        <input autocomplete="off" id="email" type="email" name="email" required />
      </div>
      <div class="input__container">
        <label for="mot_de_passe">Mot de passe</label>
        <input autocomplete="off" id="mot_de_passe" type="password" name="pwd" required />
      </div>
      <input type="submit" class="btn confirm" value="Valider" />
    </form>
  </div>
</body>
</html>