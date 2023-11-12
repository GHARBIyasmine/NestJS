import {Global, Module} from '@nestjs/common';

import { v4 as uuidv4 } from 'uuid';
import { CrudService } from './crud.service';
import { MyConstants } from '../config/constants.config';

const UUID_PROVIDER = {
    provide: MyConstants.UUID,
    useValue: uuidv4(),
};

@Global()
@Module({
    imports :[],
    exports : [UUID_PROVIDER, CrudService],
    controllers : [],
    providers : [UUID_PROVIDER, CrudService]
})
export class CommonModule {}
