import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface ContainerProps {
  title?: string
  description?: string
  image?: string
  children: ReactNode
  date?: string
}

const defaultMeta = {
  title: 'skillzl',
  description: 'self-thought programmer',
  image: 'https://skillzl.dev/banner.png',
  date: '',
}

export default function Container({
  children,
  title,
  description,
  image,
  date,
}: ContainerProps & typeof defaultMeta) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta property="og:url" content={`https://skillzl.dev${router.asPath}`} />
        <link rel="canonical" href={`https://skillzl.dev${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="skillzl" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bnrcatalin" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {date && <meta property="article:published_time" content={date} />}
      </Head>
      {children}
    </>
  )
}

Container.defaultProps = defaultMeta
