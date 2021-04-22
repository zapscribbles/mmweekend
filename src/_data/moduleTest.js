require('dotenv').config();
const { createClient } = require('@supabase/supabase-js')
supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function getData(tableName, orderCol) {
    return await supabase
        .from(tableName)
        .select('*')
        .order(orderCol == undefined ? 'id' : orderCol)
}

module.exports = {
    testValue: 'this is a test value from inside 11ty module',
    envVariable: process.env.ENV_VARIABLE_TEST,
    buildEnvVariable: process.env.BUILD_ENV_VARIABLE,
    myFunction(param) {
        return 'this is the return from a function, param was: ' + param
    },
    accessCompData() {
        return ComponentData.someOtherText;
    },
    componentDataFromModule() {
        return {
            init() {
                getData('rsvps', 'Submission Date').then(response => {
                    console.log(response)
                    this.rsvps = response.data
                });
            },
            someText: 'Hello from eleventy module',
            rsvps: []
        }
    }
};