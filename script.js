let textInput = document.getElementById("textInput")
let btn = document.getElementById("btn")
let doList = document.getElementById("doList")

btn.addEventListener("click",chekList)

//CHECK for add a valid value
function chekList() {
    if (textInput.value.length > 0 ) {
        return addList()
    }
}

function addList() {
    //CREATE the div and set attributes for every list item
    let div = document.createElement("div")
    div.setAttribute("class", "listItem bg-info m-2 animate__animated animate__bounceInDown pt-2 pl-2 overflow-auto d-flex flex-row justify-content-between")
    let divText = document.createTextNode(textInput.value)

    //APPEND them to relative items
    div.appendChild(divText)
    doList.appendChild(div)

    //do EMPTY value text of input
    textInput.value=""

    //create DONE list element
    div.addEventListener("click", done)
    function done() {
        div.classList="bg-success pb-2 pl-2 pt-2 m-2"
        div.removeChild(del)
    }

    //create DELETE element over list item
    let del = document.createElement("span")
    let delDesc = document.createTextNode("Delete")
    del.setAttribute("class", "text-danger del pb-2 pr-2")
    del.appendChild(delDesc)
    div.appendChild(del)

    //DLETE a list item
    del.addEventListener("click",deleteItem)
    function deleteItem() {
        doList.removeChild(div)
    }
}


