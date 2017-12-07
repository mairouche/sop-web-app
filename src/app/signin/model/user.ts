/**
 * Created by Meidi on 28/10/2017.
 */

export class User {

  constructor(
    public id: string,
    public name: string,
    public surname: string,
    public email: string,
    public password: string,
    public token: string
  ) {  }

}
