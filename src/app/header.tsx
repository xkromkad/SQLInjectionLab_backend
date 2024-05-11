import Image from "next/image";
const Header = () => {
    return (
      <header className="w-full ">
        <nav>
            <div className="grid grid-cols-6 grid-flow-col gap-4 items-center rounded-xl min-h-10 items-center text-xl font-semibold" style={{ backgroundColor: "#FAB727" }}>
                <div className="col-span-1 flex justify-center">
                <a
                    className="flex place-items-center  p-2 lg:p-0"
                    href="/"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/logo.svg"
                        alt="Vercel Logo"
                        className=""
                        width={80}
                        height={80}
                        />
                </a>
                </div>
                <div className="col-span-4 flex justify-center">
                    <div className="flex justify-center">
                        <div className="mx-2 md:mx-4 lg:mx-8">01</div>
                        <div className="mx-2 md:mx-4 lg:mx-8">02</div>
                        <div className="mx-2 md:mx-4 lg:mx-8">03</div>
                    </div>
                </div>
                <div className="col-span-1 flex justify-center">01</div>
            </div>
        </nav>
      </header>
    );
  };
  
  export default Header;