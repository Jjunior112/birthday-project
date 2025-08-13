import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/Eu Amo Você.mp3" type="audio/mpeg" />
        Seu navegador não suporta áudio HTML5.
      </audio>

      <nav>
        <ul>
          <li><a href="#message">Textão</a></li>
          <li><a href="#lembrancas">Lembranças</a></li>
          <li>
            <button onClick={playPause}>
              {isPlaying ? "Pausar música" : "Tocar música"}
            </button>
          </li>
        </ul>
      </nav>
      <section className='image'>

      </section>


      <section className="message" >

        <h1 id='message'>🎉Feliz Aniversário, meu amor!🥳</h1>

        <p>Essa foi uma maneira que consegui achar para tentar mostrar o quanto você é especial na minha vida. </p>
        <p> De te lembrar que nem o tempo ou a distância foram capazes de nos separar. ❤️</p>

        <p>Te desejo toda a felicidade do mundo, sonhos, metas, conquistas. Que possamos passar várias datas como essa juntos.🎁 </p>

        <p>Que Deus continue te abençoando e te dê muuuuuuuuitos anos de vida. 🎉</p>


        <h2>Eu amo você, menina!!! 💙 </h2>

      </section>

      <section className='image'>

      </section>


      <div>

        <h1 id='lembrancas'>Lembranças</h1>

        <section className='lembrancas'>

          <div>
            <img src="foto7.jpg" alt="" />
            <p>Primeira foto juntos</p>
            <p>dezembro de 2019</p>
            <p>
              |
            </p>

          </div>

          <div>
            <img src="foto8.jpg" alt="" />
            <p>Primeiro ano novo juntos</p>
            <p>dezembro de 2019</p>
            <p>
              |
            </p>
          </div>

          <div>
            <img src="foto10.jpg" alt="" />
            <p>Primeira foto juntos na Bahia</p>
            <p>dezembro de 2020</p>
            <p>
              |
            </p>
          </div>

          <div>
            <img src="foto6.jpg" alt="" />
            <p>Primeiro culto na Bahia</p>
            <p>dezembro de 2020</p>
            <p>
              |
            </p>
          </div>

          <div>
            <img src="foto1.jpg" alt="" />
            <p>Primeira vez juntos na praia</p>
            <p>Dezembro de 2020</p>
            <p>
              |
            </p>
          </div>

          <div>
            <img src="foto12.jpg" alt="" />
            <p>Primeiro culto juntos em MG juntos</p>
            <p> novembro de 2021</p>
            <p>
            </p>

          </div>

          <div>
            <img src="foto9.jpg" alt="" />
            <p>Primeira reunião de mocidade juntos</p>
            <p> março de 2023</p>
            <p>
              |
            </p>
          </div>

          <div>
            <img src="foto11.jpg" alt="" />
            <p>Nossa última foto juntos </p>
            <p> junho de 2025</p>
            <p>
              |
            </p>
          </div>

        </section>

        <div className='timeline'>

        </div>

      </div>

      <footer>Aniversário da melhor do mundo</footer>


    </>
  )
}

export default App
