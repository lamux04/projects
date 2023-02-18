const fs = require('fs');
const prompt = require('prompt-sync')();

const text = () => {
    return prompt("Introduce una tarea: ");
}

const add = () => {
    console.clear();
    
    let data;
    try {
        data = fs.readFileSync('list.txt', 'utf8');
    } catch (err) {
        data = "";
    }

    if (data !== "") data += '\n';

    try  {
        fs.writeFileSync('list.txt', data + '-' + text());
    } catch (err) {
        console.log('Error, pruebe de nuevo');
    }
}

exports.add = add;