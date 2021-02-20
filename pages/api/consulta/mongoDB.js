import { connectToDatabase } from '../../../utils/mongoDb'
async function  handler (req, res) {
    if (req.method === 'GET') {
        const {db} = await connectToDatabase();
        const data = await db.collection('user').find().toArray();
        res.status(200).json(data);
      } else {
        res.status(500).json({statusCode:500 ,menssage: "nao foi possivel"});
      }
  }
export default handler;