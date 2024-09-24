import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePDF = () => {
  const element = document.getElementById('cv-preview');
  html2canvas(element).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('cv.pdf');
  });
};
