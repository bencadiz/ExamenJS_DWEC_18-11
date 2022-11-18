//var aaaa=400;
//if(aaaa%400==0){
//   // alert("Hola");
//
//}

function isYearLeap(anyo1, anyo2){
    
    var miArrayAnyosBis= [];

    miRegExpAnyo = /^\d{4}.?\d*$/

    var mianyo1=anyo1;
    var mianyo2=anyo2;

    if(miRegExpAnyo.test(mianyo1) && miRegExpAnyo.test(mianyo2)){

        if(mianyo1>=2001 && mianyo1<=2500 && mianyo2>=2001 && mianyo2<=2500){

            // compruebo si tiene decimales
            mianyo1=Math.floor(mianyo1);
            mianyo2=Math.floor(mianyo2);

            for (let index = mianyo1; index <= mianyo2; index++) {
                //Compruebo si es bisiesto, y si lo es lo anyado al array
                
                if (index%4==0){
                    miArrayAnyosBis.push(index);
                    console.log("Año bisiesto " + index);
                }
            }
            alert("solucion de anyos bisisestos en el rango dado de " + mianyo1 + " a " + mianyo2 + " - " + miArrayAnyosBis);
        }
        else{
            //anyo no en el rango
            alert("Anyo no esta dentro del rango permitido [2001 a 2500], revise, por favor");
        }
    }
    else{
        //anyo invalido
        alert("Anyo invalido, revise, por favor");
    }
    
    
}

isYearLeap(2001.2, 2700);
//alert(miArrayAnyosBis.toString());
isYearLeap(2001.2, 2200);
