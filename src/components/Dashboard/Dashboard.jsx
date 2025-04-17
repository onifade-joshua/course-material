import React from 'react';
import PDF from "../../assets/html-css-bootstrap-javascript-and-jquery-pdf.3266.pdf";
import PDF2 from "../../assets/30-days-of-react-ebook-fullstackio.pdf";
import PDF3 from "../../assets/frontend-en.pdf";
import PDF4 from "../../assets/EverythingYouNeedtoKnowAboutFront-EndDevelopment.pdf";
import PDF5 from "../../assets/React.js_for_Beginners.pdf";
import "./Dashboard.css";

const materials = [
  { id: 1, title: 'Html, CSS, Bootstrap, JavaScript, and jQuery', link: PDF },
  { id: 2, title: 'Introduction To React', link: 'https://www.cs.unc.edu/~stotts/ISIS/comp523/react-slides.pdf' },
  { id: 3, title: 'How To Code in Reactjs by Joe Morgan', link: 'https://assets.digitalocean.com/books/how-to-code-in-reactjs.pdf' },
  { id: 4, title: 'React For Beginners', link: PDF3 },
  { id: 5, title: '30  Days Of React', link: PDF4 },
  { id: 6, title: 'Introduction To Frontend', link: PDF5 },
  { id: 7, title: 'Everything You Need to Know About Front-End Development', link: PDF2 }
];

const Dashboard = () => (
  <div className="dashboard" style={{ padding: "2rem" }}>
    <h2 style={{ color: "purple", marginTop: "5px" }}>Download Materials</h2>
    <div className="materials">
      {materials.map((m) => (
        <div key={m.id} className="material-card">
          <h4>{m.title}</h4>
          <a href={m.link} className="btn-download" download>
            Download
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Dashboard;
