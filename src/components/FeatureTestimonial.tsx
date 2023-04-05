import { Feature } from "../types"

export const FeatureTestimonial = ({ title, description, icon, alt }: Feature) => {
    return (
        <div className={`rounded-2xl p-4 cursor-default hover:bg-gradient-to-bl from-neutral-800 to-secondary-900
         grid text-center gap-3 max-w-md xs:p-5 xs:rounded-3xl
         xs:text-left xs:grid-cols-[max-content_1fr] xs:gap-y-0 xs:gap-x-5
         `}>
            <img className="bg-accent-200 mx-auto rounded-full p-2 
            xs:row-start-1 xs:row-end-3 xs:self-center" src={icon} alt={alt} />
            <h3 className="font-semibold text-white xs:col-start-2 text-lg">{title}</h3>
            <p className="xs:col-start-2">{description}</p>
        </div>
    )
}
