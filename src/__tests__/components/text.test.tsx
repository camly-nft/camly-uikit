import React from "react";
import Text from "../../components/Text/Text";
import { renderWithTheme } from "../../testHelpers";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Text>camly</Text>);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdfBwQ ljuVMZ"
        color="text"
      >
        camly
      </div>
    </DocumentFragment>
  `);
});
