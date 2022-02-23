import React, { FC } from 'react';

import { useOnHashChange } from '../hooks/use-on-hash-change';
import { useOnRouteChange } from '../hooks/use-on-route-change';

export const AppWrapper: FC = ({ children }) => {
  useOnRouteChange()
  useOnHashChange()
  return <>{children}</>
}
