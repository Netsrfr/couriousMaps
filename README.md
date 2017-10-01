# iOS React Native Google Maps

Allows use on React Native '^.40'
## Setup

###### Install Google Maps SDK
Download and unpack the [SDK source files](https://dl.google.com/dl/cpdc/ca91069241a099f1/GoogleMaps-2.4.0.tar.gz)

Use Xcode to open your project or create a new project

Drag the following bundles into your project (when prompted, select __Copy items if needed__):
* GoogleMaps-2.4.0/Base/Frameworks/GoogleMapsBase.framework
* GoogleMaps-2.4.0/Maps/Frameworks/GoogleMaps.framework
* GoogleMaps-2.4.0/Maps/Frameworks/GoogleMapsCore.framework

Using finder open _<YOUR_GOOGLE_MAPS_SDK_PATH>/ios/Maps/Frameworks/Resources_
Drag _GoogleMaps.bundle_ to the root of your project (ensure _Copy items into destination group's folder_ is __not__ selected.

Add _GoogleMaps.bundle_ to _Copy Bundle Resources_ within the _Build Phases_ of the target application

__Add the following to _Link Binary with Libraries_ within the _Build Phases_ of the target application__

Drag into _Build Phases_ from project root:
* GoogleMapsBase.framework
* GoogleMaps.framework
* GoogleMapsCore.framework

Click '+' to search and add the following:
* Accelerate.framework
* CoreBluetooth.framework
* CoreData.framework
* CoreGraphics.framework
* CoreLocation.framework
* CoreTelephony.framework
* CoreText.framework
* GLKit.framework
* ImageIO.framework
* libc++.tbd
* libz.tbd
* OpenGLES.framework
* QuartzCore.framework
* SystemConfiguration.framework
* UIKit.framework

From your project open the _Build Settings_
 In the _Other Linker Flags_ add ```-ObjC```

###### Install Google Maps for React Native

```
$ npm install --save react-native-maps-google
```

__Add the folowing to the _Build Settings_ of the target application__

_Header Search Paths:_
```$(SRCROOT)/../node_modules/react-native-maps-google/ios``` (recursive)

_Framework Search Paths:_
```$(PROJECT_DIR)``` (non-recursive)

###### Add your Google Maps API key to the project

Add the following to AppDelegate.m
```
#import <../../../ios/GoogleMaps.framework/Headers/GoogleMaps.h>
#import <../../../node_modules/react-native-maps-google/ios/PPTGoogleMapProvider.h>
```
Add API key within application
```
[GMSServices provideAPIKey:@"YOUR_API_KEY_HERE"];
```