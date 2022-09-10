import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
export const exportFile = (element, name) => {
  html2canvas(element).then((canvas) => {
    const imagData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");
    pdf.addImage(imagData, "JPEG", 10, 50);
    pdf.save(`${name}`);
  });
};
