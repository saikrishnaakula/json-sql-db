import { Query } from './query';

export const generateSql = (sql: string): Query => {
    const sqlParts = sql.toUpperCase().split(" ");
    let qry = {
        fields: '',
        operation: '',
        table: '',
        where: ''
    };
    qry.operation = sqlParts[0];
    const from = sqlParts.indexOf('FROM');
    for (let i = 1; i < from; i++) {
        qry.fields += sqlParts[i];
    }
    qry.table = sqlParts[from + 1];
    const where = sql.toUpperCase().indexOf('WHERE');
    qry.where = sql.toUpperCase().slice(where + 5, sql.length);
    return new Query(qry.operation, qry.fields, qry.table, qry.where);
}

export const query = (data: object[], sql: string) => {
    const qry: Query = generateSql(sql);
    if (qry.operation === 'SELECT') {
        return select(data, qry);
    } else if (qry.operation === 'UPDATE') {
        return update(data, qry);
    } else if (qry.operation === 'DELETE') {
        return deleteQry(data, qry);
    }
}

const select = (data: object[], sql: Query): object[] {
    const res: object[];
    if (sql.table === '#') {
        res = 
    } else {

    }
    return res;
}
const update = (data: object[], sql: Query): object[] {
    return null;
}
const deleteQry = (data: object[], sql: Query): object[] {
    return null;
}

const whereToCondtions = (where: string): string[] => {
    let res:string[];
    res.push(' ');
    return res;
}