
The source codes when learning the "React Essentials" book.


## Issues
- The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX
React Style requires you to use the `styles` prop instead of `style`.

- Exclude folder from `gulp.src`
Using "!folder" to exclude the folder from src, e.g. `gulp.src(['src/scripts/**/*.js', '!src/scripts/**/*-test.js'])` will include all the js file under in "src/scripts" but exclue all the "-test.js" files.

- Jest and TestUtils.renderIntoDocument - unexpected token
Create a new .babelrc file in the root directory and add the react preset
```
{
  "presets": [
     "react"
  ]
}
```

- Warning: Unknown prop `styles` on `<input>` tag. Remove this prop from the element. For details, see https://fb.me/react-unknown-prop