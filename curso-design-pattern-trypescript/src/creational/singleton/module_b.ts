// import { MyDatabaseClassic } from './db/my-database-classic';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';
// import { MydatabaseModule } from './db/my-database-module';
import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Roberto', age: 30 });
myDatabaseClassic.add({ name: 'Joana', age: 50 });
myDatabaseClassic.add({ name: 'Luiza', age: 25 });
myDatabaseClassic.show();

console.log(myDatabaseClassicFromModuleA === myDatabaseClassic);
