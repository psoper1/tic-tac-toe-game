let appMain = document.getElementById("app");

    let mainDiv = document.createElement("div");
    mainDiv.className = "container";
    mainDiv.id = "main";
    appMain.appendChild(mainDiv);

        let spanDiv = document.createElement("span");
        spanDiv.innerText = "Tic Tac Toe";
        spanDiv.id = "turn";
        mainDiv.appendChild(spanDiv);

        let div1 = document.createElement("div");
        div1.className = "box";
        div1.style = "border-left: 0; border-top: 0";
        div1.id = "box1";
        mainDiv.appendChild(div1);

        let div2 = document.createElement("div");
        div2.className = "box";
        div2.style = "border-top: 0";
        div2.id = "box2";
        mainDiv.appendChild(div2);

        let div3 = document.createElement("div");
        div3.className = "box";
        div3.style = "border-top: 0; border-right: 0";
        div3.id = "box3";
        mainDiv.appendChild(div3);

        let div4 = document.createElement("div");
        div4.className = "box";
        div4.style = "border-left: 0";
        div4.id = "box4";
        mainDiv.appendChild(div4);

        let div5 = document.createElement("div");
        div5.className = "box";
        // div5.style = "border-left: 0; border-top: 0";
        div5.id = "box5";
        mainDiv.appendChild(div5);

        let div6 = document.createElement("div");
        div6.className = "box";
        div6.style = "border-right: 0";
        div6.id = "box6";
        mainDiv.appendChild(div6);

        let div7 = document.createElement("div");
        div7.className = "box";
        div7.style = "border-left: 0; border-bottom: 0";
        div7.id = "box7";
        mainDiv.appendChild(div7);

        let div8 = document.createElement("div");
        div8.className = "box";
        div8.style = "border-bottom: 0";
        div8.id = "box8";
        mainDiv.appendChild(div8);

        let div9 = document.createElement("div");
        div9.className = "box";
        div9.style = "border-right: 0; border-bottom: 0";
        div9.id = "box9";
        mainDiv.appendChild(div9);

let btn = document.createElement("btn");
btn.innerText = "Reset Game";
btn.className = "btn btn-rounded";
btn.id = "reset";
appMain.appendChild(btn);
