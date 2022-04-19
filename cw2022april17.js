//URL--https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
// 
 
//INSTRUCTIONS--
/* Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. 
It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical 
structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. 
each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/ 
 
//SOLUTION--
/* This one was a little weird but essentially all we are doing is replacing the letter T with the letter U. So we can split the passed in string
by the letter T and rejoin it with the letter U. Thats pretty much all there is to it.
*/ 
function DNAtoRNA(dna) {
    return dna.split("T").join("U");
  }
  
//TESTCASES--
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
    assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
    assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
    });
  })