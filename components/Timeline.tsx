function Timeline() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
          <div className="w-full max-w-3xl mx-auto">
            {/* Vertical Timeline */}
            <div className="-my-6">
              {/* Item #1 */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-medium bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent mb-1 sm:mb-0">
                  uni and new projects
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-violet-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    2024
                  </time>
                  <div className="text-xl font-bold text-slate-900 dark:text-slate-300">
                    New Projects, New Tehnologies, Uni
                  </div>
                </div>
                <div className="text-slate-500 dark:text-gray-300">
                  I worked on the{" "}
                  <a
                    className="font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent"
                    href="https://eres.lol/"
                  >
                    eres.lol
                  </a>{" "}
                  project, where I added new features and fixed bugs. I also
                  created a new website from scratch for{" "}
                  <a
                    className="font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent"
                    href="https://ecom.skillzl.dev/"
                  >
                    ecom.skillzl.dev
                  </a>
                  , an e-commerce template that includes all the features
                  necessary to manage orders and payments for your online store. Yeah and also I am
                  student at{" "}
                  <a
                    className="font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent"
                    href="https://univ-ovidius.ro/"
                  >
                    Ovidius University
                  </a>
                  .
                </div>
              </div>

              {/* Item #2 */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-medium bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent mb-1 sm:mb-0">
                  eres.lol app
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-violet-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    2023
                  </time>
                  <div className="text-xl font-bold text-slate-900 dark:text-slate-300">
                    Coding Break, But Back With a New Project
                  </div>
                </div>
                <div className="text-slate-500 dark:text-gray-300">
                  I took a six-month break from coding, but I’m back with a more
                  interactive project: the{" "}
                  <a
                    className="font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent"
                    href="https://eres.lol/"
                  >
                    eres.lol
                  </a>{" "}
                  Discord application, which is synced with an Express
                  dashboard..
                </div>
              </div>

              {/* Item #3 */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-medium bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent mb-1 sm:mb-0">
                  nothing but learning
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-violet-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    2022
                  </time>
                  <div className="text-xl font-bold text-slate-900 dark:text-slate-300">
                    Learning new technologies{" "}
                  </div>
                </div>
                <div className="text-slate-500 dark:text-gray-300">
                  Working on new projects with more complex infrastructures and
                  more powerful features. Also switched to deploy with more
                  modern services.
                </div>
              </div>

              {/* Item #4 */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-medium bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent mb-1 sm:mb-0">
                  skillzl.dev website
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-violet-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    2021
                  </time>
                  <div className="text-xl font-bold text-slate-900 dark:text-slate-300">
                    More on Web Development
                  </div>
                </div>
                <div className="text-slate-500 dark:text-gray-300">
                  Started learning{" "}
                  <a
                    className="font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent"
                    href="https://reactjs.org/"
                  >
                    React
                  </a>
                  . Also I made my first attempt to create a new modern website
                  from scratch.
                </div>
              </div>

              {/* Item #5 */}
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-medium bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent mb-1 sm:mb-0">
                  starting programming
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-violet-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    2018-2020
                  </time>
                  <div className="text-xl font-bold text-slate-900 dark:text-slate-300">
                    Started programming
                  </div>
                </div>
                <div className="text-slate-500 dark:text-gray-300">
                  Joined{" "}
                  <a
                    className="font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent"
                    href="http://github.com/b1gcheats"
                  >
                    b1g Cheaters
                  </a>{" "}
                  project as Lead Developer. Started making more changes to the
                  style I used to code my applications started from 2018.
                </div>
              </div>
            </div>
            {/* End: Vertical Timeline */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
