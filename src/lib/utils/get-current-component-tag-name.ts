import {getCurrentInstance} from 'vue';

/*
import * as is from 'src/lib/is';
import {objectHasOwn} from 'src/lib/utils';
*/
import * as is from '../is';
import {objectHasOwn} from '../../lib/utils';

const getCurrentComponentTagName = () => {
  const currentInstance = getCurrentInstance();

  if (currentInstance && currentInstance.proxy) {
    const instanceOptions = currentInstance.proxy.$options;
    //const instanceOptions = getCurrentInstance()?.proxy.$options;
    const currentComponentTag =
      objectHasOwn(instanceOptions, '_componentTag') &&
      is.string_(instanceOptions._componentTag)
        ? instanceOptions._componentTag
        : 'unknown-component';

    return currentComponentTag;
  }

  return 'unknown-component'; // 혹은 다른 기본값
};

export default getCurrentComponentTagName;
