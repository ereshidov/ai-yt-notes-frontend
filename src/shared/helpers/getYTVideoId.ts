export const getYTVideoId = (url: string) => {
  const [, , videoId] = url
    .replace(/(>|<)/gi, '')
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)

  if (videoId) {
    return videoId
  }
  throw new Error('Provided URL does not match YouTube URL template')
}
