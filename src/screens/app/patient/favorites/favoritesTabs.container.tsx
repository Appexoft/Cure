import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import {
  fetchPractitionerFavorites,
  fetchPractitionerRoleFavorites,
  fetchOrganizationFavorites,
  updateFavorites,
} from '@screens/app/patient/favorites/reducer';
import { FavoritesTabsComponent } from '@screens/app/patient/favorites/favoritesTabs.component';

const mapStateToProps = (state: any) => ({
  practitionerFavorites: state.app.patient.favorites.practitionerFavorites,
  practitionerFavoritesTotalItems:
    state.app.patient.favorites.practitionerFavoritesTotalItems,

  practitionerRoleFavorites:
    state.app.patient.favorites.practitionerRoleFavorites,
  practitionerRoleFavoritesTotalItems:
    state.app.patient.favorites.practitionerRoleFavoritesTotalItems,

  organizationsFavorites: state.app.patient.favorites.organizationsFavorites,
  organizationsFavoritesTotalItems:
    state.app.patient.favorites.organizationsFavoritesTotalItems,

  updateSuccess: state.app.patient.favorites.updateSuccess,
  loading: state.app.patient.favorites.loading,
  error: state.app.patient.favorites.errorMessage,
});

export default connect(mapStateToProps, {
  fetchPractitionerFavorites,
  fetchPractitionerRoleFavorites,
  fetchOrganizationFavorites,
  updateFavorites,
})(withTranslation(['main', 'common', 'validation'])(FavoritesTabsComponent));
