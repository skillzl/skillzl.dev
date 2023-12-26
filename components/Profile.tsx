import Image from 'next/image'
import profilePic from 'public/images/me.png'

function Profile() {
    return (
    <section className="mb-10 sm:flex sm:items-center sm:justify-between">
        <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-gray-200 dark:bg-gradient-to-tl from-zinc-900 to-gray-800">
            <div className="relative z-10">
                <Image className="w-full"
                src={profilePic}
                alt="Picture of the author"
                placeholder="blur"
                quality={85} />
                <div className="text-center absolute w-full">
                    <p className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent 0 tracking-wide text-lg font-semibold">skillzl</p>
                    </div>
                    </div>
                    <div className="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
                        <br />
                        </div>
                        <div className="pt-9 pb-4 dark:text-blue-50 text-center">
                            <p>self-thought programmer</p>
                            </div>
                            <div className="pb-10 text-center tracking-wide flex justify-around">
                                <div className="posts">
                                    <p className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent text-sm">Projects</p>
                                    <p className="dark:text-blue-50">9+</p>
                                    </div>
                                    <div className="followers">
                                        <p className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent text-sm">Experience</p>
                                        <p className="dark:text-blue-50">6 years</p>
                                        </div>
                                        <div className="following">
                                            <p className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent text-sm">Languages</p>
                                            <p className="dark:text-blue-50">ts, js, go</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            )
                        }
export default Profile