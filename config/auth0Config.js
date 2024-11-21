import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://homyz-aryan.netlify.app",
    issuerBaseURL: "https://homyz-aryan.netlify.app",
    tokenSigningAlg: "RS256"
})

export default jwtCheck