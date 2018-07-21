const GRID_SIZE = 4;

export const makeGrid = () => {
    let grid = new Array(GRID_SIZE);

    for(let i = 0; i < GRID_SIZE; i++) {
        grid[i] = new Array(GRID_SIZE);
    }

    let count = 0;
    for(let i = 0; i < GRID_SIZE; i++) {
        for(let j = 0; j < GRID_SIZE; j++) {
            let pos = getRandomInt(0, 5);
            console.log(pos);
            grid[i][j] = gamePieces[count].charAt(pos);
            count++;
            if(count > gamePieces.length - 1) {
                count = 0;
            }
        }
        console.log(grid[i]); //print row
    }
    return grid;
};

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getPieceRotation = () => {
    return (getRandomInt(0, 3)*90).toString() + 'deg';
};

export const shouldUnderline = (letter) => {
    return underlinedCharacters.indexOf(letter) > -1;
};

const underlinedCharacters = 'WMNZ';

const gamePieces = [
    'AACIOT',
    'AHMORS',
    'EGKLUY',
    'ABILTY',
    'ACDEMP',
    'EGINTV',
    'GILRUW',
    'ELPSTU',
    'DENOSW',
    'ACELRS',
    'ABJMOQ',
    'EEFHIY',
    'EHINPS',
    'DKNOTU',
    'ADENVZ',
    'BIFORX',
];