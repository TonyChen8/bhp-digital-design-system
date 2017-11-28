import React from 'react'
import Link from 'gatsby-link'
import Button from '../../components/button'
import Block from '../../components/block'
import s from './style.module.css'
import {BarChart, Bar, XAxis,Cell, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts'

class uiColours extends React.Component {
  
  render() {
    const data = [
      {name: 'Category 1', uv: 5000, amt: 8000, color: '#0e91ac'},
      {name: 'Category 2', uv: 7500, amt: 8000, color: '#e65400'},
      {name: 'Category 3', uv: 3500, amt: 8000, color: '#0c637c'},
      {name: 'Category 4', uv: 5500, amt: 8000, color: '#2da3d7'},
    ];
    return (
      <div className='pageContainerGlobalClass'>
        <div className='pageMainContentGlobalClass'>
          <p className='pageTitleGlobalClass'>UI Colours</p>
          <p>
            Our colour system includes seven distinct families; each consisting of four shades or groups.
            Whilst we have a broad range to select from, Orange 1 is the preferred colour family for digital and Apps and
            work with that colour’s range to ensure we do not have multiple colour families competing on the same page.
          </p>
          <p className='subTitleGlobalClass' id="Type">Type</p>
          <div className={s.buttonContainer}>
            <Button
              name={'Click to copy #333333'}
              backgroundColor= '#333333'
              buttonText= '$black'
            />
            <Button
              name='#FCFCFC'
              backgroundColor= '#fcfcfc'
              buttonText= '$off_white'
              textColor='#979797'
            />
            <Button
              name='#2DA3D7'
              backgroundColor= '#2DA3D7'
              buttonText= '$link $bhp_blue3'
            />
            <Button
              name='#E65400'
              backgroundColor= '#E65400'
              buttonText= '$primary'
            />
          </div>
          <p className='subTitleGlobalClass' id="Main_theme">Main theme</p>
          <div className={s.buttonContainer}>
            <Button
              name='#E65400'
              backgroundColor= '#E65400'
              buttonText= '$bhp_orange_1'
            />
            <Button
              name='#F67B2F'
              backgroundColor= '#F67B2F'
              buttonText= '$bhp_orange_2'
            />
            <Button
              name='#FAB636'
              backgroundColor= '#FAB636'
              buttonText= {'$bhp_orange_3'}
              textColor='#747474'
            />
            <Button
              name='#F8D696'
              backgroundColor= '#F8D696'
              buttonText= '$bhp_orange_4'
              textColor='#747474'
            />
          </div>
          <div className={s.buttonContainer}>
            <Button
              name='#01AB8B'
              backgroundColor= '#01AB8B'
              buttonText= '$bhp_success / $green'
              textColor='#fff'
            />
            <Button
              name='#2DA3D7'
              backgroundColor= '#2DA3D7'
              buttonText= '$bhp_info'
            />
            <Button
              name='#FCE05B'
              backgroundColor= '#FCE05B'
              buttonText= '$bhp_warning / $yellow'
              textColor= '#4a4a4a'
            />
            <Button
              name='#F03A36'
              backgroundColor= '#F03A36'
              buttonText= '$bhp_danger  /  $red'
            />
          </div>
          <p className='subTitleGlobalClass' id="Light_theme">Light theme typography, backgrounds, headers and link</p>
          <div className={s.buttonContainer}>
            <Button
              name='#A5A5A5'
              backgroundColor= '#A5A5A5'
              buttonText= '$grey'
              colorText= '#fff'
            />
            <Button
              name='#DDDDDD'
              backgroundColor= '#DDDDDD'
              buttonText= '$grey2'
              textColor='#747474'
            />
            <Button
              name='#ECECEC'
              backgroundColor= '#ECECEC'
              buttonText= '$light_grey'
              textColor='#747474'
            />
            <Button
              name='#F3F3F3'
              backgroundColor= '#F3F3F3'
              buttonText= '$light_grey_2'
              textColor='#747474'
            />
          </div>
          <div className={s.buttonContainer}>
            <Button
              name='#F9F9F9'
              backgroundColor= '#F9F9F9'
              buttonText= '$super_light_grey'
              textColor='#747474'
            />
            <Button
              name='#7E7E7E'
              backgroundColor= '#7E7E7E'
              buttonText= '$medium_grey'
            />
            <Button
              name='#4A4A4A'
              backgroundColor= '#4A4A4A'
              buttonText= '$dark_grey'
            />
            <Button
              name='#2A2D33'
              backgroundColor= '#2A2D33'
              buttonText= '$darker_grey'
            />
          </div>
          <div className={s.buttonContainer}>
            <Button
              name='#AC3D12'
              backgroundColor= '#AC3D12'
              buttonText= '$dark_red'
              colorText= '#fff'
            />
            <Button
              name='#2DA3D7'
              backgroundColor= '#2DA3D7'
              buttonText= '$blue'
              colorText= '#fff'
            />
          </div>
          <p className='subTitleGlobalClass' id="Dark_theme">Dark theme backgrounds and headers</p>
          <div className={s.buttonContainer}>
            <Button
              name='#494A58'
              backgroundColor= '#494A58'
              buttonText= {'$bhp_dt_gray_1 \n $bhp_dt_header'}
            />
            <Button
              name='#353544'
              backgroundColor= '#353544'
              buttonText= '$bhp_dt_gray_6'
            />
            <Button
              name='#60606D'
              backgroundColor= '#60606D'
              buttonText= '$bhp_dt_gray_7'
            />
            <Button
              name='#525361'
              backgroundColor= '#525361'
              buttonText= '$bhp_dt_gray_4'
            />
          </div>
          <div className={s.buttonContainer}>
            <Button
              name='#5E5E6B'
              backgroundColor= '#5E5E6B'
              buttonText= '$bhp_dt_gray_5'
            />
            <Button
              name='#C8C8C8'
              backgroundColor= '#C8C8C8'
              buttonText= '$bhp_dt_gray_6'
            />
            <Button
              name='#3F414E'
              backgroundColor= '#3F414E'
              buttonText= '$bhp_dt_gray_7'
            />
            <Button
              name='#767684'
              backgroundColor= '#767684'
              buttonText= '$bhp_dt_gray_8'
            />
          </div>
          <div className={s.buttonContainer}>
            <Button
              name='#ADD2F4'
              backgroundColor= '#ADD2F4'
              buttonText= {'$bhp_blue_4  LINK'}
              textColor='#747474'
            />
            <Button
              name='#FFFFFF'
              backgroundColor= '#FFFFFF'
              buttonText= {'$white h1,h2,h3,h4,h5,h6'}
              textColor='#747474'
              border='1px solid #979797'
            />
            <Button
              name='#FF5640'
              backgroundColor= '#FF5640'
              buttonText= '$bhp_dt_red'
            />
          </div>
          <p className='subTitleGlobalClass' id="Secondary_themes">Secondary themes</p>
          <div className={s.buttonContainer}>
            <Button
              name='#742068'
              backgroundColor= '#742068'
              buttonText= '$bhp_purple_1'
            />
            <Button
              name='#234483'
              backgroundColor= '#234483'
              buttonText= '$bhp_blue_1'
            />
            <Button
              name='#0C637C'
              backgroundColor= '#0C637C'
              buttonText= '$bhp_turquoise_1'
            />
            <Button
              name='#018982'
              backgroundColor= '#018982'
              buttonText= '$bhp_green_1'
            />
          </div>
          <div className={s.buttonContainer}>
            <Button
              name='#9F2996'
              backgroundColor= '#9F2996'
              buttonText= '$bhp_purple_2'
            />
            <Button
              name='#1966B1'
              backgroundColor= '#1966B1'
              buttonText= '$bhp_blue_2'
            />
            <Button
              name='#0E91AC'
              backgroundColor= '#0E91AC'
              buttonText= '$bhp_turquoise_2'
            />
            <Button
              name='#01AB8B'
              backgroundColor= '#01AB8B'
              buttonText= '$bhp_green_2'
            />
          </div>
          <div className={s.buttonContainer}>
            <Button
              name='#D04D97'
              backgroundColor= '#D04D97'
              buttonText= '$bhp_purple_3'
            />
            <Button
              name='#2DA3D7'
              backgroundColor= '#2DA3D7'
              buttonText= '$bhp_blue_3'
            />
            <Button
              name='#4FDBE7'
              backgroundColor= '#4FDBE7'
              buttonText= '$bhp_turquoise_3'
              textColor='#4a4a4a'
            />
            <Button
              name='#B3DE68'
              backgroundColor= '#B3DE68'
              buttonText= '$bhp_green_3'
              textColor='#4a4a4a'
            />
          </div>
          <div className={s.buttonContainer}>
            <Button
              name='#E7C9E1'
              backgroundColor= '#E7C9E1'
              buttonText= '$bhp_purple_4'
              textColor='#4a4a4a'
            />
            <Button
              name='#ADD2F4'
              backgroundColor= '#ADD2F4'
              buttonText= '$bhp_blue_4'
              textColor='#4a4a4a'
            />
            <Button
              name='#8DE7E4'
              backgroundColor= '#8DE7E4'
              buttonText= '$bhp_turquoise_4'
              textColor='#4a4a4a'
            />
            <Button
              name='#E2F29A'
              backgroundColor= '#E2F29A'
              buttonText= '$bhp_green_4'
              textColor='#4a4a4a'
            />
          </div>
          <div className={s.buttonContainer}>
            <Button
              name='#50544D'
              backgroundColor= '#50544D'
              buttonText= '$bhp_grey_1'
            />
            <Button
              name='#838A8E'
              backgroundColor= '#838A8E'
              buttonText= '$bhp_grey_2'
            />
            <Button
              name='#BDBEBC'
              backgroundColor= '#BDBEBC'
              buttonText= '$bhp_grey_3'
            />
            <Button
              name='#E7E8D5'
              backgroundColor= '#E7E8D5'
              buttonText= '$bhp_grey_4'
              textColor='#4a4a4a'
            />
          </div>
          <p className='subTitleGlobalClass' id="colour_combinations">Colours combinations</p>
          <p>
            If you use colour text on a full colour background then the background must be from group 1, and the text must
            be from either group 3 or 4 (of the same family), or white. Please see page 16 for examples.
          </p>
          <p> Example: </p>
          <div className={s.colourCombinationsBlockContainer}>
            <Block
              text={'Background colour is bhp_turquoise 1 \n and text is bhp_turquoise 3'}
              backgroundColor='#0c637c'
              width='354px'
              height='80px'
              textColor='#4fdbe7'
              marginRight='80px'
            />
            <Block
              text={'Background colour is bhp_turquoise 1 \n and text is bhp_turquoise 3'}
              backgroundColor=' #742068'
              width='354px'
              height='80px'
              textColor='#e7c9e1'
              marginRight='80px'
            />
            <Block
              text={'Background colour is bhp_turquoise 1 \n and text is bhp_turquoise 3'}
              backgroundColor='#234483'
              width='354px'
              height='80px'
              textColor='#add2f4'
              marginRight='80px'
            />
            <Block
              text={'Background colour is bhp_turquoise 1 \n and text is bhp_turquoise 3'}
              backgroundColor='#4a4a4a'
              width='354px'
              height='80px'
            />
          </div>
          <p className='subTitleGlobalClass' id='mixing_colours'>Mixing Colours</p>
          <p>Do not mix the BHP Secondary colours togheter. Use a secondary colours palette plus the main theme as accent colour: Orange1</p>
          <div className={s.coloursMixBlockContainer}>
            <Block
              text={'3'}
              backgroundColor='#fab636'
              width='54px'
              height='54px'
            />
            <Block
              text={'1'}
              backgroundColor='#e65400'
              width='54px'
              height='54px'
            />
            <Block
              text={'4'}
              backgroundColor='#f8d696'
              width='54px'
              height='54px'
            />
            <Block
              text={'2'}
              backgroundColor='#f67b2f'
              width='54px'
              height='54px'
            />
            <p className={s.coloursMixBlockContainerText}>main theme</p>
          </div>
          <div className={s.coloursMixBlockContainer}>
            <Block
              text={'2'}
              backgroundColor='#9f2996'
              width='54px'
              height='54px'
            />
            <Block
              text={'1'}
              backgroundColor='#e65400'
              width='54px'
              height='54px'
            />
            <Block
              text={'1'}
              backgroundColor='#742068'
              width='54px'
              height='54px'
            />
            <Block
              text={'3'}
              backgroundColor='#d04d97'
              width='54px'
              height='54px'
            />
            <p className={s.coloursMixBlockContainerText}>purple theme</p>
          </div>
          <div className={s.coloursMixBlockContainer}>
            <Block
              text={'2'}
              backgroundColor='#1966b1'
              width='54px'
              height='54px'
            />
            <Block
              text={'1'}
              backgroundColor='#e65400'
              width='54px'
              height='54px'
            />
            <Block
              text={'1'}
              backgroundColor='#234483'
              width='54px'
              height='54px'
            />
            <Block
              text={'3'}
              backgroundColor='#2da3d7'
              width='54px'
              height='54px'
            />
            <p className={s.coloursMixBlockContainerText}>blue theme</p>
          </div>
          <div className={s.coloursMixBlockContainer}>
            <Block
              text={'2'}
              backgroundColor='#0e91ac'
              width='54px'
              height='54px'
            />
            <Block
              text={'1'}
              backgroundColor='#e65400'
              width='54px'
              height='54px'
            />
            <Block
              text={'1'}
              backgroundColor='#0c637c'
              width='54px'
              height='54px'
            />
            <Block
              text={'3'}
              backgroundColor='#4fdbe7'
              width='54px'
              height='54px'
            />
            <p className={s.coloursMixBlockContainerText}>turquoise theme</p>
          </div>
          <div className={s.coloursMixBlockContainer}>
            <Block
              text={'2'}
              backgroundColor='#01ab8b'
              width='54px'
              height='54px'
            />
            <Block
              text={'1'}
              backgroundColor='#e65400'
              width='54px'
              height='54px'
            />
            <Block
              text={'1'}
              backgroundColor='#018982'
              width='54px'
              height='54px'
            />
            <Block
              text={'3'}
              backgroundColor='#b3de68'
              width='54px'
              height='54px'
            />
            <p className={s.coloursMixBlockContainerText}>green theme</p>
          </div>
          <div className={s.coloursMixBlockContainer}>
            <Block
              text={'2'}
              backgroundColor='#838a8e'
              width='54px'
              height='54px'
            />
            <Block
              text={'1'}
              backgroundColor='#e65400'
              width='54px'
              height='54px'
            />
            <Block
              text={'1'}
              backgroundColor='#50544d'
              width='54px'
              height='54px'
            />
            <Block
              text={'3'}
              backgroundColor='#bdbebc'
              width='54px'
              height='54px'
            />
            <p className={s.coloursMixBlockContainerText}>grey theme</p>
          </div>
          <br />
          <div className={s.barChartCointainer}>
            <span><strong>Example</strong></span>
            <br />
            <p>Chart heading</p>
            <BarChart width={480} height={167} data={data}>
              <XAxis tickLine={false}  padding={{ left: 10, right: 10 ,bottom: 20}} dataKey="name" tickSize={10}/>
              <YAxis hide/>
              <CartesianGrid horizontalPoints={[-20,0,20,40,60,80,100,120]} vertical={false}  stroke="#dcdcdc"  />
              <Bar dataKey="uv"  barSize={84}>
                {
                  data.map((entry, index) => (
                    <Cell fill={data[index].color}/>
                  ))
                }
              </Bar>
            </BarChart>
          </div>
        </div>
        <div className='pageRightSideMenuGlobalClass'>
          <a className={s.pageRightSideMenuAnchor} href='#Type'>Type</a>
          <a className={s.pageRightSideMenuAnchor} href='#Main_theme'>Main theme</a>
          <a className={s.pageRightSideMenuAnchor} href='#Light_theme'>Light theme</a>
          <a className={s.pageRightSideMenuAnchor} href='#Dark_theme'>Dark Theme</a>
          <a className={s.pageRightSideMenuAnchor} href='#Secondary_themes'>Secondary themes</a>
          <a className={s.pageRightSideMenuAnchor} href='#colour_combinations'>Colours combinations</a>
          <a className={s.pageRightSideMenuAnchor} href='#mixing_colours'>Mixing Colours</a>
        </div>
      </div>
    )
  }
}

export default uiColours
