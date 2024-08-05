const container = document.querySelector("#container")

for (let i = 0; i < 4; i++) {
    const row = document.createElement("div")
    row.setAttribute("id", "row")

    for (let j = 0; j < 4; j++) {
        const square = document.createElement("div")
        square.setAttribute("id", "square")
        square.textContent = `Square ${i + 1}`
        row.appendChild(square)
    }

    
    container.appendChild(row)
}