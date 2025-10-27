import { useState } from 'react';

const questions = [
  { q: 'What is RL-Swarm primarily used for?', a: ['Decentralized storage', 'Distributed AI training', 'NFT minting', 'DEX swaps'], correct: 1 },
  { q: 'What does Gensyn reward?', a: ['Uptime & completed rounds', 'GPU power', 'Wallet staking', 'Liquidity mining'], correct: 0 },
  { q: 'Which hardware type yields most stable rewards currently?', a: ['RTX 4090', 'Stable CPU VPS', 'Dual GPU setup', 'Mobile mining'], correct: 1 },
  { q: 'What command joins AI Prediction Market?', a: ['Type Y after gensyn prompt', 'Install gensyn-market', 'Join Discord', 'Sign with wallet'], correct: 0 },
  { q: 'BlockAssist requires minimum VRAM of?', a: ['4GB', '8GB', '16GB', '32GB'], correct: 2 },
  { q: 'What does Judge evaluate?', a: ['AI Predictions', 'Transaction speed', 'Network health', 'Node uptime'], correct: 0 },
  { q: 'Average block time of Gensyn testnet?', a: ['0.5s', '1s', '2s', '5s'], correct: 2 },
  { q: 'What’s the primary node role for RL tasks?', a: ['Swarm', 'Judge', 'Block', 'Pioneer'], correct: 0 },
  { q: 'Where can you rent GPU nodes fast?', a: ['AWS', 'OctaSpace', 'Vast.ai', 'RunPod'], correct: 1 },
  { q: 'Main color theme of Gensyn visuals?', a: ['Neon cyan & black', 'Red & gold', 'Blue & white', 'Orange & teal'], correct: 0 },
];

export default function Quiz() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (idx) => {
    if (idx === questions[i].correct) setScore(score + 1);
    if (i < questions.length - 1) setI(i + 1);
    else setFinished(true);
  };

  const shareOnX = () => {
    const text = encodeURIComponent(
      `🧠 I just scored ${score}/${questions.length} on the Gensyn Neon Quiz!\n\nTest your node knowledge too: https://gensyn-quiz-final.vercel.app ⚡\n\n#Gensyn #AICompute #DePIN`
    );
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  if (finished) {
    return (
      <div className="quiz">
        <h2>🎉 Quiz complete!</h2>
        <p>You scored <strong>{score}</strong> out of {questions.length}.</p>
        <button className="share-btn" onClick={shareOnX}>Share on X 🧵</button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <h2>{questions[i].q}</h2>
      <div className="options">
        {questions[i].a.map((opt, idx) => (
          <button key={idx} onClick={() => handleAnswer(idx)}>
            {opt}
          </button>
        ))}
      </div>
      <div className="progress">Question {i + 1} / {questions.length}</div>
    </div>
  );
}
