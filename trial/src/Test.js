import React from  "react"

function Test(){
    let name='tn'
    return(
        <>
        hello  {name}
            

        <form class="css">

            <legend>formset</legend>
            <label for="username">first name</label>
            <input type="text" id="username" name="username" required/>
            <input type="submit"/><br/>
            <label for="pass">password</label>
            <input type="password" id="pass" name="pass" value="pass@123" required/><br/>
            <label>addres</label>
            <textarea rows="5"></textarea><br/>
            <label>gender</label>
            <select>
                <option>male</option>
                <option>female</option>
            </select><br></br>
            <input type="button" value="submit"/><br/>
            <label for="">mobile no.</label>
            <input type="text"  id="number" name="number" value="+91"/>
            <input type="numbe" id="number" name="number"/>

      </form>
        

        </>

);
}

export default Test