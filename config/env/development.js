module.exports = {
  DB: process.env.DB || 'mongodb+srv://macbook:macbook@cluster0.ztfod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  PORT: process.env.PORT || '3000',
  IS_CONSOLE_LOG: process.env.IS_CONSOLE_LOG || 'true'
}
