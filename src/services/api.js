import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGRkOTc0YTViNmUzOTM3NDVhYWNlMzk2MWQxMmJiMCIsInN1YiI6IjYyN2M2NTVjOTY3Y2M3MDA5ZGQwMTI1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EjzEcajbpFQ_O2Rx6oPCM5V7axHiUhrdG5PE7I4n1uM"

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
    Authorization: `Bearer ${token}`,
    
    }
});