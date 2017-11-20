import React from 'react'
import s from './style.module.css'
import MaterialDesignIcon from '../../library/MaterialDesignIcon';

const grid = () => (
  <div className='pageContainerGlobalClass'>
    <div className='pageMainContentGlobalClass'>
      <p className='pageTitleGlobalClass'>Grid</p>
      <p>
        Our grid uses the Bootstrap grid system but we have doubled it to 24 columns for our needs. We also use a 20px gutter which is 10px on either side of a column.
      </p>
      <p><strong>Columns</strong></p>
      <p>
        To instantiate a row, simply add a div with the class dws_row
      </p>
      <p>
        Within the row, adding elements with the classes dws_col-1 through to dws_col-12 will create columns that occupy 1/12th through to 12/12th's respectively. Any combination of widths can be used, with gutters automatically inserted between.
      </p>
      <p><strong>Column Offsets</strong></p>
      <p>The classes dws_col-offset-1 through to dws_col-offset-11 can be used to offset the current column by 1 to 11 columns respectively.</p>
      <div className={s.developerNoteContainer}>
        <MaterialDesignIcon name="info" />
        Developer note!  Follow the Bootstrap documentation on breakpoint classes. Bootstrap documentation.
      </div>
    </div>
    <div className='pageRightSideMenuGlobalClass'>
      <a className={s.pageRightSideMenuAnchor} href='#Guide'>Guide</a>
      <a className={s.pageRightSideMenuAnchor} href='#cheat_sheet'>Cheat sheet</a>
    </div>
  </div>
)

export default grid
