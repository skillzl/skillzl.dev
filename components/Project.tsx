import Badge from 'components/Badge'
import Github from 'components/icons/Github'
import {
  GlobeAltIcon
} from '@heroicons/react/solid'

interface ProjectProps {
  title: string
  author: string
  year: number
  comment: string
  link: string
  weblink: string
  active?: boolean
  over?: boolean
  website?: boolean
}

export default function Project({ title, author, year, comment, active, over, link, website, weblink }: ProjectProps) {
  return (
    <li
      className="font-body max-w-md list-none overflow-hidden rounded-xl bg-white shadow dark:border-gray-700
      dark:bg-gradient-to-tr from-gray-900 to-zinc-900 sm:w-full sm:max-w-4xl"
    >
      <article className="px-6 pt-6 sm:flex sm:pb-6">
        <div className="w-full py-6 sm:py-0 sm:px-6">
          <h2 className="mb-1.5 space-x-2 text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          <div className="mb-2 sm:flex sm:items-baseline">
            <p className="space-x-0.5 text-sm text-gray-600 dark:text-gray-400">
              <span className="text-gray-800 dark:text-gray-300">{author}</span>{' '}
              <span>&middot;</span> <span className="pr-0 sm:pr-2">{year} {active && "- current"}</span>
            </p>
            {active && <Badge text="Active" color="green" />}
            {over && <Badge text="Over" color="yellow" />}
          </div>
          <p className="py-1 leading-relaxed text-gray-600 dark:text-gray-400">{`${comment}`}</p>
          <div className="flex space-x-2 flex-row">
          {link && <a href={link}>
            <Github className="h-4 w-4 fill-gray-400 duration-300 hover:fill-black hover:dark:fill-white hover:h-5 hover:w-4" />
          </a>}
            <br />
            {website && <a href={weblink}>
            <GlobeAltIcon className="h-4 w-4 fill-gray-400 duration-300 hover:fill-black hover:dark:fill-white hover:h-5 hover:w-4" />
          </a>}
         </div>
       </div>
     </article>
   </li>
 )
}
Project.defaultProps = {
  active: false,
  over: false,
  website: false,
}
