import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container fade-in">
      <h1 className="contact-title">🏛️ Who’s Who</h1>
      <p className="contact-desc">
        Contact details of Officers / Officials of the Legislative Department
      </p>

      {/* Minister Section */}
      <h2 className="section-title">👤 Minister</h2>
      <div className="table-card lift-card">
        <div className="contact-table-wrapper">
          <table className="contact-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Division / Section</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Room No</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shri Arjun Ram Meghwal</td>
                <td>Hon'ble Minister of State</td>
                <td>MoS (I/C) Law and Justice</td>
                <td>mljoffice@gov.in</td>
                <td>4th Floor, 'A' Wing, Shastri Bhawan</td>
                <td>01123386974</td>
                <td>402-A</td>
              </tr>
              <tr>
                <td>Dr. Rajiv Kumar Verma</td>
                <td>PS</td>
                <td>PS to MoS (I/C)</td>
                <td>mljoffice@gov.in</td>
                <td>Shastri Bhawan</td>
                <td>23387557</td>
                <td>403-A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Secretary */}
      <h2 className="section-title">👔 Secretary</h2>
      <div className="table-card lift-card">
        <div className="contact-table-wrapper">
          <table className="contact-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Room No</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dr. Rajiv Mani</td>
                <td>Secretary (Legislative Department)</td>
                <td>secyoffice-ld@gov.in</td>
                <td>4th Floor, 'A' Wing, Shastri Bhawan</td>
                <td>23384617</td>
                <td>405-A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Secretary */}
      <h2 className="section-title">📂 Additional / Joint Secretary</h2>
      <div className="table-card lift-card">
        <div className="contact-table-wrapper">
          <table className="contact-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Division</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Room No</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dr. Manoj Kumar</td>
                <td>Additional Secretary</td>
                <td>ILDR, Cyber Security, IT & NIC</td>
                <td>as-ld-molj@gov.in</td>
                <td>23387095</td>
                <td>423</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
