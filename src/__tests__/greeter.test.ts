import { Clause, IQuery } from '../query';
import { select } from './../index';
test('My Greeter', () => {
  const test: object = { test: [
    {key:1},
    {key:1},
    {key:1},
    {key:1},
    {key:1},
    {key:0}
  ] };
  const sql: IQuery = {
    fields: '*',
    operation: 0,
    table: 'test',
    where: [new Clause('key','=','1')],
    wherejoiner: 'AND'
  }
  expect(select([test], sql)).toBe({ test: [
    {key:0}
  ] });
});