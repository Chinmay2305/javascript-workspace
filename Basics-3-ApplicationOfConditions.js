//I want multiples common in 2 and 5 but not of 4
/*for(let k=1;k<=100;k++)
{
    if(k%2==0 && k%5==0 && k%4!=0)
        console.log(k)
}*/

//I want only first 3 multiples common in 2 and 5 but not of 4
let n=0
for(let k=1;k<=100;k++)
{
    if(k%2==0 && k%5==0 && k%4!=0)
    {
        n++
        console.log(k)
        if(n==3)
            break
    }
}