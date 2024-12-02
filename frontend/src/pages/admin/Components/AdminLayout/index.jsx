import React from 'react';
import { Outlet } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar'; 
import "./AdminLayout.css"


const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Row nogutters="true">  
      <Col xs={4} sm={3} md={3} lg={2} className="Layout-content">    
          <Sidebar />
          </Col>      
        <Col xs={8} sm={9} md={9} lg={10} className="admin-content">
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default  AdminLayout;