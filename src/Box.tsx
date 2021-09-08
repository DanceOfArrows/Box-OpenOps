import React from "react";

interface BoxItem {
  bgColor: string;
  indices: number[];
  clickHandler: (indices: number[]) => void;
}

/* Compare prev props color to new props color.  React will re-render if false */
const checkProps = (next: BoxItem, prev: BoxItem) => {
  return next.bgColor === prev.bgColor;
};

const Box = (props: BoxItem) => {
  const { bgColor, clickHandler, indices } = props;

  console.log("hi");

  return (
    <div
      className="box-square"
      draggable={false}
      onClick={() => clickHandler(indices)}
      style={{ backgroundColor: bgColor }}
    />
  );
};

/* React.memo used to check if component should re-render -> See comment on Line 9 */
export default React.memo(Box, checkProps);
