import React from "react";
import { storiesOf } from "@storybook/react";
import Example from "../../component/Example";
const components = storiesOf("Components", module);
components.add("Example", () => <Example text="hoge piyo" />);
