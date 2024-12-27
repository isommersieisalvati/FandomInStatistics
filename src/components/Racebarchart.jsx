import React, {
    useEffect,
} from "react";

const Racebarchart = () => {
    useEffect(() => {
        // Dynamically add the Flourish embed script
        const script =
            document.createElement(
                "script"
            );
        script.src =
            "https://public.flourish.studio/resources/embed.js";
        script.async = true;
        document.body.appendChild(
            script
        );

        // Cleanup the script when the component is unmounted
        return () => {
            document.body.removeChild(
                script
            );
        };
    }, []);

    return (
        <div>
            <div>Racebarchart</div>
            <div
                className="flourish-embed flourish-bar-chart-race"
                data-src="visualisation/20753903"
            >
                <script src="https://public.flourish.studio/resources/embed.js"></script>
                <noscript>
                    <img
                        src="https://public.flourish.studio/visualisation/20753903/thumbnail"
                        width="100%"
                        alt="bar-chart-race visualization"
                    />
                </noscript>
            </div>
        </div>
    );
};

export default Racebarchart;
