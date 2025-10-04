import { getNowPlaying } from '@/lib/spotify';

export const GET = async (_req: Request) => {
  try {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      return Response.json({ isPlaying: false }, { status: 200 });
    }

    const nowPlaying = await response.json();
    if (nowPlaying.current_playing_type === 'episode') {
      return Response.json({
        isPlaying: nowPlaying.is_playing,
        songUrl: 'https://open.spotify.com',
        title: 'Podcast',
      });
    } else if (nowPlaying.currently_playing_type === 'track') {
      const isPlaying = nowPlaying.is_playing;
      const title = nowPlaying.item.name;
      const artist = nowPlaying.item.artists
        .map((artist: { name: string }) => artist.name)
        .join(', ');
      const songUrl = nowPlaying.item.external_urls.spotify;

      return Response.json(
        {
          title,
          isPlaying,
          artist,
          songUrl,
        },
        {
          status: 200,
          headers: {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
          },
        },
      );
    } else {
      return Response.json({ isPlaying: false }, { status: 200 });
    }
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        isPlaying: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      {
        status: 500,
      },
    );
  }
};
