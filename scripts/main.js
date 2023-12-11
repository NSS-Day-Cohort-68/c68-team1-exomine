import { FacilitiesChoices } from "./Facilities.js"
import { GovernorChoices, } from "./Governors.js"
import { makePurchase } from "./cart.js"

const render = () => {
  const container = document.getElementById("container")
  container.innerHTML = `
        <h1>Solar System Mining Market</h1>
            <section id="userSelections">
                <div id="selections">${GovernorChoices()} ${FacilitiesChoices()}
                </div>
                <div id="resources"><h2 class="colonyName">Colony Minerals</h2>\${}</div> <!--display available resources-->
            </section>
            <section id="shop">
                <div id="minerals">
                    <h2 class="facilityName">Facility Minerals</h2>
                    <div class="facilityRadios">
                        <h3>Please Select a Governor and a Facility...</h3>
                    </div>
                </div> <!--show facility minerals with radio buttons-->
                <div id="cart">${makePurchase()}</div> <!--display cart and purchase button-->
            </section>
    `
}

render()
