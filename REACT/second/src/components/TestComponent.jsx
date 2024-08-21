import React from "react";
const MyComponent = () => {
  // Return den onceki yüm variable lar alttaki html içinde kullanılabılır.
  // JSX in en temel özelliği budur.
  // DOM ile tek tek uğraşmadan işlemlerimizi yapabiliriz

  const testVariable = [1, 2, 3, 4, 5];
  return (
    <div>
      <p>deneme 0</p>
      {testVariable.map((item) => (
        <h1>Hello, React! {item}</h1>
      ))}
      {testVariable.map((item) => {
        return <h1>Hello, React Doubles! {item * 2}</h1>;
      })}

      <p>This is a JSX component.</p>
      <h1>deneme</h1>
    </div>
  );
};
// Export bu sayfadaki component i uygulamanın farklı yerlerinde kullanmamızı saglar
export default MyComponent;
