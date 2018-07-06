var searchIndex = {};
searchIndex["mac_notification_sys"] = {"doc":"A very thin wrapper around NSNotifications","items":[[5,"schedule_notification","mac_notification_sys","Schedules a new notification in the NotificationCenter",null,{"inputs":[{"name":"str"},{"name":"option"},{"name":"str"},{"name":"option"},{"name":"f64"}],"output":{"name":"notificationresult"}}],[5,"send_notification","","Delivers a new notification",null,{"inputs":[{"name":"str"},{"name":"option"},{"name":"str"},{"name":"option"}],"output":{"name":"notificationresult"}}],[5,"get_bundle_identifier_or_default","","Search for a possible BundleIdentifier of a given appname. Defaults to \"com.apple.Terminal\" if no BundleIdentifier is found.",null,{"inputs":[{"name":"str"}],"output":{"name":"string"}}],[5,"get_bundle_identifier","","Search for a BundleIdentifier of an given appname.",null,{"inputs":[{"name":"str"}],"output":{"generics":["string"],"name":"option"}}],[5,"set_application","","Set the application which delivers or schedules a notification",null,{"inputs":[{"name":"str"}],"output":{"name":"notificationresult"}}],[0,"error","","Custom errors for mac-notification-sys.",null,null],[4,"ApplicationError","mac_notification_sys::error","Errors that can occur setting the Bundle Identifier.",null,null],[13,"AlreadySet","","The application name is already set.",0,null],[13,"CouldNotSet","","The application name could not be set.",0,null],[4,"NotificationError","","Errors that can occur while interacting with the NSUserNotificationCenter.",null,null],[13,"ScheduleInThePast","","Notifications can not be scheduled in the past.",1,null],[13,"UnableToSchedule","","Schedule a notification caused an error.",1,null],[13,"UnableToDeliver","","Deliver a notification caused an error.",1,null],[6,"NotificationResult","","Custom Result type for mac-notification-sys.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cause","","",0,{"inputs":[{"name":"self"}],"output":{"generics":["fail"],"name":"option"}}],[11,"backtrace","","",0,{"inputs":[{"name":"self"}],"output":{"generics":["backtrace"],"name":"option"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cause","","",1,{"inputs":[{"name":"self"}],"output":{"generics":["fail"],"name":"option"}}],[11,"backtrace","","",1,{"inputs":[{"name":"self"}],"output":{"generics":["backtrace"],"name":"option"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[4,"ApplicationError"],[4,"NotificationError"]]};
initSearch(searchIndex);
