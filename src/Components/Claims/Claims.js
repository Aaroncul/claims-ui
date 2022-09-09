import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getAllClaims, getMyClaims } from '../../data/DataFunctions';
import ClaimRow from './ClaimRow';
import Search from './Search';


const Claims = () => {

    const [claims, setClaims] = useState([]);

    const dispatch = useDispatch();

    const user = useSelector(state => state.user);

    const users = [...new Set(claims.map(item => item.user.username))];

    const [selecteduser, setSelecteduser] = useState("none");

    const [searchParams, setSearchParams] = useSearchParams();
    const targetuser = searchParams.get("id");

    if (targetuser != null && targetuser !== selecteduser) {
        setSelecteduser(targetuser);
    }

    const userOptions = users.map
        (user => <option key={user} value={user}>{user}</option>);

    useEffect(() => {
        const claimsPromise = user.role === "STAFF" ?
            getAllClaims(user.username, user.password)
            : getMyClaims(user.username, user.password);

        claimsPromise.then(
            (response) => {
                if (response.status === 200) {
                    setClaims(response.data);
                    dispatch({ type: "save-claim", value: response.data });
                }
                else {
                    console.log("Something went wrong", response.status);
                }
            }

        ).catch(
            (error) => {
                console.log("Server error", error);
            }
        );

        if (userOptions.length > 0 && user.role === "CUSTOMER") {
            setSelecteduser(users[0]);
            setSearchParams({ user: users[0] });
        }
    }, []);

    const displayClaims = claims.map(userClaims =>
        (userClaims.user.username === selecteduser) &&
        <ClaimRow key={userClaims.id}
            id={userClaims.id}
            date={userClaims.claimDate}
            name={userClaims.user.lastName}
            amount={userClaims.claimAmount}
            status={userClaims.claimStatus} />
    );

    const changeuser = (event) => {
        const selecteduserIndex = event.target.options.selectedIndex;
        setSelecteduser(users[selecteduserIndex - 1]);
        setSearchParams({ user: users[selecteduserIndex - 1] });
    }

    return <Fragment>
        <br/>
        <p>Filter by user: 
            <select onChange={changeuser} defaultValue="none" >
                <option disabled value="none"> Please select a user </option>
                {userOptions}
            </select>
        </p>
        { displayClaims.length > 0 &&
        <center>
            <table id="claimsTable" style={{ background: "#ccc" }} className="claimsTable">
                <thead>
                    <tr><th>Id</th><th>Date</th><th>Name</th><th>Amount</th><th>Status</th></tr>
                </thead>
                <tbody>
                    {displayClaims}
                </tbody>
            </table>
        </center>
        }
        {
            displayClaims.length === 0 &&
            <p>No claims to display.</p>
        }
        <br/>
        <Search />
    </Fragment>
}

export default Claims;