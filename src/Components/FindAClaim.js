import { Fragment, useState } from "react";
import { useParams } from "react-router";
import Search from "./Search/Search";
import Claims from "./Claims/Claims";

const FindAClaim = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const params = useParams();
    if (params.id != null && params.id !== searchTerm) {
        setSearchTerm(params.id);
    }

    return ( <Fragment>
                {/* <Search setSearchTerm={setSearchTerm} /> */}
                <Claims searchTerm={searchTerm} />
            </Fragment>);
}

export default FindAClaim;