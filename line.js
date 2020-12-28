window.onload=function(){
    liff
        .init({
            liffId: "1655531109-1ldr2K9r" // use own liffId
        })
        .then(() => {
            alert("Mantap");
            inisialisasi();
            // Start to use liff's api
        })
        .catch((err) => {
            // Error happens during initialization
            alert("Gagalllllll");
        });
}
function inisialisasi(){
    if(liff.isInClient()){
        $("#login").hide();
        $(".logout").hide();
    }
    else{
        $("#login").show();
        $(".main").hide();
        $(".tmbl-eks").hide();
        $(".logout").show();
    }

    if(liff.isLoggedIn()){
        $("#login").hide();
        $(".main").show();
        if(liff.isInClient()){
            $(".tmbl-eks").show();
        }
        else{
            $(".tmbl-eks").hide();
        }
        liff.getProfile()
            .then(profile => {
                $('#customer').text(profile.displayName);
            })
            .catch((err) => {
                console.log('error', err);
            })
    }
}

function login(){
    if(!liff.isLoggedIn()){
        liff.login();
    }
    else{
        alert("Tidak Dapat Berakali - kali");
    }
}

function sendMessage(){
    if(liff.isInClient()){
        liff.sendMessages([
            {
            type:'text',
            text: "Pesananan yang dipesan adalah : \n"+total_makanan+" Makanan dan "+total_minuman+" Minuman"
            }
        ])
        .then(() => {
            alert('Selamat anda memesan makanan');
        })
        .catch((err) => {
            console.log('error', err);
        });
    }
    else {
        alert('Kau gak bisa kirim pesan selain dari LINE, PAHAM !!!');
    }
}

function eksternal(){
    liff.openWindow({
        url:'https://snackmantap20.herokuapp.com/',
        external:true
    });
}

function logout(){
    if(liff.isLoggedIn){
        liff.logout();
        inisialisasi();
    }else{
        alert("Nahhh Loginn lahh");
    }
}