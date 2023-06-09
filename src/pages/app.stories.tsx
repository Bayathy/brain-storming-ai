import { App } from "./app";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "App",
  component: App,
} satisfies Meta<typeof App>;

export default meta;

export const Default: StoryObj<typeof App> = {};
