import * as React from 'react';
import { useEffect, useState } from 'react';
import { Color } from '../../../utils/GlobalStyles';
import {
  EntityType,
  Identifiable,
  SetFavoriteDto,
} from '../../../utils/domainEntities';
import ButtonHeader from '@components/btns/ButtonHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import useAuth from '@screens/auth/authContext/useAuth';

interface Props {
  resource: Identifiable;
  entityType: EntityType;
  favorites: Identifiable[];
  fetchFavorites: (patientId: number) => {};
  updateFavorites: (data: SetFavoriteDto) => {};
  updateSuccess: boolean;
  loading: boolean;
}

const FavoredBtnComponent = (props: Props) => {
  const { patient } = useAuth();

  const {
    resource,
    entityType,
    favorites,
    fetchFavorites,
    updateFavorites,
    updateSuccess,
    loading,
  } = props;

  const [isUpdatingFavorites, setIsUpdatingFavorites] = useState(false);
  const [isFavored, setIsFavored] = useState(
    favorites && favorites.filter((it) => it.id === resource.id).length > 0,
  );

  useEffect(() => {
    if (isUpdatingFavorites && updateSuccess && patient && patient.id) {
      fetchFavorites(patient?.id);
      setIsUpdatingFavorites(false);
    }
  }, [fetchFavorites, isUpdatingFavorites, patient, updateSuccess]);

  useEffect(() => {
    if (!isUpdatingFavorites && patient && patient.id) {
      fetchFavorites(patient?.id);
    }
  }, [fetchFavorites, isUpdatingFavorites, patient]);

  useEffect(() => {
    if (resource && resource.id) {
      setIsFavored(
        favorites && favorites.filter((it) => it.id === resource.id).length > 0,
      );
    }
  }, [favorites, resource]);

  return (
    <ButtonHeader
      left={true}
      children={
        isFavored ? (
          <Icon name={'heart'} size={16} color={Color.accent} />
        ) : (
          <Icon name={'heart-o'} size={16} color={Color.accent} />
        )
      }
      onPress={() => {
        // mark this as favorite
        if (patient && patient.id && resource && resource.id) {
          let data: SetFavoriteDto = {
            patientId: patient?.id,
            favorite: !isFavored,
          };
          switch (entityType) {
            case EntityType.PRACTITIONER_ENTITY: {
              data.practitionerId = resource?.id;
              break;
            }
            case EntityType.PRACTITIONER_ROLE_ENTITY: {
              data.practitionerRoleId = resource?.id;
              break;
            }
            case EntityType.ORGANIZATION_ENTITY: {
              data.organisationId = resource?.id;
              break;
            }
          }
          setIsUpdatingFavorites(true);
          updateFavorites(data);
        }
      }}
    />
  );
};

export default FavoredBtnComponent;
