import React from "react";
import usePop from "./usePopup";
import PopUp from "./popup";

export default function Pop() {
  const { isShowing: isPaymentFormShowed, toggle: togglePaymentForm } = usePopUp();
  const {
    isShowing: isAvisFormShowed,
    toggle: toggleAvisForm
  } = usePopup();

  return (
    <>
      <div className="App">
        <button className="modal-toggle" onClick={toggleLoginForm}>
          Login
        </button>
        <button className="modal-toggle" onClick={toggleRegistrationForm}>
          Register
        </button>

        <PopUp //Ajouter au bouton annuler un onclick et appeler la fonction tooglePaymentForm pour afficher le popup de remboursement
          isShowing={isPaymentFormShowed}
          hide={togglePaymentForm}
          title="Remboursement"
        >
          <form>
            <h2>Demander un remboursement</h2>
            <h4>Type de remboursement</h4>
            <div className="form-group">
                <input type="checkbox" id="rembours" name="remboursement" value="remboursement"/>
                <label for="rembours">Remboursement</label>
            </div>
            <div className="form-group">
                <input type="checkbox" id="avoir" name="avoir" value="avoir"/>
                <label for="avoir">Avoir</label>
            </div>
            <div className="form-group">
              <input type="submit" value="Envoyer" />
            </div>
          </form>
        </PopUp>

        <PopUp //Ajouter au bouton donner un avis un onclick et appeler la fonction toogleAvisForm pour afficher le popup d'avis
          isShowing={isAvisFormShowed}
          hide={toggleAvisForm}
          title="Avis"
        >
          <form>
            <h2>Rédiger un avis</h2>
            <div className="">
            <input type="select">
                <nom>note</nom>
                <libellé>Note</libellé>
                <option valeur="zero">00</option>
                <option valeur="un">01</option>
                <option valeur="deux">02</option>
                <option valeur="trois">03</option>
                <option valeur="quatre">04</option>
                <option valeur="cinq">05</option>
                <option valeur="six">06</option>
                <option valeur="sept">07</option>
                <option valeur="huit">08</option>
                <option valeur="neuf">09</option>
                <option valeur="dix">10</option>
             </input>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Saisissez un avis..." />
            </div>
            <div className="form-group">
              <input type="submit" value="Envoyer" />
            </div>
          </form>
        </PopUp>
      </div>

      <style jsx="true">{`
        .App {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        button.modal-toggle,
        input[type="submit"] {
          background-color: turquoise;
          cursor: pointer;
          padding: 1rem 2rem;
          text-transform: uppercase;
          border: none;
        }

        button.modal-toggle:not(:first-child) {
          margin-left: 10px;
        }

        .form-group {
          margin-top: 10px;
        }

        input[type="text"],
        input[type="password"],
        input[type="email"] {
          box-sizing: border-box;
          width: 100%;
          padding: 0.5rem 0.7rem;
        }
      `}</style>
    </>
  );
}