let a = document.getElementById('inputl');
let b = document.querySelectorAll('button');

let c = "";
let p = Array.from(b);
p.forEach(button => {
    button.addEventListener('click', (d) => {
        if (d.target.innerHTML == '=') {
            c = eval(c);
            a.value = c;
        } else if (d.target.innerHTML == 'AC') {
            c = "";
            a.value = c;
        } else if (d.target.innerHTML == 'DEL') {
            c = c.substring(0, c.length - 1);
            a.value = c;
        } else {
            c += d.target.innerHTML;
            a.value = c;
        }

    })
})