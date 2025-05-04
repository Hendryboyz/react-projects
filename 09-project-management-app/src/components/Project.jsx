export default function Project({project}) {
  const { title, description, dueDate } = project;
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{dueDate}</p>
    </section>
  );
}