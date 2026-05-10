
AOS.init();

function aviso(x){
    if(x == "dev"){
        alert("Em desenvolvimento")
    }
    else{
        alert("erro")
    }
}

function irPara(secao) {
      document.getElementById(secao).scrollIntoView({
        behavior: "smooth"
      });
    }