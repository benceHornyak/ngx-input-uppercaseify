# ngx-input-uppercaseify

The `ngxInputUppercaseify` directive is a simple but powerful tool for your Angular application that automatically converts the input text to uppercase. It's perfect for fields like names or addresses, where you want to ensure consistency and make sure everything is in uppercase.

## Installation

Getting started with ngx-input-uppercaseify is easy! Simply install it with npm:

```bash
npm install @bencehornyak/ngx-input-uppercaseify
```

## Usage

Using the `ngxInputUppercaseify` directive is a breeze! To convert any input field to uppercase, just add the `ngxInputUppercaseify` attribute to your input element:

First make sure you import the `NgxInputUppercaseifyDirective` in your module:

```typescript
import { NgxInputUppercaseifyDirective } from '@bencehornyak/ngx-input-uppercaseify';

@NgModule({
  imports: [NgxInputUppercaseifyDirective],
})
export class AppModule {}
```

or if you are using standalone:

```typescript
import { NgxInputUppercaseifyDirective } from '@bencehornyak/ngx-input-uppercaseify';

@Component({
  standalone: true,
  imports: [NgxInputUppercaseifyDirective],
})
export class YourComponent {}
```

Then, add the `ngxInputUppercaseify` attribute to your input element:

```html
<input type="text" ngxInputUppercaseify />
```

That's it! Now, whenever the user types in this input field, the text will automatically be converted to uppercase.

## Contributions

I welcome contributions to the `ngxInputUppercaseify` directive! If you have any ideas for improving it, or if you find a bug, please don't hesitate to open an issue or submit a pull request on GitHub. Let's work together to make this directive even better!
