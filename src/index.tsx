import { NativeModules } from 'react-native';

type SqliteType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Sqlite } = NativeModules;

export default Sqlite as SqliteType;
