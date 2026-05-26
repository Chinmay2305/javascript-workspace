let fruits = ["apple","guava","orange"]
console.log(fruits)
console.log(fruits[1])
console.log(fruits[0])
console.log(fruits[3])

//Adding a new item at the end
fruits.push("banana")
console.log(fruits)

//Adding a new item in the beginning
fruits.unshift("mango")
console.log(fruits)

//Insert in a specific index
fruits.splice(1,4,"pineapple")   //(index to place new element, number of items to be removed fromthat index, new element)
console.log(fruits)