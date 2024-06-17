import { useState  } from "react";
/* Memo
export...外部からのアクセスを許可
default...コードを使用する他のファイルにこれがこのファイルのメイン関数であることを示す
button className=...はボタンプロパティで「props」と呼ばれる
*/
function Square({value,onSquareClick}){
  
  return (
    <>
  <button className="square"
  onClick={onSquareClick}>
    {value}
    </button>
  </>
  );
}
export default function Board() {
  const [squares,setSequares] = useState(Array(9).fill(null));//nullの配列が9個
  
  function handleClick(i){
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSequares(nextSquares);
  }
  
  return (
    <>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
      <Square value={squares[1]} onSquareClick={()=>handleClick(1)} />
      <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
    </div>
  
    <div className="board-row">
    <Square value={squares[3]}  onSquareClick={()=>handleClick(3)} />
    <Square value={squares[4]}  onSquareClick={()=>handleClick(4)} />
    <Square value={squares[5]}  onSquareClick={()=>handleClick(5)} />
    </div>

    <div className="board-row">
    <Square value={squares[6]}  onSquareClick={()=>handleClick(6)} />
    <Square value={squares[7]}  onSquareClick={()=>handleClick(7)} />
    <Square value={squares[8]}  onSquareClick={()=>handleClick(8)} />
    </div>
  
  </>
  );
}

