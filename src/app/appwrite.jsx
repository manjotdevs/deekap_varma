import { Client, Account } from 'appwrite';
export const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66a50a6c000f1db2591b');

export const account = new Account(client);
export { ID } from 'appwrite';
