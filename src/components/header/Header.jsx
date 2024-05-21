import React, { useState } from 'react'
import './header.scss'
import { FiMenu, FiSearch, FiBell, FiMail, FiChevronRight, FiBook, FiCode, FiFileText, FiActivity, FiBarChart, FiAlertTriangle, FiUserPlus, FiSettings, FiLogOut } from "react-icons/fi";
import { signal } from '@preact/signals';

export const openMenuSignal = signal(true);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [documentOpen, setDocumentOpen] = useState(false);
  const [emailMenuOpen, setEmailMenuOpen] = useState(false);
  const [bellMenuOpen, setBellMenuOpen] = useState(false);
  const [userProfileOpen, setUserProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
    openMenuSignal.value = isMenuOpen
  };

  const toggleDocumentMenu = (e) => {
    e.preventDefault()
    setDocumentOpen(!documentOpen)
    setEmailMenuOpen(false);
    setBellMenuOpen(false);
    setUserProfileOpen(false);
  };

  const toggleEmailMenu = () => {
    setEmailMenuOpen(!emailMenuOpen);
    setDocumentOpen(false)
    setBellMenuOpen(false)
    setUserProfileOpen(false)
  }

  const toggleBellMenu = () => {
    setBellMenuOpen(!bellMenuOpen);
    setDocumentOpen(false)
    setEmailMenuOpen(false)
    setUserProfileOpen(false)
  }

  const toggleUserProfile = (e) => {
    e.preventDefault()
    setUserProfileOpen(!userProfileOpen);
    setDocumentOpen(false);
    setBellMenuOpen(false);
    setEmailMenuOpen(false);
  }
  return (
    <div className='Header'>
      <div className='Header_Left'>
        <button type='button' className='Header_Left_Button' onClick={toggleSidebar}><FiMenu /></button>
        <a href="/" className='Header_Left_Logo'>SB Admin Pro</a>
        <form action="" className='Header_Left_Search'>
          <div className='Header_Left_Search_Group'>
            <input type="text" placeholder="Search" />
            <div className='Header_Left_Search_Group_Icon'><FiSearch color='gray' /></div>
          </div>
        </form>
      </div>
      <div className='Header_Right'>
        <ul className="Header_Right_Nav">
          <li className="Header_Right_Nav_Item">
            <a href='/' className="Header_Right_Nav_Item_Href_DocumentDrop" onClick={toggleDocumentMenu}>
              <div className='Header_Right_Nav_Item_Href_Text'>
                Documentation
              </div>
              <FiChevronRight className={`Header_Right_Nav_Item_Href_Icon${documentOpen ? '_Show' : ''}`}/>

            </a>
            {documentOpen && (<div className='Header_Right_Nav_Item_Href_DocumentDrop_Menu'>
              <a href="/" className='Header_Right_Nav_Item_Href_DocumentDrop_Menu_Item'>
                <div className='Header_Right_Nav_Item_Href_DocumentDrop_Menu_Item_Icon'>
                  <FiBook />
                </div>
                <div>
                  <div className="Header_Right_Nav_Item_Href_DocumentDrop_Menu_Item_Title">Documentation</div>
                  Usage instructions and reference
                </div>
              </a>
              <div className='Header_Right_Nav_Item_Href_DocumentDrop_Menu_Item_Divider'></div>
              <a href="/" className='Header_Right_Nav_Item_Href_DocumentDrop_Menu_Item'>
                <div className='Header_Right_Nav_Item_Href_DocumentDrop_Menu_Item_Icon'>
                  <FiCode />
                </div>
                <div>
                  <div className="Header_Right_Nav_Item_Href_DocumentDrop_Menu_Item_Title">Components</div>
                  Code snippets and reference
                </div>
              </a>
              <div className='Header_Right_Nav_Item_Href_DocumentDrop_Menu_Item_Divider'></div>
              <a href="/" className='Header_Right_Nav_Item_Href_DocumentDrop_Menu_Item'>
                <div className='Header_Right_Nav_Item_Href_DocumentDrop_Menu_Item_Icon'>
                  <FiFileText />
                </div>
                <div>
                  <div className="Header_Right_Nav_Item_Href_DocumentDrop_Menu_Item_Title">Changelog</div>
                  Updates and changes
                </div>
              </a>
            </div>)}
          </li>
          <li className="Header_Right_Nav_Item">
            <button type='button' className='Header_Right_Nav_Item_Button' onClick={toggleBellMenu}><FiBell color='gray' /></button>
            {bellMenuOpen && (<div className='Header_Right_Nav_Item_BellMenu'>
              <h6 className="Header_Right_Nav_Item_BellMenu_Header">
                <FiBell className='Header_Right_Nav_Item_BellMenu_Header_Icon' />
                Alerts Center
              </h6>
              <a href="/" className='Header_Right_Nav_Item_BellMenu_Item'>
                <div className='Header_Right_Nav_Item_BellMenu_Item_ActivityIcon'>
                  <FiActivity />
                </div>
                <div className='Header_Right_Nav_Item_BellMenu_Item_Content'>
                  <div className='Header_Right_Nav_Item_BellMenu_Item_Content_Detail'>December 29, 2021</div>
                  <div className='Header_Right_Nav_Item_BellMenu_Item_Content_Text'>This is an alert message. It's nothing serious, but it requires your attention.</div>
                </div>
              </a>
              <a href="/" className='Header_Right_Nav_Item_BellMenu_Item'>
                <div className='Header_Right_Nav_Item_BellMenu_Item_FiBarChartIcon'>
                  <FiBarChart />
                </div>
                <div className='Header_Right_Nav_Item_BellMenu_Item_Content'>
                  <div className='Header_Right_Nav_Item_BellMenu_Item_Content_Detail'>December 22, 2021</div>
                  <div className='Header_Right_Nav_Item_BellMenu_Item_Content_Text'>A new monthly report is ready. Click here to view!</div>
                </div>
              </a>
              <a href="/" className='Header_Right_Nav_Item_BellMenu_Item'>
                <div className='Header_Right_Nav_Item_BellMenu_Item_AlertTriangleIcon'>
                  <FiAlertTriangle />
                </div>
                <div className='Header_Right_Nav_Item_BellMenu_Item_Content'>
                  <div className='Header_Right_Nav_Item_BellMenu_Item_Content_Detail'>December 8, 2021</div>
                  <div className='Header_Right_Nav_Item_BellMenu_Item_Content_Text'>Critical system failure, systems shutting down.</div>
                </div>
              </a>
              <a href="/" className='Header_Right_Nav_Item_BellMenu_Item'>
                <div className='Header_Right_Nav_Item_BellMenu_Item_UserPlusIcon'>
                  <FiUserPlus />
                </div>
                <div className='Header_Right_Nav_Item_BellMenu_Item_Content'>
                  <div className='Header_Right_Nav_Item_BellMenu_Item_Content_Detail'>December 2, 2021</div>
                  <div className='Header_Right_Nav_Item_BellMenu_Item_Content_Text'>New user request. Woody has requested access to the organization.</div>
                </div>
              </a>
              <a href="/" className='Header_Right_Nav_Item_BellMenu_Footer'>View All Alerts</a>
            </div>)}
          </li>
          <li className="Header_Right_Nav_Item">
            <button type='button' className='Header_Right_Nav_Item_Button' onClick={toggleEmailMenu}><FiMail color='gray' /></button>
            {emailMenuOpen && (<div className='Header_Right_Nav_Item_MailMenu'>
              <h6 className="Header_Right_Nav_Item_MailMenu_Header">
                <FiMail className='Header_Right_Nav_Item_MailMenu_Header_Icon' />
                Message Center
              </h6>
              <a href="/" className='Header_Right_Nav_Item_MailMenu_Item'>
                <div className='Header_Right_Nav_Item_MailMenu_Item_ActivityIcon'>
                  <img src="./images/profile-1.png" alt="" />
                </div>
                <div className='Header_Right_Nav_Item_MailMenu_Item_Content'>
                  <div className='Header_Right_Nav_Item_MailMenu_Item_Content_Text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  <div className='Header_Right_Nav_Item_MailMenu_Item_Content_Detail'>Thomas Wilcox · 58m</div>
                </div>
              </a>
              <a href="/" className='Header_Right_Nav_Item_MailMenu_Item'>
                <div className='Header_Right_Nav_Item_MailMenu_Item_ActivityIcon'>
                  <img src="./images/profile-2.png" alt="" />
                </div>
                <div className='Header_Right_Nav_Item_MailMenu_Item_Content'>
                  <div className='Header_Right_Nav_Item_MailMenu_Item_Content_Text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  <div className='Header_Right_Nav_Item_MailMenu_Item_Content_Detail'>Emily Fowler · 2d</div>
                </div>
              </a>
              <a href="/" className='Header_Right_Nav_Item_MailMenu_Item'>
                <div className='Header_Right_Nav_Item_MailMenu_Item_ActivityIcon'>
                  <img src="./images/profile-3.png" alt="" />
                </div>
                <div className='Header_Right_Nav_Item_MailMenu_Item_Content'>
                  <div className='Header_Right_Nav_Item_MailMenu_Item_Content_Text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  <div className='Header_Right_Nav_Item_MailMenu_Item_Content_Detail'>Marshall Rosencrantz · 3d</div>
                </div>
              </a>
              <a href="/" className='Header_Right_Nav_Item_MailMenu_Item'>
                <div className='Header_Right_Nav_Item_MailMenu_Item_ActivityIcon'>
                  <img src="./images/profile-4.png" alt="" />
                </div>
                <div className='Header_Right_Nav_Item_MailMenu_Item_Content'>
                  <div className='Header_Right_Nav_Item_MailMenu_Item_Content_Text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                  <div className='Header_Right_Nav_Item_MailMenu_Item_Content_Detail'>Colby Newton · 3d</div>
                </div>
              </a>
              <a href="/" className='Header_Right_Nav_Item_MailMenu_Footer'>View All Alerts</a>
            </div>)}
          </li>
          <li className="Header_Right_Nav_Item">
            <a href='/' onClick={toggleUserProfile}>
              <img src="images/profile.png" alt="" className='Header_Right_Nav_Item_Profile' />
            </a>
            {userProfileOpen && (<div className='Header_Right_Nav_Item_UserImageDrop'>
              <h6 className='Header_Right_Nav_Item_UserImageDrop_Header'>
                <img src="images/profile.png" alt="" />
                <div className='Header_Right_Nav_Item_UserImageDrop_Header_Detail'>
                  <div className='Header_Right_Nav_Item_UserImageDrop_Header_Detail_Name'>Valerie Luna</div>
                  <div className='Header_Right_Nav_Item_UserImageDrop_Header_Detail_Email'>vluna@aol.com</div>
                </div>
              </h6>
              <div className='Header_Right_Nav_Item_UserImageDrop_Divider'></div>
              <a href="/">
                <div className='Header_Right_Nav_Item_UserImageDrop_Img'><FiSettings size={12} /></div>
                Account
              </a>
              <a href="/">
                <div className='Header_Right_Nav_Item_UserImageDrop_Img'><FiLogOut size={12} /></div>
                Account
              </a>
            </div>)}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
