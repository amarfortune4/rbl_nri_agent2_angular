// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //F4 Server office
  BASE_URL:'http://192.168.10.122:3232',

  //F4 Mr.Pradeep
  // BASE_URL:'http://192.168.10.28:3232',

  //F4 Mr.Ramdas   
  // BASE_URL:'http://127.0.0.1:3232',

  // BASE_URL:'http://localhost:3232',
  CUSTOMER_URL:'customer',
  USER_URL:'user',
  AGENT_URL:'agent',
  SUPERAGENT_URL:'superagent'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
