import CardShop from "../components/CardShop";
import MrKingCard from "/assets/character/mr-king.png";

export default function ShopPage() {
  return (
    <>
      <section
        id="Shop-Section"
        className="mt-[25px] break-before-page flex flex-col"
      >
        <div className="ml-[30vw] flex">
          <div
            className="h-[50px] w-[120px] mt-[6vw] ml-[20vw] bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#fff",
                fontWeight: "600",
                fontStyle: "italic",
              }}
            >
              CHARACTERS
            </p>
          </div>
          <div
            className="h-[50px] w-[120px] mt-[6vw] ml-[1vw] bg-[rgba(0,0,0,0.50)] hover:bg-[rgba(2,255,247,0.5)] duration-300"
            style={{
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "italic",
                color: "#fff",
              }}
            >
              CARDS
            </p>
          </div>
        </div>
        <div
          id="column-shop"
          className="mt-[2vw] w-[57vw] ml-[32vw] flex flex-wrap"
        >
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
          <CardShop
            imgUrl={MrKingCard}
            itemName="mrKing"
            itemCategory="CHARACTER"
          />
        </div>
      </section>
    </>
  );
}