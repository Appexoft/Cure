import React from 'react';
import ActionSheet, { SheetProps } from 'react-native-actions-sheet';
import {
  IPractitioner,
  IProfileCredentialDto,
} from '../../../../../../../utils/domainEntities';
import AddEducationComponent from '@screens/app/doctor/onboarding/createAccount/education/sheet/index';
function AddEducationSheet(
  props: SheetProps<{
    practitioner: IPractitioner;
    entity: IProfileCredentialDto;
  }>,
) {
  return (
    <ActionSheet
      closable={true}
      backgroundInteractionEnabled={false}
      gesturesEnabled={true}
      headerAlwaysVisible={true}
      closeOnTouchBackdrop={true}
      useBottomSafeAreaPadding
      id={props.sheetId}>
      <AddEducationComponent entity={props?.payload?.entity} />
    </ActionSheet>
  );
}

export default AddEducationSheet;
