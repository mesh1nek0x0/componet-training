import React from "react";
export interface ExampleProps {
  text: string;
}
const Example: React.FC<ExampleProps> = (props: ExampleProps) => {
  const { text } = props;
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};
export default Example;
