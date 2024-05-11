import Image from "next/image";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

const navigation = [
    { name: "dashoboard", href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]

const Header = async ({ params }: any) => {
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
                    <div className="flex justify-center space-x-4 md:space-x-8 lg:space-x-12">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    </div>
                </div>
                <div className="col-span-1 flex justify-center">4</div>
            </div>
        </nav>
      </header>
    );
  };
  
  export default Header;