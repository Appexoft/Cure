import { useQuery } from 'react-query';
import { apiService } from '../../../../services';
import { API_IMAGE } from '../../../../services/api/ApiConstants';
import { ImageEntityType, ImageType } from '../../../../utils/entityUtils';

const getAvatar = async (
  id: string,
  imageType: ImageType,
  imageEntityType: ImageEntityType,
) => {
  const response = await apiService.makeGETRequestReactQuery(
    `${API_IMAGE}/getDownloadLink/${id}/${imageType}/${imageEntityType}`,
  );
  return response?.success?.data;
};

const useGetAvatar = (
  id: string,
  imageType: ImageType,
  imageEntityType: ImageEntityType,
) =>
  useQuery(['avatar', id, imageType, imageEntityType], () =>
    getAvatar(id, imageType, imageEntityType),
  );
export default useGetAvatar;
