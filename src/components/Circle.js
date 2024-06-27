const Circle = ({ colour, fn }) => {
   return (
      <div
         key={colour}
         style={{
            width: '20px',
            height: '20px',
            borderRadius: '100%',
            backgroundColor: `${colour}`,
            marginBottom: '10px',
            cursor: 'pointer',
         }}
         onClick={() => {
            fn(colour)
         }}
      ></div>
   )
}

export default Circle
