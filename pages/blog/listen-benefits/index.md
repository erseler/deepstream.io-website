{
    "title": "How to only tell the world know what it wants to hear",
    "dateISO": "20151228",
    "author": "yasserfadl",
    "thumbnail": "listening.png"
}

Realtime systems have a reputation of being expensive to run. The reason usually being that for simplicities sake, data providers inform the universe of everything they possibly could, and in turn if the client ever wants to know something, the universe will just provide.

Philosophically, this had a couple of documentries about it. Technically, this has quite a few drawbacks.

For example, lets say were building a tool to allow us to view selected crypotocurrencies in realtime.

This means that if you, as a user, were viewing all x amount of them at the same time, you would be recieving x*10 amount of messages a second. The databases storing that data will cost the same amount of writes. And all of this so that a user can see a ( usually tiny ) subset of that data on his screen.

What you want to do is limit the amount of data going through the system. You can do so by saying that at least one client has to actually request something before you start pushing data to it. In more detail, as soon as the first client requests something, publishers can get notified and start publishing data accordingly, and when the last client loses interest the publisher no longer needs to pump that data into the system.

This works amazingly well for events, where the actual responsibility is taken off the publisher to submit all events constantly, which in turn reduces their resources and costs. 

Records are just as simple, unless they are stored in a database. If they are, make sure that when you query the database directly you request those records beforehand so that the database contents are up to date.

Finally, if the data is actually derived from the content of your request this approach is an absolute must. For example, requesting 'cryptocurrency/bitcoin-forecast-6M' means the publisher needs to know that it will need to send out information for a 6 month forecast.

And now the fun part, how do you do such a thing?

The full workflow would be as follows:

CryptoCurrencyProvider listens to records and events matching the name 'cryptocurrency/'

ds.event.listen( '^cryptocurrency/.*', onMatch );

And the onMatch callback will be notified for all the current matches in the system, new ones that come in and old ones that noone is interested in anymore.

function onMatch( subject, new ) {
    //Subject is the name 

    //If new is true it means you should start publishing data, if it's false
    //it means you should stop
}

And once the CrypoCurrencyProvider decides it's no longer interested in providing data for those records, you could turn off the functionality using:

ds.event.unlisten( '^cryptocurrency/.*', onMatch );


Benfefits in scaling:

You don't need more than one publisher updating the same record or emitting the same event. But you want to scale your microservices so they can cope with
huge amounts of records and events coming into your system often from the same third party service. You can use the listen functionality to easily split concerns across multiple publishers.

For example, you could create two identical providers except where one listens to currencies starting with the first half of the alphabet '^cryptocurrency/[a-k]' and the other to the second half '^cryptocurrency/[m-z]'. This can be cut into as many publishers as you see fit to easily scale your processes within the cloud.

For more details, a tutorial and code, please look at our FX example here. 
