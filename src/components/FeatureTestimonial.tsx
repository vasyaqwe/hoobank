import { Feature } from "../types"

export const FeatureTestimonial = ({
    title,
    description,
    icon,
    alt,
}: Feature) => {
    return (
        <div
            className={`grid max-w-md cursor-default gap-3 rounded-2xl from-neutral-800
         to-secondary-900 p-4 text-center hover:bg-gradient-to-bl xs:grid-cols-[max-content_1fr] xs:gap-x-5
         xs:gap-y-0 xs:rounded-3xl xs:p-5 xs:text-left
         `}
        >
            <img
                className="mx-auto rounded-full bg-accent-200 p-2 
            xs:row-start-1 xs:row-end-3 xs:self-center"
                src={icon}
                alt={alt}
            />
            <h3 className="text-lg font-semibold text-white xs:col-start-2">
                {title}
            </h3>
            <p className="xs:col-start-2">{description}</p>
        </div>
    )
}
