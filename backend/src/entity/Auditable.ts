import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class Auditable {
  @CreateDateColumn()
  created: Date;
  
  @UpdateDateColumn()
  updated: Date;
}
