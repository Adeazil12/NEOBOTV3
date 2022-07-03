// CREATED BY LEXXY
const fs = require('fs')
const chalk = require('chalk')

// OTHERS
global.owner = ['628980330708', '628980330708']
global.premium = ['628980330708', '628980330708']
global.number = '628980330708'
global.ownername = 'Ademods'
global.botname = 'ModsBOT'
global.packname = 'Neo'
global.author = 'By Ademods'
global.lolkey = 'Atakbotz'
global.email = 'ademods2@gmail.com'
global.youtubeowner = 'https://youtube.com/channel/UCGDk1p42NVg'
global.websiteowner = 'https://github.com/ademods2'
global.githubname = 'Ademods2'
global.region = 'Indonesia'
global.sessionName = "session"
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.simbol = "➭"
global.rkyt = []

// BIARIN:v
global.creator = '© Created By Ademods'

// LIMIT
global.limitawal = {
premium: "infinity",
free: 20
}

global.mess = {
error: 'Error',
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
wait: 'Loading...',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
noRegis: 'Kamu Belum Terdaftar Di Database Bot Silahkan Ketik\nExample:\n#daftar nama|umur\nContoh:\n#daftar Lexxy|17',
}

// RANDOM
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//BATAS
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
