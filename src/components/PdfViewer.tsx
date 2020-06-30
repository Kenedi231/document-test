import React from 'react';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';

const file = require('../docs/pd.pdf');

export default function PdfViewer() {
    return (
        <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
                <div style={{ height: '750px' }}>
                    <Viewer fileUrl={file} />
                </div>
            </Worker>
        </div>
    )
}