
function RatingStar() {
  return (
    <>⭐</>
  )
}

export function BookRating({ value }: { value: number }) {

  const stars = [...Array(Math.floor(value)).keys()]

  return (
    <span className='text-gray-700 mt-1'>
      {stars.map(id => <RatingStar key={id}/>)} {value}
    </span>
  )
}
