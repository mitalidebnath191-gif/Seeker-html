export default function handler(req, res) {
    if (req.method === 'POST') {
        const { latitude, longitude, accuracy } = req.body;
        
        // Vercel-এর রিয়েল-টাইম লগ কনসোলে এটি প্রিন্ট হবে
        console.log(`[DATA CAPTURED] Lat: ${latitude}, Lon: ${longitude}, Accuracy: ${accuracy}m`);
        
        return res.status(200).json({ status: 'success', message: 'Data logged successfully' });
    } else {
        return res.status(405).json({ status: 'error', message: 'Method not allowed' });
    }
}
