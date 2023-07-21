import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { MyInput } from "../MyInput";

test("onChange should work", () => {
  const onChangeMock = jest.fn();
  let inputValue = 1;

  const { getByTestId } = render(<MyInput onChange={onChangeMock} value={1} />);
  const input = getByTestId("test");

  fireEvent.change(input, { target: { value: "23" } });

  expect(onChangeMock).toHaveBeenCalled();
  // expect(onChangeMock).toHaveBeenCalledWith(
  //   expect.objectContaining({
  //     target: expect.objectContaining({
  //       value: "23"
  //     })
  //   })
  // );
});
