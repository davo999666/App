import {useLocation} from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    if (location.pathname.startsWith("/games/")) {
        return null;
    }
    return (
        <div className="bg-gray-100 text-center py-4">
        <footer className="bg-red-100 text-center py-4 border-t border-gray-300">
            Footer
        </footer>
</div>
    );
};

export default Footer;