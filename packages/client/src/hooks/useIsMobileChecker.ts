import { useMemo } from "react";

const useIsMobileChecker = () => 
 useMemo(() => /(windows phone|android|iphone|ipad|mobile)/i.test(
    navigator.userAgent
  ), []);
;

export default useIsMobileChecker;
