import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Data } from "../data";

export default function About() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">About Me:</h1>
                {Data.about.map((item) => {
                    return <p className="mt-4">
                        {item}
                    </p>
                })}
            </div>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Contact:</h1>
                <div className="flex space-x-4">
                    {
                        Data.socials.map((item) => {
                            return (
                                <a href={item.link}>
                                    <FontAwesomeIcon icon={item.icon} size="2xl" />
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}