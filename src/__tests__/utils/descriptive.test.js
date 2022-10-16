import { descriptive } from "../../utils";

it("returns the joined string and adds the 'add' before the last item", () => {
  const firstLetterReturned = descriptive(["Theoderic", "Mathew", "Ohinoyi"]);
  expect(firstLetterReturned).toEqual("Theoderic, Mathew and Ohinoyi");
});

it("returns the joined string without comma but with an 'and' ", () => {
  const firstLetterReturned = descriptive(["Theoderic", "Mathew"]);
  expect(firstLetterReturned).toEqual("Theoderic and Mathew");
});
