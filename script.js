function minus(number){
    if(number==1){
        $("#prf1").text((parseInt($("#prf1").text())-1).toString);
    }
    else if(number==2){
        $("#prf2").text((parseInt($("#prf2").text())-1).toString);
    }
    else if(number==3){
        $("#prf3").text((parseInt($("#prf3").text())-1).toString);
    }
    else if(number==4){
        $("#prf4").text((parseInt($("#prf4").text())-1).toString);
    }
}