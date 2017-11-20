import React from 'react'
import s from './style.module.css'
import MaterialDesignIcon from '../../library/MaterialDesignIcon';

const formlayouts = () => (
  <div className='pageContainerGlobalClass'>
    <div className='pageMainContentGlobalClass'>
      <p className='pageTitleGlobalClass'>Form Layout</p>
      <p>
        Example form layout for top aligned and right aligned forms. Right aligned forms utilize the .form-horizontal class and have a margin of 8px beneath each .form-group whereas the default margin is 16px.
      </p>
      
      <div className={s.developerNoteContainer}>
        <MaterialDesignIcon name="info" />
        Developer note!  Follow the Bootstrap documentation on breakpoint classes. Bootstrap documentation.
      </div>
    </div>
    <div className='pageRightSideMenuGlobalClass'>
    </div>
  </div>
)

export default formlayouts
