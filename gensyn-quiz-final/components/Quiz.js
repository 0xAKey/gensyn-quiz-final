import { useState } from 'react';

const questions = [
  { q: 'What is RL-Swarm primarily used for?', a: ['Decentralized storage', 'Distributed AI training', 'NFT minting', 'DEX swaps'] },
  { q: 'What does Gensyn reward?', a: ['Uptime & completed rounds', 'GPU power', 'Wallet staking', 'Liquidity mining'] },
  { q: 'Which hardware type yields most stable rewards currently?', a: ['RTX 4090', 'Stable CPU VPS', 'Dual GPU setup', 'Mobile mining'] },
  { q: 'What command joins AI Prediction Market?', a: ['Type Y after gensyn prompt', 'Install gensyn-market', 'Join Discord', 'Sign with wallet'] },
  { q: 'BlockAssist requires minimum VRAM of?', a: ['4GB', '8GB', '16GB', '32GB'] },
  { q: 'What does Judge evaluate?', a: ['AI Predictions', 'Transaction speed', 'Network health', 'Node uptime'] },
  { q: 'Average block time of Gensyn testnet?', a: ['0.5s', '1s', '2s', '5s'] },
  { q: 'What’s the primary node role for RL tasks?', a: ['Swarm', 'Judge', 'Block', 'Pioneer'] },
  { q: 'Where can you rent GPU nodes fast?', a: ['AWS', 'OctaSpace', 'Vast.ai', 'RunPod'] },
  { q: 'Main color theme of Gensyn visuals?', a: ['Neon cyan & black', 'Red & gold', 'Blue & white', 'Orange & teal'] },
];

export default function Quiz() {
  const [i, setI] = useState(0);
  const [finished, setFinished] = useState(false);

  const nextQuestion = () => {
    if (i < questions.length - 1) setI(i + 1);
    else setFinished(true);
  };

  if (finished) {
    return (
      <div className="quiz">
        <h2>🎉 Quiz complete!</h2>
        <p>You’ve proven your Gensyn knowledge. 🧠</p>
      </div>
    );
  }

  return (
    <div className="quiz">
      <h2>{questions[i].q}</h2>
      <div className="options">
        {questions[i].a.map((opt, idx) => (
          <button key={idx} onClick={nextQuestion}>
            {opt}
          </button>
        ))}
      </div>
      <div className="progress">Question {i + 1} / {questions.length}</div>
    </div>
  );
}
