function calcular(){

let capital_inicial = parseInt(document.getElementById('capital_inicial').value);
    let taxa = parseInt(document.getElementById('taxa').value);
    let tempo = parseInt(document.getElementById('tempo').value);

    let porcentagem_de_juro = taxa/100;
    let juros = capital_inicial * porcentagem_de_juro * tempo;
    let montante = juros + capital_inicial;

    document.getElementById('Resultado_juros').textContent = "Juros: " + juros;
    document.getElementById('Resultado_montante').textContent = "Montante: " + montante;

}