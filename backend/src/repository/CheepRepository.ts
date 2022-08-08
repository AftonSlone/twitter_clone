import { AppDataSource } from '../data-source';
import { Cheep } from '../entity/Cheep';

export default AppDataSource.getRepository(Cheep);
