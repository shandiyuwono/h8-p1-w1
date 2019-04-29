const { test } = require("tape");

const toRoman = require("./roman_numerals_recursive");

test("4 -> IV", t => {
  t.equal(toRoman(4), "IV");
  t.end();
});

test("9 -> IX", t => {
  t.equal(toRoman(9), "IX");
  t.end();
});

test("13 => XIII", t => {
  t.equal(toRoman(13), "XIII")
  t.end()
})

test("1453 -> MCDLIII", t => {
  t.equal(toRoman(1453), "MCDLIII")
  t.end()
})

test("1646 -> MDCXLVI", t => {
  t.equal(toRoman(1646), "MDCXLVI")
  t.end()
})
