import { Client, Account, ID } from 'appwrite';

// Initialize the Appwrite client
export const client = new Client();
client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '') 
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_ID || '');

// Initialize the Account service
export const account = new Account(client);