import React, { useState, useRef, useEffect } from 'react';
import styles from './Diseño.module.css'
import Moderno from '../assets/img/modernoArte.jpg'
import Escultura from '../assets/img/esculturaArte.jpg'
import Foto from '../assets/img/fotoArte.jpg'
import Interactivo from '../assets/img/interactivoArte.jpg'

const Diseño = () => {

  //herramienta de dibujo

  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState('black');
  const [lineCap, setLineCap] = useState('round');
  const [lineJoin, setLineJoin] = useState('round');


  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
    }
  }, [canvasRef]);

  const handleMouseDown = (event) => {
    setDrawing(true);
    if (ctx.current) {
      ctx.current.lineWidth = lineWidth;
      ctx.current.lineCap = lineCap;
      ctx.current.lineJoin = lineJoin;
      ctx.current.strokeStyle = lineColor;
      const rect = canvasRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      ctx.current.beginPath();
      ctx.current.moveTo(x, y);
    }
  };
  
  const handleMouseMove = (event) => {
    if (drawing && ctx.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      ctx.current.lineTo(x, y);
      ctx.current.stroke();
    }
  };
  const handleMouseUp = () => {
    setDrawing(false);
  };

  const handleLineWidthChange = (event) => {
    setLineWidth(event.target.value);
    if (ctx.current) {
      ctx.current.lineWidth = event.target.value;
    }
  };
  const handleLineColorChange = (event) => {
    setLineColor(event.target.value);
    if (ctx.current) {
      ctx.current.strokeStyle = event.target.value;
    }
  };

  const handleLineCapChange = (event) => {
    setLineCap(event.target.value);
    if (ctx.current) {
      ctx.current.lineCap = event.target.value;
    }
  };

  const handleLineJoinChange = (event) => {
    setLineJoin(event.target.value);
    if (ctx.current) {
      ctx.current.lineJoin = event.target.value;
    }
  };

  const clearCanvas = () => {
    if (ctx.current) {
      ctx.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };


  return (
    <div className={styles.container}>
      <h1 className={styles.tituloDis}>DISEÑO</h1>
      <p>GALERIAS DE ARTE PARA VISITAR</p>
      <section className={styles.tarj}>

        <div class="animate__animated animate__flipInX">
        <div  className={styles.card}>
          <a href='https://www.catawiki.com/es/c/117-arte-moderno-y-contemporaneo?utm_medium=Sem&utm_campaign=%5BS%5D-Perf-ES-ES-Art-no_l1-B-New-Acq-Bing&utm_source=Bing&utm_term=%7BES_Spanish_Search%7D&utm_content=1260041277725136&msclkid=08b180ea03b11cc7bd1ce6487a122ab1&gclid=08b180ea03b11cc7bd1ce6487a122ab1&gclsrc=3p.ds' >
          <img src={Moderno} className={styles.cardImg} alt="arte" />
          <div className={styles.cardBody}>
            <p className={styles.cardText}><br></br>Arte moderno y contemporáneo</p>
          </div>
          </a>
        </div>
        </div>

        <div class="animate__animated animate__flipInX">
        <div className={styles.card}>
          <a href='https://buysculpture.es/esculturas/'>
          <img src={Escultura} className={styles.cardImg} alt="arte" />
          <div className={styles.cardBody}>
            <p className={styles.cardText}><br></br>Arte en esculturas de diversos tipos y materiales</p>
          </div>
          </a>
        </div>
        </div>

        <div class="animate__animated animate__flipInX">
        <div className={styles.card}>
          <a href='https://www.yellowkorner.com/es/home'>
          <img src={Foto} className={styles.cardImg} alt="arte" />
          <div className={styles.cardBody}>
            <p className={styles.cardText}><br></br>Arte fotográfico cotidiano y excéntrico</p>
          </div>
          </a>
        </div>
        </div>
      
        <div class="animate__animated animate__flipInX">
        <div className={styles.card}>
          <a href='https://artsandculture.google.com/'>
          <img src={Interactivo} className={styles.cardImg} alt="arte" />
          <div className={styles.cardBodyG}>
            <p className={styles.cardText}><br></br>Galeria de arte interactiva en google</p>
          </div>
          </a>
        </div>
        </div>

      </section>
      <div className={styles.canvaContainer}>
        <h1 className={styles.h1}>Herramienta de Dibujo</h1>
        <div>
          <canvas
            ref={canvasRef}
            width={900}
            height={690}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          />
          <div>
            <label>Grosor:</label>
            <input
              type="range"
              min="1"
              max="50"
              value={lineWidth}
              onChange={handleLineWidthChange}
            />
            <label>Color:</label>
            <input 
              type="color"
              value={lineColor}
              onChange={handleLineColorChange}
            />
            <label>Trazo:</label>
            <select className={styles.btnArt} value={lineCap} onChange={handleLineCapChange}>
              <option value="butt">Inverso</option>
              <option value="round">Redondeado</option>
              <option value="square">Cuadrado</option>
            </select>
            <label>Union de linea:</label>
            <select className={styles.btnArt} value={lineJoin} onChange={handleLineJoinChange}>
              <option value="bevel">Bisel</option>
              <option value="round">Redonda</option>
              <option value="miter">Recta</option>
            </select>
            <button className={styles.btnArt} onClick={clearCanvas}>Borrar Dibujo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diseño;