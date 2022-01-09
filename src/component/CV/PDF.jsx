import React,{useState, useEffect} from 'react'
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import './PDF.css'
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faPlus, faMinus, faDownload} from '@fortawesome/free-solid-svg-icons';

export const PDF = ({setPdfFileError, pdfFileEvent}) => {
    
    // for onchange event
    const [pdfFile, setPdfFile]=useState(null);
    const [viewPdf, setViewPdf]=useState(null);
    
    useEffect(() => {
        
        if(pdfFile!==null){
            setViewPdf(pdfFile);
          }
          else{
            setViewPdf(null);
            }
      }, [pdfFile]);  
  

    // onchange event
    const fileType=['application/pdf'];

    
      if (pdfFileEvent) {
        pdfFileEvent.preventDefault();
          let selectedFile=pdfFileEvent.target.files[0];
          if(selectedFile){
            if(selectedFile&&fileType.includes(selectedFile.type)){
              let reader = new FileReader();
                  reader.readAsDataURL(selectedFile);
                  reader.onloadend = (e) =>{
                    setPdfFile(e.target.result);
                    setPdfFileError('');
                  }
            }
            else{
              setPdfFile(null);
              setPdfFileError('Please select valid pdf file');
            }
          }
          else{
            console.log('select your file');
          }
      }
  
    return (
        <div className='content'>
        <Modal.Dialog >
          <Modal.Header>
          <p className='tituloPDF'>DocumentoTitulo</p>
          <span className="input-group-text" id="inputGroup-sizing-sm">0</span>
          <span className='spanBarra'>/</span>
          <FontAwesomeIcon className='iconMinus' icon={faMinus} />
          <input  className="inputZoom" type="text"></input>
          <FontAwesomeIcon className='iconPlus' icon={faPlus} />
          <FontAwesomeIcon className='iconArrow' icon={faArrowsAlt} />
          <FontAwesomeIcon  className='iconDowload' icon={faDownload} />
          </Modal.Header>
          <Modal.Body 
          style={{
            maxHeight: 'calc(100vh - 210px)',
            overflowY: 'auto'
           }}
          >
          
        <div className='pdf-container'>
       
          
          
          {/* show pdf conditionally (if we have one)  */}
          {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer fileUrl={viewPdf}/>
        </Worker></>}
  
        {/* if we dont have pdf or viewPdf state is null */}
        {!viewPdf&&<>No pdf file selected</>}
        </div>
        </Modal.Body>
        </Modal.Dialog>
        </div>
     
    )
  }
  
  export default PDF