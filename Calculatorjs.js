 
 // for taking input name
 
 var fname;
 var b =document.getElementById("inputName");



 function onLoad() {
    var fname = String(prompt("Enter your Name"));

    if(fname!= null){
        document.getElementById("inputName").innerHTML = "Hi, "+fname+" Calculate Something";
    }
    else{
        return "Idiot";
    }

    b.style.cssText = "color: #fff; display: flex; justify-content: center; padding-top: 7px; background-color: transparent;"


}

//end

// document.getElementsByClassName("btn").addEventListener("click", inputData);

// function inputData(){
//     document.getElementById("cal").vaule = document.getElementsByClassName("btn").vaule;
// }



//  dark/light mode

var modeing = document.getElementById("modeId");
    modeing.style.cssText = "text-align: center;"



function mode(){
    var toggleb = document.getElementById("modeId");
    var bodyElt = document.querySelector("body");
    bodyElt.classList.toggle("dark");


    if(bodyElt.classList.toggle("dark")){
        toggleb.innerHTML ="mode";
        // bodyElt.style.backgroundColor = "#fff";
        // bodyElt.style.color = "#000";
        bodyElt.style.cssText = "background-color: #000; color: #fff; height: 760px;"

        
    }
    else{
        toggleb.innerHTML = "Light Mode";
        bodyElt.style.cssText = "background-color: #fff; color: #000; height: 760px;"
    }

}


// function mode(){
//     let toggleBtn = document.getElementById("modeId");
//     let bodyElement = document.querySelector("body")
//         bodyElement.classList.toggle("dark");

//         if(bodyElement.classList.contains("dark")){
//             toggleBtn.innerText = "❤️"
//             bodyElement.style.backgroundColor = "#fff"
//             bodyElement.style.color = "#000"

//             bodyElement.style.innerText = "I Love You"
            
//         }
//         else {
//             toggleBtn.innerText = "⚫"
//             bodyElement.style.backgroundColor = "#000"
//             bodyElement.style.color = "#fff"
//         }
// }


