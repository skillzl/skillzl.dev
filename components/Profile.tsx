import { useEffect, useState } from "react";
import Image from "next/image";
import profilePic from "public/images/me.jpg";
import axios from "axios";

function Profile() {
  const [repoCount, setRepoCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get("https://api.github.com/user", {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        });

        const createdAt = new Date(userResponse.data.created_at);
        const currentDate = new Date();
        const experience = currentDate.getFullYear() - createdAt.getFullYear();

        setYearsOfExperience(experience);

        const reposResponse = await axios.get(
          "https://api.github.com/user/repos",
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
            },
          }
        );
        setRepoCount(reposResponse.data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [GITHUB_TOKEN]);

  return (
    <section className="mb-10 sm:flex sm:items-center sm:justify-between">
      <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-gray-200 dark:bg-gradient-to-tl from-zinc-900 to-gray-800 border border-[#17182910] backdrop-blur-md">
        <div className="relative z-10">
          <Image
            className="w-full"
            src={profilePic}
            alt="Picture of the author"
            placeholder="blur"
            quality={85}
          />
          <div className="text-center absolute w-full">
            <p className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent tracking-wide text-lg font-bold">
              skillzl
            </p>
          </div>
        </div>
        <div className="relative flex justify-between items-center flex-row px-6 z-50">
        </div>
        <div className="mt-8 dark:text-blue-50 text-center text-sm font-semibold">
          <p>Catalin Turta</p>
        </div>
        <div className="mt-0.5 mb-2 dark:text-blue-50 text-center text-md font-sans">
          <p>self-taught programmer</p>
        </div>
        <div className="pb-10 text-center tracking-wide flex justify-around">
          <div className="posts">
            <p className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent text-sm font-bold">
              Repositories
            </p>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <p className="dark:text-blue-50">{repoCount}</p>
            )}
          </div>
          <div className="followers">
            <p className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent text-sm font-bold">
              Experience
            </p>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <p className="dark:text-blue-50">{yearsOfExperience} years</p>
            )}
          </div>
          <div className="following">
            <p className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent text-sm font-bold">
              Languages
            </p>
            <p className="dark:text-blue-50">ts, js, go, c</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
