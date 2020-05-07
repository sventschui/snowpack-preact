# preact snowpack@2 example

This repo shows how to use preact in snowpack@2.

This setup can be achieved by

- Init a new snowpack@2 app from the react template
- `yarn remove react react-dom ; yarn add preact`
- Change all imports from react to preact
- Add a custom `babel.config.js(on)` that sets the JSX fragment to `h`

## Open Points

- [ ] Make imports from `preact/hooks` work
- [ ] Create a preact template