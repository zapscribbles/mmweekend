// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://djkwwhqdshosckmafubq.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxODQwNjY4MywiZXhwIjoxOTMzOTgyNjgzfQ.u1Jxs7UkfsIzgNrxsHIcjgQL9tSnT4K0c7cYXDx_Iig'
// const supabase = createClient(supabaseUrl, supabaseKey)

// // typeof process !== 'undefined' ? console.log('env var tests', process.env.SUPABASE_URL_TEST, process.env.ELEVENTY_PRODUCTION) : console.log('no process variable')

// module.exports = {
//     async getData(tableName, orderCol) {
//         return await supabase
//             .from(tableName)
//             .select('*')
//             .order(orderCol == undefined ? 'id' : orderCol)
//     },
//     async getRow(tableName, id) {
//         return await supabase
//             .from(tableName)
//             .select('*')
//             .eq('id', id)
//     },
//     async getSomeRowsByArray(tableName, colName, filterValue) {
//         return await supabase
//             .from(tableName)
//             .select('*')
//             .cs(colName, [filterValue])
//     },
//     async addRow(tableName, rowData) {
//         return await supabase
//             .from(tableName)
//             .insert([
//                 rowData,
//             ]);
//     },
//     async deleteRow(tableName, rowData) {
//         return await supabase
//             .from(tableName)
//             .delete()
//             .match(rowData)
//     },
//     async updateRow(tableName, idCol, id, updateData) {
//         return await supabase
//             .from(tableName)
//             .update(updateData)
//             .eq(idCol, id);
//     }
// }