# TravelGram

### Give it a go

In its current state due to the limitations of Instagrams API the app is constricted to sandbox mode if you would like to use the app send me a message and I will verify you as a user.

[TravelGram][https://travelgram1.herokuapp.com]

### Concept

The initial idea for the app was to create a frictionless mobile app that enabled the Instagram users to visualise their phtotos and travels across a map. Users created 'trips' based on a date range which they could then simply browse and interact with across the map.

### Approach

Even though this was a backend focused project I realised that TravelGramneeded to focus on the design and user experience. 

My design aims were, 
1. Simple, minimal site design aimed towards ease of use, minimal clicks to get started
2. Mobile first solution geared towards Instgram users
3. Responsive design
4. lightbox gallery

I aimed to get my map funcitonal first and then tackle the design challenges.

### Tech

To build this project I used Ruby, Sinatra, SQL, HTML, CSS, Javascript, Active Record, Bcrypt, GoogleMap Javascript API, Instgram API and Oauth and Overlapping Marker Spidifier.

I used Ruby for the server side programming, assembling the webpages dynamically, implementing gems and getting the app to succesfully communicate with the database.

I used Instagram API to Oauth users accounts which in turn gave me the ability to call the Instgram API and retrive the relevant data.

I then fed this data to the Google Maps API, setting custom markers with info boxes based on the geo tags of a users photos.

I used Javascript to create some navigation buttons allowing the user to shift between each of their photos across the map, Javascript also helped adding eventlisteners to DOM objects allowing me to animate different aspects of the site.

### Challenges

This App came with a lot of challenges which severly impacted the features of the site.

In it's current state I did not achieve the level of fucntionality I set out to achieve, the map design is almost as I envisioned except for the lightbox feature. 

I feel the lightbox feature was quite essential to the design and end product because it would have tied the functionality of the map with the design of the Instgram app itself, by allowing users to view enlarged photos.

By far the most challenging part, and what slowed my progress so much was working with the API's. The Google maps API in particular is such a large tool and I was using it for what seemed to be a niche use case so support and guidance was difficult to come by online.

Using API's can be tricky because they can spit seemly strange errors which take a lot of time to understand and test.

Instagrams API also restricted my concept of creating trips as it only allowed me to collect geo location of a users 20 most recent photos. Due to the nature of this project it is highlighy unlikely that this sandbox restriction would be lifted.

### Extra Features

Features that I wanted to implement were in listed heiracy are,

1. Lightbox functionality for photos
2. Shareable trips, possibly generating a photo of a trip allowin gth user to share it back to instagram
3. exploring other users trips
4. Tagging other users within trips
5. user goals and acheivements

