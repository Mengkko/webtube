import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import { userRouter } from './router'
const app = express()

const handleHome = (req, res) => res.send("Hi from my ass!!")

const handleProfile = (req, res) => res.send("handle Profile")

// ----------------------------- middleware 시작 
app.use(cookieParser())
app.use(bodyParser())
// post로 요청된 body를 쉽게 추출할 수 있는 모듈이다. 추출된 결과는 request객체(IncomingMessage 타입)에 body 속성으로 저장된다. 
app.use(bodyParser.json())
// json형식을 사용할수 있게 해준다.
app.use(bodyParser.urlencoded({ extended: true}))

app.use(helmet())
// Helmet을 이용하면 HTTP 헤더를 적절히 설정하여 몇 가지 잘 알려진 웹 취약성으로부터 앱을 보호할 수 있습니다.

// 사실 Helmet은 보안 관련 HTTP 헤더를 설정하는 다음과 같은 더 작은 크기의 미들웨어 함수 9개의 모음입니다.

// csp는 Content-Security-Policy 헤더를 설정하여 XSS(Cross-site scripting) 공격 및 기타 교차 사이트 인젝션을 예방합니다.
// hidePoweredBy는 X-Powered-By 헤더를 제거합니다.
// hpkp는 Public Key Pinning 헤더를 추가하여, 위조된 인증서를 이용한 중간자 공격을 방지합니다.
// hsts는 서버에 대한 안전한(SSL/TLS를 통한 HTTP) 연결을 적용하는 Strict-Transport-Security 헤더를 설정합니다.
// ieNoOpen은 IE8 이상에 대해 X-Download-Options를 설정합니다.
// noCache는 Cache-Control 및 Pragma 헤더를 설정하여 클라이언트 측에서 캐싱을 사용하지 않도록 합니다.
// noSniff는 X-Content-Type-Options 를 설정하여, 선언된 콘텐츠 유형으로부터 벗어난 응답에 대한 브라우저의 MIME 가로채기를 방지합니다.
// frameguard는 X-Frame-Options 헤더를 설정하여 clickjacking에 대한 보호를 제공합니다.
// xssFilter는 X-XSS-Protection을 설정하여 대부분의 최신 웹 브라우저에서 XSS(Cross-site scripting) 필터를 사용하도록 합니다.

// const betweenHome = (req, res, next) => {
//     console.log('I am between')
//     next()
// }
// 미들웨어는 다양하게 사용될 수 있다. ex) 로그인체크, 로그 등

app.use(morgan('dev'))
// app.use(morgan('tiny'))
// tiny는 status코드와 접속경로를 알수있다
// app.use(morgan('combined'))
// 어떤 접속인지 어떤 브라우저인지 운영체제 등을 알려준다.
// ----------------------------- middleware 종료

// ----------------------------- route 시작 
app.get("/", handleHome)

// app.use(betweenHome)
// 실행 위치에 따라 미들에웨를 조절할수있다 
// 현재는 /profile로 접속했을때만 사용 
// 루트경로 /로 접속할때는 미들웨어 사용이 안됨
app.get('/profile', handleProfile)

app.use("/user", userRouter)
// ----------------------------- route 종료

export default app