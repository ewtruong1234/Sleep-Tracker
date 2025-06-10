--Readme document for Eric Truong, ewtruong@uci.edu, 13059272

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

20/20
- 3/3 The ability to log overnight sleep
- 3/3 The ability to log sleepiness during the day
- 3/3 The ability to view these two categories of logged data
- 3/3 Either using a native device resource or backing up logged data
- 3/3 Following good principles of mobile design
- 3/3 Creating a compelling app
- 2/2 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?

Involved a lot of reading, so maybe like 50 hours in total.

3. What online resources did you consult when completing this assignment? (list specific URLs)

https://ionicframework.com/docs/components
https://www.freecodecamp.org/news/how-to-remove-an-element-from-a-javascript-array-removing-a-specific-item-in-js/#remove-an-element-at-any-index-with-splice
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
https://ionicframework.com/docs/api/button
https://ionicframework.com/docs/api/datetime
https://ionicframework.com/docs/api/select
https://ionicframework.com/docs/api/alert
https://capacitorjs.com/docs/apis/preferences
https://capacitorjs.com/docs/v3/apis/storage
https://capacitorjs.com/docs/guides/storage
https://stackoverflow.com/questions/71901217/npm-err-could-not-determine-executable-to-run-when-running-npx-cap-sync
https://github.com/ionic-team/ionic-cli/issues/4510
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?

I did not discuss this assignment with anyone.

5. Is there anything special we need to know in order to run your code?

There is nothing special to note.



--Aim for no more than two sentences for each of the following questions.--

6. Did you design your app with a particular type of user in mind? If so, whom?

The app was designed for users who want a simple diary-like sleep tracking app, not being too complicated or restrictive.

7. Did you design your app specifically for iOS or Android, or both?

The app was designed for both.

8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?

A person can log overnight sleep by selecting the day and time of when they started to sleep and of when they stopped sleeping using
calendar and clock interface elements. I chose this approach because it is possible for people to sleep on one day and wake up on the next
day, which tends to result in different start and end times.

9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?

A person can log sleepiness during the day by selecting the day that they are recording for and rating the actual level of sleepiness they
experienced on that day using calendar, clock, and dropdown interface elements. I chose this approach because the app should be transparent
with how sleepy the user was on certain days.

10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?

A person can view the data they have logged by scrolling down to the bottom of the app to find the "Logged Data" section, which just
displays a list of entries they have logged so far. I chose this approach because it seemed like a simple way for the user to view what
they have logged.

11. Which feature choose--using a native device resource, backing up logged data, or both?

I chose the "backing up logged data" feature.

12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?

N/A

13. If you backed up logged data, where does it back up to?

It backs up to Capacitor Storage, which is just local storage.

14. How does your app implement or follow principles of good mobile design?

The user is provided with a guide at the start of the app (useful initial view), logged data with errors can be removed with remove buttons
("uh-oh" button), the app disallows the user from logging invalid data (error prevention), and the app follows platform conventions by
working on multiple screen sizes.