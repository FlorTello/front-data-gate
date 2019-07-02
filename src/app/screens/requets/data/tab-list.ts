import { Status } from '../models/status.enum';

export const tabList = [
  {
    typeRequest: '',
    label: 'ALL',
  },
  {
    typeRequest: Status.PENDING,
    label: 'PENDING',
  },
  {
    typeRequest: Status.APPROVED,
    label: 'APPROVED',
  },
  {
    typeRequest: Status.DENIED,
    label: 'DENIED',
  },
];
