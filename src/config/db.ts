import {
  createConnection,
  Connection,
  getConnectionManager,
  DataSourceOptions,
  DataSource,
} from "typeorm";
import ormconfig from "../../ormconfig";

class DbManager {
  private connection: Connection | undefined;

  async connect(): Promise<void> {
    try {
      this.connection = await createConnection(ormconfig as DataSourceOptions);
      console.log("Database connection established");
    } catch (error) {
      console.error("Error connecting to the database:", error);
      throw error;
    }
  }

  async close(): Promise<void> {
    if (this.connection) {
      await this.connection.close();
      console.log("Database connection closed");
    }
  }

  getConnection(): Connection {
    if (!this.connection) {
      throw new Error("Database connection not established");
    }
    return this.connection;
  }

  async reconnect(): Promise<void> {
    await this.close();
    await this.connect();
  }

  async isConnected(): Promise<boolean> {
    console.log("this.connection", !this.connection);
    if (!this.connection) {
      return false;
    }
    return this.connection.isConnected;
  }
}

export const dbManager = new DbManager();

export const datasoure = new DataSource(ormconfig as DataSourceOptions)
