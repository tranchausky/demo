<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="./css/style.css">

    <style>
        .modal-basic {
          display: none;
          position: fixed;
          z-index: 1;
          padding-top: 100px;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0,0,0);
          z-index: 22131;
        }
        .modal-basic .modal-content {
          background-color: #fefefe;
          margin: auto;
          padding: 20px;
          border: 1px solid #888;
          width: 286px;
        }
        
        </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bcryptjs/2.2.0/bcrypt.min.js"></script>
    

    <script src="./js/jquery.js"></script>
    <script src="./js/popper.min.js"></script>


    <script src="./js/bootstrap.min.js"></script>

    <script src="./js/jquery.dataTables.min.js"></script>


    <script src="./js/dataTables.bootstrap4.min.js"></script>

    <script src="./js/gitdata.js"></script>
    <script src="./js/mainload.js"></script>
    <script src="./js/script.js"></script>
</head>

<body>
    <style>
        body {
            padding-top: 4.5rem;
        }

        .toast-view {
            display: none;
            position: fixed;
            top: 60px;
            right: 6px;
            z-index: 2222;
        }

        .toast-view>div {
            min-width: 300px;
            position: relative;
            padding: 3px 16px;
            margin-bottom: 4px;
        }

        td {
            word-break: break;
        }
        .modal-dialog {
            max-width: 800px;
            margin: 1.75rem auto;
        }
        .dis-none{
            display: none;
        }
        #loadingAll .modal-dialog{
            background: #3f3f3fc2;
            max-width: 100vw;
        }
    </style>
    <?php

include_once './layout/header.php';

?>

    <div class="maincontent" id="maincontent">

    </div>

    <div class="toast-view" id="toast-view"></div>

    <?php

include_once './layout/footer.php';
?>

<div class="modal fade" id="loadingAll" tabindex="-1" role="dialog" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered justify-content-center" role="document">
        <div class="loader"></div>
    </div>
</div>

<div id="myModal" class="modal-basic">
    <!-- Modal content -->
    <div class="modal-content">
    <p>Welcome back..</p>
    <input type="password" name="" id="password_ss" placeholder="input password here">
    <button class="btn-loginss" id="login_session" onclick="checkLoginBasic();">Login Session</button>
    </div>
</div>

<script>
//for login basic
var glg_hash = '$2y$10$elFm3BzPfJKM0XUYnW58kOisbDcCOLmynndLHhwhCtLvjqw0AY97m';
function checkLoginBasic() {
    var pp_ss = document.getElementById("password_ss").value;
    if(pp_ss == ''){
        alert('Wrong Password Session');
        return false;
    }
    compareTextPasswordSession(pp_ss, function(ispassHash){
        if(ispassHash == true){
            sessionStorage.setItem("sessionLogin", 'true');
            location.reload();
        }else{
            alert('Wrong Password Session')
            sessionStorage.removeItem("sessionLogin");
        }
    });
}
showHideSessionLogin();
function showHideSessionLogin() {
    let isSession = sessionStorage.getItem("sessionLogin");
    var modalLogin = document.getElementById("myModal");
    if(glg_hash == ''){
        modalLogin.style.display = "none";
        return true;
    }
    if(isSession !== 'true') {
        modalLogin.style.display = "block";
        return false;
    }else{
        modalLogin.style.display = "none";
        return true;
    }
}
function compareTextPasswordSession(text, callback) {
    var encrypted = glg_hash;
    text = text.trim();
    var bcrypt = dcodeIO.bcrypt;
    bcrypt.compare(text, encrypted, (err, res) => {
        if (res == true) {
            callback(true)
        }else{
            callback(false)
        }
    })
}
</script>

</body>

</html>