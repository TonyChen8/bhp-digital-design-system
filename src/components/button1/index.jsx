import React, { Component } from 'react';
import s from './style.module.css';

import classnames from 'classnames';
import MaterialDesignIcon from '../../library/MaterialDesignIcon';


class Buttons extends React.Component {
  render() {
    return (
      <div>
        <div className={s.cardBlockText}>
          Example
        </div>
        <div>
          <button type="button" className={classnames(s.btn, s.btnPrimary)}>PRIMARY</button>&nbsp;
          <button type="button" className={classnames(s.btn, s.btnDefault)}>DEFAULT</button>&nbsp;
          <button type="button" className={classnames(s.btn, s.btnHover)}>HOVER</button>&nbsp;
          <button type="button" className={classnames(s.btn, s.btnDisabled)}>DISABLED</button>&nbsp;
          <button type="button" className={classnames(s.btn, s.btnDelete)}>DELETE</button>&nbsp;
        </div>
      </div>
    )
  }
}


class DarkThemeButtons extends React.Component {
  render() {
    return (
      <div>
        <div className={s.cardBlockText}>
          Dark Theme
        </div>
        <div>
          <button type="button" className={classnames(s.btn, s.btnPrimary, s.btnPrimaryDark)}>PRIMARY</button>&nbsp;
          <button type="button" className={classnames(s.btn, s.btnDefault, s.btnDefaultDark)}>DEFAULT</button>&nbsp;
          <button type="button" className={classnames(s.btn, s.btnHover, s.btnHoverDark)}>HOVER</button>&nbsp;
          <button type="button" className={classnames(s.btn, s.btnDisabled, s.btnDisabledDark)}>DISABLED</button>&nbsp;
          <button type="button" className={classnames(s.btn, s.btnDelete)}>DELETE</button>&nbsp;
          <button type="button" className={classnames(s.btn, s.btnLinkDark)}>LINK</button>&nbsp;
        </div>
      </div>
    )
  }
}

class VariationThemeButtons extends React.Component {
  render() {
    return (
      <div>
        <div className={s.cardBlockText}>
          Example
        </div>
        <div>
          <button type="button" className={classnames(s.btn, s.btnSuccess)}>SUCCESS</button>&nbsp;
          <button type="button" className={classnames(s.btn, s.btnInfo)}>INFO</button>&nbsp;
          <button type="button" className={classnames(s.btn, s.btnWarning)}>WARNING</button>&nbsp;
          <button type="button" className={classnames(s.btn, s.btnDanger)}>DANGER</button>&nbsp;
          <button type="button" className={classnames(s.btn, s.btnLink)}>LINK</button>&nbsp;
          <button type="button" className={classnames(s.btn, s.btnSecondSuccess)}>SUCCESS</button>&nbsp;
        </div>
      </div>
    )
  }
}

class IconThemeButtons extends React.Component {
  render() {
    return (
      <div>
        <div className={s.cardBlockText}>
          Example
        </div>
        <div>
          <MaterialDesignIcon name={miName} className={s.materialDesignIcon}/>
        </div>
      </div>
    )
  }
}

module.exports = {
   Buttons,
   DarkThemeButtons,
   VariationThemeButtons
}
