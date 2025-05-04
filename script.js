window.newGame = function() {
    document.getElementById("game-info").style.display = "block";
    document.getElementById("scorecard-grid").style.display = "none";
}

window.setupGame = function() {
    const players = ["John Smith", "Jane Doe", "Player 3", "Player 4", "Player 5", "Player 6", "Player 7", "Player 8", "Player 9"];
    const tbody = document.getElementById("score-body");
    tbody.innerHTML = "";

    players.forEach(player => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.textContent = player;
        row.appendChild(nameCell);

        for (let i = 0; i < 9; i++) {
            const cell = document.createElement("td");
            cell.textContent = "◯";
            cell.onclick = () => alert("Add scoring details for " + player + ", inning " + (i + 1));
            row.appendChild(cell);
        }

        ["R", "H", "E"].forEach(stat => {
            const statCell = document.createElement("td");
            statCell.textContent = "0";
            row.appendChild(statCell);
        });

        tbody.appendChild(row);
    });

    document.getElementById("scorecard-grid").style.display = "block";
    document.getElementById("game-info").style.display = "none";
}
