
interface IStyle {
    [key: string]: string
}

interface IInput {
    title?: string;
	onChange?: (ev?: any) => void;
	placeholder?: string;
	className?: string;
	maxLength?: number;
	errorMessage?: string;
	type?: string;
}


interface IPostInfo {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number,
    description?: string,
}

interface ISign {
    title: string,
    placeholder?: string,
    isActive?: boolean,
}

interface IUser {
    userName: string;
}

enum PostTypes {
    FULL = 'FULL',
    VERTICAL = 'VERTICAL',
    SMALL = 'SMALL',
}
interface IPost {
    postInfo: IPostInfo,
    type: PostTypes,
    className?: string,
}
interface IPostsState {
    posts: IPostInfo[];
}
interface IStoreState {
    posts: IPostsState,
    user:IUserState,
}


interface IPostsResponse {
    count: number,
    results: IPostInfo[],
}

interface ISignUp{
    username:string,
    email:string,
    password:string
}

interface IRegistrationActivation {
	uid: string,
	token: string, 
}
interface IUserState{
    user:null,
}

interface ISignIn{
    email:string,
    password:string
}

interface ITokenResponse{
    refresh:string,
    access:string
}


export {
    type IInput,
    type ISign,
    type IUser,
    type IPostInfo,
    type IPost,
    type IPostsState,
    type IStoreState,
    type IPostsResponse,
    type ISignUp,
    type IRegistrationActivation,
    type IUserState,
    type ISignIn,
    type ITokenResponse,
}