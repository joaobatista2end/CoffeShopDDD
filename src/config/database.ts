export interface DatabaseParams {
  user: string;
  password: string;
  host: string;
  database: string;
  databaseAuth: string;
}

export const database: Record<string, DatabaseParams> = {
  mongo: {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'coffee_shop',
    databaseAuth: 'admin',
  },
};
