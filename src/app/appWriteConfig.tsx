import { Client, Account, ID } from 'appwrite';

// Initialize the Appwrite client
export const client = new Client();
client
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT) // Ensure you are using REACT_APP_ prefix for CRA
    .setProject(process.env.REACT_APP_APPWRITE_ID);

// Initialize the Account service
export const account = new Account(client);

// Define the userProps interface
interface UserProps {
    email: string;
    password: string;
}

// Create the user function
async function createUser({ email, password }: UserProps): Promise<void> {
    try {
        await account.create(ID.unique(), email, password);
        console.log('Account created successfully');
    } catch (error) {
        console.error('Error creating account:', error);
    }
}

export default createUser;
