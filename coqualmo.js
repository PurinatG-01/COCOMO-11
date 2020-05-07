document.addEventListener("DOMContentLoaded", () => { 

        document.getElementById("btnReset").addEventListener("click", () => {
                for(i=1;i<16;i++){
                var dropDown = document.getElementById(i);
                console.log(dropDown)
                dropDown.selectedIndex = 0;  
                }
                
        })

        
        document.querySelector("#calQAF1").addEventListener("click", () => {

        var t = document.getElementById("1")
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

        var result = (w * w1 * w2 * w3 * w4 * w6 * w7 * w8 * w9 * w10 * w11 * w12 * w13 * w14 * w15)
        
        console.log(result)
        
        document.querySelector(".qafOfReq").textContent = result


        
})
document.querySelector("#calQAF2").addEventListener("click", () => {

        var t = document.getElementById("1")
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

        var result = (w * w1 * w2 * w3 * w4 * w6 * w7 * w8 * w9 * w10 * w11 * w12 * w13 * w14 * w15)
        
        console.log(result)
        
        document.querySelector(".qafOfDes").textContent = result

        var options = document.querySelectorAll('.option');
        for (var i = 0;i < 16; i++) {
        options[i].selected = options[i].defaultSelected;
}
})
document.querySelector("#calQAF3").addEventListener("click", () => {

        var t = document.getElementById("1")
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

        var result = (w * w1 * w2 * w3 * w4 * w6 * w7 * w8 * w9 * w10 * w11 * w12 * w13 * w14 * w15)
        
        console.log(result)
        
        document.querySelector(".qafOfCod").textContent = result

        var options = document.querySelectorAll('.option');
        for (var i = 0;i < 16; i++) {
        options[i].selected = options[i].defaultSelected;
}
})

})