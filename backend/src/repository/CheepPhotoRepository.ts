import { AppDataSource } from '../data-source';
import { CheepPhoto } from '../entity/CheepPhoto';

export default AppDataSource.getRepository(CheepPhoto);
