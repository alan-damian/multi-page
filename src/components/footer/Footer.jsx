import icono from './iconGithub.png';

import styles from './Footer.module.css';

const Footer = ()=>{
    return(
        <div class={`${styles.container}card text-center contenedor`}>
            <div class="card-header"></div>
            <div class="card-body">
                <a href="https://github.com/alan-damian" class="btn">
                    <img src={icono} class="img-fluid" alt="github"/>
                </a>
            </div>

        </div>
    )
}

export default Footer;