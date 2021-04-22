const { createClient } = supabase
const SUPABASE_URL = "https://djkwwhqdshosckmafubq.supabase.co" 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxODQwNjY4MywiZXhwIjoxOTMzOTgyNjgzfQ.u1Jxs7UkfsIzgNrxsHIcjgQL9tSnT4K0c7cYXDx_Iig'
supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// typeof process !== 'undefined' ? console.log('env var tests', process.env.SUPABASE_URL_TEST, process.env.ELEVENTY_PRODUCTION) : console.log('no process variable')

async function getData(tableName, orderCol) {
    return await supabase
        .from(tableName)
        .select('*')
        .order(orderCol == undefined ? 'id' : orderCol)
}

async function getRow(tableName, id) {
    return await supabase
        .from(tableName)
        .select('*')
        .eq('id', id)
}

async function getSomeRowsByArray(tableName, colName, filterValue) {
    return await supabase
        .from(tableName)
        .select('*')
        .cs(colName, [filterValue])
}

async function addRow(tableName, rowData) {
    return await supabase
        .from(tableName)
        .insert([
            rowData,
        ]);
}

async function deleteRow(tableName, col, data) {
    return await supabase
        .from(tableName)
        .delete()
        .eq(col, data)
}

async function updateRow(tableName, idCol, id, updateData) {
    return await supabase
        .from(tableName)
        .update(updateData)
        .eq(idCol, id);
}