import { AppDataSource } from "../data-source";
import { Reply } from "../entity/Reply";

export default AppDataSource.getRepository(Reply);
