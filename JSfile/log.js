export default class logger {
    log(message,filename,type="INFO") {
        const time = new Date().toLocaleTimeString()
        const logOut = `[${filename}] [${time}] [${type}]`
        console.log(logOut,message)
    }
}

export const Log = new logger