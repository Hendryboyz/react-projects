// const CoreConcept = ({ image, title, description }) => {
export const CoreConcept = ({ ...concept }) => {
  const { image, title, description } = concept;
  return (<li>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>);
}
