import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const users = [
      { id: 11, firstName: 'jagmohan', lastName: 'Kumar', password: 'welcome', email: 'jagmohan11@gmail.com' },
    ];
    return {users};
  }

  // overriding post
  post(reqInfo: RequestInfo) {
    console.log(reqInfo);
    if (reqInfo.id === 'signup') {
      reqInfo.id = '';
      console.log('from signup');
    } else if ( reqInfo.id === 'login') {
      reqInfo.id = '';
      console.log('from login');
// response
return reqInfo.utils.createResponse$(() => {
      let body = reqInfo.req.body;
      let usr = reqInfo.collection.filter(user => {
          return user.email === body.email && user.password === body.password ;
        }
      );

      let resBody = {};
      const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;

      if (usr.length) {
        let cuser = usr[0];
        resBody = {id : cuser.id,
           firstName: cuser.firstName,
           lastName: cuser.lastName,
           email: cuser.email,
           token: 'this is a not an original one'
        };
      }

      const options: ResponseOptions = resBody ?
      {
        body: dataEncapsulation ? { resBody } : resBody,
        status: 200
      } :
      {
        body: { error: `'User' with email='${resBody.email}' not found` },
        status: 404
      };

      options.statusText = options.status === 200 ? 'OK' : 'Not Found' ;
      options.headers = reqInfo.headers;
      options.url = reqInfo.url;
      return options;

    });
  }
}

}
