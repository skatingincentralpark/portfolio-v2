import { useState } from "react";

/**
 * Since react error boundaries can't catch
 * errors from async/eventhandler code, we can use this
 * hook to wrap our functions and ensure that if it's
 * caught, it will be passed to the error boundary.
 *
 * Remember, react error boundaries can only
 * catch errors thrown within the react lifecycle.
 *
 * @example
 * const safeCallback = useCallbackWithErrorHandling(doSomethingDangerousFunction);
 *
 * // will be caught in error boundary if thrown
 * safeCallback()
 */
const useCallbackWithErrorHandling = (callback: (args: any[]) => void) => {
  const [_, setState] = useState();

  return (...args: any[]) => {
    try {
      callback(args);
    } catch (e) {
      setState(() => {
        throw e;
      });
    }
  };
};

export default useCallbackWithErrorHandling;
