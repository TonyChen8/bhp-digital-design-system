import React from 'react'
import Link from 'gatsby-link'
import s from './style.module.css';
import classnames from 'classnames';
import MaterialDesignIcon from '../library/MaterialDesignIcon';

const DesignPrinciples = () => (
  <div>
  <div className={s.thinkBigContainer}>
    <p>Think big.</p>
  </div>
      <div className={s.firstHalfofPage}>
      <div className={s.designPrinciplesParagraph}>
        <span className={s.mainHeading}>Our Design Principles are the building blocks<br /></span>
        <span className={classnames(s.mainHeadingSecond, s.mainHeading)}>that make up the foundation of digital projects at BHP.</span>
        <p className={s.subTitlePara}>
          We are opening our brand to everyone. Our aim is to be transparent in our communications organization wide and
          we want to share systems, voices and the elements that make BHP the brand it is today.
        </p>
      </div>
        <div className={s.mainContentofPage}>
        <h3 className={s.subTitle}>Be contextual</h3>
        <p>
          Understand the context of the situation that the person is in, and therefore how they may think, perceive
          information or perform tasks different under those circumstances. Support the user to achieve their goal and
          accomplish their tasks by presenting them with the information and options where and when it counts (i.e. at
          the point of need).
        </p>
        <h3 className={s.subTitle}>Be human</h3>
        <p>
          Understand that we are designing for humans, which requires taking into consideration that mistakes will be
          made, that people want to be in control, want things to work (the first time) the way they think it will
          (or should). However, this also means that they will be understanding if you can show an honest attempt to
          help them solve their problems. Overall, this means that we should aim to make the interface and content look
          and feel like an interaction with a human, not a machine.
        </p>
        <h3 className={s.subTitle}>Be findable</h3>
        <p>
          By creating a consistent user interface we can provide a layer of logic for users to learn and remember where
          to go, what to see and what actions they need to perform. Making things findable also means that it should
          tailor for beginners with no prior experience that need to be able to pick things up quickly, and for
          experienced users to become proficient if they are being asked to change from an existing application which
          they are familiar with to a new application.
        </p>

        <h3 className={s.subTitle}>Be easy</h3>
        <p>
          The level of usability should be such that it requires no special expertise or domain knowledge when it comes
          to common or basic features. Special or customized functionalities should be just complex enough to ensure the
          task can be completed successfully without spending time on working out how to perform the task.
        </p>

        <h3 className={s.subTitle}>Be simple</h3>
        <p>
          The number of different views should be kept to a minimum. The level of content density should be appropriate
          for the task at hand. The amount of choices should be limited so that the decisions that they have to make are
          not overwhelming or hidden.
        </p>
      </div>
       </div>
      <div className={s.secondHalfofPage}>
        <div className={s.designersBlock}>
          <p className={s.forDevelopers}>
            <MaterialDesignIcon name='mode_edit' color='#e65400' fontSize= '30px' className='materialDesignIcon' />    
            &nbsp;For Designers
          </p>
            <span>Consistency</span>
            <p>Experiences are familiar and act as expected.</p>

            <span>Performance</span>
            <p>Tasks are completed as accurately and as quickly as possible.</p>

            <span>Craftmanship</span>
            <p>Engage emotion through delightful, considered experiences.</p>

            <span>User first</span>
            <p>The experience should adapt based on needs.</p>

            <span>Helpful</span>
            <p>Continual support through guidance.</p>
        </div>
        <div className={s.developersBlock}>
        
          <p className={s.forDevelopers}>
            <MaterialDesignIcon name='settings_ethernet' color='#e65400' fontSize= '30px' className='materialDesignIcon' />
            &nbsp;For Developers
          </p>
          <span>Consistency</span>
          <p>Ensure your work is sustainable and flexible.</p>

          <span>Performance</span>
          <p>Be content-agnostic, develop for generic use first.</p>

          <span>Craftmanship</span>
          <p>Reuse as much as possible: technologies and components.</p>

          <span>User first</span>
          <p>Keep it simple.</p>

          <span>Helpful</span>
          <p>Leave code in a better state than you found it.</p>
        </div>
         
     </div> </div>
)

export default DesignPrinciples
