const size1 = '18px'
const mie = '60%'

function da() {
    if(document.getElementById("demo").style.fontSize == size1) 
    {
      document.getElementById("demo").style.fontSize= '14px' ;
      document.getElementById("demo").style.opacity='0.5';
      document.getElementById("caract").style.visibility= 'visible';
    }
    else {
      document.getElementById("demo").style.fontSize = size1;
      document.getElementById("demo").style.opacity='1';
      document.getElementById("caract").style.visibility= 'hidden';
    }
  }
