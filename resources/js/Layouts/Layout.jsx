import AuthenticatedHeader from "@/Components/AuthenticatedHeader";
import GuestHeader from "@/Components/GuestHeader";
import { usePage } from "@inertiajs/react";

export default function Layout({children}) {
    const { auth } = usePage().props;
    return(
        <>
            {auth.user ? <AuthenticatedHeader auth={auth}/> : <GuestHeader />}
            
            {children}
        </>
    );
}