import React from "react";
function TNloging(){


    const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [corse, setCorse] = React.useState("")
  const [gender, setGender] = React.useState("")
  const [pass, setPass] = React.useState([])
  const [update, doUpdate]= React.useState(true)

  const handaleChange = (event) => {
    let name = event.target.name
    if (name == "email") {
      setEmail(event.target.value)
    } else if (name == "password") {
      setPassword(event.target.value)

    } else if (name == "corse") {
      setCorse(event.target.value)

    } else if (name == "gender") {
      setGender(event.target.value)

    } else if (name == "pass") {
      let arr = pass
      if (arr.includes(event.target.value)) {
        arr.splice(arr.indexOf(event.target.value), 1)
      } else {
        arr.push(event.target.value)
      }
      setPass(arr)
      doUpdate(!update)
    }
  }
  const handaleClick = () => {
    console.log(email, password, corse, gender, pass)
  }

  return (
    <>
      <div className="rara">

        {/* // name  */}

        <div class="rar">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={email} onChange={handaleChange} />
        </div>
        {/* // password  */}

        <div>
          <label for="inputPassword5" class="form-label">Password</label>
          <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="password" value={password} onChange={handaleChange} />
        </div>
    

        {/* // option  */}

        <select class="form-select" aria-label="Default select example" name="corse" onChange={handaleChange}>

          <option value="mca">mca</option>
          <option value="mba">mba</option>

        </select>  <br /><br />

        {/* // redio */}
        gender
        <div class="form-check">
        male
          <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value={"male"} onChange={handaleChange} />
          <label class="form-check-label" for="flexRadioDefault1">
          </label>
        </div> 
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value={"female"} onChange={handaleChange} />
          <label class="form-check-label" for="flexRadioDefault2">
            female
          </label>
        </div> <br />
        {/* // checkbox  */}
        <div class="form-check">
          <input class="form-check-input"
            type="checkbox" id="flexCheckDefault"
            name="pass" 
            value={"12th"} 
            onChange={handaleChange} 
            checked={pass.includes("12th")} />
          <label class="form-check-label" for="flexCheckDefault">
            12th
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox" id="flexCheckChecked"
            name="pass" value={"graduate"}
            onChange={handaleChange}
            checked={pass.includes("graduate")}
          />
          <label class="form-check-label" for="flexCheckChecked">
            graduate
          </label>
        </div>


        {/* // buttton */}
        <button type="button" class="btn" onClick={handaleClick}>Submit</button>

        <button type="button" class="btn" onClick={()=>{props.chekloging()}}>reset</button>
      </div>
    </>
  )
}

export default TNloging;

