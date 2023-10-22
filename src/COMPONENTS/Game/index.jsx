import { useEffect, useState } from 'react';
import style from './styles.module.css'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [Player, setPlayer] = useState("X");
    const [Title, setTitle] = useState('')

    const handleCellClick = (index) => {
        if (!board[index] && !calculateWinner(board)) {
            const newBoard = [...board];
            newBoard[index] = Player;
            setBoard(newBoard);
            setPlayer(Player === "X" ? "O" : "X");
        }
    };

    const calculateWinner = (board) => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    const handleReset = () => {
        setBoard(Array(9).fill(null));
        setPlayer("X");
    };

    useEffect(() => {
        const winner = calculateWinner(board);
        if (winner) {
            setTitle(`Победил ${winner}!`)
            handleReset();
        } else if (!board.includes(null)) {
            setTitle('Ничья')
            handleReset();
        }
    }, [board]);

    return (
        <div style={{display: 'grid', placeItems: 'center'}}>
            {Title && (
                <div className={style.BoxPlayer}>
                    <h1>{Title}</h1>
                    <button className={style.ButtonOk} onClick={() => {setTitle('')}}>ОК</button>
                </div>
            )}
            <div className={style.BoxCell}>
                {board.map((cell, index) => (
                    <div
                        key={index}
                        style={{ border: '0.1vw solid aquamarine', width: '10vw', height: '10vw', display: 'grid', placeItems: 'center', fontSize: '7vw' }}
                        className={cell === "X" ? style.CellX : style.CellO}
                        onClick={() => handleCellClick(index)}
                    >
                        {cell}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Game;