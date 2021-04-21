function componentData() {
    return {
        init(data) {
            console.log('data from initialising the component', data)
            this.someData = data
        },
        someText: 'This is some text from a component',
        someData: []
    }
}
