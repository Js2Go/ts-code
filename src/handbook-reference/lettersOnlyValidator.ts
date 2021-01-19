/// <reference path="validation.ts"/>
namespace Validation {
  const lettersRegexp = /^[A-Za-z]+$/
  export class LettersOnlyValidator implements StringValidatior {
    isAcceptable(s: string) {
      return lettersRegexp.test(s)
    }
  }
}
