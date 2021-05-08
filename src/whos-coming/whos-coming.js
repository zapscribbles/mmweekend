function componentData() {
    return {
        init() {

            getData('rsvps', 'Submission Date').then(response => {
                // console.log(response)

                setTimeout(() => {
                    this.rsvps = response.data

                    this.rsvps.sort((a, b) => {
                        a = a['First Name'];
                        b = b['First Name'];
                        return a < b ? -1 : a > b ? 1 : 0;
                    })

                    this.rsvps.forEach(rsvp => {

                        switch (rsvp.RSVP) {
                            case 'Yes, I am so in!':
                                rsvp.response = 'yes'
                                this.counts.totalYes++;
                                break;
                            case "I'm not sure":
                                rsvp.response = 'maybe'
                                this.counts.totalMaybe++;
                                break;
                            case "Unfortunately I can't make it":
                                rsvp.response = 'no'
                                this.counts.totalNo++;
                                break;
                            default:
                                rsvp.response = null
                                break;
                        }

                        if (rsvp.paid) {
                            this.counts.totalPaid++;
                        }

                        if (rsvp.response == 'yes') {
                            switch (rsvp.Accommodation) {
                                case 'I need to stay with you guys':
                                case 'I want to stay with you guys, but if numbers fill up I can stay elsewhere':
                                    rsvp.staying = true;
                                    this.counts.staying++;
                                    rsvp.blowupVolunteer = false;
                                    rsvp.paid ? this.counts.beds++ : null;
                                    break;
                                case 'I need to stay with you guys, and volunteer as blow-up-mattress tribute!':
                                    rsvp.staying = true;
                                    this.counts.staying++;
                                    rsvp.blowupVolunteer = true;
                                    rsvp.paid ? this.counts.blowups++ : null;
                                    break;
                                default:
                                    rsvp.staying = false;
                                    this.counts.notStaying++;
                                    rsvp.blowupVolunteer = false;
                                    // console.log('identified not staying', humanReadableProxy(rsvp));
                                    break;
                            }
                        }

                        rsvp.displayName = rsvp['First Name'].toProperCase() + ' ' + rsvp['Last Name'][0].toUpperCase() + '.';

                    });
                }, 500);
            });
        },
        rsvps: [],
        counts: {
            totalYes: 0,
            totalPaid: 0,
            totalMaybe: 0,
            totalNo: 0,
            staying: 0,
            notStaying: 0,
            beds: 0,
            blowups: 0,
        }
    }
}

// updateRow('rsvps', 'First Name', 'Jo', {paid: 'true'}).then(response => { console.log('delete', response)});