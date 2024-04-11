import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { AgendaEntry } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Feather';
import { FontSize } from '../../../../../utils/GlobalStyles';
import Avatar from '@screens/app/common/avatar/Avatar';
import {
  AvatarSizeType,
  ImageEntityType,
  ImageType,
} from '../../../../../utils/entityUtils';
import { Alert, Pressable, Slider, StyleSheet, Text, View } from 'react-native';
import { getMedicalSvg } from '@assets/medicalIcons';
const AgendaEventItem = ({ event }: { event: AgendaEntry }) => {
  const [currentTime, setCurrentTime] = useState(moment().format('HH.mm'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('HH.mm'));
    }, 60);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    console.log(currentTime);
  }, [currentTime]);

  return (
    <>
      <View>
        <Pressable
          style={[
            styles.item,
            {
              height: event.height,
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
          ]}
          onPress={() => Alert.alert(event.name)}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View
              style={{
                padding: 5,
                backgroundColor: 'pink',
                marginRight: 10,
                borderRadius: 10,
              }}>
              {event?.icon && getMedicalSvg(event.icon)}
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  paddingBottom: 5,
                  fontSize: FontSize.fontH3,
                }}>
                {event.name}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Icon
                  color="gray"
                  style={{ marginRight: 5 }}
                  name="clock"
                  size={20}
                />
                <Text style={{ color: 'gray' }}>
                  {event.duration} mins (
                  {moment(event.startDate).format('mm:ss')}-
                  {moment(event.endDate).format('mm:ss')})
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                  color="gray"
                  style={{ marginRight: 5 }}
                  name="user"
                  size={20}
                />
                <Text style={{ color: 'gray' }}>{event?.patient?.nameText}</Text>
              </View>
            </View>
          </View>
          <Avatar
            entityId={event?.patientId}
            entityType={ImageEntityType.PATIENT}
            type={ImageType.AVATAR_SMALL}
            size={AvatarSizeType.LIST_LARGE}
          />
        </Pressable>
        {event.isLast && (
          <View style={{ marginTop: 15 }}>
            <Slider
              style={{ width: '90%', height: 20 }}
              minimumValue={0}
              maximumValue={1440}
              step={1}
              disabled
              value={Number(currentTime) * 60}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default AgendaEventItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
