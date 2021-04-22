// function componentData() {
//     return {
//         init(data) {
//             console.log('data from initialising the component', data)
//             this.someData = data
//         },
//         someText: 'This is some text from a component',
//         someTextFromEleventy: moduleTest.testValue,
//         someData: []
//     }
// }

const ComponentData = {
    init: function() { // Don't use arrow function as they have no access to this
        setTimeout(() => {
            this.someData.push('row 1')
            this.someData.push('row 2')
        }, 2000);
    },
    someText: 'This is some text from a component',
    someData: [],
    someOtherText: 'This text is stored in the component but accessed elsewhere'
}
