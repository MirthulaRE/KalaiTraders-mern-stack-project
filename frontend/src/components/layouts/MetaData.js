import { Helmet } from "react-helmet-async"

export default function MetaData({title}) {
    return (
        <Helmet>
            <title>{`${title} - Kalai Traders`}</title>
        </Helmet>
    )
}