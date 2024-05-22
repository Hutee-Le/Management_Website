import { useEffect, useState } from 'react';
import './sidebar.scss'
import { FiActivity, FiBarChart, FiChevronRight, FiFilter, FiGlobe, FiGrid, FiLayout, FiPackage, FiRepeat, FiTool } from 'react-icons/fi'
import { openMenuSignal } from '../header/Header';

const Sidebar = () => {
    const [isSidebarOpen, setIsSideBarOpen] = useState(false)
    useEffect(() => {
        openMenuSignal.subscribe((isOpen) => setIsSideBarOpen(!isOpen));

    }, []);
    return (
        <div className={`Sidebar${isSidebarOpen ? '_Hidden' : ''}`}>
            <div className='Sidebar_Container'>
                <div className='Sidebar_Container_Menu'>
                    <div className='Sidebar_Container_Menu_Heading'>Core</div>
                    <a href="/#" className='Sidebar_Container_Menu_Link_Active'>
                        <div className='Sidebar_Container_Menu_Link_Icon'><FiActivity color='#0061f2' /></div>
                        Dashboards
                        <div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} /></div>
                    </a>
                    <div className='Sidebar_Container_Menu_Dropdown'>
                        <a href="/" className='Sidebar_Container_Menu_Dropdown_Link'>Default<span className='Sidebar_Container_Menu_Dropdown_Link_Badge'>Updated</span></a>
                        <a href="/" className='Sidebar_Container_Menu_Dropdown_Link_Active'>Multipurpose</a>
                        <a href="/" className='Sidebar_Container_Menu_Dropdown_Link'>Affiliate</a>
                    </div>
                    <div className='Sidebar_Container_Menu_Heading'>Custom</div>
                    <a href="/#" className='Sidebar_Container_Menu_Link'>
                        <div className='Sidebar_Container_Menu_Link_Icon'><FiGrid /></div>
                        Pages
                        <div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} /></div>
                    </a>
                    <div className='Sidebar_Container_Menu_Dropdown'>
                        <a href="/" className='Sidebar_Container_Menu_Dropdown_Link'>Account<div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} /></div></a>
                        <a href="/" className='Sidebar_Container_Menu_Dropdown_Link'>Authentication<div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} /></div></a>
                        <div className='Sidebar_Container_Menu_Dropdown'>
                            <a href="/" className='Sidebar_Container_Menu_Dropdown_Link'>Basic<div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} /></div></a>
                            <div className='Sidebar_Container_Menu_Dropdown'>
                                <a href="/" className='Sidebar_Container_Menu_Dropdown_Link'>Login</a>
                                <a href="/" className='Sidebar_Container_Menu_Dropdown_Link'>Register</a>
                                <a href="/" className='Sidebar_Container_Menu_Dropdown_Link'>Forgot Password</a>
                            </div>
                            <a href="/" className='Sidebar_Container_Menu_Dropdown_Link'>Social<div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} /></div></a>
                        </div>
                        <a href="/" className='Sidebar_Container_Menu_Dropdown_Link'>Error<div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} /></div></a>
                        <a href="/" className='Sidebar_Container_Menu_Dropdown_Link'>Price</a>
                        <a href="/" className='Sidebar_Container_Menu_Dropdown_Link'>Invoice</a>
                    </div>
                    <a href="/#" className='Sidebar_Container_Menu_Link'>
                        <div className='Sidebar_Container_Menu_Link_Icon'><FiGlobe /></div>
                        Applications
                        <div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} color='#a7aeb8' /></div>
                    </a>
                    <a href="/#" className='Sidebar_Container_Menu_Link'>
                        <div className='Sidebar_Container_Menu_Link_Icon'><FiRepeat /></div>
                        Flows
                        <div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} color='#a7aeb8' /></div>
                    </a>
                    <div className='Sidebar_Container_Menu_Heading'>UI Toolkit</div>
                    <a href="/#" className='Sidebar_Container_Menu_Link'>
                        <div className='Sidebar_Container_Menu_Link_Icon'><FiLayout /></div>
                        Layout
                        <div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} color='#a7aeb8' /></div>
                    </a>
                    <a href="/#" className='Sidebar_Container_Menu_Link'>
                        <div className='Sidebar_Container_Menu_Link_Icon'><FiPackage /></div>
                        Components
                        <div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} color='#a7aeb8' /></div>
                    </a>
                    <a href="/#" className='Sidebar_Container_Menu_Link'>
                        <div className='Sidebar_Container_Menu_Link_Icon'><FiTool /></div>
                        Utilities
                        <div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} color='#a7aeb8' /></div>
                    </a>
                    <div className='Sidebar_Container_Menu_Heading'>Plugins</div>
                    <a href="/#" className='Sidebar_Container_Menu_Link'>
                        <div className='Sidebar_Container_Menu_Link_Icon'><FiBarChart /></div>
                        Charts
                        <div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} color='#a7aeb8' /></div>
                    </a>
                    <a href="/#" className='Sidebar_Container_Menu_Link'>
                        <div className='Sidebar_Container_Menu_Link_Icon'><FiFilter /></div>
                        Tables
                        <div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} color='#a7aeb8' /></div>
                    </a>
                </div>
                <div className='Sidebar_Container_Footer'>
                    <div className='Sidebar_Container_Footer_Content'>
                        <div className='Sidebar_Container_Footer_Content_Subtitle'>Logged in as:</div>
                        <div className='Sidebar_Container_Footer_Content_Title'>Valerie Luna</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
