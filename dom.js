window.addEventListener("load", function(){
    var section = document.getElementById("s6");
    var showbox = section.querySelector(".showBox");
    var divBox = section.querySelector("div");

    var plus = section.querySelector("plus");
    var minus = section.querySelector("minus");
    var mutiple= section.querySelector("multiple");
    var diva = section.querySelector("diva");

    var total = 0;
    var isCalculateStatus = false;

    divBox.onclick = function(e){
        var eventValue = e.target.value;
        if(typeof eventValue == "undefined"){
            return;
        }

        if(showbox.value == 0){
            showbox.value = "";
        }

        switch(eventValue){
            case "+":
                isCalculateStatus = true;
                break;
            default:
                if(isCalculateStatus){
                    showbox.value = "";
                    isCalculateStatus = false;
                }
                else
                    showbox.value += eventValue;
        }

    }

    //for(var i = 0; i < btns.length; i++){
    //    btns[i].onclick = function(e){
    //       console.log(e.target.value);
    //       showbox.value += e.target.value;
    //    }
    //}
})
window.addEventListener("load",function(){
    var section = document.getElementById("s5");
    var showBox = section.querySelector(".showBox");
    var btns = [];
    btns = section.querySelectorAll(".num");
    var box = section.querySelector(".div");

    //box.addEventListener("click", ) 

    for(var i = 0; i < btns.length; i++){
        btns[i].onclick = (function(){
            return function(e){
                console.log(e.target.value);
                showBox.value += e.target.value;
            };
        })(i);
    }
    //btn1.onclick = function(){
    //    showBox.value += "1";
    //}
    //btn2.onclick = function(){
    //    showBox.value += "2";
    //}
    //btn3.onclick = function(){
    //    showBox.value += "3";
    //}
    //btn4.onclick = function(){
    //    showBox.value += "4";
    //}
    //btn5.onclick = function(){
    //    showBox.value += "5";
    //}
});

window.addEventListener("load",function(){
    var section = document.getElementById("s4");
    var showBox = section.querySelector(".showBox");
    var btn1 = section.querySelector(".num1");
    var btn2 = section.querySelector(".num2");
    var btn3 = section.querySelector(".num3");
    var btn4 = section.querySelector(".num4");
    var btn5 = section.querySelector(".num5");
    var btn6 = section.querySelector(".num6");
    var btn7 = section.querySelector(".num7");
    var btn8 = section.querySelector(".num8");
    var btn9 = section.querySelector(".num9");
    var btn0 = section.querySelector(".num0");
    var plus = section.querySelector(".plus");
    var minus = section.querySelector(".minus");
    var multyile = section.querySelector(".multiple");
    var divade = section.querySelector(".diva");
    var calculateAfterStaus = false;

    var checkZero = function(){
        if(showBox.value == 0 || calculateAfterStaus){
            showBox.value ="";
            calculateAfterStaus = false;
        }
    }

    btn1.onclick = function(){
        checkZero();
        showBox.value += "1";
    }
    btn2.onclick = function(){
        checkZero();
        showBox.value += "2";
    }
    btn3.onclick = function(){
        checkZero();
        showBox.value += "3";
    }
    btn4.onclick = function(){
        checkZero();
        showBox.value += "4";
    }
    btn5.onclick = function(){
        checkZero();
        showBox.value += "5";
    }
    btn6.onclick = function(){
        checkZero();
        showBox.value += "6";
    }
    btn7.onclick = function(){
        checkZero();
        showBox.value += "7";
    }
    btn8.onclick = function(){
        checkZero();
        showBox.value += "8";
    }
    btn9.onclick = function(){
        checkZero();
        showBox.value += "9";
    }
    btn0.onclick = function(){
        checkZero();
        showBox.value += "0";
    }

    var total = 0;
    var isFirstValue = true;
    plus.onclick = function(){
        if(isFirstValue){
            isFirstValue = false;
        }
        total += parseInt(showBox.value);
        showBox.value = total; 
        calculateAfterStaus = true;
    }

    minus.onclick = function(){
        if(isFirstValue){
            total = parseInt(showBox.value);
            isFirstValue = false;
        }
        else{
            total -= parseInt(showBox.value);
            
            if(total < 0){
                var temp = total.toString(); 

                temp = function(){
                }
            }
        }
        calculateAfterStaus = true;
    }
});

//window.addEventListener("load",function(){
//    var section = document.getElementById("s3");
//    var x = section.querySelector(".x-input");
//    var y = section.querySelector(".y-input");
//    var plusBtn = section.querySelector(".plus");
//    var result = section.querySelector(".result")
//
//    plusBtn.onclick = function(){
//        result.innerHTML= "결과 값:" + (x.value + y.value);
//    } 
//});
//
//window.addEventListener("load",function(){
//       var section = document.querySelector("#s2");
//       var checkBtn = section.querySelector(".checkButton");
//       var show1 = section.querySelector(".show");
//
//       checkBtn.onclick = function(){
//           show1.value = "안녕하세요";
//       }
//});
//
//window.addEventListener("load",function(){
//       var section = document.getElementById("s1");
//       var checkBtn = section.getElementsByClassName("checkButton")[0];
//       var show1 = section.getElementsByClassName("show")[0];
//
//       checkBtn.onclick = function(){
//           show1.value = "안녕하세요";
//       }
//
//});



//function f1(){
//    var section = document.querySelector("#s1");
//    var temp = section.querySelector(".div");
//    temp.onmouseover = f1;
//    alert("f1");
//}

//window.addEventListener("load",f1);


//for(var i = 0; i < 3; i++){
//    aaa[i] = (function(x){
//                return function(){
//                    console.log(x);
//                }
//            })(i);
//}

var aaa = [];

for(var i = 0; i < 3; i++){
    aaa[i] = (function(x){
        return function(){
            console.log(x);
        }
    })(i);
}

//(aaa[0]());
//(aaa[1]());
//(aaa[2]());

//console.log(aaa[1]());
//console.log(aaa[2]());