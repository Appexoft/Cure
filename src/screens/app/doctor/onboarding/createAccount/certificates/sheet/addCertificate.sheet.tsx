import React from 'react';
import ActionSheet, { SheetProps } from 'react-native-actions-sheet';
import {
  IPractitioner,
  IProfileCredentialDto,
} from '../../../../../../../utils/domainEntities';
import AddCertificatesComponent from '@screens/app/doctor/onboarding/createAccount/certificates/sheet/index';
function AddCertificateSheet(
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
      <AddCertificatesComponent entity={props?.payload?.entity} />
    </ActionSheet>
  );
}

export default AddCertificateSheet;
