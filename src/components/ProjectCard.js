import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, description2, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="visual description the project"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>{description2}</p>
          {/* Expresión condicional para mostrar el enlace solo si 'link' tiene algún texto */}
          {link.trim() !== "" && (
            <a className="projectCardLink" href={link} target="_blank" rel="noopener noreferrer">
              More
            </a>
          )}
        </div>
      </div>
    </Col>
  )
}