import Image from "next/image";
import { Heart, MessageCircle, Eye } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
  views: number;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 border border-gray-700">
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-3 text-white">
          {project.title}
        </h3>
        <p className="text-blue-100 mb-4">{project.description}</p>
        <div className="flex justify-between text-blue-400">
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5" />
            <span>{project.likes}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-5 h-5" />
            <span>{project.comments}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Eye className="w-5 h-5" />
            <span>{project.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
