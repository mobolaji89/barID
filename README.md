# barID
**The mobile application that allows you to create and checkout out of bar tabs using invisible pay**

<img src="https://github.com/mobolaji89/barID/blob/master/barID.png" width="326">
__________________________________________

barID is a React Native iOS and Android mobile application that is seeking to transform bar tabbing into one of seamless user experience.

barID enables the user to open the app, walk into the bar, order drinks, and pick up an order. As soon as the user walks out the proximity of the bar, the user's tab will be closed.

Our team is integrating iBeacon into our mobile application to allow for the convenience of opening a tab and closing one without waiting in any lines. iBeacon is a technology made by Apple that use Bluetooth Low Energy (BLE), which allows Mobile Apps (running on both iOS and Android devices) to listen for signals from beacons in the physical world and react accordingly.

Thus far in our prototype, we have not officially enabled location proximity. There is still some slight work that needs to be done with event triggering with iBeacon.

## USER APPLICATION FEATURES:
There are 2 types of user profiles: Customer, and Business

### Customer functionality:
1. Login
2. Add drink to tab
3. Edit drink
4. Cancel drink

Now moving on to the bar, by logging in as an admin:

### Admin functionality:
1. See a list of all orders at the bar
2. Send a customer a text notification when an order is ready 
3. Remove the order from your queue, after the drink has been picked up

Our next step is to use iBeacon so that if a customer knowingly walks out of a bar, their tab will be automatically closed. We also seek to implement Stripe for payment processing within our application.

View Application Launch Video: https://youtu.be/PWANijn6M6Q

