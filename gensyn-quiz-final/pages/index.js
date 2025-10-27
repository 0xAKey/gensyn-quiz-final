import Head from 'next/head';
import Quiz from '../components/Quiz';
import '../styles/globals.css';

export default function Home() {
  return (
    <div className="app-wrap">
      <Head>
        <title>Gensyn Neon Quiz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container">
        <div className="card neon">
          <header className="header">
            <h1 className="h1">Gensyn Neon Quiz</h1>
            <div className="leadin">One session — 10 questions. Prove your node knowledge.</div>
          </header>
          <Quiz />
          <footer className="footer">built by 0xAkey ⚡</footer>
        </div>
      </main>
    </div>
  );
}
