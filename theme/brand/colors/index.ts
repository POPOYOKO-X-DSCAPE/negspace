import { defineTokens } from "@pandacss/dev";

// Raw palette from the design (design-spec.md §3.1). Single light theme — the
// brand "dark" palette canvas is empty, so no _dark values are defined yet.
export const colors = defineTokens.colors({
	ink: { value: "#0B0B0B" },
	inkSoft: { value: "#1D1D1D" },
	inkMuted: { value: "#454545" },
	placeholder: { value: "#5B5B5B" },
	bg: { value: "#F5F5F5" },
	surface: { value: "#E8E8E8" },
	border: { value: "#B7B7B7" },
	kodak: { value: "#FAB617" },
	onInk: { value: "#E8E8E8" },
});
