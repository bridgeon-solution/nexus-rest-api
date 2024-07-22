import { PayRoll } from "../../entities/entityClasses/payRoll.interface";
import payRollRepository from "../../repositories/payRoll.repository";

class CreatePayRoll {
    constructor() { }
    async createPayRoll(data:PayRoll) {
        const payRollData = payRollRepository.createPayRoll(data);
        return payRollData
    }
}

export default new CreatePayRoll()