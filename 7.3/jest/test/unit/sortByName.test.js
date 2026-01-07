const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

it("should sort reverse-ordered array correctly", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Волшебник изумрудного города", 
        "Властелин Колец"
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("should handle identical book names", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Гарри Поттер",
        "Гарри Поттер"
      ])
    ).toEqual([
      "Гарри Поттер",
      "Гарри Поттер",
      "Гарри Поттер",
    ]);
  });

  it("should be case insensitive when sorting", () => {
    expect(
      sorting.sortByName([
        "гарри поттер",  
        "Властелин Колец", 
        "волшебник изумрудного города" 
      ])
    ).toEqual([
      "Властелин Колец",  
      "волшебник изумрудного города",
      "гарри поттер",
    ]);
  });

  it("should return same array for single element", () => {
    expect(sorting.sortByName(["Один элемент"])).toEqual(["Один элемент"]);
  });

  it("should return empty array for empty input", () => {
    expect(sorting.sortByName([])).toEqual([]);
  });
});