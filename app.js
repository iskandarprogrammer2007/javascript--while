// console.log("extra task");

//{
//   console.log("for -1");
//   {
//     let k = 5;
//     let n = 3;
//     for (let i = 0; i < n; i++) {
//       console.log(k);
//     }
//   }
// }

//  {
//     console.log("for -3");
//    let sum = 0;
//    let n = 5;
//    for (let i = n; i < 2 * n + 1; i++) {
//      sum += i ** 2;
//    }
//    console.log(sum);
//  }

// {
//   console.log("for -4");
//   let sum = 0;
//   let n = 5;
//   let k = n;
//   for (let i = 1; i < k + 1; i++) {
//     sum += i ** n;
//     n = n - 1;
//   }
//   console.log(sum);
// }
// {
//   console.log("for -5");
//   let a = 2; //prompt("enter number a");
//   let b = 6; //prompt("enter number b");
//   for (let i = a; i < b + 1; i++) {
//     a = a * i;
//     a += 1;
//     //console.log(i);
//     console.log(a);
//   }
// }
// {
//   console.log("for -6");
//   let num = 16 //+prompt("enter a number");
//   for (let i = 0; i < num + 1; i++) {
//     if (num % i === 0) {
//       console.log(i);
//     }
//   }
// }

console.log("homework");

// {
//   console.log("for-1");
//For1. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).
//   let numFirst = 15;
//   let numSecond = 1;
//   let count = 0;
//   for (let i = numSecond; i < numFirst + 1; i++) {
//     count++;
//     console.log(i);
//   }
//   console.log("count>>",count);
// }

// {
//   For2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.

//   console.log("for-2");
//   let numFirst = 15;
//   let numSecond = 1;
//   let count = 0;
//   for (let i = numFirst; i >= numSecond; i--) {
//     count++;
//     console.log(i);
//   }
//   console.log("count>>",count);
// }
// {
//   console.log("for-3");
//   for 3. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.
//   let cost = 2;
//   for (let kg = 1; kg <= 10; kg++) {
//     let price = cost * kg;
//     console.log(price);
//   }
// }
// {
//   //For4. Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.

//   console.log("for-4");

//   let cost = 2;
//   for (let kg = 1; kg < 2+0.1; kg += 0.1) {
//     let price = cost * kg.toFixed(1);
//     console.log(price);
//   }
// }
// {
//   console.log("for-5");
//   //For5. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.
//   let numFirst = 1
//   let numSecond = 10
//   let sum =0
//   for (let i = numFirst; i < numSecond+1; i++) {
//         sum+=i
//   }
//   console.log(sum);
// }
// {
//   console.log("for-6");
//   //  a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.
//   let numFirst = 1;
//   let numSecond = 5;
//   let sum = 1;
//   for (let i = numFirst; i < numSecond + 1; i++) {
//     sum *= i;
//   }
//   console.log(sum);
// }
// {
//   console.log("for-7");
//   //for -6 a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin.
//   let numFirst = 1;
//   let numSecond = 3
//   let sum =0
//   for (let i = numFirst; i < numSecond+1; i++) {
//         sum+=i**2
//   }
//   console.log(sum);
// }
// {
//   console.log("for-8");
//   //For8. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S=1+1/2+1/3+...+1/n
//   let num = 4;
//   let sum = 0;
//   for (let i = 1; i < num + 1; i++) {
//     sum += 1 / i;
//   }
//   console.log(sum);
// }
// {
//   console.log("for-9");
//   //  For9. n butun soni berilgan (n > 0). Quyidagi ko'paytmani hisoblovchi programma tuzilsin. S=1.1*1.2* 1.3*... *n
//   let num = 2;
//   let sum = 1;
//   for (let i = 1.1; i < num + 0.1; i += 0.1) {
//     sum *= i;
//     console.log(i);
//   }
//   console.log(sum);
//}
// {
//   console.log("for-10");
//   //  For10. n butun soni berilgan (n > 0). Shu sonning kvadratini quyidagi formula asosida hisoblovchi programma tuzilsin.
//   //  n^2=1+3+5+... + (2*n-1)
//   let num = 5;
//   let sum = 0;
//   for (let i = 1; i <= num * 2; i += 2) {
//     sum += i;
//     //Har bir qo'shiluvchidan keyin natijani ekranga chiqarib boring. Natijda ekranda 1 dan n gacha bo'lgan sonlar kvadrati chiqariladi.
//     console.log(sum);
//   }
//   console.log(sum);
// }
// {
//   console.log("for-11");
//   //For11. n butun soni va a haqiqiy soni berilgan (n > 0). a ning n - darajasini aniqlovchi programma tuzilsin.
//   //a^n=a*a*a...a;
//   let num =2
//   let n =5
//   console.log(num**n);
// }
// {
//   console.log("for-12");
//   //For12. n butun soni va a haqiqiy soni berilgan (n > 0).Bir sikldan foydalanib a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi programma tuzilsin.
//   let num = 2;
//   let n = 5;
//   let daraja = 1;
//   for (let i = 1; i <= n; i++) {
//     daraja *= num;
//     console.log(daraja);
//   }
// }
// {
//   console.log("for-13");
//   //For13. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib quyidagi a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi va yig'indini hisoblovchi programma tuzilsin.
//   //S = 1+a^1+a^2 + a^3 + ... a^n
//   let num = 2;
//   let n = 5;
//   let sum = 0;
//   let daraja = 1;
//   for (let i = 1; i <= n; i++) {
//     daraja *= num;
//     sum += daraja;
//     console.log(daraja);
//   }
//   console.log(sum);
// }
// {
//   //For14. n butun soni berilgan (n > 0). Bir sikldan foydalangan holda quyidagi yig'indini hisoblovchi programma tuzilsin.
//   //S = 1! + 2! + 3! + ... + n!
//   console.log("for-14");
//   let n = 5;
//   let sum = 0;

//   let factorial = 1;
//   for (let i = 1; i <= n; i++) {
//     factorial *= i;
//     sum += factorial;
//   }
//   console.log(sum);
// }
// {
//   //For15. N va K butun sonlari berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
//   //S = 1^K + 2^K + ... + N^K

//   console.log("for-15");
//   let n = 3;
//   let sum = 0;
//   let k= 2;
//   for (let i = 0; i < n+1; i++) {
//     sum+=i**k
//   }
//   console.log(sum);
// }
// {
//   //For16. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
//   //S = 1^1 + 2^2 + … + N^N

//   console.log("for-16");
//   let num = 3;
//   let sum = 0;
//   for (let i = 1; i < num + 1; i++) {
//     sum += i ** i;
//   }
//   console.log(sum);
// }
// {
//   // A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda A soni 1 marta, (A + 1) soni 2 marta chiqariladi va xokazo.

//   console.log("for-17");
//   let a = 3;
//   let b = 7;

//   for (let i = a; i <= b; i++) {
//     for (let j = a; j <= i; j++) {
//       console.log(i);
//     }
//   }
// }
// {
//   //For18. Sonning barcha bo’luvchilarini, ularning sonini va yig’indisini chiqaruvchi dastur tuzing.
//   console.log("for-18");
//   let num = 10;
//   let count = 0;
//   let sum = 0;
//   for (let i = 0; i < num + 1; i++) {
//     if (num % i === 0) {
//       console.log(`${count+1}-bo"luvchisi>>`, i);
//       count++;
//       sum += i;
//     }
//   }
//   console.log("bo`luvchilari soni >>", count);
//   console.log("bo`luvchilari yig`indisi >>", sum);
// }
// {
//   //For19. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.
//   console.log("for-19");
//   let num = 5;
//   let count = 0;
//   for (let i = 0; i < num + 1; i++) {
//     if (num % i === 0) {
//       count++;
//     }
//   }
//   if (count > 2) {
//     console.log("tub emas");
//   } else if (count === 2) {
//     console.log("tub");
//   }
// }
// {
//   //for yordamida javascriptda funksiya ishlatmasdan Sonlarni quyidagi tartibda chiqaruvchi dastur tuzing. N = 5 bo’lganda,
//   //1
//   //1 2
//   //1 2 3
//   //1 2 3 4
//   //1 2 3 4 5
//   console.log("for-20");
//   let num = 5;
//   for (let i = 1; i <= num; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(row);
//   }
// }
// {
//   //While1. A va B butun musbat sonlari berilgan (A> B). A usunlikdagi kesmada maksimal darajada B kesma joylashtirilgan. A kesmaning bo'sh qismini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.
//   console.log("while -1");
//   let length = 16
//   let  b=5
//   while (length>=b) {
//     length-=b
//   }
//   console.log("part of gap>>",length);
// }
// {
//   console.log("while -2");

//   //While2. A va B butun musbat sonlari berilgan (A > B). A usunlikdagi kesmada B kesmadan nechta joylashtirish mumkinligini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.
//   let length = 16;
//   let  b=5
//   let count=0
//   while (length>=b) {
//     length-=b
//     count++
//   }
//   console.log(count);
// }
// {
//   //While3. n butun soni berilgan (n > 0). Agar n soni 3 ning darajasi bo'lsa "3 - ning darajasi", aks xolda "3 - ning darajasi emas” degan natija chiqaruvchi programma tuzilsin. Qoldiqli bo'lish va bo'lish amallarini ishlatmang.

//   console.log("while -3");
//   let n = 80;
//   let daraja = 3;
//   while (daraja <= n) {
//     if (daraja === n) {
//       console.log("3 - ning darajasi");
//       break;
//     }
//     daraja *= 3;
//   }

//   if (daraja > n) {
//     console.log("3 - ning darajasi emas");
//   }
// }
// {
//   console.log("while -4");
//   //While4. n va m butun musbat sonlari berilgan (n > m). n sonini m soniga bo'lib butun va qoldiq qismlarini bo'lish va qoldiqni olish amallarini ishlatmasdan topuvchi programma tuzilsin.
//   let n = 24
//   let m= 6
//   let count = 0
//   while(m<=n){
//     n-=m
//     count++
//   }
//   console.log("qoldiq>>",n);
//   console.log("butun>>",count);
// }
// {
//   console.log("while -5");
//   //While5. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin.
//   let num = 2345;
//   let mun = 0;
//   while (num >=1) {
//     mun *= 10;
//     mun += Math.floor(num % 10);
//     num = Math.floor(num / 10);

//   }
//   console.log(mun);
// }
// {
//   console.log("while -6");

//   //  While6. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlari yig'indisini va raqamlari sonini chiqaruvchi programma tuzilsin.
//   let num = 2345;
//   let count = 0;
//   let sum =0
//   while (num >= 1) {
//     sum += Math.floor(num % 10);
//     count++
//     num = Math.floor(num / 10);
//   }
//   console.log("raqamlari yig`indisi>>",sum);
//   console.log("raqamlari soni >>",count);
// }
// {
//   console.log("while -7");
//   // While7. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida 2 raqami bor-yo'qligini aniqlovchi programma tuzilsin.
//   let num = 3346;
//   let chek = 0
//   while (num >= 1) {
//     chek = Math.floor(num % 10);
//     num = Math.floor(num / 10);
//     if(chek===2){
//         console.log("2 raqami mavjud");
//     }else if(chek!==2 && num%10<1){
//         console.log("2 raqami mavjud emas");
//     }
//   }
// }
// {
//   console.log("while -8");
//   //While8. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida toq raqamlar bor-yo'qligini aniqlovchi programma tuzilsin.
//   let num = 24641;
//   let chek = 0;
//   while (num >= 1) {
//     chek = Math.floor(num % 10);
//     num = Math.floor(num / 10);
//     if (chek % 2 === 0 && num % 10 < 1) {
//       console.log("toq son mavjud emas");
//     } else if (chek%2!==0) {
//       console.log("toq son mavjud");
//       break
//     }
//   }
// }
// {
//   console.log("while -9");
//   //While9. Palindromik songa tekshirish dasturini yozing. True yoki False qaytarsin.
//   //Palindromik son – boshidan va oxiridan o’qilish bir xil bo’lgan son, masalan 1345431, 45788754
//   let num = 1345432; 

//   let str = num.toString(); 
//   let i = 0;
//   let j = str.length - 1;
//   let palindromik = true;

//   while (i < j) {
//     if (str[i] !== str[j]) {
//       palindromik = false; 
//       break; 
//     }
//     i++;
//     j--;
//   }

//   if (palindromik) {
//     console.log("True"); 
//   } else {
//     console.log("False"); 
//   }
// }
// {
//   console.log("while -10");
//   //While10. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.
//   let num = 8;
//   let count = 0;
//   let i = 0;
//   while (i < num + 1) {
//     if (num % i === 0) {
//       count++;
//     }
//     i++;
//   }
//   if (count > 2) {
//     console.log("tub emas");
//   } else if (count === 2) {
//     console.log("tub");
//   }
// }
