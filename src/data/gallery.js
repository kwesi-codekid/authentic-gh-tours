import { createClient } from "pexels"

export const galleryData = async () => {
  try {
    const client = createClient(
      "heLkwbT7InZHCxRm7mMDB8oB5TZCMbfXeXWOS30yERpyf0r8wU1TwJ4Y"
    )
    const query = "Nature"
    const { photos } = await client.photos.search({ query, per_page: 12, orientation: "square" })
    return Promise.resolve(photos)
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}
