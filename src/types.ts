
interface IStyle {
    [key: string]: string
}

interface IInput {
    title: string,
    placeholder?: string,
    isActive?: boolean,
}

interface IUser{
    username:string,
}


interface ISign {
    title: string,
    placeholder?: string,
    isActive?: boolean,
}

export {
    type IInput,
    type IUser,
    type ISign,
}