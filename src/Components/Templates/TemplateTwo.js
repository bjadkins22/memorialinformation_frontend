import React from "react";

const TemplateTwo = () => {
  return (
    <div>
      {" "}
      <div className="user-funeral-template secondtenp">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flowerimage">
              <img className="memorailimage" src="/img/bannii.jpg" />

              <div className="funeral-images">
                <img
                  className="w-full"
                  src="/img/clip-art-11563644048ezijceo0qx-removebg-preview.png"
                />
              </div>
            </div>

            <div className="text-center">
              <h1 className="obituary-desc obts mt-12">Pallbearer</h1>
              <div className="grid grid-cols-2 ">
                <div className="">
                  <h4 className="relationshipstatus">Houston Ross</h4>
                  <h4 className="relationshipstatus">Hammer Daddy</h4>
                  <h4 className="relationshipstatus">Brown Sons</h4>
                  <h4 className="relationshipstatus">Brown Ross</h4>
                </div>
                <div>
                  <h4 className="relationshipstatus">Mark Celdrick</h4>
                  <h4 className="relationshipstatus">Jamenson Arper</h4>
                  <h4 className="relationshipstatus">James Cruise</h4>
                  <h4 className="relationshipstatus">Bruce Smith</h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flowerimage">
              <div className="personalinfo">
                <h1 className="username-temp username-fun">John Doe</h1>
              </div>
              <img
                className="w-full"
                src="/img/portable-ne-removebg-preview.png"
              />
            </div>
            <div className="obituary-text">
              <h1 className="obituary-desc obts">Obituary</h1>
              <p className="fordescob user-desc">
                For Jane Doe, art was an extension of her life. She devoted all
                her time and energy to art and to her beloved family. The artist
                (Boston, 1991), trained at the New York Institute, passed away
                suddenly last Monday, leaving the New York art collective
                without one of its greatest references and catalysts.
              </p>
            </div>

            <div className="text-center mt-[38px]">
              <h1 className="obituary-desc obts ">Pallbearer</h1>
              <div className="grid grid-cols-2 ">
                <div className="">
                  <h4 className="relationshipstatus">Processional</h4>
                  <h4 className="relationshipstatus">Scripture</h4>
                  <h4 className="relationshipstatus">Prayer</h4>
                  <h4 className="relationshipstatus">Selection</h4>
                  <h4 className="relationshipstatus">Obituary Reading</h4>
                  <h4 className="relationshipstatus">Eulogy</h4>
                </div>
                <div>
                  <h4 className="relationshipstatus"> Paster and Family</h4>
                  <h4 className="relationshipstatus">John 3:16-17</h4>
                  <h4 className="relationshipstatus">Paster Williams </h4>
                  <h4 className="relationshipstatus">First Baptist Smith</h4>
                  <h4 className="relationshipstatus">Sister Elena</h4>
                  <h4 className="relationshipstatus">Paster Jackson</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Second div */}
        </div>
      </div>
    </div>
  );
};

export default TemplateTwo;
