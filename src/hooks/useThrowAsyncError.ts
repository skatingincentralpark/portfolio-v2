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
 * const throwAsyncError = useThrowAsyncError();
 *
 * const safeFunction = () => {
 *   try {
 *     doSomethingDangerous();
 *   } catch (error) {
 *     // will be caught in error boundary if thrown
 *     if (error instanceof Error) throwAsyncError(error);
 *   }
 * };
 */
const useThrowAsyncError = () => {
  const [_, setState] = useState();

  return (error: Error) => {
    setState(() => {
      throw error;
    });
  };
};

export default useThrowAsyncError;
