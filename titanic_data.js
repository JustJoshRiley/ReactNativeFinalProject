import data from './titanic-data.json'


const getPeople = () => {
    const arr = data.map(obj => {
        return obj.fields
    })

    return arr
}

const people = getPeople()

export {people}