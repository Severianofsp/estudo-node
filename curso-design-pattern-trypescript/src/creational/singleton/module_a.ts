// import { MyDatabaseClassic } from './db/my-database-classic';
// import { MydatabaseModule } from './db/my-database-module';
import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Felipe', age: 30 });
myDatabaseClassic.add({ name: 'Luiz', age: 30 });

export { myDatabaseClassic };
