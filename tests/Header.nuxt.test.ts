import { it, expect } from "vitest";
import Header from "~/components/organisms/Header.vue";

import { mountSuspended } from "@nuxt/test-utils/runtime";

it("Header logged out display sign in button", async () => {
    const component = await mountSuspended(Header);
    expect(component.text()).toMatchInlineSnapshot(`"Sign in !"`);
});

// More documentation and exemples -> https://nuxt.com/docs/getting-started/testing
