import { useMutation } from 'react-query';
import { apiService } from '../../../../../services';
import { API_REVIEWS } from '../../../../../services/api/ApiConstants';
import { getFhirResponseData } from '../../../../../rootStore/action-utils';
import { IReviewEntry } from '../../../../../utils/entityUtils';

const addReview = async (data: IReviewEntry) => {
  const response = await apiService.makePOSTRequest(
    `${API_REVIEWS}/create`,
    data,
  );
  return getFhirResponseData(response?.success?.data);
};

const useAddReview = (data: IReviewEntry) =>
  useMutation(['addReview', data], () => addReview(data));
export default useAddReview;

/**
 * const useAddReview = useMutation({
 *   mutationFn: (data: IReviewEntry) => addReview(data),
 * });
 */
