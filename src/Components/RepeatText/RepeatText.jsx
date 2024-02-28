//Måste va i klammer parentes för det är en javascript variabel
const RepeatText = ({ count, text }) => {
  const paragraphs = Array.from({ length: count }, (index) => (
    <p key={index}> {text}</p>
  ));

  return (
    <>
      <div>{paragraphs}</div>
    </>
  );
};
export default RepeatText;
