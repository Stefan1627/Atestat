let x;
x=0
function da(x) {
    if(x==0) {
        document.getElementById("demo").innerHTML= "da";
        x=1;
        document.getElementById("da").innerHTML = "";
    }
    else{
        document.getElementById("demo").innerHTML = "nu";
        x=0;
    }
  }
