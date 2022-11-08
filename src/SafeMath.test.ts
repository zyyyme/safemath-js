import SafeMath from './SafeMath'

describe('SafeMath unit tests', () => {
    const safeMath = new SafeMath()

    describe('Addition tests', () => {
        it('adds when numbers are correct', () => {
            const result = safeMath.add(1, 2)

            expect(result).toEqual(3)
        })

        it ('throws when adding negative number', () => {
            try {
                const result = safeMath.add(10, -2)
            } catch (err) {
                expect(err.message).toEqual('Can not add')
            }
        })
    })

    describe('Substraction tests', () => {
        it('substracts when numbers are correct', () => {
            const result = safeMath.sub(2, 1)

            expect(result).toEqual(1)
        })

        it ('throws when result is negative', () => {
            try {
                const result = safeMath.sub(1, 2)
            } catch (err) {
                expect(err.message).toEqual('Can not substract')
            }
        })
    })

    describe('Multiplication tests', () => {
        it('multiplies when numbers are correct', () => {
            const result = safeMath.mul(2, 4)

            expect(result).toEqual(8)
        })

        it ('throws when multiplying by zero', () => {
            try {
                const result = safeMath.mul(0, 2)
            } catch (err) {
                expect(err.message).toEqual('Can not multiply by zero')
            }
        })
    })

    // describe('Division tests', () => {
    //     it('divides when numbers are correct', () => {
    //         const result = safeMath.div(6, 2)

    //         expect(result).toEqual(3)
    //     })

    //     it ('throws when adding negative number', () => {
    //         try {
    //             const result = safeMath.div(1, 0)
    //         } catch (err) {
    //             expect(err.message).toEqual('Can not divide by zero')
    //         }
    //     })
    // })

    // describe('Modulus tests', () => {
    //     it('takes modulus when numbers are correct', () => {
    //         const result = safeMath.mod(6, 5)

    //         expect(result).toEqual(1)
    //     })

    //     it ('throws when taking modulus of zero', () => {
    //         try {
    //             const result = safeMath.mod(1, 0)
    //         } catch (err) {
    //             expect(err.message).toEqual('Can not take modulus of zero')
    //         }
    //     })
    // })
})