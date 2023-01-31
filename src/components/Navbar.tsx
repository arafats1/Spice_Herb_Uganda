import NextLink from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-white p-6 shadow-md">
        <div className="relative bg-white mx-6">
            <div className="flex items-center justify-between pt-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <h1 className="text-2xl">
                        <NextLink href="/" className="cursor-pointer">
                            <b>Spice Herb Uganda</b>
                        </NextLink>
                    </h1>
                </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;