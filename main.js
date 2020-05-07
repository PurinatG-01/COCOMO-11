document.addEventListener("DOMContentLoaded", () => {
    //do work
    var con = [[2.4, 1.05, 2.5, 0.38],
    [3.0, 1.12, 2.5, 0.35],
    [3.6, 1.20, 2.5, 0.32]];


    var cocomo = document.querySelector("#cocomo")
    var cocomo2 = document.querySelector("#cocom2")
    var coqualmo = document.querySelector("#coqualmo")

    var cocomo_body = document.querySelector(".cocomo-main")
    var cocomo2_body = document.querySelector(".cocomo2-main")
    var coqualmo_body = document.querySelector(".coqualmo-main")





    var organic = document.querySelector("#organic")
    var semi = document.querySelector("#semi")
    var embed = document.querySelector("#embed")
    // ================ Basic Cocomo ================
    document.querySelector("#cocomo-submit").addEventListener("click", () => {



        var kloc = document.querySelector("#KLOC")
        var devtime = document.querySelector(".dev-time")
        var peoplereq = document.querySelector(".people-req")

        if (kloc.value != "") {
            if (organic.checked) {
                var e = con[0][0] * (parseFloat(kloc.value) ** con[0][1])
                var d = con[0][2] * (e ** con[0][3])
                var p = Math.ceil(e / d)
                devtime.textContent = d
                peoplereq.textContent = p

            }

            if (semi.checked) {
                var e = con[1][0] * (parseFloat(kloc.value) ** con[1][1])
                var d = con[1][2] * (e ** con[1][3])
                var p = Math.ceil(e / d)
                devtime.textContent = d
                peoplereq.textContent = p

            }

            if (embed.checked) {
                var e = con[2][0] * (parseFloat(kloc.value) ** con[2][1])
                var d = con[2][2] * (e ** con[2][3])
                var p = Math.ceil(e / d)
                devtime.textContent = d
                peoplereq.textContent = p

            }
        }


    });

    // ================ COCOMO 2 ================
    // Here
    document.querySelector("#showDetail").addEventListener("click", () => {

        x = document.getElementById("detail")
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    })

 

    document.querySelector("#calEAF").addEventListener("click", () => {
        var t = document.getElementById("cheked")
        var w = t.options[t.selectedIndex].value
        

        var t1 = document.getElementById("2")
        var w1 = t1.options[t1.selectedIndex].value
      

        var t2 = document.getElementById("3")
        var w2 = t2.options[t2.selectedIndex].value

        var t3 = document.getElementById("4")
        var w3 = t3.options[t3.selectedIndex].value

        var t4 = document.getElementById("5")
        var w4 = t4.options[t4.selectedIndex].value

        var t6 = document.getElementById("6")
        var w6 = t6.options[t6.selectedIndex].value

        var t7 = document.getElementById("7")
        var w7 = t7.options[t7.selectedIndex].value

        var t8 = document.getElementById("8")
        var w8 = t8.options[t8.selectedIndex].value

        var t9 = document.getElementById("9")
        var w9 = t9.options[t9.selectedIndex].value

        var t10 = document.getElementById("10")
        var w10 = t10.options[t10.selectedIndex].value

        var t11 = document.getElementById("11")
        var w11 = t11.options[t11.selectedIndex].value

        var t12 = document.getElementById("2")
        var w12 = t12.options[t12.selectedIndex].value

        var t13 = document.getElementById("13")
        var w13 = t13.options[t13.selectedIndex].value

        var t14 = document.getElementById("14")
        var w14 = t14.options[t14.selectedIndex].value

        var t15 = document.getElementById("15")
        var w15 = t15.options[t15.selectedIndex].value

        var mult = (w * w1 * w2 * w3 * w4 * w6 * w7 * w8 * w9 * w10 * w11 * w12 * w13 * w14 * w15)
      
        document.getElementById("haha").value = mult

    })
    document.querySelector("#finalCal").addEventListener("click", () => {
        // if(document.getElementById("LR").value==NULL){
        //     alert("first enter the labor rate")
        // }
        var a = document.getElementById("class")
        var z = Number(a.options[a.selectedIndex].value)
        console.log(z)
        if (z === 1) {
            var fact = document.getElementById("haha").value
            var bb = document.getElementById("kloc").value
            var Effort = 2.4 * ((bb) ^ (1.05)) * fact

            document.getElementById("effort").value = Effort
            var time = 2.5 * ((Effort) ^ (0.38))
            document.getElementById("time").value = time
        }

        if (z === 2) {
            var fact = document.getElementById("haha").value
            var bb = document.getElementById("kloc").value
            var Effort = 3.0 * ((bb) ^ (1.12)) * fact
            document.getElementById("effort").value = Effort
            var time = 2.5 * ((Effort) ^ (0.35))
            document.getElementById("time").value = time
        }

        if (z === 3) {
            var fact = document.getElementById("haha").value
            var bb = document.getElementById("kloc").value
            var Effort = 3.6 * ((bb) ^ (1.20)) * fact
            document.getElementById("effort").value = Effort
            var time = 2.5 * ((Effort) ^ (0.32))
            document.getElementById("time").value = time
        }
        var temp_cost = document.getElementById("LR").value
        var temp_ef = document.getElementById("effort").value
        var cost = (temp_cost) * (temp_ef)
        document.getElementById("cost").value = cost
    })




    // =============== COQUALMO  ======================

    // Here





});