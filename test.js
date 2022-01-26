window.addEventListener("load", function(){
    var section = document.querySelector("#s15");
    var borderInput = section.querySelector(".border-input");
    var borderStyle = section.querySelector(".border-style");
    var radiusInput = section.querySelector(".radius-input");
    var colorInput = section.querySelector(".color-input");
    var item = section.querySelector(".item");

    borderStyle.oninput = function(){
        var txt = section.querySelector(".border-input-style");
        txt.innerText = borderStyle.value;
        item.style.borderStyle = borderStyle.value;
    }

    borderInput.oninput = function(){
        inputText(".border-input-pixel", borderInput, section);
        item.style.borderWidth = borderInput.value + "px";
    }

    radiusInput.oninput = function(){
        inputText(".radius-input-pixel", radiusInput, section);
        item.style.borderRadius= radiusInput.value + "px";
    }

    colorInput.oninput = function(){
        inputText(".color-input-text", colorInput, section);
        item.style.borderColor = colorInput.value;
    }

});

var inputText = function(className, input, s){
    var txt = s.querySelector(className);
    txt.innerText = input.value; 
}

window.addEventListener("load", function(){
    var section = document.querySelector("#s14");
    var box = section.querySelector(".box");
    var txtInfo = section.querySelector(".txtInfo");
    var divide = section.querySelector(".divide");

    //box.addEventListener("click",function(e){
    //    e.stopPropagation();
    //    if(e.target.className == "divide")
    //        console.log("위div");

    //}, true);

    divide.onclick = function(e){
        e.stopPropagation(); 
        console.log(e.target.value);
    }

    box.onclick = function(e){
        if(e.target.nodeName != "BUTTON")
            return;
        if(txtInfo.value == "0")
            txtInfo.value = "";

        if(e.target.className == "divide")
            console.log("위div");

        txtInfo.value += e.target.value;

    }
});

window.addEventListener("load", function(){
    var section = document.getElementById("s13");
    var txtInfo = section.querySelector(".txtInfo");
    var buffer = "";
    var isOperationState = false;
    var isResult = false;

    section.onclick = function(e){
        e.preventDefault();

        if(e.target.nodeName == "DIV")
            return;

        if(txtInfo.value == "0")
            txtInfo.value = "";

        var operation = e.target.value;

        if(operation == "+" || 
            operation == "-" ||
            operation == "*" ||
            operation == "/" ){
            e.stopPropagation();
            if(isResult){
                buffer += txtInfo.value;
                txtInfo.value = eval(buffer);
                isResult = false;
            }

            isOperationState = true;
            buffer = txtInfo.value + operation;
            return;
        }

        if(isOperationState){
            txtInfo.value="";
            isResult = true;
            isOperationState = false;
        }

        txtInfo.value += e.target.value;

        //console.log("노드네임 " + e.target.nodeName);
        //console.log("노드벨류 " + e.target.nodeValue)
        //if(txtInfo.value == "0")
        //    txtInfo.value = "";

        //var eventValue = e.target.value;
        //var value = txtInfo.value;
        //if(value == "0")
        //    value = eventValue;
        //else
        //    value += eventValue;

        //console.log(value);
    }
})

window.addEventListener("load", function(){
    var section = document.querySelector("#s12");
    var txtInfo = section.querySelector(".txtInfo");

    section.onclick = function(e){
        var value = e.target.value;
        if(value != undefined)
            txtInfo.value += value;
    }
});
window.addEventListener("load", function(){
    var funcArr = [];

    for(var i = 0; i < 3; i++){
        funcArr[i] = (function(x){
            return function(){
                console.log(x);
            }
        })(i)
    }

    for(var i = 0; i < 3; i++){
        funcArr[i] = function(){
            console.log(cutColoser(i));
        }
    }

    function cutColoser(x){
        return x;
    }

    funcArr[0]();
    funcArr[1]();
    funcArr[2]();
});



window.addEventListener("load", function(){
                                var section = document.querySelector("#s11");
                                var txtInfo = section.querySelector(".txtInfo");
                                var btn1 = section.querySelector(".btn1");
                                var btn2 = section.querySelector(".btn2");
                                var btn3 = section.querySelector(".btn3");
                                var btn4 = section.querySelector(".btn4");
                                var btn5 = section.querySelector(".btn5");

                                btn1.onclick = function(){
                                    txtInfo.value = parseInt(txtInfo.value) + 1;
                                }
                                
                                btn2.onclick = function(){
                                    txtInfo.value = parseInt(txtInfo.value) + 2;
                                }
});
window.addEventListener("load", function(){
                                var section = document.getElementById("s10");
                                var xInput = section.querySelector(".x-input"); 
                                var yInput = section.querySelector(".y-input"); 
                                var btn = section.querySelector(".btn");

                                btn.onclick = function(){
                                    console.log(parseInt(xInput.value) + parseInt(yInput.value));
                                }

});
window.addEventListener("load",function(){
                            function func(){
                                var section = document.querySelector("#s9");
                                var txtBox = section.querySelector(".txtBox");

                                 section.onclick = function(e){
                                     var value = e.target.value;
                                     if(!isNaN(value) && value != null && value != undefined)
                                        txtBox.value += parseInt(value);
                                 };

                            }
                            func();
                        });

window.addEventListener("load",function(){
                            function func(){
                                var section = document.querySelector("#s8"); 
                                var txtBox = section.querySelector("div > input");
                                var btn = section.querySelector("div > button");
                                //console.log(txtBox);
                                //console.log(btn);
                                btn.onclick = function(){
                                    txtBox.value = 10;
                               }
                            }
                            func();
                        });