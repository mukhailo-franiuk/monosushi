import { LgVersionAbout } from "./version/LgVersion";
import { MdVersionAbout } from "./version/MdVersion";
import { SmVersionAbout } from "./version/SmVersion";
import { XsVersionAbout } from "./version/XsVersion";

export const AboutWrapper = () => {
    return (
        <div className="w-full">
            <div className="hidden sm:hidden xs:block">
                <XsVersionAbout />
            </div>
            <div className="hidden md:hidden sm:block">
                <SmVersionAbout />
            </div>
            <div className="hidden lg:hidden md:block">
                <MdVersionAbout />
            </div>
            <div className="hidden lg:block">
                <LgVersionAbout />
            </div>
        </div>
    );
}