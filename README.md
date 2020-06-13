This is my personal repo to get started with React. It's a very simple set up, with a default welcome screen, Sass, CSS and a read-to-go Modularscale for those of you who enjoy clean typography and hierarchy.

Last time I launched this, I ran into a Node error:

```
Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (72)
```

If that happens, running
```
npm uninstall --save node-sass
```
and
```
npm install --save node-sass
```

fixed the issue.

To start the app, run
```
npm start
```