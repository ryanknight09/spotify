import { useQuery } from 'react-query';

type UserProfile = {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: { spotify: string };
  followers: { href: string; total: number };
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
};

type Image = {
  url: string;
  height: number;
  width: number;
};

export const useProfile = () => {
  const { isLoading, error, data } = useQuery<UserProfile, Error>({
    queryKey: ['me'],
  });

  return { isLoading, error, me: data };
};
