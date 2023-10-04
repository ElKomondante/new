
interface IStyle {
    [key: string]: string
}

interface IInput {
    title: string,
    placeholder?: string,
    isActive?: boolean,
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
}

interface IPostsResponse {
    count: number,
    results: IPostInfo[],
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
}