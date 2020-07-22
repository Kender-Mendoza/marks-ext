const markerContainer = document.getElementById('container')

const createElementHtml = (url) => {
    const element = `
    <div class="marker" id="${url}">
        <a href="http://www.${url}" target="_blank" class="info-container">
            <img src="https://www.freeiconspng.com/uploads/pikachu-png-icon-6.png   " alt="page logo"
                class="page-logo">
            <p class="page-name">${url}</p>
        </a>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
            class="svg-inline--fa fa-times fa-w-11 icon-delete" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512">
            <path fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class="btn-delete">
            </path>
        </svg>
    </div>
    `
    return element
}

const deleteElement = () => {
    const btnsDelete = document.getElementsByClassName("btn-delete")
    for (const btn of btnsDelete) {
        btn.addEventListener('click', (e) => {
            const marker = e.target.parentNode.parentNode
            markerContainer.removeChild(marker)
            localStorage.removeItem(marker.id)
        })
    }
}

/* Esta funcion es para poder reasignar los eventos a los elementos
correspondientes, ya que al agregar elementos nuevos a la vista en
este caso el contenedor, estos se renderizan por cada elemento que
se agrega, por esta razon se les debe de reasignar los eventos */
const addElement = () => {
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault(false)

        let url = document.getElementById('input').value.trim()

        if (url) {
            // ? agregando elemento (marker)
            markerContainer.innerHTML += createElementHtml(url)
            // ? agregando elemento al localStorange
            localStorage.setItem(url, url)
            // ? limpiando el input
            url.value = ''
            // ? reasignando los eventos
            addElement()
            deleteElement()
        }
    })
}

const showElementsSaved = () => {
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            markerContainer.innerHTML += createElementHtml(localStorage[key])
        }
    }

    addElement()
    deleteElement()
}

showElementsSaved()
