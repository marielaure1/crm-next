import { useQuery } from '@tanstack/react-query';
import { ApiModule } from '@api/configs/api-module';

export const useFindAll = <DataInterface>(
  queryKey: string,
  apiModule: ApiModule<DataInterface, any>
) => {
  return useQuery<DataInterface[]>({
    queryKey: [queryKey],
    queryFn: () => apiModule.findAll(),
  });
};
