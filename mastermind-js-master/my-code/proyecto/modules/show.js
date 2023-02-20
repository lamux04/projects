const fs = require('fs');

const show = () => {
    console.clear();
    try {
        const data = fs.readFileSync('list.txt', 'utf8');
        if (data === '') {
            console.log('El fichero está vacío.');
            
        } else 
            console.log(data);   
    }
    catch (err) {
        fs.writeFileSync('list.txt', '', err => {});
        console.log("El fichero está vacío");
    }
}

exports.show = show;