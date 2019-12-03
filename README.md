# JuniorTask
React Native version of Neverthink app.
only the iOS version works. 
## Getting started
Clone this repo and checkout at branch "develop":
```
git checkout develop
```
### Prerequisites
Run the following commands:
```
npm install
```
Change to the "ios" directory 
```
cd ios
```
and run the following command:
```
pod update
```
### Running the app 
```
react-native run-ios
```
## Features:
- [X] Works on iOS.
- [X] When user selects a channel, and there are videos she/he have not seen, these videos should play first. Maintain an order of the playlist. 
- [X] When last video on the channel has ended, it should start playing first video on that channel again.
- [X] Play/pause videos.
- [X] When app is opened, first video of the first channel should autoplay. When video ends, the next video on the playlist should start playing. 
- [X] User must be able to change between channels, and see channel name and image.
- [X] There should be multiple channels, and each channel should have multiple videos in it.
- [X] The app support both Portrait and Landscapes mode.
## Known bugs: 
The app dectects watched videos by pushing and comparing them to a "watched" array. 
</br>
Since the data is static, once the the array contained all the video provided by the static source, 
the app will go into an endless loop.
</br>
To remedy this, a dedicated "Reset watched video" was added until a better solution is found.
## Tested on:
* iPhone X (real device) (iOS 13.2)
* iPhone 11 (simulator) (iOS 13.2)
* iPhone 11 Pro Max (simulator) (iOS 13.2)
* iPhone 8 (simulator) (iOS 13.2)
* iPhone SE (simulator) (iOS 13.2)


## Buil with:
* [react-pring](https://www.react-spring.io/) - Spring-based animations.
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) - Icon libary.
* [react-native-thumbnail-video](https://github.com/lucasbento/react-native-thumbnail-video) - Youtube video thumbnail.
* [react-native-youtube](https://github.com/inProgress-team/react-native-youtube) - Youtube video player.
