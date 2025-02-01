export const ship = (length) => {
    let hits = 0;

    return {
        length,
        hits () {
            //Length is the max # of hits, so hits should not exceed it.
            if(hits < length){
                ++hits;
            }
        },
        getHits() {
            return hits;
        },
        isSunk() {
            return hits == length;
        }
    }
}

export const gameBoard = () => {
    const board = Array.from({length: 10}, ()=> Array(10).fill(false));

    const aircraftCarrier = ship(5);
    const battleship = ship(4);
    const cruiser = ship(3);
    const submarine = ship(3);
    const destroyer = ship(2);

    const selectShip = (shipname) => {
        if(shipname == "aircraftCarrier") {
            return aircraftCarrier;
        } else if(shipname == "battleshp") {
            return battleship;
        } else if(shipname == "cruiser") {
            return cruiser;
        } else if(shipname == "submarine") {
            return submarine;
        } else if(shipname == "destroyer") {
            return destroyer;
        }
    }

    return {
        getBoard() {
            return board;
        },
        placeship(shipname) {
            const ship = selectShip(shipname);
            


            return ship;
        },
        recieveAttack(coordinate) {
            const [x, y] = coordinate;

            if(!board[x][y]) {
                board[x][y] = "miss";
            } else if(board[x][y] == "miss") {
                throw new Error("You already tried that spot, choose another.");
            }
        },
    }
}