import React, { Component } from "react";




class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        };
    }


    render() {

        return (
            <div>

                {!this.props.users ? (
                    <div>Loading...</div>
                ) : (
                        <ul className="products">
                            {this.props.users.map((user) => (
                                <li key={user._id}>
                                    <div className="product">
                                        <div className="prod-image">

                                            <a
                                                href={"#" + user._id}

                                            >
                                                <img src={user.picture.medium} alt={user.id}></img>

                                            </a>

                                            <div>{`${user.name.title}  ${user.name.first} ${user.name.last}`}</div>
                                        </div>

                                        <div className="user-contact">
                                            <p>{user.email}</p>
                                            <p>{user.phone}</p>

                                        </div>

                                    </div>

                                </li>
                            ))}
                        </ul>
                    )}


            </div>

        );
    }
}
export default Cards;
