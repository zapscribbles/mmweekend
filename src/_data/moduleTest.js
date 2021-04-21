require('dotenv').config();

module.exports = {
    testValue: 'this is a test value',
    envVariable: process.env.ENV_VARIABLE_TEST,
    buildEnvVariable: process.env.BUILD_ENV_VARIABLE,
    myFunction(param) {
        return 'this is the return from a function, param was: ' + param
    }
};