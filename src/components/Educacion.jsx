// src/components/EducationSection.jsx
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';
const EducationSection = () => {
  const educationData = [
    { year: "2022-2023", institution: "IES José Planes" },
    { year: "2023-2024", institution: "Universae" }
  ];


  return (

    
    <div className="education-section" id="educationsection"> {/* Agrega el id aquí */}
      <h2>Educación</h2>
      <div className="education-container " >
        {educationData.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-line"></div>
            <div className="education-content">
              <h3>{item.institution}</h3>
              <p>{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default EducationSection;
