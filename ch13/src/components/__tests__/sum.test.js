import { sum } from "../sum";

test("check addition of 2 integers", () => {
	expect(sum(2, 3)).toBe(5);
});
