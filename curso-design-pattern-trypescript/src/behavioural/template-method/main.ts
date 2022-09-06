import { resolve } from 'path';
import { CustomerDataParserJson } from './customer-data-parser-json';
import { CustomerDataParserTxt } from './customer-data-parser-txt';

async function run() {
  const filePathTxt = resolve(__dirname, 'files', 'customer.txt');
  const customerDataParserTxt = new CustomerDataParserTxt(filePathTxt);
  await customerDataParserTxt.fixCustomerData();
  console.log('TXT', customerDataParserTxt.customerData);

  const filePathJson = resolve(__dirname, 'files', 'customer.json');
  const customerDataParserJson = new CustomerDataParserJson(filePathJson);
  await customerDataParserJson.fixCustomerData();
  console.log('JSON', customerDataParserJson.customerData);
}

run();
