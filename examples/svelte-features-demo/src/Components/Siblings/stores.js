/**
 * This file is used to create the stores for the demo, in this case just 1.
 * It could be moved anywhere else but it's left here for ease of discovery,
 * since it'll be only used in the "Sibling" component and related components.
 *
 */
import { writable } from "svelte/store";
export const count = writable(0); // This is a shared store variable
