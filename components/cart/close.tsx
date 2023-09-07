import { Button } from '@/primitives';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

type Props = {
  onClose: () => void;
};

export function Close(props: Props) {
  const { onClose } = props;
  return (
    <Button size="none" color="ghost" css={{ color: '$neutralSolid', ml: 'auto' }} onClick={onClose}>
      <FontAwesomeIcon icon={faClose} width="16" height="16" />
    </Button>
  );
}
