import React from 'react'
import './header.scss'
import { FiMenu, FiSearch, FiBell, FiMail, FiChevronRight } from "react-icons/fi";


const Header = () => {
  return (
    <div className='Header'>
      <div className='Header_Left'>
        <button type='button' className='Header_Left_Button'><FiMenu /></button>
        <a href="/" className='Header_Left_Logo'>SB Admin Pro</a>
        <form action="" className='Header_Left_Search'>
          <div className='Header_Left_Search_Group'>
            <input type="text" placeholder="Search" />
            <div className='Header_Left_Search_Group_Icon'><FiSearch color='gray' /></div>
          </div>
        </form>
      </div>
      <div className='Header_Right'>
        <ul class="Header_Right_Nav">
          <li class="Header_Right_Nav_Item">
            <a className="Header_Right_Nav_Item_Href" href='/#'>
              <div className='Header_Right_Nav_Item_Href_Text'>
                Documentation
                <FiChevronRight />
              </div>
            </a>
          </li>
          <li class="Header_Right_Nav_Item">
            <button type='button' className='Header_Right_Nav_Item_Button'><FiBell color='gray' /></button>
          </li>
          <li class="Header_Right_Nav_Item">
            <button type='button' className='Header_Right_Nav_Item_Button'><FiMail color='gray' /></button>
          </li>
          <li class="Header_Right_Nav_Item">
            <a href="/">
              <img src="images/profile.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
