import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    slug: string;
    image: string;
    shortDescription: string;
    technologies: string[];
    githubClient?: string;
    githubServer?: string;
    live: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <div className="relative h-56 w-full">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                />
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

                <p className="text-gray-600 mb-4">
                    {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                
  <div className="flex flex-wrap gap-3 mt-4">
  <Link
    href={project.live}
    target="_blank"
    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
  >
    Live Demo
  </Link>

  {project.githubClient && (
    <Link
      href={project.githubClient}
      target="_blank"
      className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black transition"
    >
      {project.githubServer ? "Client Code" : "GitHub"}
    </Link>
  )}

  {project.githubServer && (
    <Link
      href={project.githubServer}
      target="_blank"
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Server Code
    </Link>
  )}
</div>
            </div>
        </div>
    );
}