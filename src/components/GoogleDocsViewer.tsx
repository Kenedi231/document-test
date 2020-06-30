import React from 'react';

// const file = require('../docs/pd.pdf');

export default function GoogleDocumentViewer() {
    const urlPDF = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    const urlDocx = 'https://file-examples.com/wp-content/uploads/2017/02/file-sample_1MB.docx';
    const urlXLXS = 'https://file-examples.com/wp-content/uploads/2017/02/file_example_XLSX_5000.xlsx';
    const url = 'https://file-examples.com/wp-content/uploads/2017/08/file_example_PPT_1MB.ppt';
    const Office = 'https://view.officeapps.live.com/op/embed.aspx?src=';
    const Google = 'https://docs.google.com/gview?embedded=true&url=';
    return <iframe
        title='GoogleViewer'
        width='100%'
        height='800'
        src={`${Office}${urlXLXS}`}
    />
}