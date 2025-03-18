import "./Floating.css"

function FloatingDiv({txt1, txt2}) {
  return (
   <>
     <div className="floatingdiv">
        <img src="./img/crown.png" alt="crown" />
        <span>
          {txt1}
            <br />
           {txt2}
        </span>
    </div>
  
   </>
  )
}

export default FloatingDiv