import Spending from "../model/spending.model.js";

export const createSpending = async (req, res) => {
    const spending = req.body;

    if (!spending) {
        res.status(201).json({ message: 'Missing fields' });
    }

    try {
        const newSpending = new Spending(spending);
        await newSpending.save();

        res.status(200).json({ message: 'New spending created successfully!' });
    } catch (error) {
        console.log('Failed to create spending');
        res.status(500).json({ error: error.message });
    }
}