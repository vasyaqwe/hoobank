import airbnb from '../assets/airbnb.svg'
import binance from '../assets/binance.svg'
import coinbase from '../assets/coinbase.svg'
import dropbox from '../assets/dropbox.svg'

const data = [
    { img: airbnb, alt: 'Airbnb logo' },
    { img: binance, alt: 'Binance logo' },
    { img: coinbase, alt: 'Coinbase logo' },
    { img: dropbox, alt: 'Dropbox logo' }
]

export const Partners = () => {
    return (
        <section className='flex flex-wrap justify-center lg:justify-between items-center gap-8 max-w-7xl w-full mx-auto px-7'>
            {data.map((partner, idx) => <img className=''
                src={partner.img} alt={partner.alt} key={idx} />)}
        </section>
    )
}
