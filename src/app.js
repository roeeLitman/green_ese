const exp = require('express')
const dotenv = require('dotenv')
const {connectionToMongo} = require('./config/dbConfig')


dotenv.config ()
const port = process.env.PORT || 1415
connectionToMongo()

const app = exp()
app.use(exp.json())
app.use('/auth', require('./routes/authRouter'))
app.use('/uesr', require('./routes/userRouter'))
app.use('/greenEye', require('./routes/greenEyeRouter'))

app.listen(port, console.log(`http://loclhost/${port}`)
)

