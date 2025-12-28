class YoutubeChannel {
    constructor() {
        this.subscribers = []
    }
    subscribe(user) {
        this.subscribers.push(user)
        user.update(`you have subscribed the channel.`)
    }
    unsubscribe(user) {
        this.subscribers = this.subscribers.filter((sub) => sub !== user)
        user.update(`you have un-subscribed the channel`)
    }
    notify(message) {
        this.subscribers.forEach((sub) => sub.update(message))
    }
}

class User {
    constructor(name) {
        this.name = name
    }
    update(data) {
        console.log(`${this.name}, ${data}`);

    }
}

let sheriyans = new YoutubeChannel()
let user1 = new User('harsh')

sheriyans.subscribe(user1)
sheriyans.unsubscribe(user1)
sheriyans.subscribe(user1)

sheriyans.notify('Lets gooo')