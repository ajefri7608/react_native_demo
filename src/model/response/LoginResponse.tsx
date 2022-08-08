export type LoginResponse = {
    email : string;
    id : number;
    image : string | null;
    name : string;


    password : string;
    provider : string;
    tokenExpireAt : string | null;
    userAccessToken : string;
    userRole : string;
    userName : string;




}