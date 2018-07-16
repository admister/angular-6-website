import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const users = [
      { id: 11, firtName: 'rahul', lastName: 'gupta', email: 'test123@gmail.com', password: 'welcome' },
      { id: 12, firstName: 'rohan', lastName: 'gupta', email: 'test345@gmail.com', password: 'welcome' }
    ];
    return {users};
  }

getToken(user) {
  return 'this is a token';
}


  post(reqInfo: RequestInfo) {

    if (reqInfo.id === 'login') {
      console.log('from login');
      return reqInfo.utils.createResponse$(() => {
        const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
        const users = reqInfo.collection.find(user => {
          return reqInfo.req['body'].email === user.email && reqInfo.req['body'].password === user.password ;
        });

        let responseBody = {};

        if (users) {
          responseBody = {
            id: users.id,
            firstName: users.firstName,
            lastName: users.lastName,
            email: users.email,
            token: this.getToken(users)
          };
        }

        const options: ResponseOptions = responseBody ?
        {
          body: dataEncapsulation ? { responseBody } : responseBody,
          status: 200
        } :
        {
          body: { error: `'User' with email='${reqInfo.req['body'].email}' not found` },
          status: 404
        };

        options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;
        return options;


      });


    } else if (reqInfo.id === 'signup') {
      reqInfo.id = null;
      console.log(' from signup');
    }
  }

}
