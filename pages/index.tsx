"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectCard } from "../components/ProjectCard";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getFeaturedProjects } from "../lib/projects";
import { LampContainer } from "../components/ui/lamp";
import { ContainerScroll } from "../components/ui/container-scroll-animation";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
  views: number;
}

export default function Home() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const projects = await getFeaturedProjects();
      setFeaturedProjects(projects);
    }
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 to-gray-900 text-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="mb-20 text-center">
          <div>
            <h1 className=" text-6xl font-bold">DevShowcase</h1>
            <p className=" text-2xl">Elevate your projects to new heights</p>
            <br />
            <br />
            <Link
              href="/upload"
              className="px-8 py-4 text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Share Your Masterpiece
            </Link>
          </div>
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold dark:text-white">
                  A devloper friendly <br />
                  <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 md:text-[6rem] font-bold mt-1 leading-none">
                    Work Showcase
                  </span>
                </h1>
              </>
            }
          >
            <Image
              src="https://cdn.pixabay.com/photo/2016/12/02/02/10/idea-1876659_1280.jpg"
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </section>

        <section className="mb-20">
          <h2 className="mb-10 text-4xl font-semibold text-center text-blue-300">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="mb-10 text-4xl font-semibold text-blue-300">
            Explore the Showcase
          </h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/projects/frontend"
              className="px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Frontend Marvels
            </Link>
            <Link
              href="/projects/backend"
              className="px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Backend Wonders
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
