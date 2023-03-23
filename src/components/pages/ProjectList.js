import React from 'react';




const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <a href={project.url} className="btn btn-primary">
          Visit Project
        </a>
      </div>
    </div>
  );
};

const ProjectList = (props) => {

  // const projects = [
  //   {
  //     title: "Project 1",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     url: "https://example.com/project-1",
  //   },
  //   {
  //     title: "Project 2",
  //     description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     url: "https://example.com/project-2",
  //   },
  //   // add more projects here...
  // ];



  return (
    // console.log("the projects are: " + projects),
    
    <div className="project-list">
      {props.projects.map(project => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default ProjectList;

