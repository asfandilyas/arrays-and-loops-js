// alert("hello")



//=== CHAPTER NO 14 - 16 ==//

///==Question # 01 ==///

// var studentNames = []



///==Question # 02 ==///

// var studentName = new Array()

///==Question # 03 ==///
// var stringArr = ["Asfand" , "Salahuddin" , "imran"]            

///==Question # 04 ==///
// var numbersArr = [1 ,2 , 3 , 4]


///==Question # 05 ==///
// var boolarray = [true , false , false ,true]            

///==Question # 06 ==///
// var mixArray = [970 , "Asfand" , true];

///==Question # 07 ==///

// var qualifications = ["SSC", "HSC", "BCS","BS", "BCOM", "MS","M. Phil.", "PhD"]
// document.write("Qualifications: <br>")            
// for(var i = 0 ; i<qualifications.length ; i++){
//     document.write(` <br>
//                     ${i+1}) ${qualifications[i]}`)
// }
///==Question # 08 ==///

// var stdNames = ["Michael" , "John" , "Tony"];
// var stdMarks = [320 , 230, 480];
// var per = [stdMarks[0]/500 * 100 , stdMarks[1]/500 * 100 , stdMarks[2]/500 * 100 ]
// for(var i = 0 ; i<stdMarks.length ; i++){
//     document.write("Score Of " + " " + stdNames[i] + " " + "is" + stdMarks[0]  + " " + "Percentage: " + per[i] + "%" + "<br>" )
// }


///==Question # 09 ==///
// var colorName = [ "red" , "Blue" , "Purple" , "Black"];
// document.write (" COLOR Name =>" + " " + colorName + "<br>")
// Part(A)
// var addColor = prompt("Add color to the beginning of the array.");
// colorName.unshift(addColor)
// document.write(  "ADD COLOR =>" + " "  +colorName)

// PART(B)
// var addColor2 = prompt("Add color to the End of the array.");
// colorName.push(addColor2)
// document.write( "<br>" + "ADD COLOR last =>" + " "  +colorName)

// PART(C)
// var color1 = prompt("ADD COLOR 1 to the beginning of the Array")
// var color2 = prompt("ADD COLOR 2 to the beginning of the Array")
// colorName.unshift(color1 , color2 )
// document.write(colorName)
// PART(D)
// colorName.shift();
// document.write("Delete First array => " + colorName)
// PART(E)
// colorName.pop();
// document.write("Delete Last array => " + colorName)
// PART(F)
// var indNum = parseInt(prompt("Enter a index number "))
// var colorAdd = (prompt("Enter a colors name "))
// colorName.splice(indNum, 0 , colorAdd);
// document.write(colorName)
// PART (G)
// var qts = prompt("You want to delete a colors (yes/no)")
// if(qts === "yes"){
//     var qts2 = parseInt(prompt("how many color s you want to delete")) 
// }
// else{
//     alert("as your wish")
// }
// colorName.splice(qts2 , qts2)
// document.write(colorName)



///==Question # 10 ==///

// var stdScore = [320,230,480,120];
// document.write( "BEFORE SORTING :  " + " " + stdScore + "<br>")
//  stdScore.sort()
// document.write( "AFTER SORTING :  " + " " + stdScore)

///==Question # 11 ==///

// var cities = ["karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// var selectedCities = cities.slice(2,4)
// document.write(`Cities list : <br> ${cities} <br> <br> <br> 
//                 Selected Cities Name <br> ${selectedCities}`)            



//==Question # 12 ==///

// var stringg = ["This" , "is" , "my" , "cat"];
// var arr= stringg.join(" ")            
// document.write(arr)

//===Question # 13 ==//

// var devices = ["keyboard" , "mouse" , "printer" , "monitor"];
// for(var i = 0 ; i<devices.length;i++){
//     document.write(`Out: <br>
//                     ${devices[i]} <br>`)
// }            


///===Question # 14 ===//
// var devices = ["keyboard" , "mouse" , "printer" , "monitor"];
// document.write(`out : <br>
//                 ${devices[3]} <br>
//                 out : <br>
//                 ${devices[2]} <br>
//                 out : <br>
//                 ${devices[1]} <br>
//                 out : <br>
//                 ${devices[0]} <br>`)

///===Question # 15 ===///

// var mobiles = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
// document.write("<select>")
// for(var i=0;i<mobiles.length;i++){
//     document.write("<option>" + mobiles[i]  +"</option>")
// }            
// document.write("</select>")            


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx//

///CHAPTER NO 17 -20 ///

///===Question # 1 ===///

// var multiArray = [[]];

///===Question # 02 ===///
// var multiArray = new Array(3);
// multiArray[0] = new Array(0 , 1 , 2 , 3)
// multiArray[1] = new Array(1 , 0 , 1, 2)
// multiArray[2] = new Array(2 , 1 , 0 , 1)
// document.write(multiArray[0].join(" ") + "<br />")
// document.write(multiArray[1].join(" ") + "<br />")
// document.write(multiArray[2].join(" ") + "<br />")

//===Question # 03 ===//

// for(var i = 1 ; i<=10 ; i++){
//         document.write(i + "<br />")
// }

//===Question # 04 ===//

// var tabNum = parseInt(prompt("Enter Table Number :"));
// var tabLenght = parseInt(prompt("Enter Table Lenght :"));
// document.write(`Multiplication table of ${tabNum} <br / > Lenght ${tabLenght } <br />`  ) 
// for(var i = 1  ; i<=tabLenght ; i++){
//         document.write(`${tabNum} x ${i} = ${tabNum * i} <br /> `)
// }



///===Question # 05 ===///

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var value of fruits){
//         document.write(value + "<br />" )
// }
// for(var prop in fruits){
//         document.write(`Element at index ${prop} is ${fruits[prop]} <br/>`
//         )
// }


//===Question # 06 ===//

// document.write(`<b>Counting:</b> <br / > <br />`)
// for (var i = 1; i <= 15; i++) {
//         document.write(i + ",")
// }
// document.write(` <br /> <br /> <b>Reverse Counting:</b> <br / > <br />`)
// for (var a = 10; a >= 1; a--) {
//         document.write(a + ", ")
// }

// document.write(` <br /> <br /> <b>Even:</b> <br / > <br />`)
// for (var b = 0; b <=20; b = b + 2) {
//         document.write(b + ", ")
// }


// document.write(` <br /> <br /> <b>Odd:</b> <br / > <br />`)
// for (var c = 0; c <=20; c = c + 3) {
//         document.write(c + ", ")
// }


// document.write(` <br /> <br /> <b>Series:</b> <br / > <br />`)
// for (var d = 2; d <=20; d = d + 2) {
//         document.write(d + "k" + ", ")
// }



//===Question # 07 ===//

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery!").toLowerCase()
// var boolsearch = "true"
// for (var i = 0; i < A.length; i++) {
//         if (search === A[i]) {
//                 var boolsearch = "false"
//                 alert(`${search} is Available at index ${i } in our bakery`)
//         }
// }
// if(boolsearch === "true"){
//         alert(`We are sorry. ${search} is  not Available  in our Bakery`)
// }


//===Question # 08 ===//

// var arr = [20, 50, 40, ];
// var largestt = Math.max(...arr)
// console.log(largestt)
// var largest = 0;
// for (var i = 0; i < arr.length; i++) {
//         if(arr > largest){
//                 var largest = arr[i]
//         }
// }
// console.log(largest)


// var arr = [24, 53, 78, 91, 12 ]
// var largest = 0;
// for (var i = 0; i < arr.length; i++){
//         if(arr[i] > largest ){
//                 largest = arr[i]
//         }
// }
// console.log(largest)

// var arr2 = [24, 53, 78, 91, 12];
// var smallest = arr2[0] ;
// for(var a = 0 ; a<arr2.length ; a++){
//         if( smallest > arr2[a]){
//                 var smallest = arr2[a]
//         }
// }
// console.log(smallest)


// var smallestt = Math.min(...arr2)
// console.log(smallestt)


//===Question # 10 ===///

// for (var i = 5 ; i<=100 ; i = i +5  ){
//         document.write(i + ",")
// }
