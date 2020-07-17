// ? funcion encargada crear el elemento html
const addElement = (url) => {
    document.getElementById('container').innerHTML += `
    <div class="marker">
        <a href="http://www.${url.trim()}" target="_blank" class="info-container">
            <img src="https://www.freeiconspng.com/uploads/pikachu-png-icon-6.png   " alt="page logo"
                class="page-logo">
            <p class="page-name">${url.trim()}</p>
        </a>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
            class="svg-inline--fa fa-times fa-w-11 icon-delete" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512">
            <path fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
            </path>
        </svg>
    </div>
    `
}

// ? Local storange
const getElementSaved = () => {
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            addElement(localStorage[key])
        }
    }
}
getElementSaved()

// ? delete elemento
const deleteElement = () => {
    const elements = document.getElementsByClassName("icon-delete")
    for (const iterator of elements) {
        iterator.addEventListener('click',(e)=>{
            e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
        })
    }
}
deleteElement()

// ? esta funcion agrega los alementos (markers) 
const addEvent = () => {
    const input = document.getElementById('input')
    document.getElementById('btn-add').addEventListener('click', () => {
        if (input.value) {
            let url = input.value
            // guardando elemento en el local storange
            addElement(url)
            localStorage.setItem(url, url)
            addEvent()
            deleteElement()
            /* utiliza recursion para reasignar los eventos al head, aun no se si
                esta solucion es la correcta.*/
        }
    })
}
addEvent()