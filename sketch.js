const container = document.querySelector("#container")

function createTiles(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div")
        row.setAttribute("id", "row")
    
        const squareSize = container.clientWidth / size
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div")
            square.setAttribute("id", "square")
            square.style.width = `${squareSize}px`
            square.style.height = `${squareSize}px`
            

            row.appendChild(square)

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "red"
            })
        }
    
        container.appendChild(row)
    }
}

function removeTiles() {
    const rows = container.querySelectorAll("#row")
    rows.forEach((row) => {
        const squares = row.querySelectorAll("square")
        squares.forEach((square) => {
            row.removeChild(square)
        })
        container.removeChild(row)
    })
}

const generateButton = document.querySelector("#generate")
const size = document.querySelector("#size")

generateButton.addEventListener("click", () => {
    if (size.value && size.value > 0 && size.value <= 100) {
        removeTiles()
        createTiles(size.value)
    }
})

size.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        if (size.value && size.value > 0 && size.value <= 100) {
            removeTiles()
            createTiles(size.value)
        }
    }
})



createTiles(16)