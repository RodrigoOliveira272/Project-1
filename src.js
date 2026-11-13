function calcularMulta(dias) {
    return Math.max(0, dias - 15) * 0.5;
}

function estaAberta(dia, hora) {
    const diasAbertos = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    return diasAbertos.includes(dia.toLowerCase()) && hora >= 9 && hora < 18;
}

function formatarEuros(valor) {
    return `${valor.toFixed(2).replace('.', ',')} €`;
}

function mensagemMulta(dias) {
    const valor = calcularMulta(dias);
    return valor > 0 ? `Multa a pagar: ${formatarEuros(valor)}` : 'Sem multa';
}

if (typeof document !== 'undefined') {
    const botaoHorario = document.getElementById('verificar-horario');
    const botaoMulta = document.getElementById('calcular-multa');

    botaoHorario?.addEventListener('click', () => {
        const dia = document.getElementById('dia').value;
        const hora = Number(document.getElementById('hora').value);
        const resultado = estaAberta(dia, hora) ? 'Está aberta.' : 'Está fechada.';
        document.getElementById('resultado-horario').textContent = resultado;
    });

    botaoMulta?.addEventListener('click', () => {
        const dias = Number(document.getElementById('dias').value);
        document.getElementById('resultado-multa').textContent = mensagemMulta(dias);
    });
}

console.assert(calcularMulta(10) === 0);
console.assert(calcularMulta(16) === 0.5);
console.assert(calcularMulta(22) === 3.5);

console.assert(estaAberta('domingo', 11) === false);
console.assert(estaAberta('segunda-feira', 8) === false);
console.assert(estaAberta('segunda-feira', 11) === true);

console.assert(formatarEuros(0) === '0,00 €');
console.assert(formatarEuros(3.5) === '3,50 €');
console.assert(formatarEuros(12.75) === '12,75 €');

console.assert(mensagemMulta(10) === 'Sem multa');
console.assert(mensagemMulta(16) === 'Multa a pagar: 0,50 €');
console.assert(mensagemMulta(22) === 'Multa a pagar: 3,50 €');
