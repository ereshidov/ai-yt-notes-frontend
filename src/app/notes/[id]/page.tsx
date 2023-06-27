import { Summary } from '~/features/Summary'
import { YoutubeVideoSummaryDocument } from '~/generated/graphql'
import { getClient } from '~/shared/lib'

interface PageParams {
  id: string
}

const Page = async ({ params: { id } }: RouteParams<PageParams>) => {
  const { data } = await getClient().query({
    query: YoutubeVideoSummaryDocument,
    variables: {
      videoId: id
    }
  })

  const video = data.youtubeVideoSummary.video

  return (
    <>
      <Summary.GetNotesFromNextVideoButton />
      <Summary
        thumbnail={<Summary.ThumbnailImage thumbnailSrc={video.thumbnailUrl} />}
        title={<Summary.Title title={video.title} />}
        description={
          <Summary.Description
            captions={video.captions.join(' ')}
            description={data.youtubeVideoSummary.aiSummary}
          />
        }
      />
    </>
  )
}

export default Page
