import express, {Request, Response} from 'express'

const rootRouter = express.Router()

rootRouter.get('/', (req : Request, res: Response) => {
    res.status(200).json({
        success : true,
        msg : 'Blog App'
    })
})

export default rootRouter