async function show() {
    
    if (document.getElementById("button1").innerText == "Hide menu") {
        document.getElementById("button1").innerText = "Show menu";
        document.getElementsByClassName("phone-navbar1")[0].style.display = "none";
    }
    else if(document.getElementById("button1").innerText == "Show menu") {
        document.getElementById("button1").innerText = "Hide menu";
        document.getElementsByClassName("phone-navbar1")[0].style.display = "block";
    }
}