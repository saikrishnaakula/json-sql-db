import { Clause } from './Clause';

export class Query {
    constructor(public operation : 'SELECT'|'UPDATE'|'DELETE'|string,
    public fields : '*' | string,
    public table : '#' | string,
    public where ?: string) {}
}