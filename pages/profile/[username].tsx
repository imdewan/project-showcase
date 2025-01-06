import { GetServerSideProps } from "next";
import Head from "next/head";
import { ProjectCard } from "../../components/ProjectCard";
import { Footer } from "../../components/Footer";
import { Header } from "@/components/Header";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
  views: number;
}

interface ProfilePageProps {
  username: string;
  bio: string;
  avatarUrl: string;
  projects: Project[];
}

const ProfilePage = ({
  username,
  bio,
  avatarUrl,
  projects,
}: ProfilePageProps) => {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      <Head>
        <title>{username}'s Profile</title>
      </Head>
      <Header />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex gap-6">
        {/* User Info (Sticky Card) */}
        <aside className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow-sm p-6 sticky top-24 self-start">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.pixabay.com/photo/2020/06/09/10/52/man-5277903_1280.jpg"
              alt={`${username}'s avatar`}
              className="w-24 h-24 rounded-full object-cover"
            />
            <h1 className="mt-4 text-xl font-semibold text-gray-100">
              {username}
            </h1>
            <p className="mt-2 text-gray-400 text-center">{bio}</p>
          </div>
          <hr className="my-4 border-gray-700" />
          <div>
            <h2 className="text-gray-300 font-semibold">Stats</h2>
            <ul className="mt-2 text-sm text-gray-400">
              <li>Projects: {projects.length}</li>
              <li>Followers: 120</li>
              <li>Following: 85</li>
            </ul>
          </div>

          <hr className="my-4 border-gray-700" />
          <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">
            Follow
          </button>
        </aside>

        {/* Projects Section */}
        <main className="flex-1">
          <h2 className="text-2xl font-bold text-gray-100 mb-6">
            {username}'s Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

// Fetch data for the profile page
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username } = context.params as { username: string };

  // Mock data - replace with actual API/database call
  const projects = [
    {
      id: "1",
      title: "Personal Portfolio",
      description: "A portfolio website built with Next.js and Tailwind CSS.",
      image:
        "https://cdn.pixabay.com/photo/2016/12/02/02/10/idea-1876659_1280.jpg",
      likes: 120,
      comments: 45,
      views: 1000,
    },
    {
      id: "2",
      title: "E-commerce Platform",
      description:
        "An e-commerce app with features for browsing and purchasing.",
      image:
        "https://cdn.pixabay.com/photo/2016/12/02/02/10/idea-1876659_1280.jpg",
      likes: 200,
      comments: 60,
      views: 1500,
    },
    {
      id: "3",
      title: "Task Manager",
      description: "A task management app built with React and Firebase.",
      image:
        "https://cdn.pixabay.com/photo/2016/12/02/02/10/idea-1876659_1280.jpg",
      likes: 80,
      comments: 20,
      views: 800,
    },
    {
      id: "4",
      title: "Personal Portfolio",
      description: "A portfolio website built with Next.js and Tailwind CSS.",
      image:
        "https://cdn.pixabay.com/photo/2016/12/02/02/10/idea-1876659_1280.jpg",
      likes: 120,
      comments: 45,
      views: 1000,
    },
  ];

  const bio =
    "Full-stack developer passionate about creating dynamic user experiences.";
  const avatarUrl = "/images/avatar.jpg"; // Replace with actual avatar URL.

  return {
    props: {
      username,
      bio,
      avatarUrl,
      projects,
    },
  };
};

export default ProfilePage;
