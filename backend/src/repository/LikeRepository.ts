import { AppDataSource } from '../data-source';
import { Like } from '../entity/Like';

export default AppDataSource.getRepository(Like);
