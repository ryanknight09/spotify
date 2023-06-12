import { useQuery } from 'react-query';

type Categories = {
  categories: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
    items: [
      {
        href: string;
        icons: [
          {
            height: number;
            url: string;
            width: number;
          }
        ];
        id: string;
        name: string;
      }
    ];
  };
};

export const useCategories = () => {
  const { isLoading, error, data } = useQuery<Categories, Error>({
    queryKey: ['browse/categories?offset=0&limit=50'],
  });

  return { isLoading, error, categoriesResponse: data };
};
