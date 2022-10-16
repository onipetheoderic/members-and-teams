import { firstLetter } from "../../utils";

it("gets the first letter", () => {
  const firstLetterReturned = firstLetter("Theoderic");
  expect(firstLetterReturned).toEqual("T");
});

it("returns empty string when undefined is passed", () => {
  const firstLetterReturned = firstLetter(undefined);
  expect(firstLetterReturned).toEqual("");
});
