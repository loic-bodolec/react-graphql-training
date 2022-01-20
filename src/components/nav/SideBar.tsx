import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';
// import { Link } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import { IconContext } from 'react-icons';
// import { FaTools } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineDashboard } from 'react-icons/ai';
import { MdAddCircleOutline } from 'react-icons/md';

type SideBarProps = {
  isActive: boolean;
  showSidebar: () => void;
};

const Sidebar = ({ isActive, showSidebar }: SideBarProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <section>
      <IconContext.Provider value={{ color: '#2e4acd' }}>
        <nav className={`sidebar-nav ${isActive && 'active'}`}>
          <div className="sidebar-wrap">
            <div className="menu-cross">
              <AiOutlineClose onClick={showSidebar} />
            </div>
            <Nav.Item className="sidebar-nav-item">
              <Nav.Link href="/dashboard">
                <AiOutlineDashboard className="sidebar-icon" /> Tableau de bord
              </Nav.Link>
            </Nav.Item>
            <Button className="add-project-button" size="sm" onClick={() => setShowModal(!showModal)}>
              <MdAddCircleOutline className="add-icon" /> Nouveau projet
            </Button>
          </div>
        </nav>
      </IconContext.Provider>
    </section>
  );
};

export default Sidebar;
