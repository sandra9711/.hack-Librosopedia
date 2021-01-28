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
