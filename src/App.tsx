import { Heading, HeadingLevel } from "@ariakit/react";

import { App as AppUI } from "@packages/ui/abstract/app/app";
import { Stack } from "@packages/ui/abstract/stack/stack";

const App = () => {
  return (
    <AppUI>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        grow
      >
        <HeadingLevel>
          <HeadingLevel>
            <Heading>welcome to</Heading>
          </HeadingLevel>
          <Heading>negspace</Heading>
        </HeadingLevel>
      </Stack>
    </AppUI>
  );
};

export default App;
