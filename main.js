function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
    linha = document.createElement('tr');
    tdId = document.createElement('td');
    tdName = document.createElement('td')
    tdUserName = document.createElement('td');
    tdEmail = document.createElement('td');
    tdAdress = document.createElement('td');
    tdPhone = document.createElement('td');
    tdCompany = document.createElement('td');
    tdId.innerHTML = usuario.id
    tdName.innerHTML = usuario.name
    tdUserName.innerHTML = usuario.username
    tdEmail.innerHTML = usuario.email
    tdAdress.innerHTML = usuario.adress
    tdPhone.innerHTML = usuario.phone
    tdCompany.innerHTML = usuario.company

    linha.appendChild(tdId);
    linha.appendChild(tdName);
    linha.appendChild(tdUserName);
    linha.appendChild(tdEmail);
    linha.appendChild(tdAdress);
    linha.appendChild(tdPhone);
    linha.appendChild(tdCompany);
    console.log(usuario)

    return linha;
}

function main() {
   let data = fazGet('https://jsonplaceholder.typicode.com/users')
   let usuarios = JSON.parse(data)
   let tabela = document.getElementById("tabela")
   usuarios.forEach(element => {
       let linha = criaLinha(element);
       tabela.appendChild(linha);
   });
}

main()

function filterByKeyword(filterKeyword) {
    var list = document.querySelector('#tabela').childNodes
    var newFilteredUl = document.createElement('ul')

    try {
        for (var i = 0, length = list.length; i < length; i++) {
            if (list[i].nodeType != 1 && null != list[i].nextSibling) {
                if (list[i].nextSibling.innerText == filterKeyword) {
                    var newLi = document.createElement('li')
                    var newLiText = document.createTextNode(filterKeyword)
                    newLi.appendChild(newLiText)
                }
            }
        }
        newFilteredUl.appendChild(newLi) 
           }  catch (e) {
                console.error(e)
            }
            return newFilteredUl
    }

    var button =  document.querySelector('#search')
        var button,onclick = function() {
            var keyword = document.querySelector('#tabela').value
            var newList = filterByKeyword('keyword')
            document.querySelector('#filteredList').appendChild(newList)
}
