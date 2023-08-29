const palavra = document.getElementById('versiculo');

const biblia = ['Tomai sobre vós o meu jugo, e aprendei de mim, que sou manso e humilde de coração; e encontrareis descanso para as vossas almas. Mateus 11:29',
'O espírito do Senhor DEUS está sobre mim; porque o SENHOR me ungiu, para pregar boas novas aos mansos; enviou-me a restaurar os contritos de coração, a proclamar liberdade aos cativos, e a abertura de prisão aos presos Isaías 61:1',
'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus João 1:1',
'Havendo Deus antigamente falado muitas vezes, e de muitas maneiras, aos pais, pelos profetas, a nós falou-nos nestes últimos dias pelo Filho Hebreus 1:1', 
'E disse-me: A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza. De boa vontade, pois, me gloriarei nas minhas fraquezas, para que em mim habite o poder de Cristo 2 Coríntios 12:9', 
'O meu Deus enviou o seu anjo, e fechou a boca dos leões, para que não me fizessem dano, porque foi achada em mim inocência diante dele; e também contra ti, ó rei, não tenho cometido delito algum Daniel 6:22']

const n1 = biblia.length;
var i = 0;

function next(){
    if(i < n1 -1){
        i++
        palavra.innerHTML = `<p>${biblia[i]}</p>`;
    }
    
}

function previus(){
    if(i > 0){
        i--
        palavra.innerHTML = `<p>${biblia[i]}</p>`;
    }
    
}

