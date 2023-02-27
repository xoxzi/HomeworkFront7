//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.


//function arg () {
 //   const a = prompt("Write nummer")
 //   const b= prompt("write zweite nummer")
 //   if (a<b) {
 //      console.log(a);
 //   } else (b<a)
 //   console.log(b);
//}




//Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

//function min() {
 //   const a = prompt("Write nummer")
 //   const b= prompt("write zweite nummer")
 //   if (a%2==0) {
 //       console.log(a);
 //   }
//}



//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

//function power(a, b =2) {
 //       let result = a**b
    
  //     return result
  //   }



  //Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

  //function sum(n) {
   // return sum(range(1, n+1))
   // console.log(sum);
   //  }


   //Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

   function sumEvenAndOdd(n, m) {
    let sumEven = 0;
    let sumOdd = 0; 
     
  for (let i = n; i <= m; i++) {
    if (i % 2 === 0) {
      sumEven += i; 
    } else {
      sumOdd += i; 
    }
  }

  console.log(`Сумма четных чисел от ${n} до ${m}: ${sumEven}`);
  console.log(`Сумма нечетных чисел от ${n} до ${m}: ${sumOdd}`);
}
