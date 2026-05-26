const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalmarks = 0.0;
let marks=0.0;

function asktotal()
{
    r1.question("Total marks of your test: ",function(total)
    {
        total = Number(total);
        if(total<=0||isNaN(total))
        {
            console.log(total+" is not valid. Please enter a positive number.\n");
            return asktotal();
        }
        totalmarks=total;
        askmarks();
    });
}

function askmarks()
{
    r1.question(`Please enter your Maths marks out of ${totalmarks}: ` ,function(marksInput)
    {
        marks = Number(marksInput); //convert to number
        //validation
        if(marksInput<0 || marksInput>totalmarks || isNaN(marksInput))
        {
            console.log(marksInput+` is not valid. Enter correctly please.\n`)
            return askmarks();
        }

        marks=marksInput;

        let percent=(marks*100)/totalmarks;

        console.log(`You got `+marks+` marks in Maths out of ${totalmarks}. So you got ${percent}%.`)
        if(percent<40)
        {
            console.log("You have failed in the exam")
        }
        else
        {
            console.log("You have passed in the exam")
        }
        entermultipletimes();
    });
}

function entermultipletimes()
{
    r1.question('How many times would you like to display your marks?',function(freq)
    {
        freq=Number(freq);
        if(freq<=0||isNaN(freq))
        {
            console.log("Please enter a valid positive number.\n");
            return entermultipletimes();
        }
        
        console.log("Your marks will be displayed "+freq+" times:\n");
        for(i=1;i<=freq;i++)
        {
            console.log(`${i}. ${marks}`);
        }
        r1.close();
    })
}

asktotal();