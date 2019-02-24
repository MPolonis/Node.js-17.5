var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.toString().trim();
        switch(instruction) {
            case '/version': 
                console.log('The version of the Node.js you are using now is ' + process.versions.node);
                break;
            case '/language':
                console.log('The language is ' + process.env.LANG);
                break;
            case '/exit':
                process.stdout.write('Quiting app!\n');
                process.exit();
            case '/getOSinfo':
                OSinfo.print();
                break;
            default: 
                process.stderr.write('Wrong instruction!\n');
        }
    }
});

