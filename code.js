let gotCitiesCSV =
  "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
let lotrCitiesArray = [
  "Mordor",
  "Gondor",
  "Rohan",
  "Beleriand",
  "Mirkwood",
  "Dead Marshes",
  "Rhun",
  "Harad",
];
let bestThing =
  "The best thing about a boolean is even if you are wrong you are only off by a bit";

// ----------------------------------------------------------------------
// Complete the Following Katas
// ----------------------------------------------------------------------

// Remember to also append the results to your HTML page for every kata!
// Use document.createElement() to create the HTML with JavaScript
// This should be in the format:
// <h3>Kata 0</h3>
// <div>["Your", "array", "result", "here"]</div>

// Remember to render your arrays with JSON.stringify();

// Hint: You could create a function which renders any result to the DOM,
// then just call this function inside each kata!  That way you only have to write code to render
// to the DOM once :)
function renderArr(n, arr){
  let result = JSON.stringify(arr)
  let body = document.querySelector("body")
  let h3 = document.createElement("h3")
  h3.innerHTML = `Kata ${n}`
  let div = document.createElement("div").innerHTML = `${result}`
  body.append(h3)
  body.append(div)
}

function renderStr(n, str){
  let result = str
  let body = document.querySelector("body")
  let h3 = document.createElement("h3")
  h3.innerHTML = `Kata ${n}`
  let div = document.createElement("div").innerHTML = `${result}`
  body.append(h3)
  body.append(div)
}
// Write a function that returns an array with the cities in 'gotCitiesCSV'.
function kata1() {
  // Your Code Here
  let arr = gotCitiesCSV.split(",")
  // Render to the DOM.
 renderArr(1, arr)
  return arr; // Return your result.
}
kata1(); // Remember to execute your function!

// Write a function that returns an array of words from the sentence in 'bestThing'.
function kata2() {
  // Your Code Here
  let arr = bestThing.split(" ")
 renderArr(2, arr)
 return arr
} 
kata2()

// Write a function that returns a string separated by semi-colons instead of commas from 'gotCitiesCSV'.
function kata3() {
  // Your Code Here
  let arr = gotCitiesCSV.split(",")
  let str = arr.join("; ")
 renderStr(3, str)
 return str
}
kata3()

// Write a function that returns a CSV (comma-separated) string from the 'lotrCitiesArray'.
function kata4() {
  // Your Code Here
  let str = lotrCitiesArray.join(",")
  renderStr(4, str)
  return str
}
kata4()

// Write a function that returns an array with the first 5 cities in 'lotrCitiesArray'.
function kata5() {
  // Your Code Here
  let arr = lotrCitiesArray.slice(0, 5)
  renderArr(5, arr)
  return arr
}
kata5()

// Write a function that returns an array with the last 5 cities in 'lotrCitiesArray'.
function kata6() {
  // Your Code Here
  let arr = lotrCitiesArray.slice(-5)
  renderArr(6, arr)
  return arr
}
kata6()

// Write a function that returns an array with the 3rd to 5th city in 'lotrCitiesArray'.
function kata7() {
  // Your Code Here
  let arr = lotrCitiesArray.slice(2, 5)
  renderArr(7, arr)
  return arr
}
kata7()

// Write a function that uses 'splice' to remove 'Rohan' from 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
function kata8() {
  // Your Code Here
  let index = lotrCitiesArray.indexOf("Rohan")
  let arr = lotrCitiesArray
  arr.splice(index, 1)
  renderArr(8, arr)
  return arr
}
kata8()

// Write a function that uses 'splice' to remove all cities after 'Dead Marshes' in 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
function kata9() {
  // Your Code Here
  let index = lotrCitiesArray.indexOf("Dead Marshes") + 1
  let arr = lotrCitiesArray
  arr.splice(index)
  renderArr(9, arr)
  return arr
}
kata9()

// Write a function that uses 'splice' to add 'Rohan' back to 'lotrCitiesArray' right after 'Gondor' and returns the modified 'lotrCitiesArray'.
function kata10() {
  // Your Code Here
  let index = lotrCitiesArray.indexOf("Gondor") + 1
  let arr = lotrCitiesArray
  arr.splice(index, 0, "Rohan")
  renderArr(10, arr)
  return arr
}
kata10()

// Write a function that uses 'splice' to rename 'Dead Marshes' to 'Deadest Marshes' in 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
function kata11() {
  // Your Code Here
  let index = lotrCitiesArray.indexOf("Dead Marshes")
  let arr = lotrCitiesArray
  arr.splice(index, 1, "Deadest Marshes")
  renderArr(11, arr)
  return arr
}
kata11()

// Write a function that uses 'slice' to return a string with the first 14 characters from 'bestThing'.
function kata12() {
  // Your Code Here
  let str = bestThing.slice(0, 14)
  renderStr(12, str)
  return str
}
kata12()

// Write a function that uses 'slice' to return a string with the last 12 characters from 'bestThing'.
function kata13() {
  // Your Code Here
  let str = bestThing.slice(-12)
  renderStr(13, str)
  return str
}
kata13()

// Write a function that uses 'slice' to return a string with the characters between the 23rd and 38th position of 'bestThing' (i.e., 'boolean is even').
function kata14() {
  // Your Code Here
  let str = bestThing.slice(23, 38)
  renderStr(14, str)
  return str
}
kata14()

// Write a function that does the exact same thing as #13 but use the 'substring' method instead of 'slice'.
function kata15() {
  // Your Code Here
  let str = bestThing.substring(bestThing.length - 12)
  renderStr(15, str)
  return str
}
kata15()

// Write a function that does the exact same thing as #14 but use the 'substring' method instead of 'slice'.
function kata16() {
  // Your Code Here
  let str = bestThing.substring(23, 38)
  renderStr(16, str)
  return str
}
kata16()

let removed = []
// Write a function that uses 'pop' to remove the last city from 'lotrCitiesArray' and returns the modified array.
function kata17() {
  // Your Code Here
  removed = lotrCitiesArray.pop()
  let arr = lotrCitiesArray
  renderArr(17, arr)
  return arr
}
kata17()

// Write a function that uses 'push' to add back the city from 'lotrCitiesArray' that was removed in #17 to the back of the array and returns the modified array.
function kata18() {
  // Your Code Here
  lotrCitiesArray.push(removed)
  let arr = lotrCitiesArray
  renderArr(18, arr)
  return arr
}
kata18()

// Write a function that uses 'shift' to remove the first city from 'lotrCitiesArray' and returns the modified array.
function kata19() {
  // Your Code Here
  removed = lotrCitiesArray.shift()
  let arr = lotrCitiesArray
  renderArr(19, arr)
  return arr
}
kata19()

// Write a function that uses 'unshift' to add back the city from 'lotrCitiesArray' that was removed in #19 to the front of the array and returns the modified array.
function kata20() {
  // Your Code Here
  lotrCitiesArray.unshift(removed)
  let arr = lotrCitiesArray
  renderArr(20, arr)
  return arr
}
kata20()

// ----------------------------------------------------------------------
// Optional Practice Problems - Complete these for extra practice
// ----------------------------------------------------------------------

// Remember to append the results of each kata to the page as well as return the result!

// Write a function that finds and returns the index of 'only' in 'bestThing'.
function kata21() {
  // Your Code Here
  let index = bestThing.split(" ").indexOf("only")
  let str = `The index of "only" in "bestThing is ${index}.`
  renderStr(21, str)
  return str
}
kata21()

// Write a function that finds and returns the index of the last word in 'bestThing'.
function kata22() {
  // Your Code Here
  let index = bestThing.split(" ").length -1
  let str = `The index of the last word in "bestThing" is ${index}`
  renderStr(22, str)
  return str
}
kata22()

// Write a function that finds and returns an array of all cities from 'gotCitiesCSV' that use double vowels ('aa', 'ee', etc.).
function kata23() {
  // Your Code Here
  let gotCitiesCSVArr = gotCitiesCSV.split(",")
  let arr = []
  for (let i = 0; i < gotCitiesCSVArr.length; i += 1){
    let currentCity = gotCitiesCSVArr[i]
    if (/.+a{2}|.+e{2}|.+i{2}|.+o{2}|.+u{2}/.test(currentCity) === true){
      arr.push(currentCity)
    }
  }
  renderArr(23, arr)
  return arr
}
kata23()

// Write a function that finds and returns an array with all cities from 'lotrCitiesArray' that end with 'or'.
function kata24() {
  // Your Code Here
  let arr = []
  for (let i = 0; i < lotrCitiesArray.length; i += 1){
    let currentCity = lotrCitiesArray[i]
    if (/.+or$/.test(currentCity) === true){
      arr.push(currentCity)
    }
  }
  renderArr(24, arr)
  return arr
}
kata24()

// Write a function that finds and returns an array with all the words in 'bestThing' that start with a 'b'.
function kata25() {
  // Your Code Here
  let bestThingArr = bestThing.split(" ")
  let arr = []
  for (let index = 0; index < bestThingArr.length; index += 1){
    let currentWord = bestThingArr[index]
    if (/^b/i.test(currentWord) === true){
      arr.push(currentWord)
    }
  }
  renderArr(25, arr)  
  return arr
}
kata25()

// Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Mirkwood'.
function kata26() {
  // Your Code Here
  for (let i = 0; i < lotrCitiesArray.length; i += 1){
    if (lotrCitiesArray[i].includes("Mirkwood")){
      let str = "Yes"
      renderStr(26, str)
      return "Yes"
    }
  }
  let str = "No"
  renderStr(26, str)
  return "No"
}
kata26()

// Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Hollywood'.
function kata27() {
  // Your Code Here
  for (let i = 0; i < lotrCitiesArray.length; i += 1){
    if (lotrCitiesArray[i].includes("Hollywood")){
      let str = "Yes"
      renderStr(27, str)
      return "Yes"
    }
  }
  let str = "No"
  renderStr(27, str)
  return "No"
}
kata27()

// Write a function that returns the index of 'Mirkwood' in 'lotrCitiesArray'.
function kata28() {
  // Your Code Here
  let index = lotrCitiesArray.indexOf("Mirkwood")
  let str = `The index of "Mirkwood" in "lotrCitiesArray" is ${index}.`
  renderStr(28, str)
  return str
}
kata28()

// Write a function that finds and returns the first city in 'lotrCitiesArray' that has more than one word.
function kata29() {
  // Your Code Here
  let str = ""
  for (let index = 0; index < lotrCitiesArray.length; index += 1){
    let currentCity = lotrCitiesArray[index]
    if (/^.+ .+/.test(currentCity) === true){
      str = `${currentCity}`
    }
  }
  renderStr(29, str)
  return str
}
kata29()

// Write a function that reverses the order of 'lotrCitiesArray' and returns the modified array.
function kata30() {
  // Your Code Here
  let arr = lotrCitiesArray.reverse()
  renderArr(30, arr)
  return arr
}
kata30()

// Write a function that sorts 'lotrCitiesArray' alphabetically and returns the modified array.
function kata31() {
  // Your Code Here
  let arr = lotrCitiesArray.sort()
  renderArr(31, arr)
  return arr
}
kata31()

// Write a function that sorts 'lotrCitiesArray' by the number of characters in each city (i.e., shortest city names go first) and return the modified array.
function kata32() {
  // Your Code Here
  let arr = lotrCitiesArray.sort(function(a, b){
    return a.length - b.length
  })
  renderArr(32, arr)
  return arr
}
kata32()
