/*Saltos
Pular partes em códigos
-----------------
return é um salto = pq vc pode usar ele no meio da função e assim pular instruções
---
break = também é uma instrução de salto ele para e pula para fora do laço 
---
continue = o continue n executa nada q vem pela frente e volta pro inicio do laço por ex
*/
 /*for(var i = 0; i <=10 ; i++){
     console.log(i)
     if(i === 5 ){
         break;
     }
 }*/
 //---------------- 
 var arr = [1,2,3,4,5,6,7,8,9,10]
 for(var i = 0; i <=arr.length ; i++){
     
     if(i === 5 ){
         continue;//basicamente o continue n executa nada q vem pela frente console.log por exemplo e volta pro inicio do for, no caso ele puxa a exibição do número 5
     }
     console.log(i)
 }
 console.log('fim')

 //