import React from "react";
import "./profile.css";

const Address = ({ userDetails }) => {
  const { geo } = userDetails.address;

  const renderMap = () => {
    const { lat, lng } = geo;
    const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

    return (
      <iframe
      className="iframe"
        title="Map"
        src={mapUrl}
        allowFullScreen
      ></iframe>
    );
  };

  return (
    <div>
      <div className="Address">
        <div className="userAddress"> Address</div>
        <div className="AddressDetails">
          <p className="details">
            Street : <span className="data">{userDetails.address.street}</span>
          </p>
          <p className="details">
            Suite : <span className="data">{userDetails.address.suite}</span>
          </p>
          <p className="details">
            City : <span className="data">{userDetails.address.city}</span>
          </p>
          <p className="details">
            Zipcode :{" "}
            <span className="data">{userDetails.address.zipcode}</span>
          </p>
          <div className="map">
            <div className="map-container">{geo && renderMap()}</div>
            <div className="location">
              <p className="lat">Lat: <span className="lats">{userDetails.address.geo.lat}</span></p>
              <p className="lng">Long: <span className="lngs">{userDetails.address.geo.lng}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
