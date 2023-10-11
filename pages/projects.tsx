import Container from 'components/Container'
import projects from 'content/projects.json'
import ProjectComponent from 'components/Project'

export default function Project() {
  return (
    <Container>
      <section>
      <ul className="grid grid-cols-1 justify-items-center gap-8 md:justify-items-start ">
        {projects.map(({ id, ...rest }) => (
        <ProjectComponent key={id} {...rest} />
        ))}
        </ul>
      </section>
    </Container>
  )
}