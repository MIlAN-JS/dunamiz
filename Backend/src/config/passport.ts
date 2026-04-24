import passport  from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import config from "./config.js";



passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: config.GOOGLE_CALLBACK_URL
}, (_:string,__:string,profile:any , done:any)=>{

     let user : object = {
        id : profile.id,
        displayName : profile.displayName,
        name : profile.name,
        emails : profile.emails,
        photos : profile.photos
     }
     return done(null, user);
}))


export default passport;