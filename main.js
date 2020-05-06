document.addEventListener("DOMContentLoaded", ()=>{ 
        //do work
    var con =    [[2.4,1.05,2.5,0.38],
                        [3.0,1.12,2.5,0.35],
                        [3.6,1.20,2.5,0.32]];


    var cocomo = document.querySelector("#cocomo")
    var cocomo2 = document.querySelector("#cocom2")
    var coqualmo = document.querySelector("#coqualmo")

    var cocomo_body = document.querySelector(".cocomo-main")
    var cocomo2_body = document.querySelector(".cocomo2-main")
    var coqualmo_body =document.querySelector(".coqualmo-main")




    
    var organic = document.querySelector("#organic")
    var semi = document.querySelector("#semi")
    var embed = document.querySelector("#embed")
// ================ Basic Cocomo ================
    document.querySelector("#cocomo-submit").addEventListener("click",()=>{
    
    
    
    var kloc = document.querySelector("#KLOC")
    var devtime = document.querySelector(".dev-time")
    var peoplereq = document.querySelector(".people-req")

    if(kloc.value != ""){
        if(organic.checked){
            var e = con[0][0]*(parseFloat(kloc.value)**con[0][1])
            var d = con[0][2]*(e**con[0][3])
            var p = Math.ceil(e/d)
            devtime.textContent = d
            peoplereq.textContent = p

        }

        if(semi.checked){
            var e = con[1][0]*(parseFloat(kloc.value)**con[1][1])
            var d = con[1][2]*(e**con[1][3])
            var p = Math.ceil(e/d)
            devtime.textContent = d
            peoplereq.textContent = p

        }

        if(embed.checked){
            var e = con[2][0]*(parseFloat(kloc.value)**con[2][1])
            var d = con[2][2]*(e**con[2][3])
            var p = Math.ceil(e/d)
            devtime.textContent = d
            peoplereq.textContent = p

        }
    }
        
        
    });

    // ================ COCOMO 2 ================
    // Here

    // =============== COQUALMO  ======================

    // Here





});