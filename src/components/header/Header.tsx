import { SmVersionHeader } from "./components-header/SmVersionHeader";
import { XsVersionHeader } from "./components-header/XsVersionHeader";

export const HeaderWrapper = () => {
    return (
        <div className="w-full fixed top-0">
            <div className="hidden sm:hidden xs:block">
                <XsVersionHeader />
            </div>
            <div className="hidden md:hidden sm:block">
                <SmVersionHeader />
            </div>
        </div>
    );
}