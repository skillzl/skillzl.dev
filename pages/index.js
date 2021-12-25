/** @format */

import Portfolio from "../components/Portfolio";
import PortfolioImage from "../components/PortfolioImage";
import SocialMedia from "../components/SocialMedia";
import Projects from "../components/Projects";
import Layout from "../components/Layout";
import config from "../config";

function Home() {
  return (
    <Layout>
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="flex flex-wrap items-start justify-start w-full">
            <PortfolioImage image={config.about.image} />
            <SocialMedia socialLinks={config.about.socialLinks} />
            <Portfolio
              name={config.about.name}
              job={config.about.job}
              description={config.about.description}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full space-y-2 md:space-x-4 md:flex-no-wrap">
          <Projects projects={config.projects} />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
