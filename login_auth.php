<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body>
 <?php
  $password = $_POST["password"];
   if($password == "kansan"){
     echo '<script language="javascript">';
     echo 'alert("로그인 성공")';
     echo '</script>';
   } else {
     echo '<script language="javascript">';
     echo 'alert("로그인 실패")';
     echo '</script>';
   }
  ?>
</body>
</html>
