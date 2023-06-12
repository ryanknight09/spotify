import { useQuery } from 'react-query';

export type Following = {
  artists: {
    href: string;
    limit: number;
    next: string;
    cursors: {
      after: string;
      before: string;
    };
    total: number;
    items: [
      {
        external_urls: {
          spotify: string;
        };
        followers: {
          href: string;
          total: number;
        };
        genres: string[];
        href: string;
        id: string;
        images: [
          {
            url: string;
            height: number;
            width: number;
          }
        ];
        name: string;
        popularity: number;
        type: string;
        uri: string;
      }
    ];
  };
};

export const useUsersFollowing = () => {
  const { isLoading, error, data } = useQuery<Following, Error>({
    queryKey: ['me/following?type=artist'],
  });

  return { isLoading, error, following: data };
};
