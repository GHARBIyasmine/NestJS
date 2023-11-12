import {Inject, Injectable} from '@nestjs/common';

@Injectable()
export class TestService {
   constructor(@Inject('UUID') private uuid : () => string) {
   }
    getUuid(){
       console.log(this.uuid);
        return this.uuid;
    }


}
