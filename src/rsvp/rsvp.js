function componentData() {
    return {
        email: '',
        password: '',
        name: '',
        submitRSVP() {
            console.log('Signing up with', this.email, this.password)
            sb_signUp(this.email, this.password)
        },
        RSVP: ''
    }
}

