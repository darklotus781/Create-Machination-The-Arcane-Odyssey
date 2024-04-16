//priority: 0

PlayerEvents.loggedIn(event => {
    event.player.tell("Welcome Back " + event.player.username + "!")
});

