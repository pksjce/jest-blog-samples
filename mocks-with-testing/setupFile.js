jest.mock('lodash', () => {
    return {
        map: (list, fn) => {
            return list.reverse().map(fn)
        }
    }
})