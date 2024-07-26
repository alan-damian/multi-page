import React, {useState} from 'react';
import styles from './Home.module.css';
import axios from 'axios';

import Nissan from '../assets/img/GTR-WALLPAPER.jpg';
import City from '../assets/img/cityWallpaper.jpg';
import Land from '../assets/img/landWallpaper.jpg';

const API_URL = 'https://api.unsplash.com/search/photos'; // API de Unsplash

const Home = () => {
  //array para los objetos
  const [cars, setCars] = useState([  ]);

  // estado para almacenar las imágenes seleccionadas
  const [images, setImages] = useState({});

  //array para almacenar nuevos objetos
  const [newCar, setNewCar] = useState({ name: '', description: '' });

  // función para buscar imágenes en la API
  const handleImageSearch = (description) => {
    axios.get(`${API_URL}?query=${description}&client_id=Rh5G7vaeP8mxMyu3TWqnC3qu3SPq1t1rnrcpvRQkBVI`)
     .then((response) => {
        const image = response.data.results[0];
        setImages((prevImages) => {
          prevImages[description] = image.urls.small;
          return prevImages;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //agrega nuevo objeto desde "newCar" hacia "cars"( luego resetea "newCar")
  const handleAddCar = () => {
    if (newCar.name.trim() === '' || newCar.description.trim() === '') {
      alert('Ups! parece que dejaste algo vacío.');
      saveCarsToLocalStorage(); // Guarda los datos en localStorage
      return;
    }
    handleImageSearch(newCar.description); // buscar imagen relacionada con la descripción
    setCars([...cars, { id: cars.length + 1, name: newCar.name, description: newCar.description }]);
    setNewCar({ name: '', description: '' });
  };

  //cambia el valor de "newCar" cuando se modifica el input
  const handleInputChange = (event) => {
    setNewCar({...newCar, [event.target.name]: event.target.value });
  };

  const handleDeleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  //almacenar los cambios de lista de cars en localhost
  const saveCarsToLocalStorage = () => {
    localStorage.setItem('cars', JSON.stringify(cars));
  };

  return (
    <div className={styles.contenedor}>
      <h1 className={styles.tituloHome}>INICIO</h1>
      <div class="animate__animated animate__jackInTheBox">
      <p className={styles.parr}>Añade fotos especificas con el creador de tarjetas</p>
      </div>

      <section className={styles.tarj}>
        {/* "map" renderiza una lista de tarjetas para cada lista de coches */}
        
        <div className={styles.card}>
          <img src={Nissan} alt="Nissan" className={styles.cardImg} />
          <div className={`${styles.cardBody} card-body`}>
            <p>sport car</p>
          </div>
        </div>

        <div className={styles.card}>
          <img src={Land} alt="Nissan" className={styles.cardImg} />
          <div className={`${styles.cardBody} card-body`}>
            <p>mountain</p>
          </div>
        </div>

        {cars.map((car) => (
          <div key={car.id} className={styles.newCard}>
            <img src={images[car.description] || City} className={`${styles.cardImg} card-img-top`} alt={car.name} />
            <div className={`${styles.cardBody} card-body`}>
              <p className="card-text">{car.name}</p>
              <button onClick={() => handleDeleteCar(car.id)}>Borrar</button>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.form}>
        <h2>Agrega tarjetas</h2>
        <input
          type="text"
          name="name"
          value={newCar.name}
          onChange={handleInputChange}
          placeholder="Nombre (perrito)"
        />
        <input
          type="text"
          name="description"
          value={newCar.description}
          onChange={handleInputChange}
          placeholder="Descripción en ingles(little dog)"
        />
        <button onClick={handleAddCar}>Añadir</button>
        <h6>las tarjetas no son permanentes, al recargar pagina se perderán</h6>
      </section>

      <h2>Descubre lo que puedes hacer</h2>
      <p>estas son algunas cosas</p>

      <section className={styles.banner}>

        <div>
        <p>
          <button class="btn btn-warning rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample-1" aria-expanded="false" aria-controls="collapseWidthExample">
            Crear tarjetas
          </button>
        </p>
        <div className={styles.collCard}>
          <div class="collapse collapse-horizontal" id="collapseWidthExample-1">
            <div className={`${styles.collDiv}`}>
              En la pagina "INICIO" puedes crear tarjetas personalizadas, elije el texto que contendrá la tarjeta y luego describe la imagen adecuada (recuerda escribir en ingles para un mejor resultado de búsqueda)
            </div>
          </div>
        </div>
        </div>

        <div>
        <p>
          <button class="btn btn-warning rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample-2" aria-expanded="false" aria-controls="collapseWidthExample">
            Dibujar
          </button>
        </p>
        <div className={styles.collCard}>
          <div class="collapse collapse-horizontal" id="collapseWidthExample-2">
            <div className={`${styles.collDiv}`}>
              En la sección de "DISEÑO" existe una herramienta de dibujo con elementos básicos para que te entretengas un poco.
            </div>
          </div>
        </div>
        </div>


        <div>
        <p>
          <button class="btn btn-warning rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample-3" aria-expanded="false" aria-controls="collapseWidthExample">
            investigar
          </button>
        </p>
        <div className={styles.collCard}>
          <div class="collapse collapse-horizontal" id="collapseWidthExample-3">
            <div className={`${styles.collDiv}`}>
              En la sección "MARKETING" hay artículos interesantes sobre estrategias y conceptos usados en publicidad.
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};


export default Home;