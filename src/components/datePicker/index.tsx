import TextInputCustom from '@components/input/TextInputCustom';
import moment from 'moment';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-native-date-picker';

const DatePickerInput = ({
  label,
  placeholder,
  isOpen,
  setIsOpen,
  setUnixDate,
  selectedDate,
  setSelectedDate,
  iconRight,
}) => {
  const { t } = useTranslation();

  const handleDateConfirm = (crtDate) => {
    setIsOpen(false);
    setSelectedDate(crtDate);
    const unixTimestamp = moment(crtDate).unix();
    setUnixDate(unixTimestamp);
  };

  const formatDateForInput = (date) => {
    return moment(date).format('DD/MM/YYYY');
  };

  return (
    <>
      <DatePicker
        modal={true}
        open={isOpen}
        date={selectedDate}
        mode={'date'}
        onConfirm={(crtDate) => handleDateConfirm(crtDate)}
        onCancel={() => {
          setIsOpen(false);
        }}
      />

      <TextInputCustom
        label={t(label)}
        placeholder={t(placeholder)}
        modalInputWidth
        isEditable={true}
        iconRight={iconRight}
        value={formatDateForInput(selectedDate)}
        isMultiline
        onTouchStart={() => {
          setIsOpen(true);
        }}
      />
    </>
  );
};

export default DatePickerInput;
