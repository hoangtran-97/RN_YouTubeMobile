import React, { Component } from "react";
import DashboardScreen from "../../screens/Dashboard";

const channels = [{
    id: 1,
    name: "Meme Radar",
    icon: "https://neverthink.tv/assets/images/63e3939725b3d92af5e7b8429a0f4d57e6be661abf380b39348f360e528dd6e2.png",
    playlist: ["QSqIG5Dl-SM", "Km8kIX-8hVs", "85RhW75xM8U", "URLyBDYHoGo", "jM0GePXOdT0", "exLTGu_c5fs", "-goTfMUabxc", "y7pZzp99Jgs"]
},
{
    id: 2,
    name: "LOL",
    icon: "https://neverthink.tv/assets/images/61d1aeee19fd7cff13a8b17727f1b5a4e9645f16c42ff376a5e5f3ce8a373df2.png",
    playlist: ["_Czxy3nya8Y", "8V0HETilr4I", "tHa260XXH6U", "J3iSEq5Apfg", "iCc5l8iWUZs", "p8UR4dODogI", "HoL1csZPYsk", "ADrBo7u3tR4", "BgZh5T4nG_w"]
},
{
    id: 3,
    name: "WTF",
    icon: "https://neverthink.tv/assets/images/fde01ee47dc02d83892c35c22f2efd81f52c37edc4f3651be40094a115c812fd.png",
    playlist: ["ppboaxC8vWA", "5Cd4Ify3rnM", "Rm8K0LfBRbA", "UFslJb-ZQ6A", "FxXlTaoCNus", "-LXr2YXDrzA"]
}];

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <DashboardScreen data={channels} />
            </>
        );
    }
}

export default Dashboard;
