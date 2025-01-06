import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { GetServerSideProps } from "next";

interface DashboardProps {
  user: any;
}

const Dashboard = ({ user }: DashboardProps) => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("user_id", user?.id);

      if (error) {
        console.error("Error fetching projects:", error.message);
      } else {
        setProjects(data);
      }
      setLoading(false);
    };

    fetchProjects();
  }, [user?.id]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/signin"; // Redirect to the sign-in page
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-10 px-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Profile Section */}
          <div className="lg:w-1/4 bg-gray-800 rounded-lg shadow-md p-6 sticky top-10">
            <h2 className="text-2xl font-bold mb-4">Welcome, {user?.email}</h2>
            <p className="text-gray-400 text-sm mb-4">ID: {user?.id}</p>
            <button
              onClick={handleSignOut}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
            >
              Sign Out
            </button>
          </div>

          {/* Projects Section */}
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-6">Your Projects</h2>
            {loading ? (
              <p>Loading projects...</p>
            ) : projects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project: any) => (
                  <div
                    key={project.id}
                    className="bg-gray-800 rounded-lg shadow-md p-4"
                  >
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-gray-400">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">
                No projects found. Start adding some!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: session?.user || null,
    },
  };
};

export default Dashboard;
