let input = prompt('What would you like to do?');
const todos = ['wash plates', 'clean the house'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("****************************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("****************************")
    }
}
console.log('OK QUIT THE APP')