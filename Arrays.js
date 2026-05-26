let marks1 = Array(6)    //array declaration with size 6
marks1 = new Array(20,30,45,12,37,100)
console.log(marks1.includes(20))
console.log(marks1.includes(2))
console.log(`marks1 array doubled: `+marks1.map(n => n*2))
console.log(`marks1 array squared: `+marks1.map(n => n**2))
console.log(`marks1 array square-root: `+marks1.map(n => Math.sqrt(n)))

var marks2 = [5,10,15,20,25,30]
console.log(marks2[2])
marks2[2] = 100
console.log(marks2[2])
console.log(marks2)