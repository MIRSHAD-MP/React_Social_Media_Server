// REQUIRING MODULES
// import GoogleStrategy from ("passport-google-oauth2").Strategy;
// import JwtStrategy from ("passport-jwt").Strategy;
// import { ExtractJwt } from "passport-jwt";
// import User from "../models/User.js";

// module.exports = (passport) => {
//     passport.use (new GoogleStrategy({
//         clientID: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         callbackURL: "http://localhost:3001/api/google/callback",
//         passReqToCallback: true
//     },
//     async (request, accessToken, refreshToken, profile, done) => {
//         try {
//             let existingUser = await User.findOne ({ 'googleId' : profile.id })
//             if (existingUser) {
//                 return done (null, existingUser)
//             }
//             console.log("Creating new user...");
//             const newUser = new User ({
//                 method: 'google',
//                 googleId: profile.id,
//                 name: profile.displayName,
//                 email: profile.emails[0].value
//             })
//             await newUser.save()
//             return done (null, newUser)
//         } catch (error) {
//             return done (error, false)
//         }
//     }
//     ))
// }

// module.exports = (passport) => {
//     passport.use(new GoogleStrategy);
//     passport.use(
//         new JwtStrategy (
//             {
//                 jwtFromRequest: ExtractJwt.fromHeader("authorization"),
//                 secretOrKey: "secretKey",
//             },
//             async (jwtPayload, done) => {
//                 try {
//                     const user = jwtPayload.user;
//                     done (null, user)
//                 } catch (error) {
//                     done (error, false)
//                 }
//             }
//         )
//     )
// }