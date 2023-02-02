//fizz y buzz

function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizzbuzz");
        } else if(i%3 === 0){
            console.log("Fizz");
        } else if(i%5 === 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz();

//async await 

/* async function completeTask(req, res){
    try{
        const user = await User.findbyId(req.userId);
        const tasks = await Tasks.findbyId(user.tasksId);
        tasks.completed = true; 
        await tasks.save();
        res.send("Task saved");
    } catch(e){
        res.send(e);
    }
} */

