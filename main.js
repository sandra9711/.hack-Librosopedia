
function myFun(){
    const btn=document.getElementById("bars");
    const list=document.getElementById("list-res");
    list.style.display="none"
    btn.addEventListener("click",(event)=>{
        if(list.style.display=="none"){
            list.style.display="block"
            event.preventDefault()
        }else{
            list.style.display="none"
            event.preventDefault()
        }
    })
}
function myFunction(){
    if(document.getElementById("eid").value==null || document.getElementById("eid").value==""){
        alert("This field can't be empty");
    }
    if(document.getElementById("fnm").value==null || document.getElementById("fnm").value==""){
        alert("This field can't be empty");
    }
    if(document.getElementById("snm").value==null || document.getElementById("snm").value==""){
        alert("This field can't be empty");
    }
    if(document.getElementById("pno").value==null || document.getElementById("pno").value==""){
        alert("This field can't be empty");
    }
    if(document.getElementById("psw").value==null || document.getElementById("psw").value==""){
        alert("This field can't be empty");
    }
    if(document.getElementById("cpw").value==null || document.getElementById("cpw").value==""){
        alert("This field can't be empty");
    }
    fn2();
    loc();
}
function loc(){
    location.replace("library.html")
}
function fn2(){
    var psw=document.getElementById("pws").value;
    var cpw=document.getElementById("cpw").value;
    if(psw!=cpw){
        window.alert("Invalid password")
    }else{
        document.write("<h2 style='padding:20px;'>Welcome ,You Succesfully Joined Librosopedia community.<br> <br><button style='background-color:#6d5f5f;color:white; padding:10px;' class='btn btn-secondary' onclick='loc()'>Get Started</button>")
    }
}