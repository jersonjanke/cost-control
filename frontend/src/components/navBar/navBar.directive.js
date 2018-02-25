import navBarCtrl from './navBar.contorller';

function navBar() {
    return {
        template: require("./index.html"),
        controller: navBarCtrl,
        controllerAs: "vm"
    }
}

export default navBar;