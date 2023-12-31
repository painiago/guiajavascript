import React, { useState } from 'react';
import styles from './styles.module.scss';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Projetos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const media = [
    { type: "video", src: '<iframe src="https://player.vimeo.com/video/857724178" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>', title: "Vídeo do Projeto 1", alt: '1' },
    { type: "video", src: '<iframe src="https://player.vimeo.com/video/857726662" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>', title: "Vídeo do Projeto 2", alt: '2' },
    { type: "video", src: '<iframe src="https://player.vimeo.com/video/895274036" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>', title: "Vídeo do Projeto 2", alt: '3' },
    { type: "video", src: '<iframe src="https://player.vimeo.com/video/895271586" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="GTA6"></iframe>', title: "Vídeo do Projeto 2", alt: '4' }

  ];

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? media.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === media.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <section className={styles.containerMain}>
        <div className={styles.containerSec}>
      <h2>Projetos com JavaScript</h2>
      <div className={styles.container}>
        <div className={styles.gridItem}>
        <div className={styles.videoWrapper}>
          <div dangerouslySetInnerHTML={{ __html: media[activeIndex].src }} />
        </div>
        </div>
        <div className={styles.controls}>
          <button onClick={handlePrevClick} className={styles.btnPrev}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button onClick={handleNextClick} className={styles.btnNext}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Projetos;
