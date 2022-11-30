
let arr1 = [1, 25, 244, 44, 55, 22, 64]


function findAverage() {
   let sum = 0;
   for (let i = 0; i < arr1.length; i++) {
      sum += arr1[i]
   }
   return sum / arr1.length;
}



function customPush(arr, num) {

   let newArr = [];


   // Custom shallow copying
   // for (let i = 0; i < arr.length; i++) {
   //    newArr[i] = arr[i]
   // }


   // shallow copying with map
   newArr = arr.map(x => x)

   newArr[newArr.length] = num

   return newArr

}

function findCountsOfLetter(str, letter = 'n') {
   let count = 0
   for (let i = 0; i < str.length; i++) {
      if (str[i] == letter.toLowerCase() || str[i] == letter.toUpperCase()) {
         count++
      }
   }
   return count
}

function hasOneUpperCaseOneLowerCase(str) {
   let hasUpperCase = false
   let hasLowerCase = false

   for (let i = 0; i < str.length; i++) {
      const element = str[i];
      // checking is it a letter or not
      if (element.toLowerCase() !== element.toUpperCase()) {
         // if it's a letter whether it should be lowercase or uppercase
         if (element.toLowerCase() == element) {
            hasLowerCase = true
         } else {
            hasUpperCase = true
         }

      }
   }
   if (hasLowerCase && hasUpperCase) {
      return true
   } else {
      return false
   }
}





console.log("Average of  arr ", arr1 + " = " + findAverage());
console.log("Afer pushing 99 to arr" + arr1 + " newArr = " + customPush(arr1, 99))
console.log("Counts of n letter in 'Salam necesen' " + findCountsOfLetter("Salam Necesen", 'n'))
console.log("hasOneUpperCaseOneLowerCase in  'txt1' ? " + hasOneUpperCaseOneLowerCase('tXt1'))