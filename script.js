var total_makanan = 0;
var total_minuman = 0;
var harga_total = 0;
var harga1 = 5000;
var harga2 = 5000;
var harga3 = 5000;
var harga4 = 5000;

function minus(number){
    if(number==1 && parseInt($("#prf1").text())>0){
        $("#prf1").text((parseInt($("#prf1").text())-1).toString());
        total_makanan--;
        harga_total-=harga1;
    }
    else if(number==2 && parseInt($("#prf2").text())>0){
        $("#prf2").text((parseInt($("#prf2").text())-1).toString());
        total_makanan--;
        harga_total-=harga2;
    }
    if(number==3 && parseInt($("#prf3").text())>0){
        $("#prf3").text((parseInt($("#prf3").text())-1).toString());
        total_minuman--;
        harga_total-=harga3;
    }
    else if(number==4 && parseInt($("#prf4").text())>0){
        $("#prf4").text((parseInt($("#prf4").text())-1).toString());
        total_minuman--;
        harga_total-=harga4;
    }
    
    $("#total").text("Total : "+parseInt(total_makanan).toString()+" makanan dan "+parseInt(total_minuman).toString()+" minuman");
    $("#harga").text("Harga : "+parseInt(harga_total).toString());
}

function plus(number){
    if(number==1){
        $("#prf1").text((parseInt($("#prf1").text())+1).toString());
        total_makanan++;
        harga_total+=harga1;
    }
    else if(number==2){
        $("#prf2").text((parseInt($("#prf2").text())+1).toString());
        total_makanan++;
        harga_total+=harga2;
    }
    else if(number==3){
        $("#prf3").text((parseInt($("#prf3").text())+1).toString());
        total_minuman++;
        harga_total+=harga3;
    }
    else if(number==4){
        $("#prf4").text((parseInt($("#prf4").text())+1).toString());
        total_minuman++;
        harga_total+=harga4;
    }
    $("#total").text("Total : "+parseInt(total_makanan).toString()+" makanan dan "+parseInt(total_minuman).toString()+" minuman");
    $("#harga").text("Harga : "+parseInt(harga_total).toString());
}