import { useState } from 'react';

export default function App() {
  const [showB, setShowB] = useState(true);
  const [isFancy, setIsFancy] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <div>
      <Counter isFancy={isFancy} /> {/* Pass isFancy as a prop */}
      {showB && <Counter isFancy={isFancy} />} {/* Pass isFancy as a prop */}
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={(e) => {
            setShowB(e.target.checked);
          }}
        />
        Render the second counter
      </label>

      {isFancy ? (
        <Counter isFancy={true} />
      ) : (
        <Counter isFancy={false} />
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        Use fancy styling
      </label>

      {isPaused ? (
        <p>See you later!</p>
      ) : (
        <Counter />
      )}
      <label>
        <input
        type="checkbox"
        checked={isPaused}
        onChange={e => {
          setIsPaused(e.target.checked)
        }}
        />
        Take a break
      </label>

      {isPlayerA &&
        <Counter2 person="Taylor"/>
      } 

        {!isPlayerA &&
        <Counter2 person="Sarah"/>
        } 
      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>Next Player!</button>
    </div>
  );
}

function Counter({ isFancy}) { // Receive isFancy as a prop
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (isFancy) {
    className += ' fancy';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}

function Counter2({ person}) { // Receive isFancy as a prop
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      
      <h1>{person}'s score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}


