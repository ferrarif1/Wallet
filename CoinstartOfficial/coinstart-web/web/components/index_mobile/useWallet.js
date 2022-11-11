import { useCallback, useEffect, useRef } from 'react';

export default () => {
  const refOns = useRef();
    
  useEffect(() => {
    import('onsenui').then(inst => {
      refOns.current = inst.default;
    });
  }, []);
    
  const openWallet = useCallback(() => {
    // /** @type {import('onsenui')} */
    // const ons = refOns.current;
    // ons.notification.alert('devloping... wait a moment', { title: 'unsupported' });
        
    location.assign('');
  }, [refOns.current]);

  return { openWallet };
};
