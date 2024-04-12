import { useParams, useLoaderData } from "react-router-dom";

function ProjectDetails() {
  const projects = useLoaderData();
  const { id } = useParams();
  const element = projects.find((project) => project.id == id);
  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    Status,
    Area,
    facilities,
    location,
  } = element;

  return <div>{estate_title}</div>;
}

export default ProjectDetails;
