/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './Marketing.module.css'




const Marketing = () => {


  
  return (
    <div className={styles.container}>
      <h1 className={styles.tituloMark}>MARKETING</h1>

      <div className={`${styles.cabeceraCont}`}>
        <section className={styles.cabecera}>
          <div class={`${styles.card} card animate__animated animate__flipInX`}>
            <div class={`${styles.cardBody} card-body `}>
              <h5 className={`${styles.cardTitle} card-title`}>Redes sociales y paginas personales.</h5>
              <p class="card-text">Algunos artículos sobre manejo de contenido online</p>
              <br></br>
              <br></br>
            </div>
          </div>
        </section>
      </div>


      <section className={styles.marketingContent}>
        <p>marketing es una filosofía y metodología que abarca el proceso de exploración, creación y entrega de valor para satisfacer las necesidades de un mercado objetivo en términos de bienes y servicios. Es uno de los componentes principales de la gestión empresarial y el comercio, incluyendo principalmente la identificación de las necesidades, gustos, y preferencias de uno o más segmentos de consumidores para posicionar una oferta de valor de manera diferenciada con la competencia..</p>
        <a href='https://es.wikipedia.org/wiki/Mercadotecnia'><button className={styles.ctaButton}>Mas</button></a>

        <h1 className={styles.descripciones}>Descripciones útiles</h1>

        <div className={styles.modals}>
          <div>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
              Digital
            </button>


            <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel1" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel1">En las redes</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  El marketing digital es el proceso de utilizar los canales online para promocionar y vender productos o servicios.

                  Implica el uso de diversas herramientas y plataformas digitales para llegar a los clientes y captarlos.

                  Esto puede incluir cosas como la optimización de los motores de búsqueda (SEO), la publicidad de pago por clic (PPC), el marketing en las redes sociales, el marketing por correo electrónico, etc.

                  Con el marketing digital, las empresas pueden llegar a una gran audiencia de forma rápida y eficaz.

                  Con tantas personas que utilizan Internet cada día, es una forma ideal de llegar a clientes potenciales y promocionar su producto o servicio.

                  Además, el marketing digital es muy rentable, especialmente si se compara con los métodos de marketing tradicionales, como la publicidad impresa o televisiva.

                  Si está pensando en promocionar su negocio en Internet, el marketing digital es una gran opción a tener en cuenta.
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
              Ambulante
            </button>


            <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel2" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel2">En la via publica</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  El street marketing, también conocido como marketing de guerrilla, es una forma única y creativa de promocionar productos, servicios o eventos directamente en el entorno urbano. A través de tácticas no convencionales y sorprendentes, las empresas pueden captar la atención de su público objetivo en lugares públicos, generando un impacto duradero. Para desarrollar una estrategia de street marketing, es importante planificar la campaña, obtener permisos de utilización de espacio público, difundir las campañas apoyándose en el marketing digital, buscar el lado emocional para impresionar al público y grabar las escenas en vídeo.
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
              Herramientas
            </button>


            <div class="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel3" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel3">SEO</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  El SEO (o Search Engine Optimization) es el conjunto de prácticas de marketing que se realizan para aumentar la visibilidad de un sitio web en los resultados de los motores de búsqueda. Estos esfuerzos permiten que haya un mayor tráfico de visitantes, lo que aumenta las conversiones y potenciales clientes de la empresa. En español, también se puede traducir al SEO como la optimización en los motores de búsqueda. El objetivo principal es que los consumidores encuentren fácilmente tu sitio cuando buscan un producto o servicio a través de un motor de búsqueda.<br></br> 
                  Es una practica muy util, que bien implementada proporciona una gran ventaja.
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">
              Metodos
            </button>


            <div class="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel4" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel4">Metodologías</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  <>Hay dos caras de la mercadotecnia: la mercadotecnia estratégica y la mercadotecnia operativa.</><br></br> <>La <b>mercadotecnia estratégica</b> es el elemento que define y encuadra las líneas maestras de comunicación y comercialización de la empresa, para aprovechar las oportunidades del mercado.</>
                  <br></br><>La <b>mercadotecnia operativa</b> es la puesta en práctica de la estrategia de mercadotecnia y del plan periódico a través de las variables de mercadotecnia mix: producto, precio, promoción y punto de venta o distribución.</>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


      </section>

    </div>
  );
};

export default Marketing;

//my api key <<  354dcc78cdmsh2aa724d5a45a9a4p11e9c1jsn87d3a0725747