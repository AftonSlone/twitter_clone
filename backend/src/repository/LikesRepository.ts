import { AppDataSource } from '../data-source';
import { Likes } from '../entity/Likes';

export default AppDataSource.getRepository(Likes);
