import { names, surnames} from "../constants/humanConstructorConstants"
import { Human } from "../interfaces/indesx"


export const generateHumans = (count: number) :Human[]  => {
const humansArray: Human[] = []
const nameLength = names.length
const surnamesLength = surnames.length
for (let i = 0; i < count; i++) {
    const humanNameId = Math.floor(Math.random() * nameLength)
    const humanSurnameId = Math.floor(Math.random() * surnamesLength)
    const newHuman: Human = {id: i, name: names[humanNameId], surname: surnames[humanSurnameId]}
    humansArray.push(newHuman)
}
return humansArray
}