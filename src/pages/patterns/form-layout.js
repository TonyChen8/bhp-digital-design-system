import React from 'react'
import s from './style.module.css'
import MaterialDesignIcon from '../../library/MaterialDesignIcon';
import Highlight from 'react-highlight';
import _ from 'lodash'
import classnames from 'classnames';

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
      <div>
        <p className='subTitleGlobalClass'>Top aligned</p>
        <div className='componentAndCodeContainerGlobalClass'>
          <p>Example</p>
          <form className={s.form}>
            <div className={s.formGroup}>
                <label>Default text input</label>
                <input name="name" type="text" value="" />
            </div>
            <div className={s.formGroup}>
                <label>Default text input</label>
                <input name="name" type="text" value="" />
            </div>
            <div className={s.formGroup}>
                <label>Default text input</label>
                <input name="name" type="text" value="" />
            </div>
          </form>
          <Highlight className={classnames('html')}>
            <pre>{`
<form>
  <div class="form-group">
      <label>Default text input</label>
      <input name="name" type="text" value="" />
  </div>
  <div class="form-group">
      <label>Default text input</label>
      <input name="name" type="text" value="" />
  </div>
  <div class="form-group">
      <label>Default text input</label>
      <input name="name" type="text" value="" />
  </div>
</form>`
            }
            </pre>
          </Highlight>
        </div>
      </div>
      
      
      
      <div>
        <p className='subTitleGlobalClass'>Right aligned</p>
        <p>Right aligned forms use the grid for structure and .form-horizontal for a wrapper class and .control-label on the labels.</p>
        <div className='componentAndCodeContainerGlobalClass'>
          <p>Example</p>
          <form className={s.formHorizontal}>
            <div className={s.formGroup}>
                <label>Default text input</label>
                <input name="name" type="text" value="" />
            </div>
            <div className={s.formGroup}>
                <label>Default text input</label>
                <input name="name" type="text" value="" />
            </div>
            <div className={s.formGroup}>
                <label>Default text input</label>
                <input name="name" type="text" value="" />
            </div>
            </form>
            

          <Highlight className={classnames('html')}>
            <pre>
              {`
<form>
  <div class="form-group">
      <label>Default text input</label>
      <input name="name" type="text" value="" />
  </div>
  <div class="form-group">
      <label>Default text input</label>
      <input name="name" type="text" value="" />
  </div>
  <div class="form-group">
      <label>Default text input</label>
      <input name="name" type="text" value="" />
  </div>
</form>`
              }
            </pre>
          </Highlight>
          </div>
        </div>      
    </div>
    <div className='pageRightSideMenuGlobalClass'>
    </div>
  </div>
)

export default formlayouts
