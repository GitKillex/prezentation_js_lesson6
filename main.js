let box = document.querySelector('.box')
let box2 = document.querySelector('.box2')

var modal = document.getElementById('myModal')
var span = document.getElementsByClassName('close')[0]

span.onclick = function() {
    modal.style.display = 'none';
};

let data = [
    {
        id: 1,
        title: 'Abubakr'
    },
    {
        id: 2,
        title: 'Abubakr'
    },
    {
        id: 3,
        title: 'Abubakr'
    },
    {
        id: 4,
        title: 'Abubakr'
    },
];

function get(){
    data.forEach((elem) => {
        let container = document.createElement('div')

        let h1 = document.createElement('h1')
        h1.innerHTML = elem.id
        let h2 = document.createElement('h2')
        h2.innerHTML = elem.title

        let btn = document.createElement('button')
        btn.innerHTML = 'delete';
        btn.style.backgroundColor = 'green';
        btn.onclick = () => {
            box2.innerHTML = ''
            modal.style.display = 'block'
            let h3 = document.createElement('h3')
            h3.innerHTML = elem.id;
            box2.appendChild(h3)
        };
        container.appendChild(h1)
        container.appendChild(h2)
        container.appendChild(btn)
        box.appendChild(container)
    })
}
get()