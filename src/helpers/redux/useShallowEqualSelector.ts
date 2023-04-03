import { shallowEqual, useSelector } from 'react-redux';

export default function useShallowEqualSelector(selector: any) {
  return useSelector(selector, shallowEqual);
}
