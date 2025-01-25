import { Data } from "../data";

export default function Timeline() {
    return (
        <div className="py-10 px-5 md:px-20">
            <h1 className="text-4xl font-bold text-center mb-10">
                My Journey
            </h1>
            <ol className="relative border-s border-black">
                {
                    Data.timeline.map((item, index) => {
                        return (
                            <li className="mb-10 ms-4" key={`li-${index}`}>
                                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 bg-gray-400"></div>
                                <p className="pt-1 mb-1 text-sm font-normal leading-none">{item.header}</p>
                                <h3 className="text-lg font-bold">{item.boldText}</h3>
                                <p className="text-base font-normal">{item.normalText}</p>
                                {
                                    item.chips.map((chip, chipIndex) => {
                                        return (
                                            <button className="mt-2 mr-4 px-2 py-1 text-white text-base bg-neutral-950 rounded-lg text-center" key={`chip-${index}-${chipIndex}`}>
                                                {chip}
                                            </button>
                                        )
                                    })
                                }
                            </li>
                        )
                    }
                    )
                }
            </ol>
        </div>
    );
}
