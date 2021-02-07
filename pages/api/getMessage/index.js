import getData from '../../../config/firebase'

export default async (req, res) => {
    const data = await getData();
    console.log(data);
    res.status(200).json(data)
  }
  