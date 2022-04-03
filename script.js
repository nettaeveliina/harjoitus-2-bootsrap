document.getElementById("submit").onclick = function (){
    
    let name = document.getElementById("name").value;

    document.getElementById("form-ok").style.display =""
    document.getElementById("form-error").style.display =""

    if (name.length > 0){
        document.getElementById("form-ok").style.display = "block";
    }else {
        document.getElementById("form-error").style.display = "block";
    }
    return false;
}