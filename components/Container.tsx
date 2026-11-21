import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface ContainerProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  date?: string;
  noIndex?: boolean;
  children: ReactNode;
}

const SITE_URL = "https://skillzl.dev";
const SITE_NAME = "skillzl";
const TWITTER_HANDLE = "@bnrcatalin";

const DEFAULT_META = {
  title: "skillzl",
  description: "Self-taught programmer building things for the web.",
  image: `${SITE_URL}/banner.png`,
  imageAlt: "skillzl portfolio banner",
};

export default function Container({
  children,
  title,
  description = DEFAULT_META.description,
  image = DEFAULT_META.image,
  imageAlt = DEFAULT_META.imageAlt,
  type,
  date,
  noIndex = false,
}: ContainerProps) {
  const router = useRouter();

  const cleanPath = router.asPath.split(/[?#]/)[0];
  const canonicalUrl = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;

  const pageTitle =
    title && title !== DEFAULT_META.title
      ? `${title} — ${SITE_NAME}`
      : DEFAULT_META.title;

  const ogType = type ?? (date ? "article" : "website");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ogType === "article" ? "BlogPosting" : "Person",
    name: SITE_NAME,
    url: canonicalUrl,
    ...(ogType === "article"
      ? {
          headline: pageTitle,
          datePublished: date,
          image,
          author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
        }
      : {
          sameAs: [`https://twitter.com/${TWITTER_HANDLE.replace("@", "")}`],
        }),
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta
          name="robots"
          content={noIndex ? "noindex, nofollow" : "index, follow"}
        />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={imageAlt} />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={TWITTER_HANDLE} />
        <meta name="twitter:creator" content={TWITTER_HANDLE} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content={imageAlt} />

        {/* Article Metadata */}
        {date && <meta property="article:published_time" content={date} />}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      {children}
    </>
  );
}