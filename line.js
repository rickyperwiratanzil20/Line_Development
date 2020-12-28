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
        $(".logout").show();
    }
}