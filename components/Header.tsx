import Link from "next/link";
import { UserCircle } from "lucide-react";

export function Header() {
  return (
    <header className="bg-gray-900 bg-opacity-50 backdrop-blur-md py-6 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 hover:text-blue-300 transition-colors duration-300"
        >
          {`<`}DevShowcase{`/>`}
        </Link>
        <nav className="space-x-6">
          <Link
            href="/projects"
            className="text-blue-300 hover:text-blue-200 transition-colors duration-300 text-lg"
          >
            Explore
          </Link>
          <Link
            href="/upload"
            className="text-blue-300 hover:text-blue-200 transition-colors duration-300 text-lg"
          >
            Upload
          </Link>
          <div className="text-blue-300 hover:text-blue-200 transition-colors duration-300 text-lg inline-flex items-center">
            <Link
              href="/auth/signin"
              className="text-blue-300 hover:text-blue-200 transition-colors duration-300 text-lg"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="text-blue-300 hover:text-blue-200 transition-colors duration-300 text-lg ml-4"
            >
              Sign Up
            </Link>
          </div>
          <Link
            href="/profile"
            className="text-blue-300 hover:text-blue-200 transition-colors duration-300 text-lg inline-flex items-center"
          >
            <UserCircle className="w-6 h-6 ml-2" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
