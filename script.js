


function insert(num){//introduz o numero no display
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num
}

function clean(){//limpa ao clicar no "C"
    document.getElementById('resultado').innerHTML = "";
}
function back(){ //faz o backspace
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){ //faz funcionar o display e a calculadora e outros...:) 
    var resultado = document.getElementById('resultado').innerHTML;
   
    if(resultado)
    {

        document.getElementById('resultado').innerHTML = eval(resultado);//aqui se faz a operação!
        raio(); 
    }

    
    

    function raio(){//aqui jaz o raio 
    let raio = document.getElementById('raio');
    raio.style.opacity = 1;
    
    let som =  new Audio("thunder.mp3");
    som.play();
    
    setTimeout(() => {
        raio.style.opacity = 0;
    }, 600);
   
    
    if(document.getElementById('resultado').innerHTML == 4){
        easteregg1();

    }else if(document.getElementById('resultado').innerHTML == 2+2){
        easteregg1();
    }

    if(document.getElementById('resultado').innerHTML == 69){
        easteregg2();

    }elseif(document.getElementById('resultado').innerHTML == 34 + 35)
    
}


function easteregg1(){
        let somFour =  new Audio("four-fantastic.mp3");
        somFour.play();
        window.open("https://urbankicksnstyle.my.canva.site/1", "_blank"); 

}



function easteregg2(){
        let somSexy =  new Audio("sexy.mp3");
        somSexy.play();
        window.open("https://urbankicksnstyle.my.canva.site/dahffetzgkg", "_blank");      
        
}
}
