function generate() {
    let str = '';
    for (let i = 1; i <= 8; i ++) {
        str += `<div class = "posters" id = 'foto-0${i}'><p><img src = 'foto-0${i}.jpg' alt = 'foto-0${i}' width = '230' height = '270'></p>


</div>`
    }
    document.getElementById('platf').innerHTML = str;

}
