---
Title: Add Navigation
---

Install

```bash
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
```

Unlike a website which typically navigates page to page by URL, mobile apps require a different method.

The basic idea is that each view of the app, known as "Screens", are put into a stack in which links are created between screens. The manager of the stack is the StackNavigator and is inserted into the top level of the app so that each screen can access the navigation structure.

In a web browser, you can link to different pages using an anchor 'a' tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story.
