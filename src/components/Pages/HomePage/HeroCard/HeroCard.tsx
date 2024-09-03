import "./HeroCard.scss"
export default function HeroCard(props: {
    icon: string,
    title: string,
    text: string
}) {
    const getIcon = (icon: string) => {
        switch (icon) {
            case "productdesign":
                return (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 40" strokeWidth="1.5" stroke="currentColor" className="p-6 text-white" height={150}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        </svg>
                    </>
                )

            case "futurevision":
                return (
                    <>
                        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg" className="p-6 text-white" height={150}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"></path>
                        </svg>
                    </>
                )

            case "innovative":
                return (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 40" strokeWidth="1.5" stroke="currentColor" height={150} className="p-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                        </svg>
                    </>
                )

            default:
                return (<div> not found</div>)
        }
    }

    return (
        <>
            <div className="herocard pb-5">
                {getIcon(props.icon)}
                <h1 className="px-8 text-xl text-bold text-white ">{props.title}</h1>
                <div className="mx-8 my-2 border w-10 color-red-50"></div>
                <p className="px-8 my-3 text-white">{props.text}</p>
            </div>
        </>
    )
}