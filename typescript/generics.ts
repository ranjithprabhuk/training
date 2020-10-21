import { isImportClause } from "typescript";

interface ISimpleGenric<T, AT, B> {
  value: T;
  data: AT;
  json: AT;
  isAvailable: boolean;
  name?: string;
  id: number;
}

const simpleValue: ISimpleGenric<string, number, boolean> = {
  value: 'sdsdsd',
  data: 1212,
  json: 1212
};


const anotherValue: ISimpleGenric<string, {value: string, id: number}> = {
  value: 'sdsdsds',
  data: {id: 12, value: 'sdsds'},
  json: {id: 12, value: 'sdsds'},
}