import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import PDF from "../CV/PDF";
import Habilidades from "../habilidades/Habilidades";
import Procesos from '../procesos/Procesos';
import './Tabs.css'

function NavTabs(props) {
    const [key, setKey] = useState('home');


    return (
        
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="tab">
        <Tab eventKey="home" title="Habilidades">
          <Habilidades />
        </Tab>
        <Tab eventKey="PDF" title="Currículum Vitae">
        <PDF pdfFileEvent={props.pdfFileEvent} setPdfFileError={props.setPdfFileError}  />
        </Tab>
        <Tab eventKey="procesos" title="Procesos">
         <Procesos />
        </Tab>
      </Tabs>
      

    
    );
  }
  
export default NavTabs;