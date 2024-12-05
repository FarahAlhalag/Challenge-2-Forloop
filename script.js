let mixedArray = [10, "Apple", 20, "Orange", 30, "Banana"];
let strings = [];
let numbers = [];

// استخدمت forloop لتصنيف العناصر
for (let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] === "number") {
    //استخدمت if else لفصل الارقام عن النصوص
    numbers.push(mixedArray[i]); // استخدمت push لاضافة الارقام لمصفوفة numbers
  } else if (typeof mixedArray[i] === "string") {
    strings.push(mixedArray[i]); // استخدمت push لاضافة النصوص لمصفوفة strings
  }
}

console.log("Numbers:", numbers);
console.log("Strings:", strings);
