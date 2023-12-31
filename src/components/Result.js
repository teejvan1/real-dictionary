import './Result.css'

function Result({ def }) {
  console.log({ def })
  return (
    <main className='Result'>
      {def.length === 0 ? (
        <div className='empty'>&nbsp;</div>
      ) : def[0].hwi === undefined ? (
        ''
      ) : (
        <h2>{def[0].hwi.hw.replaceAll('*', '')}</h2>
      )}

      {def.length === 0 ? (
        ''
      ) : def[0].shortdef === undefined ? (
        <p>Definition does not exist</p>
      ) : (
        <ol>
          {def
            .map(data => data.shortdef)
            .map(data => (
              <>
                {data.map(data => (
                  <li>&bull; {data}</li>
                ))}
              </>
            ))}
        </ol>
      )}
    </main>
  )
}

export default Result
