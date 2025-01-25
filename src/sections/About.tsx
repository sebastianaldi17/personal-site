import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Data } from "../data";

export default function About() {
    const randomQuote = Data.quotes[Math.floor(Math.random() * Data.quotes.length)]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-20">
            {/* Left column */}
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">About Me:</h1>
                {Data.about.map((item, index) => {
                    return <p className="my-2" key={`about-${index}`}>
                        {item}
                    </p>
                })}

                <blockquote className="mt-4">
                    <p className="ml-6 text-xl italic font-medium leading-relaxed text-gray-900">
                        "{randomQuote.quote}"
                    </p>
                    <p className="ml-6">
                        - {randomQuote.author}
                    </p>
                </blockquote>

                <h1 className="text-2xl font-bold my-4">Contact:</h1>
                <div className="flex space-x-4">
                    {
                        Data.socials.map((item) => {
                            return (
                                <a href={item.link} key={`socials-${item.link}`}>
                                    <FontAwesomeIcon icon={item.icon} size="2xl" />
                                </a>
                            );
                        })
                    }
                </div>
            </div>

            {/* Right column */}
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-2">Skills:</h1>
                <div className="mb-2">
                    Color explanation: <button className="bg-neutral-950 px-2 py-1 text-white text-base rounded-lg text-center">pro</button> & <button className="bg-neutral-600 px-2 py-1 text-white text-base rounded-lg text-center">hobby</button>
                </div>
                {
                    Data.skills.sections.map((section, index) => {
                        return (
                            <div key={`S-${index}`}>
                                <p className="mb-2" key={`SN-${index}`}>{section.sectionName}</p>
                                <div className="flex gap-4 flex-wrap my-1" key={`SL-${index}`}>
                                    {
                                        section.skills.map((skill, skillIndex) => {
                                            return (
                                                <button className={"px-2 py-1 text-white text-base rounded-lg text-center " + (skill.isProfessional ? "bg-neutral-950" : "bg-neutral-600")} key={`${skill.skillName}-${index}-${skillIndex}`}>
                                                    {skill.skillName}
                                                </button>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}