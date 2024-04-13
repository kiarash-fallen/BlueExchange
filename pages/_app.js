import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp ({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() =>{
        const isPrivateRoute = router.pathname.includes('/private');

        const checkIsAuthenticated = false;

        if (isPrivateRoute && !checkIsAuthenticated) {
            router.push('/')
        }
    },[router.pathname])

    return <Component {...pageProps}/>
}

export default MyApp;