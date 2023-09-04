import airbnb from "../assets/airbnb.svg"
import binance from "../assets/binance.svg"
import coinbase from "../assets/coinbase.svg"
import dropbox from "../assets/dropbox.svg"

const data = [
    { img: airbnb, alt: "Airbnb logo" },
    { img: binance, alt: "Binance logo" },
    { img: coinbase, alt: "Coinbase logo" },
    { img: dropbox, alt: "Dropbox logo" },
]

export const Partners = () => {
    return (
        <section className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-8 px-7 lg:justify-between">
            {data.map((partner, idx) => (
                <img
                    className=""
                    src={partner.img}
                    alt={partner.alt}
                    key={idx}
                />
            ))}
        </section>
    )
}
