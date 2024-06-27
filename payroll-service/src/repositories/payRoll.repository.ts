import payRollModel from "../database/schema/payRoll.schema";
import { PayRoll } from "../entities/entityClasses/payRoll.interface";

class PayRollRepository {
    constructor() { }

    async createPayRoll(payRollData: PayRoll) {
        if (payRollData) {
            const payRoll = await payRollModel.create(payRollData);
            return payRoll
        }
    }
}

export default new PayRollRepository()