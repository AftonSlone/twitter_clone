import { AppDataSource } from '../data-source';
import { Follow } from '../entity/Follow';

export default AppDataSource.getRepository(Follow);
