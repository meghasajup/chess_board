const chessContainer = document.getElementById('chessContainer');

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let box = document.createElement('div');
            if ((i + j) % 2 === 0) {
                box.style.backgroundColor = 'white';
            } else {
                box.style.backgroundColor = 'black';
            }
            chessContainer.appendChild(box);
        }
    }

    