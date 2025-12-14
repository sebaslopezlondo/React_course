import type { CSSProperties } from "react";

const isTrue = true;

const myStyles: CSSProperties = {
  backgroundColor: "aliceblue",
  borderRadius: "20px",
  padding: "20px",
  margin: "10px",
  color: "black",
};
export function CssInProperties() {
  return (
    <>
      <h4
        style={{
          backgroundColor: "tomato",
        }}
      >
        Css in properties (tomato bkg)
      </h4>
      <h4
        style={
          isTrue ? { backgroundColor: "green" } : { backgroundColor: "red" }
        }
      >
        Css validation (green bkg)
      </h4>
      <h4 style={myStyles}>
        Css with object and React.CSSProperties (aliceblue bkg)
      </h4>
    </>
  );
}
