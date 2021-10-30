let items = localStorage.getItem('itemList')

items = items ? items.split(',') : [] // Esto es  un if en una sóla línea

localStorage.setItem('itemList', 'prueba');

function addItem() {
    let item = document.getElementById('item').value
    if (item){
        items.push (item)
    }
}

function mostrar() {
    document.getElementById('item') = ''
    let html = ''
    for (let i = 0; i < array.length; i++) {
        html += `<div> ${items[i]} </div>`
        
    }
}

