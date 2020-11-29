function randomNb(max,min) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let prix = [randomNb(500,200),randomNb(1000,700),randomNb(1000,700),randomNb(700,300),randomNb(700,300),randomNb(200,50),randomNb(700,300),randomNb(500,200),randomNb(500,200),randomNb(500,200)]
let prixMinMax = ["200 - 500", "700 - 1000", "700 - 1000", "300 - 700", "300 - 700", "50 - 200", "300 - 700", "200 - 500", "200 - 500", "200 - 500"]
let essais = 40
let essais_start = essais
let towin = 0
let nb1 = randomNb(10,1)
let nb2 = randomNb(10,1)
while (nb2 === nb1) {
    nb2 = randomNb(10,1)
}
let nb3 = randomNb(10,1)
while (nb3 === nb1 || nb3 === nb2) {
    nb3 = randomNb(10,1)
}
let nb4 = randomNb(10,1)
while (nb4 === nb1 || nb4 === nb2 || nb4 === nb3) {
    nb4 = randomNb(10,1)
}
function next() {
    document.getElementById('info').innerHTML=''
    document.getElementById('essaies').innerHTML=`Essaie(s) restant(s) : ${essais} essaies. Objet : ${towin}/4`
    if (towin === 1) document.getElementById('reset').innerHTML=`<tbody><tr><td><img src=images/produit${nb2}.jpg></td><td>Between ${prixMinMax[nb2-1]}</td></tr><tr><td><form name='formulaire2'><input type='text' name='saisie2' size='10'><input type='button' name='bp2' value='CHECK' onclick='tester2()'></form></td><td></td></tr></tbody>`
    if (towin === 2) document.getElementById('reset').innerHTML=`<tbody><tr><td><img src=images/produit${nb3}.jpg></td><td>Between ${prixMinMax[nb3-1]}</td></tr><tr><td><form name='formulaire3'><input type='text' name='saisie3' size='10'><input type='button' name='bp3' value='CHECK' onclick='tester3()'></form></td><td></td></tr></tbody>`
    if (towin === 3) document.getElementById('reset').innerHTML=`<tbody><tr><td><img src=images/produit${nb4}.jpg></td><td>Between ${prixMinMax[nb4-1]}</td></tr><tr><td><form name='formulaire4'><input type='text' name='saisie4' size='10'><input type='button' name='bp4' value='CHECK' onclick='tester4()'></form></td><td></td></tr></tbody>`
}
function start() {
    document.getElementById('reset').innerHTML=`<tbody><tr><td><img src=images/produit${nb1}.jpg></td><td>Between ${prixMinMax[nb1-1]}</td></tr><tr><td><form name='formulaire1'><input type='text' name='saisie1' size='10'><input type='button' name='bp1' value='CHECK' onclick='tester1()'></form></td><td></td></tr></tbody>`
    document.getElementById('resetbp').innerHTML=''
    document.getElementById('gl').innerHTML='Bonne Chance'
    document.getElementById('essaies').innerHTML=`Essaie(s) restant(s) : ${essais} essaies. Objet : ${towin}/4`
}
function tester1() {
    essais--
    document.getElementById('essaies').innerHTML=`Essaie(s) restant(s) : ${essais} essaies. Objet : ${towin}/4`
    if (document.formulaire1.saisie1.value == prix[nb1-1] && essais > 0) {
        document.formulaire1.bp1.disabled = true
        towin++
        document.formulaire1.saisie1.value = 'Trouvé !'
        document.getElementById('info').innerHTML='Trouvé !'
        document.formulaire1.saisie1.disabled = true
        next()
    } else if (essais > 0) {
        if (document.formulaire1.saisie1.value < prix[nb1-1]) {
            document.getElementById('info').innerHTML='C\'est plus !'
            document.formulaire1.saisie1.value = ''
        } else {
            document.getElementById('info').innerHTML='C\'est moins !'
            document.formulaire1.saisie1.value = ''
        }
    } else {
        document.formulaire1.bp1.disabled = true
        document.formulaire1.saisie1.disabled = true
        document.formulaire1.saisie1.value = prix[nb1-1]
        alert('Vous avez perdu !')
        document.getElementById('gl').innerHTML=`Vous avez perdu...`
        document.getElementById('resetbp').innerHTML='<br><INPUT TYPE="button" VALUE="Recommencer" ONCLICK="reset()"></INPUT>'
    }
}

function tester2() {
    essais--
    document.getElementById('essaies').innerHTML=`Essaie(s) restant(s) : ${essais} essaies. Objet : ${towin}/4`
    if (document.formulaire2.saisie2.value == prix[nb2-1] && essais > 0) {
        document.formulaire2.bp2.disabled = true
        towin++
        document.formulaire2.saisie2.value = 'Trouvé !'
        document.getElementById('info').innerHTML='Trouvé !'
        document.formulaire2.saisie2.disabled = true
        next()
    } else if (essais > 0) {
        if (document.formulaire2.saisie2.value < prix[nb2-1]) {
            document.getElementById('info').innerHTML='C\'est plus !'
            document.formulaire2.saisie2.value = ''
        } else {
            document.getElementById('info').innerHTML='C\'est moins !'
            document.formulaire2.saisie2.value = ''
        }
    } else {
        document.formulaire2.bp2.disabled = true
        document.formulaire2.saisie2.disabled = true
        document.formulaire2.saisie2.value = prix[nb2-1]
        alert('Vous avez perdu !')
        document.getElementById('gl').innerHTML=`Vous avez perdu...`
        document.getElementById('resetbp').innerHTML='<br><INPUT TYPE="button" VALUE="Recommencer" ONCLICK="reset()"></INPUT>'
    }
}

function tester3() {
    essais--
    document.getElementById('essaies').innerHTML=`Essaie(s) restant(s) : ${essais} essaies. Objet : ${towin}/4`
    if (document.formulaire3.saisie3.value == prix[nb3-1] && essais > 0) {
        document.formulaire3.bp3.disabled = true
        towin++
        document.formulaire3.saisie3.value = 'Trouvé !'
        document.getElementById('info').innerHTML='Trouvé !'
        document.formulaire3.saisie3.disabled = true
        next()
    } else if (essais > 0) {
        if (document.formulaire3.saisie3.value < prix[nb3-1]) {
            document.getElementById('info').innerHTML='C\'est plus !'
            document.formulaire3.saisie3.value = ''
        } else {
            document.getElementById('info').innerHTML='C\'est moins !'
            document.formulaire3.saisie2.value = ''
        }
    } else {
        document.formulaire3.bp3.disabled = true
        document.formulaire3.saisie3.disabled = true
        document.formulaire3.saisie3.value = prix[nb3-1]
        alert('Vous avez perdu !')
        document.getElementById('gl').innerHTML=`Vous avez perdu...`
        document.getElementById('resetbp').innerHTML='<br><INPUT TYPE="button" VALUE="Recommencer" ONCLICK="reset()"></INPUT>'
    }
}

function tester4() {
    essais--
    document.getElementById('essaies').innerHTML=`Essaie(s) restant(s) : ${essais} essaies. Objet : ${towin}/4`
    if (document.formulaire4.saisie4.value == prix[nb4-1] && essais > 0) {
        document.formulaire4.bp4.disabled = true
        towin++
        document.formulaire4.saisie4.value = 'Trouvé !'
        document.getElementById('info').innerHTML='Trouvé !'
        document.formulaire4.saisie4.disabled = true
        next()
        if (towin == 4) {
            alert('VOUS AVEZ GAGNÉ')
            document.getElementById('gl').innerHTML=`Vous avez gagné en ${essais_start-essais}`
            document.getElementById('resetbp').innerHTML='<br><INPUT TYPE="button" VALUE="Recommencer" ONCLICK="reset()"></INPUT>'
        }
    } else if (essais > 0) {
        if (document.formulaire4.saisie4.value < prix[nb4-1]) {
            document.getElementById('info').innerHTML='C\'est plus !'
            document.formulaire4.saisie4.value = ''
        } else {
            document.getElementById('info').innerHTML='C\'est moins !'
            document.formulaire4.saisie4.value = ''
        }
    } else {
        document.formulaire4.bp4.disabled = true
        document.formulaire4.saisie4.disabled = true
        document.formulaire4.saisie4.value = prix[nb4-1]
        alert('Vous avez perdu !')
        document.getElementById('gl').innerHTML=`Vous avez perdu...`
        document.getElementById('resetbp').innerHTML='<br><INPUT TYPE="button" VALUE="Recommencer" ONCLICK="reset()"></INPUT>'
    }
}

function reset() {
    essais = essais_start
    towin = 0
    nb1 = randomNb(10,1)
    nb2 = randomNb(10,1)
    while (nb2 === nb1) {
        nb2 = randomNb(10,1)
    }
    nb3 = randomNb(10,1)
    while (nb3 === nb1 || nb3 === nb2) {
        nb3 = randomNb(10,1)
    }
    nb4 = randomNb(10,1)
    while (nb4 === nb1 || nb4 === nb2 || nb4 === nb3) {
        nb4 = randomNb(10,1)
    }
    document.getElementById('reset').innerHTML=``
    document.getElementById('resetbp').innerHTML=''
    document.getElementById('gl').innerHTML='Commencer :'
    document.getElementById('essaies').innerHTML=`<input type='button' name='bp' value='START' onclick='start()'>`
    document.getElementById('info').innerHTML=''
}
