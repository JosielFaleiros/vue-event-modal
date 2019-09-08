# vue-event-modal

### Install

```bash
npm install vue-event-modal --save
```

### How to use

Include plugin in your `main.js` file.

```javascript
import ModalPlugin from 'vue-event-modal'

Vue.use(ModalPlugin)

/*
By default, the plugin will use "modal-wrapper" name for the component.
Example:
    <modal-wrapper modal-name="custom-name"></modal-wrapper>


If you need to change it, you can do so by providing "tagName" param.

Example:

Vue.use(VModal, { tagName: 'modal' })
...
    <modal modal-name="custom-name"></modal>
*/
```

Create modal:

```vue
<modal-wrapper modal-name="hello-world">
    <form action="/action_page.php">
        First name:<br>
        <input type="text" name="firstname" value="Mickey">
        <br>
        Last name:<br>
        <input type="text" name="lastname" value="Mouse">
        <br><br>
        <input type="submit" value="Submit">
    </form> 
</modal-wrapper>
```
Call it from anywhere in the app:

```javascript
methods: {
  open() {
    this.$modalHub.$emit('openModal', 'hello-world')
  },
  close() {
    this.$modalHub.$emit('closeModal', 'hello-world')
  }
}
```
