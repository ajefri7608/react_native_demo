export type LoginResponse = {
    id : number;
    userName : string;
    email : string;
    password : string;
    name : string;
    userRole : string;
    userAccessToken : string;
    tokenExpireAt : string;
    image : string;
    provider : string;
}