import { useEffect, useState } from 'react';
import './sidebar.scss'
import { FiActivity, FiChevronRight, FiGlobe, FiGrid, FiRepeat } from 'react-icons/fi'
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
                        <div className='Sidebar_Container_Menu_Link_Icon'><FiActivity color='#0061f2'/></div>
                        Dashboards
                        <div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} color='#a7aeb8'/></div>
                    </a>
                    <div className='Sidebar_Container_Menu_Heading'>Custom</div>
                    <a href="/#" className='Sidebar_Container_Menu_Link'>
                        <div className='Sidebar_Container_Menu_Link_Icon'><FiGrid /></div>
                        Pages
                        <div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} color='#a7aeb8'/></div>
                    </a>
                    <a href="/#" className='Sidebar_Container_Menu_Link'>
                        <div className='Sidebar_Container_Menu_Link_Icon'><FiGlobe /></div>
                        Applications
                        <div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} color='#a7aeb8'/></div>
                    </a>
                    <a href="/#" className='Sidebar_Container_Menu_Link'>
                        <div className='Sidebar_Container_Menu_Link_Icon'><FiRepeat /></div>
                        Flows
                        <div className='Sidebar_Container_Menu_Link_Arrow'><FiChevronRight size={18} color='#a7aeb8'/></div>
                    </a>
                </div>
                <div className='Sidebar_Container_Footer'>Footer</div>
            </div>
        </div>
    )
}

export default Sidebar
