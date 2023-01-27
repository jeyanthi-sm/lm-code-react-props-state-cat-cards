export default function CatImage(Props:catImageProps) {
    return (
        <>         <img
            src={Props.source}
            alt={Props.alt} />
            <p className='card__text__small'>
                Image licenced under <a href={Props.licenceUrl}>{Props.licenceType}</a>
                {Props.attributionName && (
                    <>
                        &nbsp;by <a href={Props.attributionUrl}>{Props.attributionName}</a>
                    </>
                )}
            </p>
        </>
    )


}
interface catImageProps {
    source:string;
    alt:string;
	licenceType: string;
	licenceUrl: string;
	attributionName?: string;
	attributionUrl?: string;
};
