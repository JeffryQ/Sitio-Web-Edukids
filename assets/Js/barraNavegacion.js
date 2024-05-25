let navbar = document.querySelector('#barraNavegacion');
let hamburger= document.querySelector('#hamburger');
let estado=0;
let control=0;
let val = false;
let conmuta=0;
(function (){
    let barraNavegacion = document.querySelector('#barraNavegacion');
    let main = document.querySelector('main');
    let alturaBarra = barraNavegacion.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - alturaBarra/alturaBarra;
    let isFixed = false;
    let WindowPos;
    function updatePos(){
        WindowPos = window.scrollY;
    }

    function onScrooll(){
        updatePos();
        //console.log(WindowPos, breakpoint, isFixed );

        if(WindowPos>= breakpoint && !isFixed){
            barraNavegacion.classList.remove('open');
            
            barraNavegacion.classList.add('barraNavegacion-fixed');
            main.style.cssText = "margin-top:" + alturaBarra + 'px;';
            isFixed = true;
            conmuta=1;
            control=1;
            console.log("agregando espacio", alturaBarra, "control: ", control, "estado", estado);

            if(control===1 && estado===1){//cuando se cierra el menu gira la imagen
                console.log("quitando espacio", alturaBarra, "control: ", control, "estado", estado, "cierra");
                if(conmuta===1 && estado===1){
                    navbar.classList.toggle('giro2');//añade la clase
                    navbar.classList.remove('giro1');//quita la clase
                    val=false;
                    conmuta=0;
                    estado=0;
                }
            }
        }
        else if(WindowPos <= breakpoint && isFixed){
            barraNavegacion.classList.remove('barraNavegacion-fixed');
            main.style.cssText="margin-top: "+ 0;
            isFixed = false;
            control=0;
            conmuta=0;
            console.log("quitando espacio", alturaBarra, "control: ", control, "estado", estado);

        }
    }

    (function (){
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('open');//añade y quita la clase
    
           

            //gira el boton 
            if(val===false){ 
                navbar.classList.toggle('giro1');//añade la clase
                navbar.classList.remove('giro2');//quita la clase
                val=true;
                estado=1;
            console.log("quitando espacio", alturaBarra, "control: ", control, "estado", estado, "abre");

               // console.log("valor: ", val);
            }else{
                navbar.classList.toggle('giro2');//añade la clase
                navbar.classList.remove('giro1');//quita la clase
                val=false;
                estado=0;
            console.log("quitando espacio", alturaBarra, "control: ", control, "estado", estado, "cierra");

                //console.log("valor: ", val);
            }
            
        });
    })()
    

    document.addEventListener('scroll', onScrooll);
})()