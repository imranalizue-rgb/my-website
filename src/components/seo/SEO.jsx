import { Helmet } from 'react-helmet-async'
import { company } from '../../data/company'

export default function SEO({
  title,
  description,
  path = '/',
  type = 'website',
  keywords,
}) {
  const fullTitle = title
    ? `${title} | ${company.name}`
    : `${company.name} | ${company.tagline}`
  const metaDescription = description || company.description
  const url = `${company.url}${path}`
  const defaultKeywords =
    'technology consulting, cloud engineering, software development, cybersecurity, digital transformation, enterprise solutions'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: company.url,
    logo: `${company.url}/favicon.svg`,
    description: company.description,
    email: company.email,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '500 Innovation Drive, Suite 1200',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US',
    },
    sameAs: Object.values(company.social),
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={company.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
