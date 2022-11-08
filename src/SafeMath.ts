import { AdditionError, DivisionError, ModulusError, MultiplicationError, SubstractionError } from "./errors"

export default class SafeMath {
    private canAdd (a: number, b: number): boolean {
        const result = a + b

        return result > a
    }

    private canSub (a: number, b: number): boolean {
        return a > b
    }

    private canMul (a: number, b: number): boolean {
        return a !== 0 && b !== 0
    }

    private canDiv (a: number, b: number): boolean {
        return b !== 0
    }

    private canMod (a: number, b: number): boolean {
        return b !== 0
    }

    add (a: number, b: number): number {
        if (this.canAdd(a, b)) return a + b
        
        throw AdditionError
    }

    sub (a: number, b: number): number {
        if (this.canSub(a, b)) return a - b

        throw SubstractionError
    }

    mul (a: number, b: number): number {
        if (this.canMul(a, b)) return a * b

        throw MultiplicationError
    }

    div (a: number, b: number): number {
        if (this.canDiv(a, b)) return a / b

        throw DivisionError
    }

    mod (a: number, b: number): number {
        if (this.canMod(a, b)) return a % b

        throw ModulusError
    }
}