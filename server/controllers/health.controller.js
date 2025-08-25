export const healthCheck = (req, res) => {
    try {
        console.log('Server is running and healthy');
        res.status(200).json({ message: 'Server is healthy' });
    } catch (error) {
        console.log('Server is not healthy needs fixing');
        res.status(500).json({ error: error.message });
    }
}