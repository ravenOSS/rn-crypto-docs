# Adding a SplashScreen (Expo)

- [Adding a SplashScreen (Expo)](https://docs.expo.io/versions/latest/sdk/splash-screen/)

## Image

- Create or select an image in .png format.
- Ideally, the image should be 1242x2436 pixels.
- Save the image in the project's assets folder.
- If you want to test multiple images, save them in the assets folder with different names.
- The image will be scaled to fit the device's screen size.
- The image will be centered on the screen.
- The image will be displayed for 3 seconds.
- The image will be displayed while the app is loading.
- Modify the app.json file:

## Using a local image

### Expo

```json
  "expo": {
    "splash": {
    "image": "./assets/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
    }
  }
  ```

## Using a remote image

```json
"expo": {
    "splash": {
      "image": "https://example.com/my-splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
    }
}
```

Note that while Expo will resize images to fit the screen, it will not crop them. If you want to crop the image, you can use the resizeMode property to specify how the image should be resized. The resizeMode property accepts the following values:

- cover: Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).
- contain: Scale the image uniformly (maintain the image's aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).
- stretch: Scale width and height independently, This may change the aspect ratio of the src.
