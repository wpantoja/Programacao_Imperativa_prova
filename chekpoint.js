//microondas

let microondas = (comida, tempo) => {
    if (comida == 'pipoca') {
        if (tempo < 10) {
            console.log('Tempo insuficiente');
        }


        else if (tempo >= 10 && tempo < 20) {
            console.log('Prato pronto, bom apetite!!!');
        }


        else if (tempo >= 20 && tempo < 30) {
            console.log('A comida queimou');
        }

        else if (tempo >= 30) {
            console.log('KABUMMMMM!');
        }
    }

    else if (comida == 'macarrao') {
        if (tempo < 8) {
            console.log('Tempo insuficiente');
        }


        else if (tempo >= 8 && tempo < 16) {
            console.log('Prato pronto, bom apetite!!!');
        }


        else if (tempo >= 16 && tempo < 24) {
            console.log('A comida queimou');
        }

        else if (tempo >= 24) {
            console.log('KABUMMMMM!');
        }
    }

    else if (comida == 'carne') {
        if (tempo < 15) {
            console.log('Tempo insuficiente');
        }

        else if (tempo >= 15 && tempo < 30) {
            console.log('Prato pronto, bom apetite!!!');
        }


        else if (tempo >= 30 && tempo < 45) {
            console.log('A comida queimou');
        }

        else if (tempo >= 45) {
            console.log('KABUMMMMM!');
        }
    }

    else if (comida == 'feijao') {
        if (tempo < 12) {
            console.log('Tempo insuficiente');
        }

        else if (tempo >= 12 && tempo < 24) {
            console.log('Prato pronto, bom apetite!!!');
        }



        else if (tempo >= 24 && tempo < 36) {
            console.log('A comida queimou');
        }

        else if (tempo >= 36) {
            console.log('KABUMMMMM!');
        }
    }

    else if (comida == 'brigadeiro') {
        if (tempo < 8) {
            console.log('Tempo insuficiente');
        }

        else if (tempo >= 8 && tempo < 16) {
            console.log('Prato pronto, bom apetite!!!');
        }



        else if (tempo >= 16 && tempo < 24) {
            console.log('A comida queimou');
        }

        else if (tempo >= 24) {
            console.log('KABUMMMMM!');
        }
    }

    else {
        console.log('Prato inexistente')
    }
};


console.log('Pipoca!!!!!!!')
microondas('pipoca', 9);
microondas('pipoca', 10);
microondas('pipoca', 25);
microondas('pipoca', 50);
console.log('------------------------------')
console.log('Macarrão!!!!!!!')
microondas('macarrao', 5);
microondas('macarrao', 10);
microondas('macarrao', 17);
microondas('macarrao', 30);
console.log('------------------------------')
console.log('Carne!!!!!!!')
microondas('carne', 5);
microondas('carne', 15);
microondas('carne', 35);
microondas('carne', 50);
console.log('------------------------------')
console.log('Feijão!!!!!!!')
microondas('feijao', 5);
microondas('feijao', 12);
microondas('feijao', 25);
microondas('feijao', 50);
console.log('------------------------------')
console.log('Brigadeiro!!!!!!!')
microondas('brigadeiro', 5);
microondas('brigadeiro', 10);
microondas('brigadeiro', 20);
microondas('brigadeiro', 30);
console.log('------------------------------')
microondas('pamonha', 30);


