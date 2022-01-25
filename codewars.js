// function toCamelCase(str) {
//   let tmp = str.replace(/[^a-zA-Z0-9]/g, ' ').split(' ');
//   let result = '';
//   for (let i = 0; i < tmp.length; i++) {
//     if (i === 0) {
//       result += tmp[0];
//     } else {
//       result += tmp[i][0].toUpperCase() + tmp[i].slice(1);
//     }
//   }
//   return result;
// }

// const str = 'the_stealth_warrior';
// // const str2 = 'The-Stealth-Warrior';
// console.log(toCamelCase(str));
// function digital_root(n) {
//   // ...
//   let sum = 0;
//   let digits = n.toString().split('').map(Number);
//   for (let i = 0; i < digits.length; i++) {
//     sum += digits[i];
//   }
//   if (sum < 10) {
//     return sum;
//   } else {
//     return digital_root(sum);
//   }
// }

// function digital_root(n) {
//   return n % 9;
// }

// console.log(digital_root(456));

// function sumDigPow(a, b) {
//   // Your code here
//   const result = [];
//   for (let i = a; i <= b; i++) {
//     let digits = i.toString().split('').map(Number);
//     let tmp = 0;
//     for (let j = 1; j <= digits.length; j++) {
//       tmp = tmp + digits[j - 1] ** j;
//       if (tmp === i) {
//         result.push(i);
//       }
//     }
//   }
//   return result;
// }

// console.log(sumDigPow(90, 100)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

// function findMissingLetter(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i + 1].charCodeAt(0) - array[i].charCodeAt(0) > 1) {
//       return String.fromCharCode(array[i].charCodeAt(0) + 1);
//     }
//   }
// }

// console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));

// function wave(str) {
//   // Code here
//   const result = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== ' ') {
//       result.push(
//         str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i + 1)
//       );
//     }
//   }
//   return result;
// }

// console.log(wave('hello')); //["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// function cakes(recipe, available) {
//   // TODO: insert code
//   const result = [];
//   const ingredients = Object.keys(recipe);
//   ingredients.forEach(ingredient => {
//     if (!available[ingredient]) {
//       result.push(0);
//     } else {
//       result.push(Math.floor(available[ingredient] / recipe[ingredient]));
//     }
//   });
//   return Math.min(...result);
// }

// const recipe = { flour: 500, sugar: 200, eggs: 1 };
// const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
// console.log(cakes(recipe, available));

// function deleteNth(arr, n) {
//   // ...

//   const map = {};
//   return arr.filter(element => {
//     if (map[element]) {
//       console.log('element', element);
//       map[element] += 1;
//     } else {
//       map[element] = 1;
//     }
//     console.log(map);
//     return map[element] <= n;
//   });
// }

// console.log(deleteNth([20, 37, 20, 21], 1)); // [20,37,21]

// const person = { name: 'foo' };
// // const { name: firstname } = person;
// const firstname = person.name;
// console.log('haha', firstname);
// // TODO: complete this object/class

// // The constructor takes in an array of items and a integer indicating how many
// // items fit within a single page
// function PaginationHelper(collection, itemsPerPage) {
//   this.arr = collection;
//   this.n = itemsPerPage;
// }

// // returns the number of items within the entire collection
// PaginationHelper.prototype.itemCount = function () {
//   return this.arr.length;
// };

// // returns the number of pages
// PaginationHelper.prototype.pageCount = function () {
//   return Math.ceil(this.itemCount() / this.n);
// };

// // returns the number of items on the current page. page_index is zero based.
// // this method should return -1 for pageIndex values that are out of range
// PaginationHelper.prototype.pageItemCount = function (pageIndex) {
//   let pages = this.pageCount();
//   if (pageIndex > pages - 1) return -1;
//   else if (pageIndex === pages - 1) return this.itemCount() % this.n;
//   else return this.n;
// };

// // determines what page an item is on. Zero based indexes
// // this method should return -1 for itemIndex values that are out of range
// PaginationHelper.prototype.pageIndex = function (itemIndex) {
//   if (itemIndex > this.itemCount() || itemIndex < 0 || this.itemCount() === 0)
//     return -1;
//   else return Math.floor(itemIndex / this.n);
// };

// var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
// console.log(helper.itemCount()); //should == 6
// console.log(helper.pageCount()); //should == 2
// console.log(helper.pageItemCount(0)); //should == 4
// console.log(helper.pageItemCount(1)); // last page - should == 2
// console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid
// console.log(helper.pageIndex(5)); //should == 1 (zero based index)
// console.log(helper.pageIndex(2)); //should == 0
// console.log(helper.pageIndex(20)); //should == -1
// console.log(helper.pageIndex(-10)); //should == -1

// function pigIt(str) {
//   //Code here
//   const regex = /[^a-zA-Z]/g;
//   return str
//     .split(' ')
//     .map(word => (!regex.test(word) ? word.slice(1) + word[0] + 'ay' : word))
//     .join(' ');
// }

// console.log(pigIt('Hello world !')); // 'igPay atinlay siay oolcay'
