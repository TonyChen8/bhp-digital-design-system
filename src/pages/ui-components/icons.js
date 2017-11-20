import React from 'react'
import Block from '../../components/block'
import s from './style.module.css'
import MaterialDesignIcon from '../../library/MaterialDesignIcon';
import colouredTruck from '../../library/images/iconpage-truck-no.png';
import bWTruck from '../../library/images/iconpage-truck-yes.png';


const Icons = () => (
  <div className='pageContainerGlobalClass'>
    <div className='pageMainContentGlobalClass'>
      <p className='pageTitleGlobalClass'>Icons</p>
      <p>
        We are promoting the use of Material design font icons.
      </p>
      <p>
        When you have to use a special icon (product / event / campaign…) we advise using SVG formats only.
      </p>
      <p>
        When creating stand alone icons, products icons, events icons ensure that you keep consistent the style, weight and size with the Material Font Icons.  All custom icons must be pixel perfect.
      </p>
      <p>
        To explore the custom icons library, please go to the download page.
      </p>
      <p className='subTitleGlobalClass'>Styling</p>
      <div className={s.stylingContainer}>
        <div className={s.colouredTruckContainer}>
          <img className={s.imgClass} src={colouredTruck} />
          <div className={s.textColouredTruck}></div>
          <div className={s.textStylingContainer}>
            <MaterialDesignIcon name='close' color='#f03a36' className={s.materialDesignIcon}/> WRONG<br />
            This icon does not follow the precise and colour<br /> neutral style preferred for BHP Digital styling.
          </div>
        </div>
        <div className={s.blackAndWhiteTruckContainer}>
          <img className={s.imgClass} src={bWTruck} />
          <div className={s.textBlackAndWhiteTruck}></div>
          <div className={s.textStylingContainer}>
            <MaterialDesignIcon name='check' color='#01ab8b' className={s.materialDesignIcon}/>CORRECT<br />
            Clean, precise, colour neutral and a smart use of<br /> negative space is preferred.
          </div>
        </div>
      </div>
      <br />
      <br />
      <button className={s.buttonIconPage}>
        BHP ICONS LIBRARY
      </button>
    </div>
      
  </div>
)

export default Icons
