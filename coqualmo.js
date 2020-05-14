document.addEventListener("DOMContentLoaded", () => { 

        // var temp1 = document.getElementById("1")
        // console.log(temp1)
        // var test  = temp1.options[temp1.selectedIndex]
        // console.log(test)
        // var test2 = test.value.split(",")
        // console.log(test2)
        // var test3 = test2[0]
        // console.log(test3)

        var totalDefect = 0
        var result1 = 0
        var result2 = 0
        var result3 = 0
        var result4 = 0
        var defectA = 0
        var defectB = 0
        var defectC = 0
        var defectD = 0

        document.querySelector("#calQAF1").addEventListener("click", () => {

                var t = document.getElementById("1")
                var w = t.options[t.selectedIndex].value.split(",")
                var x = w[0]
        
                var t1 = document.getElementById("2")
                var w1 = t1.options[t1.selectedIndex].value.split(",")
                var x1 = w1[0]
        
                var t2 = document.getElementById("3")
                var w2 = t2.options[t2.selectedIndex].value.split(",")
                var x2 = w2[0]
        
                var t3 = document.getElementById("4")
                var w3 = t3.options[t3.selectedIndex].value.split(",")
                var x3 = w3[0]
        
                var t4 = document.getElementById("5")
                var w4 = t4.options[t4.selectedIndex].value.split(",")
                var x4 = w4[0]
        
                var t6 = document.getElementById("6")
                var w6 = t6.options[t6.selectedIndex].value.split(",")
                var x6 = w6[0]
        
                var t7 = document.getElementById("7")
                var w7 = t7.options[t7.selectedIndex].value.split(",")
                var x7 = w7[0]
        
                var t8 = document.getElementById("8")
                var w8 = t8.options[t8.selectedIndex].value.split(",")
                var x8 = w8[0]
        
                var t9 = document.getElementById("9")
                var w9 = t9.options[t9.selectedIndex].value.split(",")
                var x9 = w9[0]
        
                var t10 = document.getElementById("10")
                var w10 = t10.options[t10.selectedIndex].value.split(",")
                var x10 = w10[0]
        
                var t11 = document.getElementById("11")
                var w11 = t11.options[t11.selectedIndex].value.split(",")
                var x11 = w11[0]

                var t12 = document.getElementById("2")
                var w12 = t12.options[t12.selectedIndex].value.split(",")
                var x12 = w12[0]
        
                var t13 = document.getElementById("13")
                var w13 = t13.options[t13.selectedIndex].value.split(",")
                var x13 = w13[0]
        
                var t14 = document.getElementById("14")
                var w14 = t14.options[t14.selectedIndex].value.split(",")
                var x14 = w14[0]
        
                var t15 = document.getElementById("15")
                var w15 = t15.options[t15.selectedIndex].value.split(",")
                var x15 = w15[0]
        
                var t16 = document.getElementById("16")
                var w16 = t16.options[t16.selectedIndex].value.split(",")
                var x16 = w16[0]
        
                var t17 = document.getElementById("17")
                var w17 = t17.options[t17.selectedIndex].value.split(",")
                var x17 = w17[0]
        
                var t18 = document.getElementById("18")
                var w18 = t18.options[t18.selectedIndex].value.split(",")
                var x18 = w18[0]
        
                var t19 = document.getElementById("19")
                var w19 = t19.options[t19.selectedIndex].value.split(",")
                var x19 = w19[0]
        
                var t20 = document.getElementById("20")
                var w20 = t20.options[t20.selectedIndex].value.split(",")
                var x20 = w20[0]
        
                var t21 = document.getElementById("21")
                var w21 = t21.options[t21.selectedIndex].value.split(",")
                var x21 = w21[0]
        
                var t22 = document.getElementById("22")
                var w22 = t22.options[t22.selectedIndex].value.split(",")
                var x22 = w22[0]

        var result1 = (x * x1 * x2 * x3 * x4 * x6 * x7 * x8 * x9 * x10 * x11 * x12 * x13 * x14 * x15 * x16 * x17 * x18 * x19 * x20 * x21 * x22)
        
        console.log(result1)
        
        document.querySelector(".qafOfReq").textContent = result1
        })

        document.querySelector("#calQAF2").addEventListener("click", () => {

                var t = document.getElementById("1")
                var w = t.options[t.selectedIndex].value.split(",")
                var x = w[1]
        
                var t1 = document.getElementById("2")
                var w1 = t1.options[t1.selectedIndex].value.split(",")
                var x1 = w1[1]
        
                var t2 = document.getElementById("3")
                var w2 = t2.options[t2.selectedIndex].value.split(",")
                var x2 = w2[1]
        
                var t3 = document.getElementById("4")
                var w3 = t3.options[t3.selectedIndex].value.split(",")
                var x3 = w3[1]
        
                var t4 = document.getElementById("5")
                var w4 = t4.options[t4.selectedIndex].value.split(",")
                var x4 = w4[1]
        
                var t6 = document.getElementById("6")
                var w6 = t6.options[t6.selectedIndex].value.split(",")
                var x6 = w6[1]
        
                var t7 = document.getElementById("7")
                var w7 = t7.options[t7.selectedIndex].value.split(",")
                var x7 = w7[1]
        
                var t8 = document.getElementById("8")
                var w8 = t8.options[t8.selectedIndex].value.split(",")
                var x8 = w8[1]
        
                var t9 = document.getElementById("9")
                var w9 = t9.options[t9.selectedIndex].value.split(",")
                var x9 = w9[1]
        
                var t10 = document.getElementById("10")
                var w10 = t10.options[t10.selectedIndex].value.split(",")
                var x10 = w10[1]
        
                var t11 = document.getElementById("11")
                var w11 = t11.options[t11.selectedIndex].value.split(",")
                var x11 = w11[1]

                var t12 = document.getElementById("2")
                var w12 = t12.options[t12.selectedIndex].value.split(",")
                var x12 = w12[1]
        
                var t13 = document.getElementById("13")
                var w13 = t13.options[t13.selectedIndex].value.split(",")
                var x13 = w13[1]
        
                var t14 = document.getElementById("14")
                var w14 = t14.options[t14.selectedIndex].value.split(",")
                var x14 = w14[1]
        
                var t15 = document.getElementById("15")
                var w15 = t15.options[t15.selectedIndex].value.split(",")
                var x15 = w15[1]
        
                var t16 = document.getElementById("16")
                var w16 = t16.options[t16.selectedIndex].value.split(",")
                var x16 = w16[1]
        
                var t17 = document.getElementById("17")
                var w17 = t17.options[t17.selectedIndex].value.split(",")
                var x17 = w17[1]
        
                var t18 = document.getElementById("18")
                var w18 = t18.options[t18.selectedIndex].value.split(",")
                var x18 = w18[1]
        
                var t19 = document.getElementById("19")
                var w19 = t19.options[t19.selectedIndex].value.split(",")
                var x19 = w19[1]
        
                var t20 = document.getElementById("20")
                var w20 = t20.options[t20.selectedIndex].value.split(",")
                var x20 = w20[1]
        
                var t21 = document.getElementById("21")
                var w21 = t21.options[t21.selectedIndex].value.split(",")
                var x21 = w21[1]
        
                var t22 = document.getElementById("22")
                var w22 = t22.options[t22.selectedIndex].value.split(",")
                var x22 = w22[1]

        var result2 = (x * x1 * x2 * x3 * x4 * x6 * x7 * x8 * x9 * x10 * x11 * x12 * x13 * x14 * x15 * x16 * x17 * x18 * x19 * x20 * x21 * x22)
        
        console.log(result2)
        
        document.querySelector(".qafOfDes").textContent = result2


        })
        document.querySelector("#calQAF3").addEventListener("click", () => {

                var t = document.getElementById("1")
                var w = t.options[t.selectedIndex].value.split(",")
                var x = w[2]
        
                var t1 = document.getElementById("2")
                var w1 = t1.options[t1.selectedIndex].value.split(",")
                var x1 = w1[2]
        
                var t2 = document.getElementById("3")
                var w2 = t2.options[t2.selectedIndex].value.split(",")
                var x2 = w2[2]
        
                var t3 = document.getElementById("4")
                var w3 = t3.options[t3.selectedIndex].value.split(",")
                var x3 = w3[2]
        
                var t4 = document.getElementById("5")
                var w4 = t4.options[t4.selectedIndex].value.split(",")
                var x4 = w4[2]
        
                var t6 = document.getElementById("6")
                var w6 = t6.options[t6.selectedIndex].value.split(",")
                var x6 = w6[2]
        
                var t7 = document.getElementById("7")
                var w7 = t7.options[t7.selectedIndex].value.split(",")
                var x7 = w7[2]
        
                var t8 = document.getElementById("8")
                var w8 = t8.options[t8.selectedIndex].value.split(",")
                var x8 = w8[2]
        
                var t9 = document.getElementById("9")
                var w9 = t9.options[t9.selectedIndex].value.split(",")
                var x9 = w9[2]
        
                var t10 = document.getElementById("10")
                var w10 = t10.options[t10.selectedIndex].value.split(",")
                var x10 = w10[2]
        
                var t11 = document.getElementById("11")
                var w11 = t11.options[t11.selectedIndex].value.split(",")
                var x11 = w11[2]

                var t12 = document.getElementById("2")
                var w12 = t12.options[t12.selectedIndex].value.split(",")
                var x12 = w12[2]
        
                var t13 = document.getElementById("13")
                var w13 = t13.options[t13.selectedIndex].value.split(",")
                var x13 = w13[2]
        
                var t14 = document.getElementById("14")
                var w14 = t14.options[t14.selectedIndex].value.split(",")
                var x14 = w14[2]
        
                var t15 = document.getElementById("15")
                var w15 = t15.options[t15.selectedIndex].value.split(",")
                var x15 = w15[2]
        
                var t16 = document.getElementById("16")
                var w16 = t16.options[t16.selectedIndex].value.split(",")
                var x16 = w16[2]
        
                var t17 = document.getElementById("17")
                var w17 = t17.options[t17.selectedIndex].value.split(",")
                var x17 = w17[2]
        
                var t18 = document.getElementById("18")
                var w18 = t18.options[t18.selectedIndex].value.split(",")
                var x18 = w18[2]
        
                var t19 = document.getElementById("19")
                var w19 = t19.options[t19.selectedIndex].value.split(",")
                var x19 = w19[2]
        
                var t20 = document.getElementById("20")
                var w20 = t20.options[t20.selectedIndex].value.split(",")
                var x20 = w20[2]
        
                var t21 = document.getElementById("21")
                var w21 = t21.options[t21.selectedIndex].value.split(",")
                var x21 = w21[2]
        
                var t22 = document.getElementById("22")
                var w22 = t22.options[t22.selectedIndex].value.split(",")
                var x22 = w22[2]

        var result3 = (x * x1 * x2 * x3 * x4 * x6 * x7 * x8 * x9 * x10 * x11 * x12 * x13 * x14 * x15 * x16 * x17 * x18 * x19 * x20 * x21 * x22)
        
        console.log(result3)
        
        document.querySelector(".qafOfCod").textContent = result3

        })

        document.querySelector("#calQAF4").addEventListener("click", () => {

                var t = document.getElementById("1")
                var w = t.options[t.selectedIndex].value.split(",")
                var x = w[3]
        
                var t1 = document.getElementById("2")
                var w1 = t1.options[t1.selectedIndex].value.split(",")
                var x1 = w1[3]
        
                var t2 = document.getElementById("3")
                var w2 = t2.options[t2.selectedIndex].value.split(",")
                var x2 = w2[3]
        
                var t3 = document.getElementById("4")
                var w3 = t3.options[t3.selectedIndex].value.split(",")
                var x3 = w3[3]
        
                var t4 = document.getElementById("5")
                var w4 = t4.options[t4.selectedIndex].value.split(",")
                var x4 = w4[3]
        
                var t6 = document.getElementById("6")
                var w6 = t6.options[t6.selectedIndex].value.split(",")
                var x6 = w6[3]
        
                var t7 = document.getElementById("7")
                var w7 = t7.options[t7.selectedIndex].value.split(",")
                var x7 = w7[3]
        
                var t8 = document.getElementById("8")
                var w8 = t8.options[t8.selectedIndex].value.split(",")
                var x8 = w8[3]
        
                var t9 = document.getElementById("9")
                var w9 = t9.options[t9.selectedIndex].value.split(",")
                var x9 = w9[3]
        
                var t10 = document.getElementById("10")
                var w10 = t10.options[t10.selectedIndex].value.split(",")
                var x10 = w10[3]
        
                var t11 = document.getElementById("11")
                var w11 = t11.options[t11.selectedIndex].value.split(",")
                var x11 = w11[3]

                var t12 = document.getElementById("2")
                var w12 = t12.options[t12.selectedIndex].value.split(",")
                var x12 = w12[3]
        
                var t13 = document.getElementById("13")
                var w13 = t13.options[t13.selectedIndex].value.split(",")
                var x13 = w13[3]
        
                var t14 = document.getElementById("14")
                var w14 = t14.options[t14.selectedIndex].value.split(",")
                var x14 = w14[3]
        
                var t15 = document.getElementById("15")
                var w15 = t15.options[t15.selectedIndex].value.split(",")
                var x15 = w15[3]
        
                var t16 = document.getElementById("16")
                var w16 = t16.options[t16.selectedIndex].value.split(",")
                var x16 = w16[3]
        
                var t17 = document.getElementById("17")
                var w17 = t17.options[t17.selectedIndex].value.split(",")
                var x17 = w17[3]
        
                var t18 = document.getElementById("18")
                var w18 = t18.options[t18.selectedIndex].value.split(",")
                var x18 = w18[3]
        
                var t19 = document.getElementById("19")
                var w19 = t19.options[t19.selectedIndex].value.split(",")
                var x19 = w19[3]
        
                var t20 = document.getElementById("20")
                var w20 = t20.options[t20.selectedIndex].value.split(",")
                var x20 = w20[3]
        
                var t21 = document.getElementById("21")
                var w21 = t21.options[t21.selectedIndex].value.split(",")
                var x21 = w21[3]
        
                var t22 = document.getElementById("22")
                var w22 = t22.options[t22.selectedIndex].value.split(",")
                var x22 = w22[3]

        var result4 = (x * x1 * x2 * x3 * x4 * x6 * x7 * x8 * x9 * x10 * x11 * x12 * x13 * x14 * x15 * x16 * x17 * x18 * x19 * x20 * x21 * x22)
        
        console.log(result4)
        
        document.querySelector(".qafOfDoc").textContent = result4

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

        document.getElementById("computeDI4").addEventListener("click", () => {
                console.log("Get: " + document.getElementById("resDoc").textContent)
                var qaf = parseFloat(document.getElementById("resDoc").textContent)
                console.log("QAF: " + qaf)
                var a = parseFloat(document.getElementById("aOfDoc").value)
                var b = parseFloat(document.getElementById("bOfDoc").value)
                console.log("A: " + a)
                console.log("B: " + b)
                defectD = qaf * a * b
                console.log(defectD)
        
                document.querySelector(".resultDoc").textContent = defectD
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