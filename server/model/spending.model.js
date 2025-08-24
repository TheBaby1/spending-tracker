import mongoose from 'mongoose';

const spendingSchema = new mongoose.Schema({
    day: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now
    },
    totalAmount: { type: Number },

    spendingDetails: [{
        name: { type: String, required: true },
        description: { type: String, required: true },
        amount: { type: Number, required: true },
        transactionType: { type: String, required: true }
    }]
});

const Spending = mongoose.model('Spending', spendingSchema);

export default Spending;