import { NextApiRequest, NextApiResponse } from 'next'
import { sampleComponentData } from '../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleComponentData)) {
      throw new Error('Cannot find component data')
    }

    res.status(200).json(sampleComponentData)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
