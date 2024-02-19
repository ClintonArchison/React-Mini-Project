import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65cb991ee3277436093f");

export const account = new Account(client);
export { ID } from "appwrite";
