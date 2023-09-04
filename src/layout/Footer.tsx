import logo from "../assets/logo-large.svg"
import copyrightIcon from "../assets/copyright.svg"
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedin.svg"

const data = [
    {
        title: "Useful Links",
        list: [
            "Content",
            "How It Works",
            "Create",
            "Explore",
            "Terms & Services",
        ],
    },
    {
        title: "Community",
        list: ["Help Center", "Suggestions", "Blog", "Newsletters"],
    },
    { title: "Partners", list: ["Our Partners", "Become a Partner"] },
]

export const Footer = () => {
    return (
        <footer className="md:mt-30 mx-auto mt-20 grid max-w-7xl px-7 lg:mt-40">
            <div className="flex flex-col gap-8 pb-7 lg:flex-row lg:justify-between lg:gap-24 xl:gap-32">
                <div className="grid max-w-xs gap-6 lg:gap-0">
                    <img
                        className="xl:ml-[-27px]"
                        src={logo}
                        alt="HooBank logo"
                    />
                    <p className="md:text-lg">
                        A new way to make the payments easy, reliable and
                        secure.
                    </p>
                </div>
                <div className="flex flex-1 flex-wrap gap-12 lg:justify-between">
                    {data.map((item) => (
                        <div key={item.title}>
                            <h4 className="mb-4 text-lg text-white">
                                {item.title}
                            </h4>
                            <ul className="grid gap-3">
                                {item.list.map((listItem) => (
                                    <li key={listItem}>
                                        <a
                                            className="from-accent-100 to-accent-700 hover:bg-gradient-to-l hover:bg-clip-text hover:text-transparent"
                                            href="#"
                                        >
                                            {listItem}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-5 border-t border-t-neutral-800 py-7 md:flex-row md:items-center md:justify-between md:gap-0">
                <p className="md:text-lg">
                    <span className="font-accent">Copyright </span>
                    <img
                        className="mx-2 inline"
                        src={copyrightIcon}
                        alt={"copyright symbol"}
                    />{" "}
                    2023 HooBank. All Rights Reserved.
                </p>

                <ul className="flex items-center gap-5">
                    <li>
                        <a href="#">
                            <img
                                src={instagram}
                                className="social"
                                alt="Instagram"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src={facebook}
                                className="social"
                                alt="Facebook"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src={twitter}
                                className="social"
                                alt="Twitter"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src={linkedin}
                                className="social"
                                alt="LinkedIn"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
