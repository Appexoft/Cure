import { useMutation, useQuery } from 'react-query';
import { apiService } from '../../../services';
import { ImageEntityType, ImageType } from '../../../utils/entityUtils';
import { API_IMAGE } from '../../../services/api/ApiConstants';

const getUploadLink = async (
  id: string,
  imageType: ImageType,
  imageEntityType: ImageEntityType,
) => {
  const response = await apiService.makeGETRequestReactQuery(
    `${API_IMAGE}/getUploadLink/${id}/${imageType}/${imageEntityType}`,
  );
  return response?.success?.data;
};

export const useGetUploadLink = (
  id: string,
  imageType: ImageType,
  imageEntityType: ImageEntityType,
) =>
  useQuery(['getUploadLink', id, imageType, imageEntityType], () =>
    getUploadLink(id, imageType, imageEntityType),
  );
// export default useGetUploadLink;

const uploadPhoto = async (data: any) => {
  const response = await apiService.makePOSTRequest(
    `${API_IMAGE}/upload`,
    data,
  );
  return response?.success?.data;
};

export const useUploadPhoto = (data: any) =>
  useQuery(['uploadPhoto', url], () => uploadPhoto(url, data));
// export default useGetUploadLink;

