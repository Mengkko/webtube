import express      from "express"
import morgan       from "morgan"
import helmet       from "helmet"
import bodyParser   from "body-parser"
import cookieParser from "cookie-parser"
import userRouter   from './routers/userRouter'
import videoRouter  from './routers/videoRouter'
import globalRouter from './routers/globalRouter'
import routes       from './routes'

const app = express()

// ----------------------------- middleware 호출 시작
app.use(cookieParser())
app.use(bodyParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(helmet())
app.use(morgan('dev'))
// ----------------------------- middleware 끝

// ----------------------------- route 시작 
app.use(routes.home, globalRouter)
app.use(routes.users, userRouter)
app.use(routes.videos, videoRouter)
// ----------------------------- route 종료

export default app