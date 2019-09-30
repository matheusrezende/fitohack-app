/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-16 14:26:54
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 14:32:29
 */
import Sentry from 'sentry-expo';

export const crashReporter = (store) => (next) => (action) => {
  try {
    return next(action); // dispatch
  } catch (err) {
    Sentry.captureException(err, { // send to crash reporting tool
      extra: {
        action,
        state: store.getState(), // dump application state
      },
    });
    throw err; // re-throw error
  }
}
