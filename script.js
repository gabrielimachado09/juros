function calcular(){

let capital= perseInt (document.getElementById('capital').value);
let taxa = perseInt (document.getElementById('taxa').value);
let tempo = perseInt (document.getElementById('tempo').value);

let porcentagem_de_juros = taxa/100;
let juros = capital * porcentagem_de_juros * tempo;
let montante = juros + capital;
DocumentTimeline.getElementById('resultado').textContent ='resultado:' + montante;





}