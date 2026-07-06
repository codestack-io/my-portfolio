import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-4">
        Featured Projects
      </h2>

      <p className="text-center text-gray-500 mb-14">
        Some of my recent works.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}