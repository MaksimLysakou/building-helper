import { storiesOf } from '@storybook/react';
import * as React from 'react';
storiesOf("Button", module)
  .add("with text", () => (
    <button>Hello Button</button>
  ))
  .add("with some emoji", () => (
    <button>😀 😎 👍 💯</button>
  ));
