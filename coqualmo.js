document.addEventListener("DOMContentLoaded", () => { 

        var totalDefect = 0
        var result1 = 0
        var result2 = 0
        var result3 = 0
        var defectA = 0
        var defectB = 0
        var defectC = 0

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
        
                var t16 = document.getElementById("16")
                var w16 = t16.options[t16.selectedIndex].value
        
                var t17 = document.getElementById("17")
                var w17 = t17.options[t17.selectedIndex].value
        
                var t18 = document.getElementById("18")
                var w18 = t18.options[t18.selectedIndex].value
        
                var t19 = document.getElementById("19")
                var w19 = t19.options[t19.selectedIndex].value
        
                var t20 = document.getElementById("20")
                var w20 = t20.options[t20.selectedIndex].value
        
                var t21 = document.getElementById("21")
                var w21 = t21.options[t21.selectedIndex].value
        
                var t22 = document.getElementById("22")
                var w22 = t22.options[t22.selectedIndex].value

        var result1 = (w * w1 * w2 * w3 * w4 * w6 * w7 * w8 * w9 * w10 * w11 * w12 * w13 * w14 * w15 * w16 * w17 * w18 * w19 * w20 * w21 * w22)
        
        console.log(result1)
        
        document.querySelector(".qafOfReq").textContent = result1

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
        
                var t16 = document.getElementById("16")
                var w16 = t16.options[t16.selectedIndex].value
        
                var t17 = document.getElementById("17")
                var w17 = t17.options[t17.selectedIndex].value
        
                var t18 = document.getElementById("18")
                var w18 = t18.options[t18.selectedIndex].value
        
                var t19 = document.getElementById("19")
                var w19 = t19.options[t19.selectedIndex].value
        
                var t20 = document.getElementById("20")
                var w20 = t20.options[t20.selectedIndex].value
        
                var t21 = document.getElementById("21")
                var w21 = t21.options[t21.selectedIndex].value
        
                var t22 = document.getElementById("22")
                var w22 = t22.options[t22.selectedIndex].value

        var result2 = (w * w1 * w2 * w3 * w4 * w6 * w7 * w8 * w9 * w10 * w11 * w12 * w13 * w14 * w15 * w16 * w17 * w18 * w19 * w20 * w21 * w22)
        
        console.log(result2)
        
        document.querySelector(".qafOfDes").textContent = result2


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

        var t16 = document.getElementById("16")
        var w16 = t16.options[t16.selectedIndex].value

        var t17 = document.getElementById("17")
        var w17 = t17.options[t17.selectedIndex].value

        var t18 = document.getElementById("18")
        var w18 = t18.options[t18.selectedIndex].value

        var t19 = document.getElementById("19")
        var w19 = t19.options[t19.selectedIndex].value

        var t20 = document.getElementById("20")
        var w20 = t20.options[t20.selectedIndex].value

        var t21 = document.getElementById("21")
        var w21 = t21.options[t21.selectedIndex].value

        var t22 = document.getElementById("22")
        var w22 = t22.options[t22.selectedIndex].value

        var result3 = (w * w1 * w2 * w3 * w4 * w6 * w7 * w8 * w9 * w10 * w11 * w12 * w13 * w14 * w15 * w16 * w17 * w18 * w19 * w20 * w21 * w22)
        
        console.log(result3)
        
        document.querySelector(".qafOfCod").textContent = result3

        })

        document.getElementById("computeDI1").addEventListener("click", () => {
                console.log("Get: " + document.getElementById("resReq").textContent)
                var qaf = parseFloat(document.getElementById("resReq").textContent)
                console.log("QAF: " + qaf)
                var a = parseFloat(document.getElementById("aOfReq").value)
                var b = parseFloat(document.getElementById("bOfReq").value)
                console.log("A: " + a)
                console.log("B: " + b)
                defectA = qaf * a * b
                console.log(defectA)

                document.querySelector(".resultReq").textContent = defectA
        
        })
        document.getElementById("computeDI2").addEventListener("click", () => {
                console.log("Get: " + document.getElementById("resDes").textContent)
                var qaf = parseFloat(document.getElementById("resDes").textContent)
                console.log("QAF: " + qaf)
                var a = parseFloat(document.getElementById("aOfDes").value)
                var b = parseFloat(document.getElementById("bOfDes").value)
                console.log("A: " + a)
                console.log("B: " + b)
                defectB = qaf * a * b
                console.log(defectB)

                document.querySelector(".resultDes").textContent = defectB
        
        })
        document.getElementById("computeDI3").addEventListener("click", () => {
                console.log("Get: " + document.getElementById("resCod").textContent)
                var qaf = parseFloat(document.getElementById("resCod").textContent)
                console.log("QAF: " + qaf)
                var a = parseFloat(document.getElementById("aOfCod").value)
                var b = parseFloat(document.getElementById("bOfCod").value)
                console.log("A: " + a)
                console.log("B: " + b)
                defectC = qaf * a * b
                console.log(defectC)
        
                document.querySelector(".resultCod").textContent = defectC
        })

        document.getElementById("computeTotalDI").addEventListener("click", () => {
                totalDefect = defectA + defectB + defectC
                console.log("Total Defect: "+ totalDefect)

                document.querySelector(".totalDefect").textContent = totalDefect
        })

        document.getElementById("btnReset").addEventListener("click", () => {
                for(i=1;i<16;i++){
                var dropDown = document.getElementById(i);
                console.log(dropDown)
                dropDown.selectedIndex = 0;  
                }
                
        })
})