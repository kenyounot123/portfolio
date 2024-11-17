export const revalidate = 0;

export default async function sitemap() {
  return [
    {
      url: `https://ken-lu.dev/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}