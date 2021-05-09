
function componentData() {
    return {
        init() {
            getForeignData('characters', 'rsvps', '"First Name", "Last Name"').then(response => {

                console.log(response)
                this.players = response.data;

                this.players.sort((a, b) => {
                    a = a.rsvps['First Name'];
                    b = b.rsvps['First Name'];
                    return a < b ? -1 : a > b ? 1 : 0;
                })

                // Add profile picture filename to player data
                this.players.forEach(player => {
                    var firstName = player.rsvps['First Name'];
                    var lastInitial = player.rsvps['Last Name'][0];
                    player.profilePicture = `${firstName.toLowerCase()}_${lastInitial.toLowerCase()}.jpeg`;
                    player.actorName = `${firstName} ${lastInitial}`;
                });

                setTimeout(() => {
                    this.loaded = true;
                }, 500);
            });
        },
        players: [],
        loaded: false,
        selectedPlayer: null,
        selectPlayer(id) {
            this.selectedPlayer = getObjectByPropertyValue(this.players, 'id', id);
        },
    }
}