// ===================================================================
//1. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।


const name = "abdullah"; // const can not redeclare and reassign
let age = 30; //let can change the value
age = 40;
let address = 'Brahmanbaria'; //let can not redeclare but can reassign

// ===================================================================
// 2.টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।


// const MyInfo = {
//     firstName: 'abdullah',
//     lastName: 'sarker',
//     dream: 'web developer',
//     area: 'brahmanbaria',
// };

// const myDream = `${firstName} ${lastName} is a great ${dream} in ${area}`;
// console.log(myDream);





// ===================================================================
//3.1 একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।


// 1st way
// const total = (num1) => {
//     const tMoney = num1 / 5;
//     return tMoney;
// }
// const totalMoney = total(10);
// console.log(totalMoney);

// easy
// console.log(total(75));



// 2nd way
// const Money = (num1) => num1 / 5;

// easy
// console.log(Money(25));

// hard
// const totalMoney = Money(20);
// console.log(totalMoney);


// ===================================================================
// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে।
// সেই ফাংশনের ভিতরে কাজ হবে।
//প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো

// const totalMoney = (num1, num2) => {
//     const add1 = num1 + 2;
//     const add2 = num2 + 2;
//     const multiplay = add1 * add2;
//     return multiplay;
// }
// const total = totalMoney(5, 5);
// console.log(total);

// ===================================================================

// ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।

// const threeTotal = (a, b, c) => {
//     const totalMulttiply = a * b * c;
//     return totalMulttiply;
// }
// const output = threeTotal(20, 25, 30);
// console.log(output);



// in shortcut way

// const threeTotal = (x, y, z) => x * y * z;
// const output = threeTotal(10, 25, 35);
// console.log(output);

// amraa r o shortcut kore korte pari
// console.log(ThreeTotal(10, 20, 30));

// ===================================================================

// ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।


// const totalMoney = (num1, num2) => {
//     const add1 = num1 + 2;
//     const add2 = num2 + 2;
//     const multiplay = add1 * add2;
//     return multiplay;
// }
// const total = totalMoney(5, 5);
// console.log(total);
// ===================================================================

// ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। 

// ===================================================================


// ৪.৫. [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 

// ===================================================================

// 5 অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 


// const numbers = [5, 9, 7, 3, 2, 5, 8, 4,];
// const output = [];

// const fiveMultiply = numbers.map(number => number * 5);
// output.push(fiveMultiply);
// console.log(output);


// ===================================================================

// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 


// const numbers = [1, 88, 99, 24, 65, 57, 13, 95, 98, 32, 42, 85, 65];
// const oddNum = numbers.filter(number => number % 2 != 0);
// console.log(oddNum);


// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

// const priceList = [
//     { name: 'water silar', weight: 10, price: 650 },
//     { name: 'spd', weight: 5, price: 420 },
//     { name: 'anamel pint', weight: 5, price: 1300 },
//     { name: 'jhilik pint', weight: 5, price: 850 },
//     { name: 'paimar pint', weight: 7, price: 750 },
//     { name: 'san machin', weight: 2, price: 5000 }

// ]

// const fiveHundredMore = priceList.find(list => list.price === 5000);
// console.log(fiveHundredMore);

// ===================================================================

// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।

// 1. forEach()
// .forEach(), is used to execute the same code on every element in an array but does not change the array and it returns undefined.

// 2. .map():
// .map() executes the same code on every element in an array and returns a new array with the updated elements.

// 3. .filter():
// .filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.

// ===================================================================

// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

// const market = {
//     marketName: 'panda',
//     fishSce: { name: 'fish', price: 560, id: 2165, condition: 'fresh' },
//     electiceSce: { name: 'tv', price: 50500, id: 2355, condition: 'new' },
//     foodSce: { name: 'cake', price: 450, id: 951, condition: 'homemade' },
//     toySce: { name: 'car', price: 230, id: 255, condition: 'fresh-new' }
// };

// const { id, price, condition } = market.fishSce;
// console.log(id, price, condition);

// ===================================================================

// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 


// const friends = ['abdul', 'rakib', 'saourab', 'bappu', 'munna', 'tipu'];
// const [one, two, three] = friends;
// console.log(three);


// ===================================================================
// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 

function sum(num1, num2, num3 = 7) {
    const AllSum = num1 + num2 + num3;
    return AllSum;
}
const totalsum = sum(20, 20,);
console.log(totalsum);