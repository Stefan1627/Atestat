function da(){
    let x=document.body.classList.contains("open1");
    let y=document.body.classList.contains("open2");
    let z=document.body.classList.contains("open3");
    if(x==true){
        document.body.classList.remove("open1");}
    if(y==true){
        document.body.classList.remove("open2");}
    if(z==true){
        document.body.classList.remove("open3");}
}