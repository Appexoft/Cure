/*
 * Reducer actions related with navigation
 */

import NavigationService from '@navigation/common/NavigationService';

export function navigateToHome(params) {
  NavigationService.navigate('Home', params);
}
