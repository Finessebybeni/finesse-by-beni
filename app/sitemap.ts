import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.finessebybeni.com/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.finessebybeni.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.finessebybeni.com/services',
      lastModified: new Date(),
    },
    {
      url: 'https://www.finessebybeni.com/studio',
      lastModified: new Date(),
    },
    {
      url: 'https://www.finessebybeni.com/contact',
      lastModified: new Date(),
    },
  ]
}