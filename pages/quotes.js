import styles from "../styles/Quote.module.css";
import Navbar from "./components/Navbar";

export default function Quotes() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="quotes-header">Quotes</h1>
        <div className="quotes-container">
          <div className="quote">
            “Gaiz ung ulam namin chicken curry tapos ubos na pinakain nalang sa
            pusa ung ibang Tira tapos nung inano nakisama ung mga MANOK
            😭😭😭😭😭😭 gets niyo ba ? Kinain ng manok ung manok”
            <br />
            By: K.L.
          </div>
          <div className="quote">
            "nasa palengke kami ngayon HAHAHHA tapos may tilapia na tinanggal sa
            tubig tas patalon talon tapos tumalon sa paa ko HAHHAHA"
            <br />
            By: R.J.B
          </div>
          <div className="quote">
            "nasa baby na kami HAHAHA"
            <br />
            By: R.J.B.
          </div>
          <div className="quote">
            "nakain ako ng baby"
            <br />
            By: R.J.B.
          </div>
        </div>
      </main>
    </>
  );
}
