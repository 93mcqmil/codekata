import { useState } from "react";

const Check = () => {
  const [cat, setCat] = useState(false);
  const [dog, setDog] = useState(false);

  const handleChangeCat = () => {
    setCat(!cat);
  };
  const handleChangeDog = () => {
    setDog(!dog);
  };

  return (
    <div>
      <div>
        <input type='checkbox' onChange={handleChangeCat} />
        <label htmlFor='Katt'>Cat</label>
      </div>

      <div>
        <input type='checkbox' onChange={handleChangeDog} />
        <label htmlFor='Hund'>Dog</label>
      </div>
      <p>
        {cat && "Cat"} {dog && dog && " och "}
        {dog && "Dog"}
      </p>
    </div>
  );
};
export default Check;
