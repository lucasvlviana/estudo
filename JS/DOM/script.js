var p = documente.getElementsByTagName('p');

for (var i = 0; i < p.length; i++) {
    p[0].innerHTML = 'Manipulado via JS - ' + i;
}

